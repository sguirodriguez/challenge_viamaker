import { colors } from '@styles/theme/colors';

import styled, { css } from 'styled-components';
import { InputProps } from './input.types';

export const Container = styled.div<InputProps>`
  width: ${(props) => props.width || ''};
  height: fit-content;
  display: flex;
  flex-direction: column;
  margin-top: ${(props) => props.marginTop || 0}px;
  margin-bottom: ${(props) => props.marginBottom || 0}px;

  .label-container {
    width: auto;
    display: flex;
  }

  .error-container {
    width: auto;

    display: flex;
    justify-content: ${(props) =>
      props.errorInBottom ? 'flex-start' : 'flex-end'};
    align-items: flex-end;
    margin-bottom: ${(props) => (props.errorInBottom ? '7px' : '')};
  }

  .helper-container {
    display: flex;
    align-items: center;
  }

  .helper-icon {
    width: auto;
  }
`;

export const TopContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 7px;
  align-items: baseline;
`;

export const BottomContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 7px;
`;

export const Input = styled.input<Pick<InputProps, 'error'>>`
  height: 46px;
  background-color: ${(props) =>
    props.error ? '#ff637810' : colors.white};
  padding: 0 17px;
  outline: 1px solid ${colors.graySemiMedium};
  border: none;
  border-radius: 7px;
  transition: 0.2s ease-out;
  box-sizing: border-box;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'text')};
  opacity: ${({ disabled }) => (disabled ? '0.3' : '1')};

  ::placeholder {
    color: ${colors.graySemiMedium};
  }

  &:focus {
    outline: solid 2px ${colors.black} !important;
    background-color: ${colors.white} !important;
  }

  ${(props) =>
    !props.error &&
    css`
      &:hover {
        outline: solid 1px ${colors.grayMedium};
      }
    `}

  ${(props) =>
    props.error &&
    css`
      outline: solid 1px ${colors.red};

      &:focus {
        outline: solid 2px ${colors.red} !important;
      }

      &:hover {
        background-color: ${colors.white};
      }
    `}
`;
