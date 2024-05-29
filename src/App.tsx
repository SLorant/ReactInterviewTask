import CompanyForm from "./components/CompanyForm";
import EmployeeForm from "./components/EmployeeForm";
import { CompanyDataProvider } from "./contexts/CompanyDataContext";
import { EmployeeDataProvider } from "./contexts/EmployeeDataContext";
import { useState } from "react";

export interface Errors {
  name?: string;
  email?: string;
  employees?: string;
}

export interface EmployeeErrors {
  [index: number]: {
    name?: string;
    email?: string;
    title?: string;
    age?: string;
  };
}

function App() {
  const [errors, setErrors] = useState<Errors>({});
  const [emplErrors, setEmplErrors] = useState<EmployeeErrors>({});

  return (
    <CompanyDataProvider>
      <EmployeeDataProvider>
        <main className="flex gap-10 lg:gap-0 lg:flex-row flex-col justify-center items-center lg:justify-end w-[100vw] p-8">
          <CompanyForm setErrors={setErrors} errors={errors} setEmplErrors={setEmplErrors} />
          <div className="h-1 lg:hidden block border-t-2 w-3/4 border-zinc-600"></div>
          <div className="flex lg:mt-40 justify-center h-full">
            <EmployeeForm errors={emplErrors} />
          </div>
        </main>
      </EmployeeDataProvider>
    </CompanyDataProvider>
  );
}

export default App;
