import ApplicantContactInfo from "../../features/applications/applicant-contact-info";

function Scholarship() {
  return (
    <>
      <h1>Scholarship Application</h1>
      <form>
        <ApplicantContactInfo />

        <button type="submit" className="btn btn-primary py-2">
          Submit
        </button>
      </form>
    </>
  );
}

export default Scholarship;
