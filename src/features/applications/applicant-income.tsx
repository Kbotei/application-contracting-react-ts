import InputField from "../../components/input-field";
import { validators } from "../../utils/validation";

function ApplicantIncome() {
  return (
    <>
      <fieldset>
        <legend>Income Information</legend>

        <InputField
          settings={{
            id: "grossIncome",
            label: "Gross Income",
            validationRules: [validators.required],
          }}
        />

        <div className="mb-3">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="grossIncomeTimeframe"
              id="incomeIsYearly"
              value="incomeIsYearly"
            />
            <label className="form-check-label" htmlFor="incomeIsYearly">
              Yearly
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="grossIncomeTimeframe"
              id="incomeIsMonthly"
              value="incomeIsMonthly"
            />
            <label className="form-check-label" htmlFor="incomeIsMonthly">
              Monthly
            </label>
          </div>
        </div>
      </fieldset>
      <fieldset className="fieldset">
        <legend>Living Expenses</legend>

        <InputField
          settings={{
            id: "monthlyHousingCost",
            label: "Monthly Housing Cost",
            validationRules: [validators.required],
          }}
        />
      </fieldset>
    </>
  );
}

export default ApplicantIncome;
