import styled from 'styled-components';

export const Container = styled.div``

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 1rem;
  width: 100%;
`;

export const ResponsiveIframe = styled.iframe`
  width: 100%;
  height: 220px;
`;