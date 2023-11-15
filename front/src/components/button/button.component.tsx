import { H5 } from '@styles/text';
import * as Style from './button.styles';
import { colors } from '@styles/theme/colors';
import { CSSProperties } from 'styled-components';

const Button = ({
  style,
  text,
  onClick,
}: {
  style?: CSSProperties;
  text: string;
  onClick: () => void;
}) => {
  return (
    <Style.Container style={style} onClick={() => onClick()}>
      <H5 color={colors.white} textAlign="center">
        {text}
      </H5>
    </Style.Container>
  );
};

export default Button;
