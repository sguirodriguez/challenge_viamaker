import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.gray};
  width: 100%;
  height: 100vh;


`;

export const MenuAndMain = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  overflow-y: auto;
`;

export const Main = styled.div`
  flex: 1;
  min-height: 100vh;
  margin-left: 230px;
  background-color: ${({ theme }) => theme.colors.white};

  @media (max-width: 768px) {
    margin-left: 0px;
  }

  @media (max-width: 676px) {
    margin-left: 0px;
  }

`;

export const Children = styled.div`
  flex: 1;
  margin-top: 70px; /* margin, pois o header possue esse tamanho */
  min-height: calc(100vh - 70px); /* definindo altura da div baseado no header */
  background-color: ${({ theme }) => theme.colors.white};
  overflow-y: auto; /* Permitindo a rolagem do conteúdo */
  padding-top: 24px;
  padding-left: 30px;
  padding-right: 30px;
  /* max-width: 1400px; */

  @media (max-width: 768px) {
    margin-left: 0px;
  }

  @media (max-width: 676px) {
    margin-left: 0px;
  }
`
