import { memo, Dispatch, SetStateAction } from "react";
import { Typography } from "../Typography";
import ENUM_COLORS from "../Typography/colors.enum";

interface TextInputProps {
  description?: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  placeholder: string;
}
const TextInputBase = ({
  description,
  value,
  setValue,
  placeholder,
}: TextInputProps) => {
  const onChangeValue = (e: any) => {
    // TODO: replace any
    setValue(e.target.value);
  };

  return (
    <label className="flex items-center space-x-4 justify-between">
      {description && (
        <Typography variant="h3" color={ENUM_COLORS.OFFWHITE}>
          {description}
        </Typography>
      )}
      <input
        className="rounded-lg px-4 py-2 placeholder-gray-500 bg-light-gray text-offblack focus:outline-none"
        placeholder={placeholder}
        value={value}
        onChange={onChangeValue}
      />
    </label>
  );
};

export const TextInput = memo(TextInputBase);
