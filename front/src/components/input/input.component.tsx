import * as Style from './input.styles';
import { forwardRef, useRef } from 'react';
import { When } from 'react-if';
import { InputProps } from './input.types';
import { colors } from '@styles/theme/colors';
import { Small } from '@styles/text';

const Input = forwardRef<HTMLInputElement, InputProps>((props: any, _ref) => {
  const componentRef = useRef<HTMLDivElement>(null);
  const componentWidth = Number(componentRef?.current?.offsetWidth);

  const isInputShort = componentWidth < 400;
  const isErrorBig = (props.error ? props.error.length : 0) >= 40;
  const hasErrorToBeInBottom =
    isInputShort || isErrorBig || props?.makeErrorInBottom;

  return (
    <Style.Container
      {...props}
      ref={componentRef}
      errorInBottom={hasErrorToBeInBottom}
    >
      <Style.TopContent>
        <div className="label-container">
          <When condition={!!props.label}>
            <Small color={props.labelColor || colors.grayMedium}>
              {props.label}
            </Small>
          </When>
        </div>

        <When condition={!!props.error && !hasErrorToBeInBottom}>
          <div className="error-container">
            <Small color={colors.red}>{props.error}</Small>
          </div>
        </When>
      </Style.TopContent>

      <Style.Input
        ref={_ref}
        {...props}
        onChange={(event: any) => {
          if (props.onChange) {
            props.onChange(event);
          }
          const { value } = event.target;
          if (props.maskFunction) {
            event.target.value = props.maskFunction(value);
          }

          return event;
        }}
      />

      <Style.BottomContent>
        <When condition={!!props.error && hasErrorToBeInBottom}>
          <div className="error-container">
            <Small color={colors.red}>{props.error}</Small>
          </div>
        </When>

        <When condition={!!props.helperText}>
          <div className="helper-container">
            <div className="helper-icon">icon</div>
            <Small color={colors.grayMedium} marginLeft={6}>
              {props.helperText}
            </Small>
          </div>
        </When>
      </Style.BottomContent>
    </Style.Container>
  );
});

Input.displayName = 'Input';

export default Input;
