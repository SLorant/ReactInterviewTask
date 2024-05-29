import React from "react";
import { useCompanyData } from "../contexts/CompanyDataContext";
import { useEmployeeData } from "../contexts/EmployeeDataContext";

interface InputType {
  label: string;
  type: string;
  name: string;
  small: boolean;
  index: number;
  error: string;
}

const InputField = ({ label, type, name, small, index, error }: InputType) => {
  const { companyData, setCompanyData } = useCompanyData();
  const { employeeData, setEmployeeData } = useEmployeeData();

  const handleOnChange = (e) => {
    if (name === "cv" && e.target.files.length > 0) {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onload = (event) => {
        setEmployeeData({
          ...employeeData,
          [index]: { ...employeeData[index], [name]: event.target.result },
        });
      };

      reader.readAsDataURL(file);
    } else {
      if (small) {
        setEmployeeData({ ...employeeData, [index]: { ...employeeData[index], [name]: e.target.value } });
      } else {
        setCompanyData({ ...companyData, [name]: e.target.value });
      }
    }
  };

  //If the user adds a new employee form, then "deletes" it, the form's data is still there
  //So if the user adds the form again, the data gets filled in, I think it's a nicer user experience
  const getValue = () => {
    if (type === "file") {
      return undefined;
    }
    if (small) {
      return employeeData[index]?.[name] || "";
    }
    return companyData[name] || "";
  };

  return (
    <div className="flex flex-col justify-start items-start">
      <label className={small ? "text-lg mb-1" : "text-xl mb-1"}>{label}</label>
      <input
        onChange={handleOnChange}
        value={getValue()}
        className={`${small ? "w-44 pl-1 text-base" : "w-52 sm:w-auto h-9 text-lg pl-2"} rounded-sm`}
        type={type}
        min={name === "employees" || name === "age" ? 0 : undefined}
        max={name === "employees" ? 100 : undefined}
        accept={name === "cv" ? ".pdf" : undefined}
      />
      <p className="text-sm ml-2 text-red-400">{error}</p>
    </div>
  );
};

export default InputField;
