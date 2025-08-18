import StateDropdown from "../../components/state-dropdown";
import InputField from "../../components/input-field";
import { validators } from "../../utils/validation";

function ApplicantContactInfo() {
  return (
    <>
      <fieldset>
        <legend>Applicant</legend>
        <div className="row g-3">
          <div className="col-sm-6">
            <InputField
              settings={{
                id: "firstName",
                label: "First Name",
                validationRules: [validators.required],
              }}
            />
          </div>
          <div className="col-sm-6">
            <InputField
              settings={{
                id: "lastName",
                label: "Last Name",
                validationRules: [validators.required],
              }}
            />
          </div>
        </div>
      </fieldset>
      <fieldset className="fieldset">
        <legend>Contact Information</legend>
        <div className="row g-3">
          <div className="col-sm-6">
            <InputField
              settings={{
                id: "email",
                label: "Email",
                validationRules: [validators.required],
              }}
            />
          </div>
          <div className="col-sm-6">
            <InputField
              settings={{
                id: "phone",
                label: "Phone",
                validationRules: [
                  validators.required,
                  validators.validPhoneNumber,
                ],
              }}
            />
          </div>
        </div>
      </fieldset>
      <fieldset className="fieldset">
        <legend>Address</legend>
        <InputField
          settings={{
            id: "streetAddress",
            label: "Street Address",
            validationRules: [validators.required],
          }}
        />

        <div className="row g-3">
          <div className="col-sm-7">
            <InputField
              settings={{
                id: "city",
                label: "City",
                validationRules: [validators.required],
              }}
            />
          </div>
          <div className="col-sm">
            <div className="mb-3">
              <StateDropdown isRequired={true} />
            </div>
          </div>
          <div className="col-sm">
            <InputField
              settings={{
                id: "zipCode",
                label: "Zip Code",
                validationRules: [validators.required],
              }}
            />
          </div>
        </div>
      </fieldset>
    </>
  );
}

export default ApplicantContactInfo;
