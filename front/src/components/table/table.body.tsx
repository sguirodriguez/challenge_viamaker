import { ReactNode } from 'react';
import * as Style from './table.styles';
import { H5 } from '@styles/text';
import { CSSProperties } from 'styled-components';

const TableBody = ({
  align = 'left',
  text,
  children,
  paddingTop = 14,
  paddingBottom = 10,
  paddingRight = 10,
  hiddenWidth,
  onClick,
  style,
}: {
  align?: 'left' | 'center' | 'right';
  text?: string;
  children?: ReactNode;
  paddingTop?: number;
  paddingBottom?: number;
  paddingRight?: number;
  className?: string;
  hiddenWidth?: number;
  onClick?: () => void;
  style?: CSSProperties;
}) => {
  return (
    <Style.TableBodyContainer
      align={align}
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
      paddingRight={paddingRight}
      hiddenWidth={hiddenWidth}
      onClick={onClick}
      style={style}
    >
      {text ? <H5>{text}</H5> : children}
    </Style.TableBodyContainer>
  );
};

export default TableBody;
