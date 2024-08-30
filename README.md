# Deluxury

<img src="src/asset/img/thumbnail/deluxury thumbnail.jpg" >
</br>

### 배포 링크 및 테스트 계정

👉🏻 [Deluxury](https://deluxury.netlify.app/ "바로가기")

```구매자 계정
ID: user1@gmail.com
PW: 123
```

```판매자 계정
ID: admin1@gmail.com
PW: 123
```

</br>

## 서비스 소개

👜 <em>명품 브랜드 의류, 가방, 신발 등을 판매하는 <strong>Deluxury</strong>입니다.</em>👜

-   음악을 들으며 다양한 명품 브랜드 제품을 구경하고, 구매할 수 있습니다
-   구매자 계정뿐만 아니라, 판매자 계정으로도 가입이 가능하며 상품을 등록할 수 있습니다.

</br>

## 기술 스택 및 개발 환경

<img src="src/asset/img/thumbnail/아키텍쳐.png" >

## 프로젝트 폴더 구조

### 프론트엔드

```
📁 highendshopping-fe
├──📁 src
│   ├──📁 action
│   ├──📁 components
│   ├──📁 hooks
│   ├──📁 layout
│   └──📁 pages
│       ├──📁 Adminpage
│       ├──📁 Cartpage
│       ├──📁 Homepage
│       ├──📁 Loginpage
│       ├──📁 Mylikepage
│       ├──📁 Mypage
│       ├──📁 Orderpage
│       ├──📁 OrderSuccesspage
│       ├──📁 Paymentpage
│       ├──📁 ProductDetailpage
│       ├──📁 Productpage
│       ├──📁 RegistProductpage
│       └──📁 SignUppage
│   ├──📁 reducer
│   ├──📁 routes
│   ├──📁 store
│   └──📁 utils
│
├──📄 App.js
├──📄 index.css
├──📄 index.js
└──📄 .env
```

### 백엔드

```
📁 highendshopping-be
├──📁 controllers
│   ├──📄 auth.controller.js
│   ├──📄 cart.controller.js
│   ├──📄 like.controller.js
│   ├──📄 order.controller.js
│   ├──📄 product.controller.js
│   └──📄 user.controller.js
├──📁 models
│   ├──📄 Cart.js
│   ├──📄 Like.js
│   ├──📄 Order.js
│   ├──📄 Product.js
│   └──📄 User.js
├──📁 routes
│   ├──📄 auth.api.js
│   ├──📄 cart.api.js
│   ├──📄 indexRouter.js
│   ├──📄 like.api.js
│   ├──📄 order.api.js
│   ├──📄 product.api.js
│   └──📄 user.api.js
└──📁 utils
   └───📄 randomStringGenerator.js


```

<br />

## UI

#### - 주요 화면

<div align="center">
  <table>
    <tr>
      <td align="center"><b>메인 화면</b></td>
      <td align="center"><b>로그인</b></td>
    </tr>
    <tr>
      <td><img src="src/assets/gifs/main/main.gif" width="400" height="224"></td>
      <td><img src="src/assets/gifs/main/login.gif" width="400" height="224"></td>
    </tr>
    <tr>
      <td align="center"><b>회원가입</b></td>
      <td align="center"><b>상품 리스트</b></td>
    </tr>
    <tr>
      <td><img src="src/assets/gifs/main/signup.gif" width="400" height="224"></td>
      <td><img src="src/assets/gifs/main/home.gif" width="400" height="224"></td>
    </tr>
    <tr>
      <td align="center"><b>검색</b></td>
      <td align="center"><b>상품 상세</b></td>
    </tr>
    <tr>
      <td><img src="src/assets/gifs/main/search.gif" width="400" height="224"></td>
      <td><img src="src/assets/gifs/main/product-detail.gif" width="400" height="224"></td>
    </tr>
    <tr>
      <td align="center"><b>장바구니</b></td>
      <td align="center"><b>찜</b></td>
    </tr>
    <tr>
      <td><img src="src/assets/gifs/main/cart.gif" width="400" height="224"></td>
      <td><img src="src/assets/gifs/main/like.gif" width="400" height="224"></td>
    </tr>
    <tr>
      <td align="center"><b>결제 화면</b></td>
      <td align="center"><b>관리자 페이지</b></td>
    </tr>
    <tr>
      <td><img src="src/assets/gifs/main/payment.gif" width="400" height="224"></td>
      <td><img src="src/assets/gifs/main/admin.gif" width="400" height="224"></td>
    </tr>
    <tr>
      <td align="center"><b>관리자가 상품 올리기</b></td>
    </tr>
    <tr>
      <td><img src="src/assets/gifs/main/upload.gif" width="400" height="224"></td>
    </tr>
  </table>
</div>
