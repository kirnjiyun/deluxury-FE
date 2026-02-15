import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import * as S from './Header.styles';
import Toast from '../../Toast/Toast';
import UserMenu from './UserMenu/UserMenu';
import CategoryMenu from './CategoryMenu/CategoryMenu';
import MusicPlayer from './MusicPlayer/MusicPlayer';
import SearchModal from '../../searchModal/SearchModal';
import { openSearchModal, closeSearchModal } from '../../../action/modalAction';
import { ROUTES } from '../../../constants';

/**
 * 앱 상단 헤더 - 로고, 유저메뉴, 카테고리 메뉴, BGM, 검색
 */
export function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isSearchModalOpen = useSelector((state) => state.modal.isSearchModalOpen);

  const openSearch = () => dispatch(openSearchModal());
  const closeSearch = () => dispatch(closeSearchModal());

  return (
    <S.Nav>
      <S.TopBar>
        <S.Logo onClick={() => navigate(ROUTES.HOME)}>Deluxury</S.Logo>
        <Toast />
        <UserMenu />
      </S.TopBar>
      <S.UnderBar>
        <CategoryMenu />
        <S.RightGroup>
          <MusicPlayer />
          <S.SearchButton onClick={openSearch} aria-label="검색">
            <FontAwesomeIcon icon={faSearch} />
          </S.SearchButton>
        </S.RightGroup>
      </S.UnderBar>
      {isSearchModalOpen && <SearchModal onClose={closeSearch} />}
    </S.Nav>
  );
}

export default Header;
