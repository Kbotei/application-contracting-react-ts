import { useContext, useState } from "react";
import {
  validate,
  ValidationContext,
  type ValidationError,
  type ValidatorFunction,
} from "../utils/validation";

function InputField({ settings }: { settings: FieldSettings }) {
  const validation = useContext(ValidationContext);

  const [validationErrors, setValidationErrors] = useState<ValidationError[]>(
    []
  );

  return (
    <>
      <div className="mb-3">
        <label className="form-label" htmlFor={settings.id}>
          {settings.label}
        </label>
        <input
          id={settings.id}
          name={settings.id}
          type="text"
          placeholder={settings.placeholder}
          className={
            "form-control " + (validationErrors.length == 0 ? "" : "is-invalid")
          }
          onBlur={(e) => {
            // Validation
            const messages = validate(e.target.value, settings.validationRules);

            if (messages.length == 0) {
              setValidationErrors([]);
              validation.removeErrors(settings.id);
              return;
            }

            const errors: ValidationError[] = messages.map((message) => {
              console.log("ErrorMessage: ", settings.id, message);
              return {
                id: settings.id,
                message: message,
              };
            });

            setValidationErrors(errors);
            validation.errors.push(...errors);
          }}
        />
        <div className="invalid-feedback">
          {validationErrors.length > 0 && validationErrors[0].message}
        </div>
      </div>
    </>
  );
}

export default InputField;

export interface FieldSettings {
  id: string;
  label: string;
  placeholder?: string;
  validationRules: ValidatorFunction[];
}
