import { useContext, useState } from "react";
import ApplicantContactInfo from "../../features/applications/applicant-contact-info";
import { ValidationContext } from "../../utils/validation";
import ApplicantIncome from "../../features/applications/applicant-income";
import LegalDisclosures from "../../features/applications/legal-disclosures";

function Scholarship() {
  const validation = useContext(ValidationContext);

  type ApplicationStep =
    | "applicant-contact"
    | "applicant-income"
    | "legal-disclosures";

  const [step, setStep] = useState<ApplicationStep>("applicant-contact");

  const scholarshipFormData = new FormData();

  function handleSubmit(formData: FormData) {
    scholarshipFormData.appendForm(formData);
    const dataObject = Object.fromEntries(formData);
    console.log("Form Data Object:", dataObject);

    if (validation.errors.length > 0) {
      console.log("Errors are present:", validation.errors);
    } else {
      moveToNextStep();
    }
  }

  function moveToNextStep() {
    switch (step) {
      case "applicant-contact":
        setStep("applicant-income");
        break;
      case "applicant-income":
        setStep("legal-disclosures");
        break;
    }
  }

  function ApplicationContent() {
    switch (step) {
      case "applicant-contact":
        return <ApplicantContactInfo />;
      case "applicant-income":
        return <ApplicantIncome />;
      case "legal-disclosures":
        return <LegalDisclosures />;
    }
  }

  return (
    <>
      <h1>Scholarship Application</h1>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a
            className={
              "nav-link " + (step == "applicant-contact" ? "active" : "")
            }
            onClick={() => setStep("applicant-contact")}
          >
            Contact
          </a>
        </li>
        <li className="nav-item">
          <a
            type="button"
            className={
              "nav-link " + (step == "applicant-income" ? "active" : "")
            }
            onClick={() => setStep("applicant-income")}
          >
            Income
          </a>
        </li>
        <li className="nav-item">
          <a
            type="button"
            className={
              "nav-link " + (step == "legal-disclosures" ? "active" : "")
            }
            onClick={() => setStep("legal-disclosures")}
          >
            Legal Disclosures
          </a>
        </li>
      </ul>
      <form action={handleSubmit}>
        <ApplicationContent />
        <button type="submit" className="btn btn-primary py-2">
          {step == "legal-disclosures" ? "Submit" : "Next"}
        </button>
      </form>
    </>
  );
}

export default Scholarship;
