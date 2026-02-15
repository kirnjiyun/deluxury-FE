import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faHeart,
  faShoppingBag,
  faSignInAlt,
  faSignOutAlt,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons';
import * as S from './UserMenu.styles';
import { logout } from '../../../../action/userAction';
import { ROUTES, USER_ROLES } from '../../../../constants';

/**
 * 로그인 전: 로그인/회원가입
 * 로그인 후: 마이페이지, 좋아요, 장바구니, 로그아웃 (관리자면 ADMIN 링크)
 */
export function UserMenu() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoggedIn, user } = useSelector((state) => state.user);
  const isAdmin = user?.user?.role === USER_ROLES.ADMIN;

  const handleLogout = () => {
    dispatch(logout());
    navigate(ROUTES.HOME);
  };

  const goTo = (path) => () => navigate(path);

  if (!isLoggedIn) {
    return (
      <S.Wrapper>
        <S.Item onClick={goTo(ROUTES.LOGIN)}>
          <FontAwesomeIcon icon={faSignInAlt} /> LOGIN
        </S.Item>
        <S.Item onClick={goTo(ROUTES.SIGNUP)}>
          <FontAwesomeIcon icon={faUserPlus} /> SIGNUP
        </S.Item>
      </S.Wrapper>
    );
  }

  return (
    <S.Wrapper>
      <S.Item onClick={goTo(isAdmin ? ROUTES.ADMIN : ROUTES.MY_PAGE)}>
        <FontAwesomeIcon icon={faUser} />
        {isAdmin ? 'ADMIN PAGE' : `${user.user.name}'s MY PAGE`}
      </S.Item>
      {!isAdmin && (
        <>
          <S.Item onClick={goTo(ROUTES.MY_LIKE)}>
            <FontAwesomeIcon icon={faHeart} /> MY LIKE
          </S.Item>
          <S.Item onClick={goTo(ROUTES.CART)}>
            <FontAwesomeIcon icon={faShoppingBag} /> SHOPPING BAG
          </S.Item>
        </>
      )}
      <S.Item onClick={handleLogout}>
        <FontAwesomeIcon icon={faSignOutAlt} /> LOGOUT
      </S.Item>
    </S.Wrapper>
  );
}

export default UserMenu;
