import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import InputField from "./InputField";
import { useCompanyData } from "../contexts/CompanyDataContext";
import { useEmployeeData } from "../contexts/EmployeeDataContext";
import validate from "../utils/ValidationUtil";
import { EmployeeErrors, Errors } from "../App";
import submitData from "../utils/submitDataUtil";

interface CompanyFormProps {
  errors: Errors;
  setErrors: Dispatch<SetStateAction<Errors>>;
  setEmplErrors: Dispatch<SetStateAction<EmployeeErrors>>;
}

const CompanyForm = ({ errors, setErrors, setEmplErrors }: CompanyFormProps) => {
  const { companyData, setCompanyData } = useCompanyData();
  const { employeeData } = useEmployeeData();
  const [json, setJson] = useState("");
  const [modal, setModal] = useState(false);
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (modal) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [modal]);

  const handleSubmit = () => {
    const employeeCount = Object.keys(employeeData).length;
    let i = employeeCount;
    let cleanedEmpls = employeeData;
    //const cleanedEmpls = employeeData.slice(0, employeeCount);
    // If there are more employees in the employee form data, than in the company data,
    // Delete the ones not needed
    while (i > Number(companyData.employees)) {
      delete cleanedEmpls[i - 1];
      cleanedEmpls = employeeData;
      i--;
    }
    const isValid = validate({ companyData, cleanedEmpls, setErrors, setEmplErrors });

    //To make sure that the age is an integer
    Object.values(cleanedEmpls).map((emp) => {
      emp.age = Math.floor(emp.age);
    });

    if (isValid) {
      setJson(JSON.stringify({ Company: companyData, Employees: cleanedEmpls }, null, "  "));
      submitData(companyData, cleanedEmpls);
      setModal(true);
    }
  };

  return (
    <div className="p-8 w-72 sm:w-[30rem] mt-8 lg:mt-0 lg:w-auto lg:fixed lg:left-32 lg:top-32 border-2 border-zinc-500 rounded-md ">
      <div className="h-3/4 hidden lg:block lg:absolute -right-24 top-16 border-r-2 border-zinc-600"></div>
      <h1 className="mb-8 text-center text-3xl sm:text-5xl">Company form</h1>
      <div className="flex flex-col gap-4 justify-center items-center">
        <InputField label={"Name"} type={"text"} name="name" error={errors.name} small={false} index={0} />
        <InputField label={"Email"} type={"email"} name="email" error={errors.email} small={false} index={0} />
        <InputField
          label={"Number of Employees"}
          type={"number"}
          name="employees"
          error={errors.employees}
          small={false}
          index={0}
        />
        <div className="flex flex-col ">
          <label className="text-xl mb-1">Description</label>
          <textarea
            className="h-9 text-lg pl-2 w-52 sm:w-[247px]"
            name="desc"
            onChange={(e) => setCompanyData({ ...companyData, desc: e.target.value })}
          />
        </div>

        <button
          className=" mt-4 w-40 bg-zinc-900 px-4 py-2 rounded-md hover:bg-zinc-700 transition duration-300"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>

      <dialog
        className="p-4 sm:p-8 w-[300px] sm:w-[500px] rounded-lg backdrop:bg-black/50 backdrop:backdrop-blur-md overflow-y-scroll overflow-x-clip"
        ref={ref}
        onCancel={() => setModal(false)}
      >
        <pre className="mt-4 text-xs sm:text-sm p-2 rounded-sm bg-gray-800 overflow-x-clip overflow-y-scroll">
          <code className="">{json}</code>
        </pre>
        <button className="mt-6 bg-zinc-600 rounded-md px-4 py-1" onClick={() => setModal(false)}>
          Close
        </button>
      </dialog>
    </div>
  );
};

export default CompanyForm;
