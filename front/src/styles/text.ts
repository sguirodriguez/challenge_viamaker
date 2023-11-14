import styled from 'styled-components';
import { colors } from './theme/colors';
import { GeneralStyleProps } from './types';

const baseText = styled.p<GeneralStyleProps>`
  display: ${(props) => props.display || 'flex'};
  align-self: ${(props) => props.alignSelf || 'auto'};
  justify-self: ${(props) => props.justifySelf || 'auto'};
  text-align: ${(props) => props.textAlign || 'auto'};
  width: ${(props) => props.width || 'auto'};
  margin: ${(props) => props.marginTop || 0}px
    ${(props) => props.marginRight || 0}px
    ${(props) => props.marginBottom || 0}px
    ${(props) => props.marginLeft || 0}px;
  color: ${(props) => props.color || colors.black};
  letter-spacing: ${(props) => props.letterSpacing || 0.4}px;
  -webkit-font-smoothing: antialiased !important;
`;

export const H1 = styled(baseText)`
  font-family: 'Aeonik Regular', sans-serif;
  font-size: ${(props) => props.fontSize || 1.813}rem;
  line-height: ${(props) => props.lineHeight || 120}%;
`;

export const H1Bold = styled(baseText)`
  font-family: 'Aeonik Bold', sans-serif;
  font-size: ${(props) => props.fontSize || 1.813}rem;
  line-height: ${(props) => props.lineHeight || 120}%;
  font-weight: bold !important;
  
`;

export const H2 = styled(baseText)`
  font-family: 'Aeonik Regular', sans-serif;
  font-size: ${(props) => props.fontSize || 1.37}rem;
  line-height: ${(props) => props.lineHeight || 120}%;
`;

export const H2Bold = styled(baseText)`
  font-family: 'Aeonik Bold', sans-serif;
  font-size: ${(props) => props.fontSize || 1.37}rem;
  line-height: ${(props) => props.lineHeight || 120}%;
`;

export const H3 = styled(baseText)`
  font-family: 'Aeonik Regular', sans-serif;
  font-size: ${(props) => props.fontSize || 1.18}rem;
  line-height: ${(props) => props.lineHeight || 130}%;
`;

export const H3Bold = styled(baseText)`
  font-family: 'Aeonik Bold', sans-serif;
  font-size: ${(props) => props.fontSize || 1.18}rem;
  line-height: ${(props) => props.lineHeight || 130}%;
`;

export const H4 = styled(baseText)`
  font-family: 'Aeonik Regular', sans-serif;
  font-size: ${(props) => props.fontSize || 1.063}rem;
  line-height: ${(props) => props.lineHeight || 135}%;
`;

export const H4Bold = styled(baseText)`
  font-family: 'Aeonik Bold', sans-serif;
  font-size: ${(props) => props.fontSize || 1.063}rem;
  line-height: ${(props) => props.lineHeight || 135}%;
`;

export const H5 = styled(baseText)`
  font-family: 'Aeonik Regular', sans-serif;
  font-size: ${(props) => props.fontSize || 0.93}rem;
  line-height: ${(props) => props.lineHeight || 120}%;
`;

export const H5Bold = styled(baseText)`
  font-family: 'Aeonik Bold', sans-serif;
  font-size: ${(props) => props.fontSize || 0.93}rem;
  line-height: ${(props) => props.lineHeight || 120}%;
`;

export const Small = styled(baseText)`
  font-family: 'Aeonik Regular', sans-serif;
  font-size: ${(props) => props.fontSize || 0.81}rem;
  line-height: ${(props) => props.lineHeight || 120}%;
`;

export const SmallBold = styled(baseText)`
  font-family: 'Aeonik Bold', sans-serif;
  font-size: ${(props) => props.fontSize || 0.81}rem;
  line-height: ${(props) => props.lineHeight || 120}%;
`;