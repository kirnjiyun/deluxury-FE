# HighEndShopping

</br>

### 배포 링크 및 테스트 계정

👉🏻 [HighEndShopping](https://deluxury.netlify.app/ "바로가기")

```구매자 계정
ID: user1@gmail.com
PW: 123
```

```판매자 계정
ID: admin1@gmail.com
PW: 123
```

</br>

## 1. 서비스 소개

👜 <em>명품 브랜드 의류, 가방, 신발 등을 판매하는 <strong>HighEndShopping</strong>입니다.</em>👜

-   다양한 명품 브랜드 제품을 구경하고, 구매할 수 있습니다!

</br>

## 2. 개발 기간 (2024.06.19 ~ 2024.07.19 )

약 4주
|

</br>

## 3. 개발 환경

### 🛠 기술 스택

<div>
    <img src="https://img.shields.io/badge/React-grey?style=for-the-badge&logo=React&logoColor=61DAFB"/>
  <img src="https://img.shields.io/badge/Redux-grey?style=for-the-badge&logo=Redux&logoColor=764ABC"/>
  <img src="https://img.shields.io/badge/javascript-grey?style=for-the-badge&logo=javascript&logoColor=f7df1e" />
  <img src="https://img.shields.io/badge/styled components-grey?style=for-the-badge&logo=styled-components&logoColor=DB7093"/>
</br> 
    <img src="https://img.shields.io/badge/Axios-grey?style=for-the-badge&logo=Axios&logoColor=5A29E4"/>
  <img src="https://img.shields.io/badge/React Query-grey?style=for-the-badge&logo=React Query&logoColor=FF4154"/>
  <img src="https://img.shields.io/badge/React Router-grey?style=for-the-badge&logo=React Router&logoColor=CA4245"/>
  <img src="https://img.shields.io/badge/Prettier-grey?style=for-the-badge&logo=Prettier&logoColor=F7B93E"/>
  <img src="https://img.shields.io/badge/ESLint-grey?style=for-the-badge&logo=ESLint&logoColor=4B32C3"/>
</div>

### 🪜 아키텍처

<img width="700" alt="architecture" src='./public/architecture.png'>

</br>

## 4. 프로젝트 폴더 구조

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

## 5. UI

<p align="center">
<img width="800" alt="thumbnail" src='./public/ui-light.png'>
</p>

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
