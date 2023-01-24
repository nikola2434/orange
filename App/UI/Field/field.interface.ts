import { InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

export interface IInputProps {
  placeholder: string;
  error?: FieldError;
  isDirty?: boolean;
}

type TypeHtmlProps = InputHTMLAttributes<HTMLInputElement> & IInputProps;

export interface IField extends TypeHtmlProps {}
