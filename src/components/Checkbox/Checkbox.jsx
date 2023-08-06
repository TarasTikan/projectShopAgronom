import {
  CheckboxBox,
  CheckboxCheckmark,
  CheckboxInput,
  CheckboxWrapper,
} from './Checkbox.styled';

export const Checkbox = ({ checked, onChange, name }) => {
  return (
    <CheckboxWrapper>
      <CheckboxInput
        type="checkbox"
        checked={checked}
        onChange={onChange}
        name={name}
      />
      <CheckboxBox checked={checked}>
        {checked && <CheckboxCheckmark checked={checked} />}
      </CheckboxBox>
    </CheckboxWrapper>
  );
};
