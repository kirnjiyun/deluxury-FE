# Deluxury FE 아키텍처 개요

2년차 이상 개발자 수준의 설계로 정리한 프론트엔드 구조입니다.

## 폴더 구조

```
src/
├── constants/           # 앱 전역 상수
│   ├── routes.js       # ROUTES, getProductDetailPath, getCategoryPath
│   └── index.js        # USER_ROLES, ORDER_STATUS 등
├── components/
│   ├── ui/              # 재사용 UI (도메인 무관)
│   │   ├── Button/      # variant, size, fullWidth
│   │   ├── Input/       # label, error, readOnly
│   │   ├── Spinner/
│   │   ├── EmptyState/  # 빈 목록/메시지 + 액션 버튼
│   │   └── ErrorMessage/ # 에러 메시지 + 다시 시도
│   ├── layout/          # 레이아웃
│   │   ├── Header/      # 상단 네비 (하위: UserMenu, CategoryMenu, MusicPlayer)
│   │   │   ├── UserMenu/
│   │   │   ├── CategoryMenu/
│   │   │   └── MusicPlayer/
│   │   └── PageLayout/  # 로딩/에러/타이틀 공통 처리
│   ├── ErrorBoundary/   # 전역 에러 캐치
│   ├── Navbar/          # 기존 메뉴 데이터(menuItems) 유지, 레이아웃은 Header 사용
│   └── ... (기존 ProductCard, CartCard, Toast 등)
├── pages/
│   ├── NotFoundPage/    # 404 전용 페이지
│   └── ...
├── layout/
│   └── AppLayout.jsx    # Header + children + Footer, ErrorBoundary, 초기 로딩
└── routes/
    └── AppRouter.js     # ROUTES 상수 사용, 404 catch-all 라우트
```

## 설계 포인트

- **상수 집중**: 경로·역할·주문 상태는 `constants/`에서 관리해 오타와 magic string 제거.
- **UI 컴포넌트 분리**: Button, Input, Spinner, EmptyState, ErrorMessage는 어디서든 재사용.
- **헤더 분리**: Navbar를 Header로 대체하고, UserMenu / CategoryMenu / MusicPlayer로 역할 분리.
- **페이지 공통 처리**: PageLayout으로 로딩·에러·빈 목록을 일관되게 처리 (Cart, Product 목록 등).
- **에러 처리**: ErrorBoundary로 런타임 에러 시 fallback UI, ErrorMessage로 API/데이터 에러 + 재시도.
- **404**: 존재하지 않는 경로는 NotFoundPage로 연결.

## 추가된 기능

- **404 페이지**: 잘못된 URL 접근 시 안내 문구 + "홈으로 돌아가기" 버튼.
- **Footer**: AppLayout에 Footer 포함해 모든 페이지 하단 공통 노출.
- **PrivateRoute 보강**: `user?.user?.role` 안전 접근, `replace` 사용으로 히스토리 정리.

## 빌드

- `npm run build` 시 기존 ESLint 경고가 많으면 `CI=false npm run build`로 빌드 가능.
- 새로 추가·수정한 파일 기준으로 불필요한 import 등은 정리해 두었습니다.

## 백엔드 연동

- API 호출은 기존 `src/utils/api.js` (axios + 인터셉터)와 `src/hooks/` (React Query) 구조를 유지했습니다.
- 백엔드 레포지토리의 API 스펙(엔드포인트·응답 형식)에 맞춰 `constants`나 훅만 보완하면 됩니다.
