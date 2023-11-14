import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const Button = styled.button``;

export const Menu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  border: 1px solid ${({ theme }) => theme.colors.grayMedium};
  border-radius: 5px;
  padding: 10px 0px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const MenuItem = styled.div`
  width: 150px;
  height: 30px;
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 10px;
  gap: 10px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray};
  }
`;
