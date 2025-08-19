export function combineFormData(forms: FormData[]): FormData {
  const combinedFormData = new FormData();

  for (const form of forms) {
    for (const [key, value] of form.entries()) {
      combinedFormData.append(key, value);
    }
  }

  return combinedFormData;
}

export {};

declare global {
  interface FormData {
    appendForm(form: FormData): FormData;
  }
}

FormData.prototype.appendForm = function (form: FormData): FormData {
  for (const [key, value] of form.entries()) {
    this.append(key, value);
  }

  return this;
};
