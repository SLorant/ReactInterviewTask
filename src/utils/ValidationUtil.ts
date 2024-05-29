import { Dispatch, SetStateAction } from "react";
import { CompanyData } from "../CompanyDataContext";
import { cleanedEmpls } from "./cleanedEmplsContext";

interface ValidationProps {
  companyData: CompanyData;
  cleanedEmpls: cleanedEmpls;
  setErrors: Dispatch<SetStateAction<object>>;
  setEmplErrors: Dispatch<SetStateAction<object>>;
}

//Email validation with regex
const validateEmail = (email: string): boolean => {
  return (
    String(email)
      .toLowerCase()
      .match(/^\S+@\S+\.\S+$/)?.length > 0
  );
};

const validate = ({ companyData, cleanedEmpls, setErrors, setEmplErrors }: ValidationProps) => {
  const companyErrors = {};
  const employeeErrors = {};

  if (!companyData.name) {
    companyErrors.name = "Name is required.";
  }
  if (!companyData.email) {
    companyErrors.email = "Email is required.";
  } else if (!validateEmail(companyData.email)) {
    companyErrors.email = "Please provide a valid email.";
  }
  if (!companyData.employees) {
    companyErrors.employees = "Number of Employees is required.";
  } else if (companyData.employees < 0 || companyData.employees > 100) {
    companyErrors.employees = "Employee count out of range (0-100).";
  }

  for (let i = 0; i < companyData.employees; i++) {
    if (!cleanedEmpls[i]?.name) {
      employeeErrors[i] = { ...employeeErrors[i], name: "Name is required." };
    }
    if (!cleanedEmpls[i]?.email) {
      employeeErrors[i] = { ...employeeErrors[i], email: "Email is required." };
    } else if (!validateEmail(cleanedEmpls[i]?.email)) {
      employeeErrors[i] = { ...employeeErrors[i], email: "Valid email needed." };
    }
    if (!cleanedEmpls[i]?.title) {
      employeeErrors[i] = { ...employeeErrors[i], title: "Job title is required." };
    }
    if (!cleanedEmpls[i]?.age) {
      employeeErrors[i] = { ...employeeErrors[i], age: "Age is required." };
    } else if (!parseInt(cleanedEmpls[i]?.age)) {
      employeeErrors[i] = { ...employeeErrors[i], age: "Age must be whole." };
    } else if (cleanedEmpls[i]?.age < 18) {
      employeeErrors[i] = { ...employeeErrors[i], age: "Must be 18 at least." };
    }
  }
  setErrors(companyErrors);
  setEmplErrors(employeeErrors);

  return Object.keys(companyErrors).length === 0 && Object.keys(employeeErrors).length === 0;
};

export default validate;
