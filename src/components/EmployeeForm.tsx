import InputField from "./InputField";
import { useCompanyData } from "../contexts/CompanyDataContext";
import { useEmployeeData } from "../contexts/EmployeeDataContext";
import { Errors } from "../App";

interface EmployeeFormProps {
  errors: Errors;
}
const EmployeeForm = ({ errors }: EmployeeFormProps) => {
  const { companyData } = useCompanyData();
  const { employeeData, setEmployeeData } = useEmployeeData();

  const forms = Number(companyData?.employees ?? 0);

  return (
    <div className="lg:absolute lg:top-32 lg:left-[700px]">
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 2xl:grid-cols-3 xl:grid-cols-2 gap-10">
        {[...Array(forms)].map((_, i) => (
          <div key={i} className="w-[250px] p-8 border-2 rounded-md border-zinc-500 ">
            <h2 className="text-center text-2xl mb-4">Employee {i + 1}</h2>
            <form className=" flex flex-col gap-4">
              <InputField label={"Name"} type={"text"} name="name" small index={i} error={errors[i]?.name} />
              <InputField label={"Email"} type={"email"} name="email" small index={i} error={errors[i]?.email} />
              <div className="flex flex-col justify-start items-start">
                <label className="text-lg mb-1">Job title</label>
                <select
                  className="h-7 text-base pl-1 w-44"
                  onChange={(e) =>
                    setEmployeeData({ ...employeeData, [i]: { ...employeeData[i], ["title"]: e.target.value } })
                  }
                  defaultValue="none"
                >
                  <option value="none" disabled>
                    Select job...
                  </option>
                  <option value="accountant">Accountant</option>
                  <option value="software developer">Software developer</option>
                  <option value="software tester">Software tester</option>
                  <option value="manager">Manager</option>
                </select>
                <p className="text-sm ml-2 text-red-400">{errors[i]?.title}</p>
              </div>
              <InputField label={"Age"} type={"number"} name="age" small index={i} error={errors[i]?.age} />
              <InputField label={"CV"} type={"file"} name="cv" small index={i} error={errors[i]?.cv} />
            </form>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeForm;
