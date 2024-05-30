import { CompanyData } from "../contexts/CompanyDataContext";
import { EmployeeData } from "../contexts/EmployeeDataContext";

//Submit to fictional endpoint, will get error because the endpoint doesn't exist
const submitData = async (companyData: CompanyData, employeeData: { [key: number]: EmployeeData }) => {
  const response = await fetch("https://some-random-endpoint.com/api/data", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ Company: companyData, Employees: employeeData }),
  });

  if (!response.ok) {
    console.error("Failed to post data:", response.statusText);
  } else {
    // This won't fire
    const data = await response.json();
    console.log("Data successfully submitted:", data);
  }
};

export default submitData;
