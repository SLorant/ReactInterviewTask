import { Dispatch, SetStateAction, createContext, useContext, useState } from "react";

export interface CompanyData {
  name: string;
  email: string;
  employees: string;
  desc: string;
}

interface CompanyDataContext {
  companyData: CompanyData;
  setCompanyData: Dispatch<SetStateAction<CompanyData>>;
}
const CompanyDataContext = createContext<CompanyDataContext>({});

export const CompanyDataProvider = ({ children }) => {
  const [companyData, setCompanyData] = useState<CompanyData>({});

  return <CompanyDataContext.Provider value={{ companyData, setCompanyData }}>{children}</CompanyDataContext.Provider>;
};

export const useCompanyData = () => useContext(CompanyDataContext);
