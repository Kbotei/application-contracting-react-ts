import { useContext } from "react";
import {
  validate,
  ValidationContext,
  type ValidatorFunction,
} from "../utils/validation";

function InputField({ settings }: { settings: FieldSettings }) {
  const validation = useContext(ValidationContext);

  return (
    <>
      <div className="mb-3">
        <label className="form-label" htmlFor={settings.id}>
          {settings.label}
        </label>
        <input
          id={settings.id}
          type="text"
          placeholder={settings.placeholder}
          className={
            "form-control " +
            (validation.errors.find((e) => e.id == settings.id)?.message ??
            "" == ""
              ? ""
              : "is-invalid")
          }
          onBlur={(e) => {
            // Validation
            console.log("Blur on " + settings.id);
            const messages = validate(e.target.value, settings.validationRules);

            messages.forEach((error) => {
              console.log("ErrorMessage: " + error);
              validation.errors.push({ id: settings.id, message: error });
            });
          }}
        />
        <div className="invalid-feedback">
          {validation.errors.find((e) => e.id == settings.id)?.message}
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
