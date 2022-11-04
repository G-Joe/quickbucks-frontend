import Input from "components/shared/Input/Input";
import Button from "components/shared/Button/Button";
import "../account.scss";

const EditDetails = ({ next, prev }: any) => {
  return (
    <div className="edit-details">
      <div className="form-wrapper">
        <form className="form">
          <Input label="Select title" type="text" />
          <Input label="Select Profession" type="text" />
          <Input label="Select birth country" type="text" />
          <Input label="Select your religion" type="text" />
          <Input label="Local government of residence" type="text" />
          <Input label="State of Residence" type="text" />
          <Input label="Residential address" type="text" />
          <Input label="Place of birth" type="text" />
          <div className="account-buttons">
            <Button
              label="Previous"
              variant="secondary--outline"
              onClick={prev}
            />
            <Button label="Next" variant="primary" onClick={next} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditDetails;
