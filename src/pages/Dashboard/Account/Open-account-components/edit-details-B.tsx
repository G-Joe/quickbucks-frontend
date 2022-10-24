import Input from "components/shared/Input/Input";
import Button from "components/shared/Button/Button";
import "../account.scss"


const EditDetailsB = ({next, prev}:any) => {
    return (
      <div className="edit-details">
        <div className="form-wrapper">
          <form className="form">
            <Input label="RC number (optional)" type="text" />
            <Input label="Employer name" type="text"/>
            <Input label="Salary amount" type="text"/>
            <Input label="Salary Payment date" type="date"/>
            <Input label="Employer Mobile number" type="text"/>
            <Input label="Email address" type="email"/>
            <Input label="Salary account number" type="text"/>
            <div className="account-buttons">
              <Button label="Previous" variant="primary" onClick={prev}/>
              <Button label="Next" variant="primary" onClick={next}/>
            </div>
          </form>
        </div>
      </div>
    );
  };
  



export default EditDetailsB;
