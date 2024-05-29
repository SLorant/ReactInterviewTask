import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";

export interface EmployeeData {
  name: string;
  email: string;
  title: string;
  age: number;
  cv?: string | ArrayBuffer | null;
}

interface EmployeeDataContextType {
  employeeData: { [key: number]: EmployeeData };
  setEmployeeData: Dispatch<SetStateAction<{ [key: number]: EmployeeData }>>;
}
const EmployeeDataContext = createContext<EmployeeDataContextType>({
  employeeData: {},
  setEmployeeData: () => {},
});

export const EmployeeDataProvider = ({ children }: { children: ReactNode }) => {
  const [employeeData, setEmployeeData] = useState<{ [key: number]: EmployeeData }>({});

  return (
    <EmployeeDataContext.Provider value={{ employeeData, setEmployeeData }}>{children}</EmployeeDataContext.Provider>
  );
};

export const useEmployeeData = () => useContext(EmployeeDataContext);
