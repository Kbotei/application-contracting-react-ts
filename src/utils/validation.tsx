// Exercise in validation.
type ValidatorFunction = (value: string | null) => string;

export const validators = {
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

export const validate = (
  value: string | null,
  rules: [ValidationRule]
): string[] => {
  return rules.map((rule) => {
    return rule.validator(value);
  });
};

interface ValidationRule {
  validator: ValidatorFunction;
}
