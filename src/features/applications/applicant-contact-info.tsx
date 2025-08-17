import { useContext } from "react";
import StateDropdown from "../../components/state-dropdown";
import { ValidationContext, validators } from "../../utils/validation";

function ApplicantContactInfo() {
  const validation = useContext(ValidationContext);
  validation.errors.push({ id: "firstName", message: "Required" });

  return (
    <>
      <fieldset>
        <legend>Applicant</legend>

        <div className="mb-3">
          <label className="form-label" htmlFor="firstName">
            First Name
          </label>
          <input
            id="firstName"
            type="text"
            placeholder="First Name"
            className={
              "form-control " +
              (validation.findFirst("firstName") ? "is-invalid" : "")
            }
            required
          />
          <div className="invalid-feedback">
            {validation.findFirst("firstName")}
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="lastName">
            Last Name
          </label>
          <input
            id="lastName"
            type="text"
            placeholder="Last Name"
            className="form-control"
            required
          />
          <div className="invalid-feedback">
            {validation.findFirst("lastName")}
          </div>
        </div>
      </fieldset>
      <fieldset className="fieldset">
        <legend>Contact Information</legend>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            inputMode="email"
            placeholder="Email"
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="phone">
            Phone
          </label>
          <input
            id="phone"
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
          <label className="form-label" htmlFor="streetAddress">
            Street Address
          </label>
          <input
            id="streetAddress"
            type="text"
            placeholder="Street Address"
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="city">
            City
          </label>
          <input
            id="city"
            type="text"
            placeholder="City"
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <StateDropdown isRequired={true} />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="zipCode">
            Zip Code
          </label>
          <input
            id="zipCode"
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
