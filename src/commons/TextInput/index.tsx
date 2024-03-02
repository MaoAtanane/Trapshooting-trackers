import { TextField } from "@mui/material";

type TextInputProps = {
  id?: string;
  label: string;
  onChange: (value: string) => void;
  value: string;
  type?: string;
};

export default function TextInput({
  id,
  label,
  onChange,
  value,
  type = "text",
}: TextInputProps) {
  return (
    <TextField
      fullWidth
      id={id}
      label={label}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      type={type}
    />
  );
}
