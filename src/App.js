import React, { useState, useRef, useEffect } from "react";
import { Box } from "@mui/material";
import PDFViewer from "./components/PDFViewer";
import claimData from "./data/data.json";
import ClaimFormView from "./components/ClaimSummary";
import yourJsonData from "./data/data.json";
import BankDetailsView from "./components/BankDetails";
import GovernmentIdView from "./components/Governmentid";
import CityMedical from "./components/CityMedical";
import Rx from "./components/Rx";
import LabReport from "./components/labreport";
import CashRecept from "./components/CashRecept";
import PatientRegistration from "./components/PatientRegistration";

function App() {
  const [pageNumber, setPageNumber] = useState(1);
  const scrollContainerRef = useRef(null);
  const handleScrollToSection = (num) => {
    setPageNumber(num);

    const section = document.getElementById(`section-${num}`);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  useEffect(() => {
    if (!scrollContainerRef.current) return;

    const sections =
      scrollContainerRef.current.querySelectorAll("[id^='section-']");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const page = parseInt(id.split("-")[1]);
            setPageNumber(page);
          }
        });
      },
      {
        root: scrollContainerRef.current,
        threshold: 0.6,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <Box sx={{ display: "flex", height: "100vh", bgcolor: "#f4f6f8" }}>
      <Box sx={{ width: "50%", borderRight: "2px solid #ddd", bgcolor: "#fff" }}>
        <PDFViewer pageNumber={pageNumber} />
      </Box>
      <Box sx={{ width: "50%", display: "flex", flexDirection: "column" }}>
  <Box
    ref={scrollContainerRef}
    sx={{
      flex: 1,
      overflowY: "auto",
      p: 3,
    }}
  >
    <div id="section-1"><ClaimFormView data={claimData} /></div>
    <div id="section-2"><BankDetailsView data={yourJsonData} /></div>
    <div id="section-3"><GovernmentIdView data={yourJsonData} /></div>
    <div id="section-4"><CityMedical data={yourJsonData} /></div>
    <div id="section-5"><Rx data={yourJsonData} /></div>
    <div id="section-6"><LabReport data={yourJsonData} /></div>
    <div id="section-7"><CashRecept data={yourJsonData} /></div>
    <div id="section-8"><PatientRegistration data={yourJsonData} /></div>
  </Box>
  <Box
    sx={{
      p: 2,
      borderTop: "1px solid #ddd",
      backgroundColor: "#fff",
      position: "sticky",
      bottom: 0,
      zIndex: 10,
      display: "flex",
      justifyContent: "center"
    }}
  >
    {[1,2,3,4,5,6,7,8].map((num) => (
      <button
        key={num}
        onClick={() => handleScrollToSection(num)}
        style={{
          marginRight: "8px",
          padding: "6px 12px",
          cursor: "pointer",
          background: pageNumber === num ? "black" : "white",
          color: pageNumber === num ? "white" : "black",
          border: "1px solid #ccc",
          fontWeight: pageNumber === num ? "bold" : "normal"
        }}
      >
        {num}
      </button>
    ))}
  </Box>

</Box>

    </Box>
  );
}

export default App;
