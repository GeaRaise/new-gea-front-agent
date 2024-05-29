"use client";
import { Button } from "@/components/ui/button";
import type { ButtonHTMLAttributes, FC, ReactNode } from "react";
import { useFormStatus } from "react-dom";
import Spinner from "../Spinner";

interface PropsType extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  suspenseLabel?: string | ReactNode;
}

const SubmitButton: FC<PropsType> = ({
  label = "送信する",
  suspenseLabel = <Spinner />,
  ...props
}) => {
  const { pending } = useFormStatus();
  return <Button {...props}>{pending ? suspenseLabel : label}</Button>;
};

export default SubmitButton;
