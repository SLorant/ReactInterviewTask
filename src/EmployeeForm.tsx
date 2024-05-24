import React from "react";
import InputField from "./InputField";

const EmployeeForm = () => {
  return (
    <div className="h-1/2 p-8 border-2 rounded-md">
      <h2>Employee form</h2>
      <form className="flex flex-col gap-4">
        <InputField label={"Name"} type={"text"} />
        <InputField label={"Email"} type={"email"} />
        <InputField label={"Number of Employees"} type={"number"} />
        <InputField label={"Description"} type={"textarea"} />
      </form>
    </div>
  );
};

export default EmployeeForm;
