import { InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

export interface IInputProps {
  placeholder: string;
  error?: FieldError;
}

type TypeHtmlProps = InputHTMLAttributes<HTMLInputElement> & IInputProps;

export interface IField extends TypeHtmlProps {}
