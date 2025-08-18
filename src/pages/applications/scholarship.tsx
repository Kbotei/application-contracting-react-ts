import { useContext, useState } from "react";
import ApplicantContactInfo from "../../features/applications/applicant-contact-info";
import { ValidationContext } from "../../utils/validation";
import ApplicantIncome from "../../features/applications/applicant-income";

function Scholarship() {
  const validation = useContext(ValidationContext);

  type ApplicationStep = "applicant-contact" | "applicant-income";

  const [step, setStep] = useState<ApplicationStep>("applicant-contact");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const dataObject = Object.fromEntries(formData.entries());
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
      <form onSubmit={handleSubmit}>
        <ApplicationContent />
        <button type="submit" className="btn btn-primary py-2">
          Next
        </button>
      </form>
    </>
  );
}

export default Scholarship;
