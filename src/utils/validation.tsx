// Exercise in validation.
import { createContext } from "react";

export type ValidatorFunction = (value: string | null) => string | null;

export interface ValidationError {
  id: string;
  message: string;
}

export class Validation {
  errors: ValidationError[] = [];

  findFirst(id: string): string {
    return this.errors.find((e) => e.id == id)?.message ?? "";
  }
}

export const ValidationContext = createContext(new Validation());

export const validators = {
  required: (value: string | null): string | null => {
    if (value == null || value.trim().length == 0) {
      return "Required.";
    }

    return null;
  },

  validPhoneNumber: (value: string | null): string => {
    console.log(`Value: ${value}`);
    if (value == null) {
      return "Required.";
    }

    const digitsOnly = value.replace(/\D/g, "");
    const isValid = /^[2-9]\d{2}[2-9]\d{2}\d{4}$/.test(digitsOnly);

    return isValid ? "" : "Invalid phone number.";
  },
};

export const validate = (value: string | null, rules: ValidatorFunction[]) => {
  return rules
    .map((rule) => {
      return rule(value);
    })
    .filter((result) => {
      return result !== null;
    });
};
