import { H5 } from '@styles/text';
import * as Style from './button.styles';
import { colors } from '@styles/theme/colors';
import { CSSProperties } from 'styled-components';

const Button = ({ style, text }: { style?: CSSProperties; text: string }) => {
  return (
    <Style.Container style={style}>
      <H5 color={colors.white} textAlign="center">
        {text}
      </H5>
    </Style.Container>
  );
};

export default Button;
