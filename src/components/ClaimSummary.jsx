import React from "react";
import {
  Box,
  Grid,
  Divider,
  Paper,
  Typography
} from "@mui/material";

export default function ClaimSummary({ data }) {

  const patient =
    data?.edited_data?.patient_summary?.patient_details;

  const hospitalization =
    data?.edited_data?.patient_summary?.hospitalization_details;

  const firstBill =
    data?.edited_data?.nme_analysis?.bills?.[0]?.bill;

  const audit =
    data?.audit_analysis;

  const formatCurrency = (amount) =>
    amount ? `$${amount}` : "-";

  return (
    <Box display="flex" justifyContent="center" mt={4}>
      <Paper elevation={3} sx={{ p: 4, width: 700 }}>

        <Typography variant="h5" align="center" fontWeight={'bold'} gutterBottom>
          MEDICAL CLAIM FORM
        </Typography>

        <Box mt={2}>
          <Typography >
            HealthCare Insurance Company
          </Typography>
<Grid container spacing={1}>
  <Grid item xs={6}>
    <Typography>
      Claim Reference:  
    </Typography>
  </Grid>
  <Grid item xs={6}>
    <Typography>
    {"CLM-2024-789456"}
    </Typography>
  </Grid>
</Grid>
<Grid container spacing={1}>
  <Grid item xs={6}>
    <Typography>
      Date Filed:  
    </Typography>
  </Grid>
  <Grid item xs={6}>
    <Typography>
    {"January 15, 2025"}
    </Typography>
  </Grid>
</Grid>
         
        </Box>

        <Box mt={2}>
          <Typography  sx={{ fontSize: "19px", fontWeight: "bold" }}>
            PATIENT INFORMATION
          </Typography>

          <Divider
          sx={{
            mb: 2,
            borderBottomWidth: 2,
            borderColor: "black"
          }}
        />
         <Grid container direction="column" spacing={2}>
  <Grid container  spacing={19}>
    <Grid item xs={6}>
      <Typography >
        Patient Name:
      </Typography>
    </Grid>
    <Grid item xs={6}>
      <Typography>
        {patient?.patient_name || "-"}
      </Typography>
    </Grid>
  </Grid>
  <Grid container  spacing={20}>
    <Grid item xs={6}>
      <Typography >
        Date of Birth:
      </Typography>
    </Grid>
    <Grid item xs={6}>
      <Typography>
        {patient?.patient_dob || "-"}
      </Typography>
    </Grid>
  </Grid>
  <Grid container  spacing={18}>
    <Grid item xs={6}>
      <Typography >
        Policy Number:
      </Typography>
    </Grid>
    <Grid item xs={6}>
      <Typography>
        {patient?.patient_policy_no || "-"}
      </Typography>
    </Grid>
  </Grid>
  <Grid container  spacing={16}>
    <Grid item xs={6}>
      <Typography >
        Contact Number:
      </Typography>
    </Grid>
    <Grid item xs={6}>
      <Typography>
        {patient?.patient_mobile || "-"}
      </Typography>
    </Grid>
  </Grid>
  <Grid container  spacing={26}>
    <Grid item xs={6}>
      <Typography >
        Email:
      </Typography>
    </Grid>
    <Grid item xs={6}>
      <Typography>
        {patient?.patient_email || "-"}
      </Typography>
    </Grid>
  </Grid>

</Grid>
        </Box>
<Box mt={4}>
  <Typography  sx={{ fontSize: "19px", fontWeight: "bold" }}>
    CLAIM DETAILS
  </Typography>

  <Divider
          sx={{
            mb: 2,
            borderBottomWidth: 2,
            borderColor: "black"
          }}
        />
  <Grid container direction="column" spacing={2}>
    <Grid item>
      <Grid container  spacing={28}>
        <Grid item xs={5}>
          <Typography >
            Type of Service:
          </Typography>
        </Grid>
        <Grid item xs={7}>
          <Typography>
            {data?.claim_type || "-"}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
    <Grid item>
      <Grid container spacing={28}>
        <Grid item xs={5}>
          <Typography >
            Date of Service:
          </Typography>
        </Grid>
        <Grid item xs={7}>
          <Typography>
            {hospitalization?.doa
             ? new Date(hospitalization.doa).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
               day: "numeric",
                })
                : "-"}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
    <Grid item>
      <Grid container spacing={28}>
        <Grid item xs={5}>
          <Typography >
            Provider Name:
          </Typography>
        </Grid>
        <Grid item xs={7}>
          <Typography>
            {hospitalization?.treating_doctor_name || "-"}, MD
          </Typography>
        </Grid>
      </Grid>
    </Grid>
    <Grid item>
      <Grid container spacing={28}>
        <Grid item xs={5}>
          <Typography >
           Hospital/Clinic:
          </Typography>
        </Grid>
        <Grid item xs={7}>
          <Typography>
            {firstBill?.facility_details?.name || "-"}
          </Typography>
        </Grid>
      </Grid>
    </Grid>

    <Grid item>
      <Grid container spacing={32}>
        <Grid item xs={5}>
          <Typography >
            Diagnosis:
          </Typography>
        </Grid>
        <Grid item xs={7}>
          <Typography>
            {hospitalization?.provisional_final_diagnosis || "-"}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
    <Grid item>
      <Grid container spacing={23}>
        <Grid item xs={5}>
          <Typography >
            Treatment Provided:
          </Typography>
        </Grid>
        <Grid item xs={7}>
          <Typography>
            {"Consultation, Chest X-Ray, Prescription"}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
    <Grid item>
      <Grid container spacing={21}>
        <Grid item xs={5}>
          <Typography >
            Total Amount Claimed:
          </Typography>
        </Grid>
        <Grid item xs={7}>
          <Typography>
            {formatCurrency(audit?.original_claimed_amount)}.00
          </Typography>
        </Grid>
      </Grid>
    </Grid>
    <Grid item>
      <Grid container spacing={24}>
        <Grid item xs={5}>
          <Typography >
            Insurance Coverage:
          </Typography>
        </Grid>
        <Grid item xs={7}>
          <Typography>
            {80}%
          </Typography>
        </Grid>
      </Grid>
    </Grid>
    <Grid item>
      <Grid container spacing={22}>
        <Grid item xs={5}>
          <Typography >
            Patient Responsibility:
          </Typography>
        </Grid>
        <Grid item xs={7}>
          <Typography>
           {'$90.00'}
          </Typography>
        </Grid>
      </Grid>
    </Grid>

  </Grid>

</Box>

        <Box mt={4}>
          <Typography  sx={{ fontSize: "17px", fontWeight: "bold" }}>
            DECLARATION
          </Typography>

          <Divider sx={{ mb: 2 }} />

          <Typography fontSize={15}>
        I hereby declare that the information provided above is true and accurate to the best of my knowledge
          </Typography>

         <Grid container mt={4} mb={20}justifyContent="space-between">
            <Grid item xs={6}>
              <Typography>
                Signature: __________________
              </Typography>
            </Grid>

            <Grid item xs={6}>
              <Typography>
                Date: __________________
              </Typography>
            </Grid>
          </Grid>

        </Box>

      </Paper>
    </Box>
  );
}
