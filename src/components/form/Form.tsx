"use client";

import { formProps } from "@/types";
import { useRef } from "react";

const Form = ({ children, action, onSubmit }: formProps) => {
  const ref = useRef<HTMLFormElement>(null);

  return (
    <form
      action={async (formData) => {
        try {
          await action(formData);
          ref.current?.reset();
          if (onSubmit) {
            onSubmit();
          }
        } catch (error) {
          console.error("Form submission error:", error);
        }
      }}
      ref={ref}
      className="w-full"
    >
      {children}
    </form>
  );
};

export default Form;
