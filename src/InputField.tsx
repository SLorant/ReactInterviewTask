import React from "react";
import { useCompanyData } from "./CompanyDataContext";

interface InputType {
  label: string;
  type: string;
}

const InputField = ({ label, type }: InputType) => {
  const { companyData, setCompanyData } = useCompanyData();

  return (
    <div className="flex flex-col justify-start items-start">
      <label className="text-xl ">{label}</label>
      <input
        onChange={(e) => setCompanyData({ ...companyData, [label.toLowerCase()]: e.target.value })}
        className="h-10 text-lg pl-2 w-3/4"
        type={type}
      />
    </div>
  );
};

export default InputField;
