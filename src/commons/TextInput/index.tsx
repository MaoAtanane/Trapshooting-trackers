import { TextField } from "@mui/material";
import { Control, Controller, FieldValues } from "react-hook-form";
import { ChangeEvent } from "react";

type TextInputProps = {
  id?: string;
  label: string;
  onChange?: (e: string) => void;
  value?: string;
  type?: string;
  name?: string;
  error?: string;
  control?: Control<any>;
};

export default function TextInput({
  id,
  label,
  onChange,
  value,
  type = "text",
  control,
  name,
  error,
}: TextInputProps) {
  if (!control || !name)
    return (
      <BaseTextInput
        id={id}
        label={label}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        type={type}
        error={error}
      />
    );
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <BaseTextInput
          id={id}
          label={label}
          value={field.value}
          onChange={field.onChange}
          error={fieldState.error?.message}
          type={type}
        />
      )}
    />
  );
}

type BaseTextInputProps = {
  id?: string;
  label: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  type?: string;
  name?: string;
  error?: string;
  control?: Control<FieldValues>;
};

function BaseTextInput({
  id,
  label,
  onChange,
  value,
  type = "text",
  error,
}: BaseTextInputProps) {
  return (
    <TextField
      fullWidth
      id={id}
      label={label}
      value={value ?? ""}
      onChange={onChange}
      type={type}
      helperText={error}
      error={!!error}
    />
  );
}
