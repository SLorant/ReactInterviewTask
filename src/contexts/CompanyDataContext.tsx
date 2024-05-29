import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";

export interface CompanyData {
  name: string;
  email: string;
  employees: number;
  desc: string;
}

interface CompanyDataContext {
  companyData: CompanyData;
  setCompanyData: Dispatch<SetStateAction<CompanyData>>;
}
const CompanyDataContext = createContext<CompanyDataContext>({
  companyData: {
    name: "",
    email: "",
    employees: 0,
    desc: "",
  },
  setCompanyData: () => {},
});

export const CompanyDataProvider = ({ children }: { children: ReactNode }) => {
  const [companyData, setCompanyData] = useState<CompanyData>({
    name: "",
    email: "",
    employees: 0,
    desc: "",
  });

  return <CompanyDataContext.Provider value={{ companyData, setCompanyData }}>{children}</CompanyDataContext.Provider>;
};

export const useCompanyData = () => useContext(CompanyDataContext);
