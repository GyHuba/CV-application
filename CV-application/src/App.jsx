import "./App.css";
import Layout from "./components/Layout";
import { EducationInformationContextProvider } from "./contexts/EducationInformationContextProvider";
import { ExperienceContextProvider } from "./contexts/ExperienceContextProvider";
import { GeneralInformationContextProvider } from "./contexts/GeneralInformationContextProvider";
import { ImageContextProvider } from "./contexts/ImageContextProvider";

function App() {
  return (
    <>
      <ImageContextProvider>
        <ExperienceContextProvider>
          <EducationInformationContextProvider>
            <GeneralInformationContextProvider>
              <Layout />
            </GeneralInformationContextProvider>
          </EducationInformationContextProvider>
        </ExperienceContextProvider>
      </ImageContextProvider>
    </>
  );
}

export default App;
