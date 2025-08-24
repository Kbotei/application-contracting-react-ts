export function combineFormData(forms: FormData[]): FormData {
  const combinedFormData = new FormData();

  for (const form of forms) {
    for (const [key, value] of form.entries()) {
      combinedFormData.append(key, value);
    }
  }

  return combinedFormData;
}
