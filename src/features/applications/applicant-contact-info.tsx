import StateDropdown from "../../components/state-dropdown";
import InputField from "../../components/input-field";
import { validators } from "../../utils/validation";

function ApplicantContactInfo() {
  return (
    <>
      <fieldset>
        <legend>Applicant</legend>

        <InputField
          settings={{
            id: "firstName",
            label: "First Name",
            validationRules: [validators.required],
          }}
        />

        <InputField
          settings={{
            id: "lastName",
            label: "Last Name",
            validationRules: [validators.required],
          }}
        />
      </fieldset>
      <fieldset className="fieldset">
        <legend>Contact Information</legend>
        <InputField
          settings={{
            id: "email",
            label: "Email",
            validationRules: [validators.required],
          }}
        />

        <InputField
          settings={{
            id: "phone",
            label: "Phone",
            validationRules: [validators.required, validators.validPhoneNumber],
          }}
        />
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

        <InputField
          settings={{
            id: "city",
            label: "City",
            validationRules: [validators.required],
          }}
        />

        <div className="mb-3">
          <StateDropdown isRequired={true} />
        </div>

        <InputField
          settings={{
            id: "zipCode",
            label: "Zip Code",
            validationRules: [validators.required],
          }}
        />
      </fieldset>
    </>
  );
}

export default ApplicantContactInfo;
