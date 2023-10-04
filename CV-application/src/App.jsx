import "./App.css";
import Layout from "./components/Layout";
import { EducationInformationContextProvider } from "./contexts/EducationInformationContextProvider";
import { GeneralInformationContextProvider } from "./contexts/GeneralInformationContextProvider";
import { ImageContextProvider } from "./contexts/ImageContextProvider";

function App() {
  return (
    <>
      <ImageContextProvider>
        <EducationInformationContextProvider>
          <GeneralInformationContextProvider>
            <Layout />
          </GeneralInformationContextProvider>
        </EducationInformationContextProvider>
      </ImageContextProvider>
    </>
  );
}

export default App;
