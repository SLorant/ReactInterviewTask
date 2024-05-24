import { createContext, useContext, useState } from "react";

interface CompanyData {
  name: string;
  email: string;
  employees: string;
  desc: string;
}

const CompanyDataContext = createContext({});

export const CompanyDataProvider = ({ children }) => {
  const [companyData, setCompanyData] = useState<CompanyData>({});

  return <CompanyDataContext.Provider value={{ companyData, setCompanyData }}>{children}</CompanyDataContext.Provider>;
};

export const useCompanyData = () => useContext(CompanyDataContext);
