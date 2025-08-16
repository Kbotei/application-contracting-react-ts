import StateDropdown from "../../components/state-dropdown";
import { validators } from "../../utils/validation";

function ApplicantContactInfo() {
  return (
    <>
      <fieldset className="fieldset">
        <legend className="fieldset-legend">Applicant</legend>

        <label className="floating-label py-2">
          <input
            type="text"
            placeholder="First Name"
            className="input input-lg"
            required
          />
          <span>First Name</span>
        </label>

        <label className="floating-label py-2">
          <input
            type="text"
            placeholder="Last Name"
            className="input input-lg"
            required
          />
          <span>Last Name</span>
        </label>
      </fieldset>
      <fieldset className="fieldset">
        <legend className="fieldset-legend">Contact Information</legend>
        <label className="floating-label py-2">
          <input
            type="email"
            inputMode="email"
            placeholder="Email"
            className="input input-lg"
            required
          />
          <span>Email</span>
        </label>

        <label className="floating-label py-2">
          <input
            type="tel"
            inputMode="tel"
            placeholder="Phone"
            className="input input-lg"
            required
            onChange={(e) => validators.validPhoneNumber(e.target.value)}
          />
          <span>Phone</span>
        </label>
      </fieldset>
      <fieldset className="fieldset">
        <legend className="fieldset-legend">Address</legend>
        <label className="floating-label py-2">
          <input
            type="text"
            placeholder="Street Address"
            className="input input-lg"
            required
          />
          <span>Street Address</span>
        </label>

        <label className="floating-label py-2">
          <input
            type="text"
            placeholder="City"
            className="input input-lg"
            required
          />
          <span>City</span>
        </label>

        <label className="label py-2">
          <StateDropdown isRequired={true} />
        </label>

        <label className="floating-label py-2">
          <input
            type="text"
            inputMode="numeric"
            placeholder="Zip Code"
            className="input input-lg"
            required
            minLength={5}
            maxLength={5}
          />
          <span>Zip Code</span>
        </label>
      </fieldset>
    </>
  );
}

export default ApplicantContactInfo;
