import Input from "components/shared/Input/Input";
import Button from "components/shared/Button/Button";
import "../account.scss"


const Upload = ({next, prev}:any) => {
    return (
      <div className="edit-details">
        <div className="form-wrapper">
          <form className="form">
            <Input label="Company ID" type="text" />
            <Input label="Recent pay slip" type="text"/>
            <Input label="Employment/contact letter" type="text"/>
            <Input label="Government Issued ID" type="text"/>
            <Input label="Proof of address" type="text"/>
            <div className="account-buttons">
              <Button label="Previous" variant="primary" onClick={prev}/>
              <Button label="Next" variant="primary" onClick={next}/>
            </div>
          </form>
        </div>
      </div>
    );
  };
  



export default Upload;
