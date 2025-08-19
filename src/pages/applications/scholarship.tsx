import { useContext, useState } from "react";
import ApplicantContactInfo from "../../features/applications/applicant-contact-info";
import { ValidationContext } from "../../utils/validation";
import ApplicantIncome from "../../features/applications/applicant-income";

function Scholarship() {
  const validation = useContext(ValidationContext);

  type ApplicationStep = "applicant-contact" | "applicant-income";

  const [step, setStep] = useState<ApplicationStep>("applicant-contact");

  const scholarshipFormData = new FormData();

  function handleSubmit(formData: FormData) {
    scholarshipFormData.appendForm(formData);
    const dataObject = Object.fromEntries(formData);
    console.log("Form Data Object:", dataObject);

    if (validation.errors.length > 0) {
      console.log("Errors are present:", validation.errors);
    } else {
      updateStep();
    }
  }

  function updateStep() {
    if (step == "applicant-contact") {
      setStep("applicant-income");
    }
  }

  function ApplicationContent() {
    if (step == "applicant-contact") {
      return <ApplicantContactInfo />;
    } else {
      return <ApplicantIncome />;
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
      </ul>
      <form action={handleSubmit}>
        <ApplicationContent />
        <button type="submit" className="btn btn-primary py-2">
          Next
        </button>
      </form>
    </>
  );
}

export default Scholarship;
