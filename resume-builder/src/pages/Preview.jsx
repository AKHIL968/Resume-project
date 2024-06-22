import { useState, useEffect } from "react";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Certificate from "../components/Certificate";

const Preview = () => {
  const [personalInfo, setPersonalInfo] = useState({});
  const [educationInfo, setEducationInfo] = useState([]);
  const [projectList, setProjectList] = useState([]);
  const [experienceList, setExperienceList] = useState([]);
  const [skillsInfo, setSkillsInfo] = useState({});
  const [certificateInfo, setCertificateInfo] = useState({})
  const [summaryInfo, setSummaryInfo] = useState([])

  useEffect(() => {
    const storedPersonalInfo = JSON.parse(localStorage.getItem("personalInfo"));
    if (storedPersonalInfo) setPersonalInfo(storedPersonalInfo);

    const storedEducationInfo = JSON.parse(localStorage.getItem("educationInfo"));
    if (storedEducationInfo && Array.isArray(storedEducationInfo)) setEducationInfo(storedEducationInfo);

    const storedProjectInfo = JSON.parse(localStorage.getItem("projectInfo"));
    if (storedProjectInfo && Array.isArray(storedProjectInfo)) setProjectList(storedProjectInfo);

    const storedExperienceInfo = JSON.parse(localStorage.getItem("experienceInfo"));
    if (storedExperienceInfo && Array.isArray(storedExperienceInfo)) setExperienceList(storedExperienceInfo);

    const storedSkillsInfo = JSON.parse(localStorage.getItem("skillsInfo"));
    if (storedSkillsInfo) setSkillsInfo(storedSkillsInfo);

    const storedCertificateInfo = JSON.parse(localStorage.getItem("certificateInfo"))
    if(storedCertificateInfo) setCertificateInfo(storedCertificateInfo)

    const storedSummaryInfo = JSON.parse(localStorage.getItem("summaryInfo"))
    if(storedSummaryInfo) setSummaryInfo(storedSummaryInfo)
  }, []);

  const downloadResume = () => {
    const input = document.getElementById('resumeContent');
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save("resume.pdf");
    });
  };

  return (
    <div className="bg-stone-300 min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <div id="resumeContent" className="w-full h-[1200px] border-2 border-black bg-white shadow-xl p-8">
          <div className="w-full h-full">
            {/* Personal Information */}
            <div className="text-center mb-6">
              <h1 className="text-4xl font-bold text-gray-800">{personalInfo.name}</h1>
              <p className="text-sm text-gray-600 mt-1">{personalInfo.location}</p>
              <div className="flex flex-wrap justify-center gap-4 mt-2 text-sm text-gray-600">
                <p>{personalInfo.number}</p>
                <p>{personalInfo.email}</p>
                <p>{personalInfo.github}</p>
                <p>{personalInfo.linkedin}</p>
              </div>
            </div>

            {/* Summary */}
            {/* <Section title="SUMMARY">
                <div>
                  <p className="text-xs text-left">{summaryInfo.summary}</p>
                  
                </div>
            </Section> */}

            {/* Education */}
            <Section title="EDUCATION">
              {educationInfo.length > 0 ? (
                educationInfo.map((edu, index) => (
                  <div key={index} className="mb-2">
                    <div className="flex justify-between items-baseline">
                      <div className="text-left">
                        <p className="text-sm font-semibold">{edu.education}</p>
                        <p className="text-xs italic text-gray-600">{edu.course}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-semibold">{edu.year}</p>
                        <p className="text-xs text-gray-600">{edu.location}</p>
                      </div>
                    </div>
                  </div>  
                ))
              ) : (
                <p className="text-sm text-gray-600">No education information available.</p>
              )}
            </Section>

            {/* Technical Skills */}
            <Section title="TECHNICAL SKILLS">
              <div className="text-left">
                <SkillItem title="Languages" skills={skillsInfo.language} />
                <SkillItem title="Development" skills={skillsInfo.development} />
                <SkillItem title="Development Tools" skills={skillsInfo.tools} />
              </div>
            </Section>

            {/* Projects */}
            <Section title="PROJECTS">
              {projectList.length > 0 ? (
                projectList.map((project, index) => (
                  <div key={index} className="mb-2 text-left">
                    <p className="text-sm font-semibold">
                      {project.project} <span className="text-gray-500">|</span> <span className="text-gray-600">{project.tech}</span>
                    </p>
                    <ul className="list-disc list-inside">
                      {project.descriptions.map((desc, descIndex) => (
                        <li key={descIndex} className="text-xs text-gray-700 ml-4">{desc}</li>
                      ))}
                    </ul>
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-600">No projects available.</p>
              )}
            </Section>

            {/* Experience */}
            <Section title="EXPERIENCE">
              {experienceList.length > 0 ? (
                experienceList.map((experience, index) => (
                  <div key={index} className="mb-2">
                    <div className="flex justify-between items-baseline">
                      <div>
                        <p className="text-sm font-semibold">{experience.position}</p>
                        <p className="text-xs italic text-gray-600">{experience.company}</p>
                      </div>
                      <p className="text-sm font-semibold">{experience.startDate} - {experience.endDate}</p>
                    </div>
                    <p className="text-xs text-gray-700 mt-1">{experience.description}</p>
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-600">No experience information available.</p>
              )}
            </Section>
            {/* {Certificate} */}
            <Section title="CERTIFICATES" className="">
                {certificateInfo.length > 0 ? (
                  certificateInfo.map((certificate,index) => (
                    <div key={index} className="mb-2 flex gap-6">
                      {/* <p className="text-sx"><span></span>{certificate.name} <span>-</span></p> */}
                      <li className="text-sx">{certificate.name} <span>-</span></li>
                      <p className="text-md font-bold">{certificate.issuer}</p>

                    </div>
                  ))
                ) : (
                  <p className="text-sm text-gray-600">No experience information available.</p>
                )}
            
            </Section>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <button
          onClick={downloadResume}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 shadow-lg"
        >
          Download Resume
        </button>
      </div>
    </div>
  );
};

const Section = ({ title, children }) => (
  <div className="mb-7">
    <h2 className="text-lg font-bold text-gray-800 mb-2 border-b border-gray-300 pb-1 text-left">{title}</h2>
    {children}
  </div>
);

const SkillItem = ({ title, skills }) => (
  <p className="mb-1">
    <span className="font-semibold text-sm">{title}: </span>
    <span className="text-gray-700 text-xs">{skills}</span>
  </p>
);

export default Preview;


