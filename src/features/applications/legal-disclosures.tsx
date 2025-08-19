import InputField from "../../components/input-field";
import { validators } from "../../utils/validation";

function LegalDisclosures() {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <h1>Legal Disclosures</h1>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
            ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
            egestas semper. Aenean ultricies mi vitae est. Mauris placerat
            eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra.
            Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit
            amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros
            ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim
            in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id
            cursus faucibus, tortor neque egestas augue, eu vulputate magna eros
            eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan
            porttitor, facilisis luctus, metus
          </p>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas.
          </p>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
            ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
            egestas semper. Aenean ultricies mi vitae est. Mauris placerat
            eleifend leo.
          </p>
          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              value="aggreed"
              id="disclosureAgreement"
              name="disclosureAgreement"
            />
            <label className="form-check-label" htmlFor="disclosureAgreement">
              I agree to the terms in the above disclosure.
            </label>
          </div>
        </div>
        <div className="col-4">
          <InputField
            settings={{
              id: "signature",
              label: "Signature",
              validationRules: [validators.required],
            }}
          />
        </div>
      </div>
    </>
  );
}

export default LegalDisclosures;
