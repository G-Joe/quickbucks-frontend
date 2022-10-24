import Input from "components/shared/Input/Input";
import Button from "components/shared/Button/Button";
import "../account.scss"


const PersonalDits = ({next}:any) => {
    return (
      <div className="personal-details">
        <div className="form-wrapper">
          <form className="form">
            <Input label="BVN" type="text" placeholder="2224451890" />
            <Input label="Email" type="email" placeholder="sol.addy@gmail.com" />
            <Input label="Image" type="button" placeholder="Take a picture"/>
            <Button label="Confirm and Continue" variant="primary" onClick={next}/>
          </form>
        </div>
      </div>
    );
  };
  



export default PersonalDits;
