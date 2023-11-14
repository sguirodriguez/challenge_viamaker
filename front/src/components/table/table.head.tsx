import { ReactNode } from 'react';
import * as Style from './table.styles';
import { H5 } from '@styles/text';
import { CSSProperties } from 'styled-components';

const TableHead = ({
  width,
  align = 'left',
  text,
  children,
  paddingTop = 15,
  paddingBottom = 15,
  style,
  className,
  hiddenWidth,
}: {
  width?: number;
  align?: 'left' | 'center' | 'right';
  text?: string;
  children?: ReactNode;
  paddingTop?: number;
  paddingBottom?: number;
  style?: CSSProperties;
  className?: string;
  hiddenWidth?: number;
}) => {
  return (
    <Style.TableHeadContainer
      width={width}
      align={align}
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
      style={style}
      className={className}
      hiddenWidth={hiddenWidth}
    >
      {text ? (
        <H5 style={{ color: '#757893', fontWeight: 500 }}>{text}</H5>
      ) : (
        children
      )}
    </Style.TableHeadContainer>
  );
};

export default TableHead;
