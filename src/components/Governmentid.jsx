import React from "react";
import { Box, Grid, Typography, Paper } from "@mui/material";

export default function GovernmentIdView({ data }) {
  const patient =
    data?.edited_data?.patient_summary?.patient_details;
  const formatDate = (date) => {
    if (!date) return "-";
    return new Date(date).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).toUpperCase();
  };

  return (
    <Box display="flex" justifyContent="center" mt={6}>
      <Paper elevation={3} sx={{ width: 700, p: 4 }}>
      
        <Typography
          align="center"
          fontWeight="bold"
          fontSize={28}
          mb={8}
          mt={8}
        >
          GOVERNMENT ID CARD
        </Typography>
        <Box
          sx={{
            backgroundColor: "#d9eaf1",
            p: 3,
            borderRadius: 2,
          }}
        >
         
           <Grid container spacing={8}>
  <Grid item xs={4}>
    <Box
      sx={{
        border: "2px solid black",
        height: 220,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Typography>[PHOTO]</Typography>
    </Box>

    <Typography mt={6} fontStyle="italic">
      Signature: {patient?.patient_name || "-"}
    </Typography>
  </Grid>
  <Grid item xs={8}>
    <Typography fontWeight="bold" mb={2}>
      PERSONAL INFORMATION
    </Typography>
      <Grid container direction="column" spacing={2}></Grid>
<Grid container direction="column" spacing={1}>
    <Grid container  spacing={13}>
        <Grid item xs={5}>
            <Typography>Full Name:</Typography>
            </Grid>
            <Grid item xs={7}>
             <Typography>
  {patient?.patient_name
    ? patient.patient_name.toUpperCase()
    : "-"}
</Typography>

            </Grid>  
            </Grid>
             <Grid container  spacing={13}>
            <Grid item xs={5}>
              <Typography>ID Number:</Typography>
            </Grid>
            <Grid item xs={7}>
              <Typography>
                {"ID-987-654-321"}     
                </Typography>
                    </Grid>
             </Grid>
              <Grid container  spacing={11} >    
            <Grid item xs={5}>
                <Typography>Date of Birth:</Typography>
                    </Grid>
                    <Grid item xs={7}>
              <Typography>
                {formatDate(patient?.patient_dob)}
                </Typography>
                    </Grid>
            </Grid>
                <Grid container  spacing={16}>
            <Grid item xs={5}>
                <Typography>Gender:</Typography>
                    </Grid>
                    <Grid item xs={7}>
                <Typography>
                {"Male"}
                </Typography>
                    </Grid>
            </Grid>
                <Grid container  spacing={11}>
            <Grid item xs={5}>
                <Typography>Blood Group:</Typography>
                    </Grid>
                    <Grid item xs={7}>
                <Typography>
                {"O+"}
                </Typography>
                    </Grid>
            </Grid>
                <Grid container  spacing={15}>
            <Grid item xs={5}>
                <Typography>Address:</Typography>
                    </Grid>
                    <Grid item xs={7}>
               <Typography>
                 456 Oak Street, Apt 12B <br />
                   Springfield, IL 62704
                 </Typography>

                    </Grid>
            </Grid>
                <Grid container  spacing={13}>
            <Grid item xs={5}>
                <Typography>Issue Date:</Typography>
                    </Grid>
                    <Grid item xs={7}>
                <Typography>
                {"15-JAN-2023"}
                </Typography>
                    </Grid>
            </Grid> 
            <Grid container  spacing={13}>
            <Grid item xs={5}>
              <Typography>Expiry Date:</Typography>
            </Grid>
            <Grid item xs={7}>
              <Typography>
                {'15-JAN-2033'}
              </Typography>
            </Grid>
             </Grid>
            
           
</Grid>

  </Grid>
            </Grid>
      
          <Box
            sx={{
              border: "1px solid black",
              mt: 4,
              height: 50,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "monospace",
              letterSpacing: 3,
            }}
          >
      |||| |||| |||| |||| |||
          </Box>
        </Box>
      </Paper>
      
    </Box>
  );
}
