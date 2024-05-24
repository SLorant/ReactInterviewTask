import React, { useContext, useState } from "react";
import InputField from "./InputField";
import { useCompanyData } from "./CompanyDataContext";

const CompanyForm = () => {
  /* const [companyData, setCompanyData] = useState<CompanyData>({
    name: "asd",
    email: "ee",
  }); */

  const { companyData, setCompanyData } = useCompanyData();
  console.log(companyData);
  return (
    <div className="h-1/2 p-8 border-2 rounded-md">
      <h1 className="mb-8">Company form</h1>
      <form className="flex flex-col gap-4">
        <InputField /* companyData={companyData} setCompanyData={setCompanyData} */ label={"Name"} type={"text"} />
        <InputField label={"Email"} type={"email"} />
        <InputField label={"Number of Employees"} type={"number"} />
        <textarea name="asd" id=""></textarea>
        <InputField label={"Description"} type={"textarea"} />
      </form>
    </div>
  );
};

export default CompanyForm;
