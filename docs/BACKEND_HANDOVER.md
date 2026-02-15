# 백엔드 담당자 전달 문서 (프론트엔드 변경 사항)

프론트엔드 리팩터링 후 백엔드와의 연동 시 **반드시 맞춰야 할 스펙**과 **주의할 점**을 정리했습니다.

---

## 1. 변경 요약 (백엔드에 영향 있는 부분만)

| 구분 | 내용 | 백엔드 영향 |
|------|------|--------------|
| **API 호출 경로/방식** | 변경 없음. 기존 `baseURL/api` + 동일 엔드포인트 사용 | 없음 |
| **요청/응답 형식** | 기대하는 `response.data` 구조만 문서화 (기존과 동일 가정) | 아래 스펙과 다르면 수정 필요 |
| **에러 처리** | 인터셉터에서 `error.response.data`를 그대로 reject. 훅에서 `error.error` 또는 `error.message` 참조 | 에러 시 **일관된 형식** 유지 필요 |
| **라우팅** | 경로 상수화(ROUTES). URL 경로 값 자체는 기존과 동일 | 없음 |
| **인증** | `Authorization: Bearer {token}`, 토큰은 `sessionStorage` | 없음 |

**결론: API 엔드포인트·메서드는 그대로입니다. 응답/에러 형식만 아래와 같은지 확인해 주세요.**

---

## 2. API별 요청/응답 스펙 (프론트 기대값)

### 2.1 인증

- **POST `/api/auth/login`**  
  - Body: `{ email, password }`  
  - **성공 시 필수:**  
    - `response.data.status === "success"`  
    - `response.data.token` (문자열)  
    - `response.data.user` (객체, 최소 `name`, `role` 등)  
  - 실패 시: 프론트는 `response.data.error` 또는 throw된 error의 `error` 필드를 사용.

- **GET `/api/user/me`** (Authorization 헤더 필요)  
  - **기대:** `response.data` 전체를 그대로 사용.  
  - Redux에는 `setUser(response.data)`로 넣으며, 이후 `state.user.user`에서 `user.name`, `user.role` 등에 접근.  
  - **즉, 백엔드는 `{ user: { name, role, ... } }` 형태를 권장** (프론트가 `user.user.role`로 참조).

### 2.2 상품

- **GET `/api/product/all`**  
  - Query: `page` (선택)  
  - **기대 (axios 응답 body):** `{ data: Product[] }` 형태.  
  - 프론트는 훅에서 `response.data`(= API body)를 반환하고, 상품 목록 페이지에서 이 객체의 **`data` 필드를 배열로** 사용합니다. 즉 **API body에 `data` 키로 상품 배열**이 있으면 됩니다.

- **GET `/api/product/:id`**  
  - **기대 (API body):** `{ data: Product }` 형태. 프론트는 **`response.data.data`** 로 단일 상품 객체에 접근합니다.  
  - 상품 객체 필드: `_id`, `name`, `price`, `brand`, `image`, `bigCategory`, `category: { main, sub }`, `stock` (사이즈별 재고 객체, 예: `{ S: 5, M: 10 }`), `description`, `sku`, `color` 등.

- **GET `/api/product`**  
  - Query: `page`  
  - **기대:** `response.data` (홈 등에서 사용).

### 2.3 장바구니

- **GET `/api/cart`**  
  - **기대 (API body):** `{ data: CartItem[] }` 형태. 프론트는 **`response.data.data`** 를 장바구니 배열로 사용합니다.  
  - 각 아이템: `_id`, `productId`(populate된 상품 객체), `qty`, `size` 등.  
  - **주의:** CartCard에서 `item.productId.stock`을 **숫자 하나**로 기대하고 있음 (해당 라인 수량 상한 비교).  
  - 백엔드에서 `productId` populate 시, **해당 아이템의 size에 해당하는 재고 수**를 숫자로 내려주거나, 프론트에서 `productId.stock[size]`로 해석할 수 있도록 `stock` 구조를 유지해 주세요.

- **POST `/api/cart`**  
  - Body: `{ productId, name, size, price, quantity }`  
  - **기대:** `response.data.item`에 추가된 장바구니 아이템 객체 (있으면 토스트 메시지에 사용).

- **PUT `/api/cart/:id`**  
  - Body: `{ qty }`  
  - **기대:** `response.data` (내용은 프론트에서 크게 사용하지 않음).

- **DELETE `/api/cart/:id`**  
  - **기대:** `response.data` (내용은 프론트에서 크게 사용하지 않음).

### 2.4 주문

- **POST `/api/order`**  
  - Body 예시:  
    - `totalPrice`, `shipTo: { address, detail, zip }`, `contact: { Name, lastName, contact }`,  
    - `orderList: [ { productId, price, qty, size }, ... ]`  
  - **기대 (API body):** `{ orderNum: string }` 포함.  
  - **중요:** 주문 성공 시 프론트가 `/payment/success?orderNum=${data.orderNum}` 으로 이동하므로 **`orderNum` 필드 필수.**

- **GET `/api/order`** (관리자 목록)  
  - Query: `page`  
  - **기대 (API body):** `{ data: Order[], totalPageNum: number }` 등.  
  - 각 주문: `_id`, `orderNum`, `status`, `createdAt`, `items` 등.

- **GET `/api/order/me`**  
  - Query: `page`  
  - **기대:** `response.data` (내 주문 목록).

- **GET `/api/order/:orderNum`**  
  - **기대 (API body):** `{ data: Order }`. 프론트는 `response.data.data`로 주문 상세에 접근.

- **PUT `/api/order/:id`**  
  - Body: `{ status }`  
  - **기대:** `response.data`.

### 2.5 좋아요(찜)

- **GET `/api/like`**  
  - **기대 (API body):** `{ data: LikeItem[] }`. 프론트는 `response.data.data`를 배열로 사용. 각 항목에 `productId` 등.

- **POST `/api/like`**  
  - Body: `{ productId, name, price }`  
  - **기대:** `response.data`.

- **DELETE `/api/like/:itemId`**  
  - **기대:** `response.data`.

### 2.6 회원가입

- **POST `/api/user`**  
  - Body: 회원가입 필드  
  - **기대:** 프론트는 응답을 그대로 사용 (상세 형식은 로그인 플로우와 맞추면 됨).

---

## 3. 에러 응답 형식 (주의)

- API 에러 시 axios 인터셉터가 **`Promise.reject(error.response.data)`** 를 호출합니다.  
  즉, 프론트 훅에서는 **`error.response`가 아니라 `error` 자체가 이미 `response.data`** 입니다.

- 프론트에서 에러 메시지를 꺼낼 때 사용하는 패턴:
  - `error.error`
  - `error.message`
  - `error.response?.data?.message` (일부 훅)

**권장:** 백엔드 에러 응답을 아래처럼 **통일**해 두면 유지보수에 유리합니다.

```json
{
  "error": "에러 메시지 (사용자용)",
  "message": "에러 메시지 (선택, 일부 훅이 message 참조)"
}
```

- HTTP 상태 코드는 4xx/5xx 사용. 2xx인데 body에 `status: "fail"` 같은 형태만 바꾸는 방식은 프론트가 일부만 처리할 수 있어, **에러는 4xx/5xx로 내리고 body에 위 형식**을 추천합니다.

---

## 4. 환경 변수 (프론트 기준)

- 프론트는 다음 환경 변수로 백엔드 주소를 사용합니다.  
  백엔드 CORS/프록시 설정 시 참고하세요.
  - `REACT_APP_LOCAL_BACKEND` (개발)
  - `REACT_APP_PROD_BACKEND` (운영)
- 실제 요청: `${baseURL}/api` → 예: `https://api.example.com/api`.

---

## 5. 주의해야 할 점 요약

1. **POST `/api/order`**  
   - 응답에 **`orderNum`** 반드시 포함. 없으면 결제 완료 페이지로 넘어가지 않음.

2. **GET `/api/user/me`**  
   - 응답 구조가 **`{ user: { name, role, ... } }`** 형태인지 확인. 프론트가 `user.user.role`, `user.user.name`으로 접근함.

3. **GET `/api/cart`**  
   - `response.data.data`가 배열이며, 각 항목의 `productId`가 populate되어 있어야 함.  
   - **`item.productId.stock`** 을 숫자로 쓰는 코드가 있으므로, 사이즈별 재고만 있다면 해당 **사이즈 재고 수**를 숫자로 내려주거나, 프론트 수정이 필요함.

4. **GET `/api/product/all`**  
   - API body는 **`{ data: Product[] }`** 형태. 프론트는 body의 **`data`** 를 배열로 사용함.

5. **GET `/api/product/:id`**  
   - 단일 상품은 **`response.data.data`** 에 담겨 있어야 함.

6. **에러 응답**  
   - `error` 또는 `message` 중 하나는 일관되게 내려주면, 토스트/에러 문구가 안정적으로 표시됨.

---

## 6. 체크리스트 (백엔드 점검용)

- [ ] 로그인: `status`, `token`, `user` 필드 제공
- [ ] `/user/me`: `{ user: { name, role, ... } }` 구조
- [ ] `/order` POST: 응답에 `orderNum` 포함
- [ ] `/cart` GET: `data.data` 배열, 각 항목 `productId` populate, 재고 정보 일관
- [ ] `/product/:id` GET: 단일 상품이 `data.data`에 존재
- [ ] `/product/all` GET: 목록이 `data`(또는 일관된 필드)에 배열로 존재
- [ ] 에러 시: `error` 또는 `message` 중 하나 이상 일관 제공

---

문서 버전: 프론트 리팩터링 기준 (2025.02).  
추가로 필요한 스펙이 있으면 프론트엔드 팀에 요청해 이 문서에 반영하면 됩니다.
