'use client';

import { TextField as MuiTextField } from '@mui/material';
import { generatedClassList } from '@/core/utils/helpers/style';
import { toPascalCase } from '@/core/utils/helpers/text';
import DesignIcon from '@/core/design-systems/components/design-icon';
import FormHelperText from '@/core/design-systems/components/form-helper-text';
import { TextFieldComponent, TextFieldProps } from '@/core/design-systems/components/text-field';

// do: children
// do-not: ref, component
const TextField = (props: TextFieldProps | null | undefined) => {
  // props가 null이나 undefined일 경우 빈 객체로 처리
  if (!props) {
    return null;
  }
  const { success, error, disabled, helperText = [], children, ...restProps } = props;

  const rootClassList = Array.from(generatedClassList('MuiTextField', { success, error, disabled }, toPascalCase));

  return (
    <MuiTextField
      error={error}
      disabled={disabled}
      classes={{ root: rootClassList.join(' ') }}
      helperText={(helperText ?? [])
        ?.filter(({ value }) => Boolean(value))
        ?.map(({ key, withIcon, value, ...props }) => (
          <FormHelperText key={key} {...props}>
            {withIcon && <DesignIcon variant={error ? 'AlertFill' : success ? 'CheckFill' : disabled ? 'InformationFill' : 'NoticeFill'} aria-hidden={true} />}
            <span>{value}</span>
          </FormHelperText>
        ))}
      {...restProps}
    >
      {children}
    </MuiTextField>
  );
};

export default TextField as TextFieldComponent;
