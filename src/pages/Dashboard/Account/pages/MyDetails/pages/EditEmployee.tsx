import { Button, Input } from "components";

const EditEmployee = ({ next, prev }: any) => {
  return (
    <div className="edit-emp form-card">
      <Input label="Name" type="text" />
      <Input label="RC number (optional)" type="number" />
      <Input label="Employer name" type="text" />
      <Input label="Salary amount" type="number" />
      <Input label="Salary Payment date" type="date" />
      <Input label="Mobile number" type="number" />
      <Input label="Email address" type="email" />
      <Input label="Salary account number" type="number" />

      <div className="row">
        <Button label="Previous" variant="secondary--outline" onClick={prev} />
        <Button label="Next" variant="primary" onClick={next} />
      </div>
    </div>
  );
};

export default EditEmployee;
