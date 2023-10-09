/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { ExperienceContext } from "../contexts/ExperienceContext";
import { EducationInformationContext } from "../contexts/EducationInformationContext";
import { GeneralInformationContext } from "../contexts/GeneralInformatioContext";
import { ImageContext } from "../contexts/ImageContext";

export function FillForm() {
  const [educationDatas, setEducationDatas] = useContext(
    EducationInformationContext
  );
  const [experienceData, setExperienceData] = useContext(ExperienceContext);
  const [formData, setFormData] = useContext(GeneralInformationContext);
  const [imageUpload, setImageUpload] = useContext(ImageContext);

  setFormData({
    name: "Huba Gyihor",
    address: "P G Vejdes Väg 20",
    email: "gy.huba@gmail.com",
    phone: "36703296104",
    website: "https://github.com/GyHuba",
    dateOfBirth: "1999.06.15",
  });

  setEducationDatas([
    {
      titleOfStudy: "Frontend developer",
      schoolName: "Progmatic Academy",
      beginingOfStudies: "2022.09.10.",
      endOfStudies: "2023.05.31.",
    },
  ]);

  setExperienceData([
    {
      companyName: "Progmatic Academy",
      positionTitle: "Frontend developer",
      responsibilities: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime incidunt amet, accusantium explicabo labore temporibus sunt, ipsa suscipit debitis corporis, et quasi nisi tenetur. Debitis dolore voluptates commodi facere placeat.",
      beginingOfWork: "2022.09.10.",
      endOfWork:  "2023.05.31.",
    },
  ]);

  setImageUpload(
    <source src="/home/huba/ODIN PROJECTS/CV-application-1/CV-application/public/me.jpeg" />
  )
}

export function ClearForm() {
  const [educationDatas, setEducationDatas] = useContext(
    EducationInformationContext
  );
  const [experienceData, setExperienceData] = useContext(ExperienceContext);
  const [formData, setFormData] = useContext(GeneralInformationContext);
  const [imageUpload, setImageUpload] = useContext(ImageContext);

  setFormData({
    name: "",
    address: "",
    email: "",
    phone: "",
    website: "",
    dateOfBirth: "",
  });

  setEducationDatas([]);

  setExperienceData([]);

  setImageUpload(null)
}
