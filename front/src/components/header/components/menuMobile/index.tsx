import React, { useState, useEffect, useRef } from 'react';
import { Container, Menu, MenuItem } from './styles';
import { sidebarMenuMock } from '../../../../components/sidebarMenu/menu';
import { FaBars } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { colors } from '@styles/theme/colors';
import { H5 } from '@styles/text';

interface DropdownMenuProps {}

const MenuMobile: React.FC<DropdownMenuProps> = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const menuRef: any = useRef(null);

  const toggleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  const handleOptionClick = (route: string) => {
    navigate(route);
    setMenuOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <Container ref={menuRef}>
      <a>
        <FaBars onClick={toggleMenu} style={{ fontSize: 18 }} />
      </a>

      {menuOpen && (
        <Menu>
          {sidebarMenuMock?.map((item, index) => (
            <MenuItem
              onClick={() => handleOptionClick(item?.routePath)}
              key={index + item?.title}
            >
              {item?.icon}

              <H5 color={colors.primary}>{item?.title}</H5>
            </MenuItem>
          ))}
        </Menu>
      )}
    </Container>
  );
};

export default MenuMobile;
