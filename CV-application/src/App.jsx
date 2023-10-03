import "./App.css";
import Layout from "./components/Layout";
import { EducationInformationContextProvider } from "./contexts/EducationInformationContextProvider";
import { GeneralInformationContextProvider } from "./contexts/GeneralInformationContextProvider";

function App() {
  return (
    <>
      <EducationInformationContextProvider>
        <GeneralInformationContextProvider>
          <Layout />
        </GeneralInformationContextProvider>
      </EducationInformationContextProvider>
    </>
  );
}

export default App;
