import { Box, Typography, Divider, Grid, Paper } from "@mui/material";

const CityMediacl = ({ data }) => {
  const patient = data?.edited_data?.patient_summary?.patient_details;
  const hospital = data?.edited_data?.patient_summary?.hospitalization_details;

  const formatDate = (date) =>
    date ? new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }) : "-";

  return (
    <Box display="flex" justifyContent="center" mt={6}>
    <Paper elevation={3} sx={{ width: 700, p: 4 }}>
      <Typography variant="h5" fontWeight="bold" align="center">
        CITY MEDICAL CENTER
      </Typography>

      <Typography align="center">
        789 Healthcare Boulevard
      </Typography>
      <Typography align="center">
        Boston, MA 02101
      </Typography>
      <Typography align="center" mb={2}>
        Tel: (555) 987-6543
      </Typography>

      <Typography variant="h6" align="center" fontWeight="bold">
        DISCHARGE SUMMARY
      </Typography>

      <Divider sx={{ my: 2 ,borderBottomWidth: 2, borderColor: "#000"}} />
      <Typography fontWeight="bold" mb={1}>
        PATIENT INFORMATION
      </Typography>

      <Grid container direction={"column"} spacing={1}>
        <Grid container  spacing={22}>
        <Grid item xs={4}><Typography>Name:</Typography></Grid>
        <Grid item xs={8}>
          <Typography>{patient?.patient_name}</Typography>
        </Grid>
        </Grid>
 <Grid container  spacing={23}>
        <Grid item xs={4}><Typography>MRN:</Typography></Grid>
        <Grid item xs={8}>
          <Typography>{'MRN-123456789'}</Typography>
        </Grid>
        </Grid>
<Grid container  spacing={16}>
        <Grid item xs={4}><Typography>Date of Birth:</Typography></Grid>
        <Grid item xs={8}>
          <Typography>
            {formatDate(patient?.patient_dob)} (Age: {patient?.patient_age})
          </Typography>
        </Grid>
        </Grid>
        <Grid container  spacing={13}>

        <Grid item xs={4}><Typography>Admission Date:</Typography></Grid>
        <Grid item xs={8}>
          <Typography>{formatDate(hospital?.doa)}</Typography>
        </Grid>
        </Grid>
         <Grid container  spacing={14}>

        <Grid item xs={4}><Typography>Discharge Date:</Typography></Grid>
        <Grid item xs={8}>
          <Typography>{formatDate(hospital?.dod)}</Typography>
        </Grid>
        </Grid>
           <Grid container  spacing={15}>

        <Grid item xs={4}><Typography>Length of Stay:</Typography></Grid>
        <Grid item xs={8}>
  <Typography>
    {hospital?.doa && hospital?.dod
      ? Math.ceil(
          (new Date(hospital.dod) - new Date(hospital.doa)) /
          (1000 * 60 * 60 * 24)
        )
      : "-"} Days
  </Typography>
</Grid>

      </Grid>
         <Grid container  spacing={10}>

        <Grid item xs={4}><Typography>Attending Physician:</Typography></Grid>
        <Grid item xs={8}>
          <Typography>{hospital?.treating_doctor_name}</Typography>
        </Grid>
      </Grid>
      </Grid>
      

    <Typography fontWeight="bold" mt={2}>
        CLINICAL SUMMARY
      </Typography>

      <Divider sx={{ mb:2,borderWidth: 2, borderColor: "#000"}} />
      <Grid container spacing={9}>
      <Typography>
        Admission Diagnosis:
</Typography>
<Typography>Community Acquired Pneumonia (CAP)</Typography>
</Grid>
      <Typography mt={4}>Hospital Course:</Typography>
      <Typography mt={2}>
  Patient admitted with fever, cough, and shortness of breath. Chest X-ray <br />
  confirmed right lower lobe pneumonia. Started on IV antibiotics (Ceftriaxone 1g daily). <br />
  Patient showed gradual improvement with resolution of fever by day 3. Oxygen <br />
  saturation improved to 96% on room air. Repeat chest X-ray showed improvement.
</Typography>
   <Typography fontWeight="bold" mt={2}>
    DISCHARGE INFORMATION
      </Typography>

      <Divider sx={{ mb:2,borderWidth: 2, borderColor: "#000"}} />
    
<Grid container spacing={10}>
      <Typography>
        Condition at Discharge: 
      </Typography>
      <Typography>Stable, Improved</Typography>
</Grid>
<Grid container spacing={10}>
      <Typography>
        Discharge Medications:
      </Typography>
      <Typography>
     Amoxicillin 500mg PO TID for 7 days<br/>
     Acetaminophen 500mg PRN for pain
        
      </Typography>
</Grid> 
<Grid container spacing={22}>
      <Typography>
        Follow-up:
      </Typography>
      <Typography>
   Outpatient clinic in 1 week
        
      </Typography>
</Grid> 
<Grid container spacing={24}>
      <Typography>
       Activity:
      </Typography>
      <Typography>
   Gradual return to normal activities
        
      </Typography>
</Grid> 
<Grid container spacing={27}>
      <Typography>
       Diet:
      </Typography>
      <Typography>
   Regular diet, increase fluid intake
        
      </Typography>
</Grid> 
<Grid container direction="column" mt={8} mb={10}>
    <Grid container spacing={1}>
    <Grid item xs={4}>
      <Typography>
       Digitally signed by: 
      </Typography>
      </Grid>
      <Grid item xs={8}>
      
      <Typography>
  {hospital?.treating_doctor_name || "-"},MD
</Typography>
</Grid>
</Grid>
<Grid container spacing={1} >
    <Grid item xs={4}>
      <Typography>
       Date: 
      </Typography>
      </Grid>
      <Grid item xs={8}>    
        <Typography>
    {formatDate(hospital?.dod) || "-"}, 4.30PM
</Typography>
</Grid>
</Grid>
</Grid>
</Paper>

    </Box>
  );
};

export default CityMediacl;
