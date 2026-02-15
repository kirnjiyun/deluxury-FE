import React, { useState, useRef, useEffect } from 'react';
import { menuItems } from '../../../Navbar/menuItems';
import { notify } from '../../../Toast/Toast';
import * as S from './CategoryMenu.styles';

/**
 * 메인 메뉴 (MEN, WOMEN 등) + 드롭다운
 */
export function CategoryMenu() {
  const [openIndex, setOpenIndex] = useState(null);
  const refs = useRef([]);

  const toggle = (index) => {
    if (index > 1) {
      notify('업데이트 예정입니다.');
      return;
    }
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (refs.current.every((ref) => !ref?.contains(e.target))) {
        setOpenIndex(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <S.MainMenu>
      {menuItems.map((item, index) => (
        <S.MenuItem
          key={item.label}
          ref={(el) => (refs.current[index] = el)}
          isOpen={openIndex === index}
        >
          <S.MenuLink as="a" href="#" onClick={(e) => { e.preventDefault(); toggle(index); }}>
            {item.label}
          </S.MenuLink>
          {openIndex === index && (
            <S.DropdownContent className="dropdown-content">
              {item.content}
            </S.DropdownContent>
          )}
        </S.MenuItem>
      ))}
    </S.MainMenu>
  );
}

export default CategoryMenu;
