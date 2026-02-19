import React from "react";
import { Box, Grid, Typography, Divider, Paper } from "@mui/material";

export default function BankDetailsView({ data }) {
  const patient =
    data?.edited_data?.patient_summary?.patient_details;

  const bill =
    data?.edited_data?.nme_analysis?.bills?.[0]?.bill;

  const formatDate = (date) => {
    if (!date) return "-";
    return new Date(date).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <Box display="flex" justifyContent="center" mt={4}>
      <Paper elevation={3} sx={{ width: 700, p: 4 }}>
        <Typography align="center" fontWeight="bold" fontSize={20}>
          GLOBAL TRUST BANK
        </Typography>

        <Typography align="center" fontSize={14}>
          123 Financial District
        </Typography>

        <Typography align="center" fontSize={14} mb={6}>
          New York, NY 10004
        </Typography>
        <Box border="4px solid #606ff7" p={2} mb={3}>

          <Typography fontWeight="bold" mb={1}>
            CHEQUE DETAILS
          </Typography>

          
             <Grid container direction="column" spacing={2}>
      <Grid container  spacing={18}>
             <Grid item xs={6}>
              <Typography>Cheque Number:</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>
                {'CH-456789123'}
              </Typography>
            </Grid>
            </Grid>
              <Grid container  spacing={17}>
            <Grid item xs={6}>
              <Typography>Account Number:</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>
                   {patient?.patient_bank_account_no
                       ? `XXXX-XXXX-${patient.patient_bank_account_no.slice(-4)}`
                    : "-"}
                 </Typography>
            </Grid>
            </Grid>
             <Grid container  spacing={22}>

            <Grid item xs={6}>
              <Typography>Date Issued:</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>
                {formatDate(bill?.bill_date)}
              </Typography>
            </Grid>
            </Grid>
             <Grid container  spacing={27}>

            <Grid item xs={6}>
              <Typography>Payee:</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>
                {patient?.patient_name || "-"}
              </Typography>
            </Grid>
            </Grid>
             <Grid container  spacing={26}>

            <Grid item xs={6}>
              <Typography>Amount:</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>
                ${"1,500.00"}
              </Typography>
            </Grid>
             </Grid>
          </Grid>

        </Box>
        <Typography fontWeight="bold" mb={1}>
          BANK ACCOUNT DETAILS
        </Typography>

        <Divider sx={{ mb: 2, borderColor: "#606ff7", borderBottomWidth: 4, }} />

        <Grid container direction="column" spacing={2}>
       <Grid container  spacing={20}>
          <Grid item xs={6}>
            <Typography>Account Holder Name:</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>
              {patient?.patient_name || "-"}
            </Typography>
          </Grid>
          </Grid>
            <Grid container  spacing={28}>

          <Grid item xs={6}>
            <Typography>Account Type:</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>
              {patient?.patient_bank_account_type || "-"}
            </Typography>
          </Grid>
            </Grid>
            <Grid container  spacing={30}>

          <Grid item xs={6}>
            <Typography>Bank Name:</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>
              {patient?.patient_bank_name || "-"}
            </Typography>
          </Grid>
          </Grid>
            <Grid container  spacing={34}>

          <Grid item xs={6}>
            <Typography>Branch:</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>
              {patient?.patient_bank_branch_name || "-"}
            </Typography>
          </Grid>
          </Grid>
             <Grid container  spacing={21}>

          <Grid item xs={6}>
            <Typography>IFSC/Routing Number:</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>
              {patient?.patient_bank_ifsc_code || "-"}
            </Typography>
          </Grid>
          </Grid>
             <Grid container  spacing={25}>

          <Grid item xs={6}>
            <Typography>Account Number:</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>
              {patient?.patient_bank_account_no || "-"}
            </Typography>
          </Grid>
          </Grid>
             <Grid container  spacing={26} mb={30}>

          <Grid item xs={6}>
            <Typography>Account Status:</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography color="green" fontWeight="bold">
              Active
            </Typography>
          </Grid>
          </Grid>
          <Typography fontStyle={"italic"} ml={3} fontSize={11}>This is a computer-generated document. For verification, contact Global Trust Bank at 1-800-BANK-GTB</Typography>

        </Grid>

      </Paper>
    </Box>
  );
}
