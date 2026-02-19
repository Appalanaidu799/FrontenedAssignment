import React from "react";
import { Box, Grid, Typography, Paper, Divider } from "@mui/material";

import { useState } from "react";

export default function LabReport ({data}){
    const patient =
    data?.edited_data?.patient_summary?.patient_details;
  const hospital =
    data?.edited_data?.patient_summary?.hospitalization_details;
     const [cbcData] = useState([
    { test: "Hemoglobin", result: "14.2", unit: "g/dL", range: "13.0 - 17.0" },
    { test: "RBC Count", result: "4.8", unit: "million/µL", range: "4.5 - 5.5" },
    { test: "WBC Count", result: "7.5", unit: "thousand/µL", range: "4.0 - 11.0" },
    { test: "Platelet Count", result: "250", unit: "thousand/µL", range: "150 - 400" },
    { test: "Hematocrit", result: "42.5", unit: "%", range: "40 - 50" },
    { test: "MCV", result: "88", unit: "fL", range: "80 - 100" },
    { test: "MCH", result: "29.6", unit: "pg", range: "27 - 33" },
    { test: "MCHC", result: "33.4", unit: "g/dL", range: "32 - 36" },
  ]);
  const differentialData = [
    { test: "Neutrophils", result: "60%", unit: "%", range: "40 - 70%" },
    { test: "Lymphocytes", result: "30%", unit: "%", range: "20 - 40%" },
    { test: "Monocytes", result: "5%", unit: "%", range: "2 - 8%" },
    { test: "Eosinophils", result: "3%", unit: "%", range: "1 - 4%" },
    { test: "Basophils", result: "2%", unit: "%", range: "0.5 - 1%" },
  ];

    const formatDate = (date) => {
    if (!date) return "-";
    return new Date(date).toLocaleDateString("en-US", {
        month: "long",  
        day: "numeric",
        year: "numeric",
    });
};
return (
    <Box display="flex" justifyContent="center" mt={6}>
    <Paper elevation={3} sx={{ width: 700, p: 4 }}>
        <Typography variant="h5" fontWeight="bold" align="center">
           PATHOLOGY LABORATORY
        </Typography>
        <Typography align="center">
            Advanced Diagnostics Center
        </Typography>
         <Typography align="center">
           456 Laboratory Lane
        </Typography>
         <Typography align="center">
            Boston, MA 02102
        </Typography>
         <Typography align="center">
            NABL Accredited | ISO 9001:2015
        </Typography>
        <Typography align="center" mt={4} fontWeight={'bold' } variant="h6">
           LABORATORY REPORT </Typography>
           <Divider sx={{mb:2, borderWidth: 1, borderColor: "#000"}} />
           <Grid container spacing={20}>
           <Grid container spacing ={2}>
            <Grid item xs={6}>
                <Typography >Patient Name:</Typography>
               
            </Grid>
            <Grid item xs={6}>
               <Typography>{patient?.patient_name || "-"}</Typography>
            </Grid>
            </Grid>
            <Grid container spacing ={2}>
            <Grid item xs={6}>
                <Typography >Report ID:</Typography>
               
            </Grid>
            <Grid item xs={6}>
               <Typography>{patient?.report_id || " LAB-2025-001234"}</Typography>
            </Grid>
            </Grid>
            </Grid>
            <Grid container spacing={26} mt={1}>
           <Grid container spacing ={2}>
            <Grid item xs={6}>
                <Typography >Age/Gender:</Typography>
               
            </Grid>
            <Grid item xs={6}>
               <Typography>{patient?.patient_age|| "-"}Years / {patient?.gender || "Male"}</Typography>
            </Grid>
            </Grid>
            <Grid container spacing ={2}>
            <Grid item xs={6}>
                <Typography >Collection Date:</Typography>
               
            </Grid>
            <Grid item xs={6}>
               <Typography>{formatDate(patient?.collection_date || " Jan 30, 2025")}</Typography>
            </Grid>
            </Grid>
            </Grid>
            <Grid container spacing={28} mt={1}>
           <Grid container spacing ={2}>
            <Grid item xs={6}>
                <Typography >Ref. by:</Typography>
               
            </Grid>
            <Grid item xs={6}>
               <Typography>{hospital?.treating_doctor_name || "-"}</Typography>
            </Grid>
            </Grid>
            <Grid container spacing ={2}>
            <Grid item xs={6}>
                <Typography >Report Date::</Typography>
               
            </Grid>
            <Grid item xs={6}>
               <Typography>{formatDate(patient?.report_date || " Jan 31, 2025")}</Typography>
            </Grid>
            </Grid>
            </Grid>
            <Grid container spacing={31} mt={1}>
           <Grid container spacing ={2}>
            <Grid item xs={6}>
                <Typography >Patient ID:</Typography>
               
            </Grid>
            <Grid item xs={6}>
               <Typography>PAT-{
    data?.edited_data?.nme_analysis?.bills?.[0]?.bill?.invoice_number
      ?.split("-")
      ?.pop() || "-"
  }</Typography>
            </Grid>
            </Grid>
            <Grid container spacing ={2}>
            <Grid item xs={6}>
                <Typography > Sample Type:</Typography>
               
            </Grid>
            <Grid item xs={6}>
               <Typography>{patient?.sample_type || "Blood - Serum"}</Typography>
            </Grid>
            </Grid>
            </Grid>
        <Box  maxWidth="900px">
      <Typography
        variant="h5"
        fontWeight="bold"
        sx={{ borderBottom: "2px solid black", pb: 1, mb: 3 , mt:5}}
      >
         {data?.edited_data?.nme_analysis?.bills?.[0]?.items?.[6]?.item_name || "-"}
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1.5fr",
          borderBottom: "2px solid black",
    
          fontWeight: "bold",
        }}
      >
        <span>TEST</span>
        <span>RESULT</span>
        <span>UNIT</span>
        <span>REFERENCE RANGE</span>
      </Box>
      {cbcData.map((row, index) => (
        <Box
          key={index}
          sx={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1.5fr",
            py: 1.5,
          }}
        >
              <span>{row.test}</span>

          <span>{row.result}</span>
          <span>{row.unit}</span>
          <span>{row.range}</span>
        </Box>
      ))}
      
    </Box>
    <Typography variant="h6" fontWeight="bold" mt={4} mb={1}>
        DIFFERENTIAL COUNT
      </Typography>
      <Divider sx={{mb:2, borderWidth: 1, borderColor: "#000"}} />
       {differentialData.map((row, index) => (
        <Box
          key={index}
          sx={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1.5fr",
            py: 1.5,
          }}
        >
              <span>{row.test}</span>

          <span>{row.result}</span>
          <span>{row.unit}</span>
          <span>{row.range}</span>
        </Box>
      ))}

<Typography mt={4} fontWeight="bold">
    COMMENTS:
      </Typography>
      <Typography mt={1} >
        {patient?.lab_comments || "All parameters are within normal limits."}
      </Typography>
      <Grid container spacing={25} mt={4}>
        <Grid item xs={6}>
          <Typography >Pathologist:{patient?.specialisty_name || " Dr. Robert Chen, MD"}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography >Lab Technician:{patient?.lab_technician_name || "Dr. Michael Lee"}</Typography>
        </Grid>
      </Grid>
      <Typography mt={15} mb={4} fontSize={12} fontStyle="italic">
      *** End of Report *** | This is a computer-generated report. Results are verified by qualified personnel.
      </Typography>
        </Paper>
        </Box>)
};