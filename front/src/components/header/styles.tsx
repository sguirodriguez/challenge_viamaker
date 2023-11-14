import styled from 'styled-components';

export const Container = styled.div`
  width: calc(100% - 230px);
  height: 70px;

  background-color: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid ${({ theme }) => theme.colors.background};
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;

  .show-on-768 {
    display: none;
    flex: 1;
    padding-left: 10px;
  }

  @media (max-width: 576px) {
    padding: 0px 13px;
  }

  @media (max-width: 768px) {
    width: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .show-on-768 {
      display: block;
    }
  }
`;
