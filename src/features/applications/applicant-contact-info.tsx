import StateDropdown from "../../components/state-dropdown";
import { validators } from "../../utils/validation";

function ApplicantContactInfo() {
  return (
    <>
      <fieldset>
        <legend>Applicant</legend>

        <div className="mb-3">
          <label className="form-label">First Name</label>
          <input
            type="text"
            placeholder="First Name"
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Last Name</label>
          <input
            type="text"
            placeholder="Last Name"
            className="form-control"
            required
          />
        </div>
      </fieldset>
      <fieldset className="fieldset">
        <legend>Contact Information</legend>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            inputMode="email"
            placeholder="Email"
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input
            type="tel"
            inputMode="tel"
            placeholder="Phone"
            className="form-control"
            required
            onChange={(e) => validators.validPhoneNumber(e.target.value)}
          />
        </div>
      </fieldset>
      <fieldset className="fieldset">
        <legend>Address</legend>
        <div className="mb-3">
          <label className="form-label">Street Address</label>
          <input
            type="text"
            placeholder="Street Address"
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">City</label>
          <input
            type="text"
            placeholder="City"
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">State</label>
          <StateDropdown isRequired={true} />
        </div>
        <div className="mb-3">
          <label className="form-label">Zip Code</label>
          <input
            type="text"
            inputMode="numeric"
            placeholder="Zip Code"
            className="form-control"
            required
            minLength={5}
            maxLength={5}
          />
        </div>
      </fieldset>
    </>
  );
}

export default ApplicantContactInfo;
