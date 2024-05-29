import { Dispatch, SetStateAction, createContext, useContext, useState } from "react";

export interface EmployeeData {
  name: string;
  email: string;
  title: string;
  age: boolean;
}

interface EmployeeDataContextType {
  employeeData: EmployeeData;
  setEmployeeData: Dispatch<SetStateAction<EmployeeData>>;
}
const EmployeeDataContext = createContext<EmployeeDataContextType>({});

export const EmployeeDataProvider = ({ children }) => {
  const [employeeData, setEmployeeData] = useState<EmployeeData>({});

  return (
    <EmployeeDataContext.Provider value={{ employeeData, setEmployeeData }}>{children}</EmployeeDataContext.Provider>
  );
};

export const useEmployeeData = () => useContext(EmployeeDataContext);
