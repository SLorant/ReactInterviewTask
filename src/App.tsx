import "./App.css";
import CompanyForm from "./CompanyForm";
import EmployeeForm from "./EmployeeForm";
import { CompanyDataProvider } from "./CompanyDataContext";

function App() {
  return (
    <CompanyDataProvider>
      <main className="flex gap-20 h-3/4">
        <CompanyForm />
        <div className="h-[500px] border-r-2"></div>
        <EmployeeForm />
      </main>
    </CompanyDataProvider>
  );
}

export default App;
