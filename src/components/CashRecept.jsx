import React from "react";
import { Box, Grid, Typography, Paper, Divider } from "@mui/material";

export default function CashRecept ({data}){
    const patient =
    data?.edited_data?.patient_summary?.patient_details;
    const bills = data?.edited_data?.nme_analysis?.bills;

 
    const formatDate = (date) => {
    if (!date) return "-";
    return new Date(date).toLocaleDateString("en-US", {     
        month: "long",
        day: "numeric",
        year: "numeric",
    });
};
return (
    <Box display="flex" justifyContent="center" mt={6}  >
        <Paper elevation={3} sx={{ width: 700, px: 4 , pt: 2, border: "2px solid black"   }}>
            <Typography variant="h5" fontWeight="bold" align="center">
                CASH RECEIPT
            </Typography>
            <Typography align="center">
               City Medical Center
            </Typography>
                <Typography align="center"> 
                789 Healthcare Boulevard
            </Typography>
                <Typography align="center">
                Boston, MA 02101
            </Typography>
             <Divider sx={{ mb:2,borderWidth: 1, borderColor: "#000"}} />
            <Grid container spacing={40}>
                <Grid item xs={4}>
                    <Typography fontWeight="bold">Receipt No:</Typography>   
                </Grid>
                <Grid item xs={8}>
                    <Typography>
  {data?.edited_data?.nme_analysis?.bills?.find(b => b?.bill?.invoice_number?.startsWith("RCP"))?.bill?.invoice_number}
</Typography>



                </Grid>
                </Grid>
                <Grid container spacing={46}>
                <Grid item xs={4}>
                    <Typography fontWeight="bold">Date:</Typography>
                </Grid>
                <Grid item xs={8}>
                    <Typography>
  {formatDate(bills?.[0]?.bill?.bill_date)}

                    </Typography>
                </Grid>
                </Grid>
                <Grid container spacing={45}>
                <Grid item xs={4}>
                    <Typography fontWeight="bold">Time:</Typography>       
                </Grid>
                <Grid item xs={8}>
                    <Typography>
                        {bills?.[0]?.bill?.bill_time || "10:45AM"}
                    </Typography>
                </Grid>
                </Grid>
                <Divider sx={{ my:2,borderWidth: 1, borderColor: "#000"}} />
                <Grid container spacing={36}>
                <Grid item xs={4}>
                    <Typography fontWeight="bold">Received From:</Typography>
                </Grid>
                <Grid item xs={8}>
                    <Typography>
                        {patient?.patient_name || "John Doe"}
                    </Typography>
                </Grid>
                </Grid>
                <Grid container spacing={41}>
                <Grid item xs={4}>
                    <Typography fontWeight="bold">Patient ID:</Typography> 
                </Grid>
                <Grid item xs={8}>
                    <Typography>
                       PAT-{bills?.[0]?.bill?.invoice_number?.slice(-6) || "0.00"}
                    </Typography>
                </Grid>
                </Grid>
                <Divider sx={{ my:2,borderWidth: 1, borderColor: "#000"}} />
                <Grid container spacing={50}>
                <Grid item xs={6}>
                    <Typography fontWeight="bold">Description</Typography>
                      
                    </Grid>
                    <Grid item xs={6}>
                    <Typography fontWeight="bold">Amount</Typography>
                    </Grid>
                </Grid>
                <Divider sx={{borderWidth: 2, borderColor: "#000"}} />
                <Grid container spacing={30} mt={1}>
                <Grid item xs={6}>
                    <Typography>    
                        Consultation Fee-{bills?.[0]?.bill?.consultation_fee || " Dr. Sarah Johnson"}
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                    <Typography>
                        ${bills?.[0]?.bill?.consultation_fee || "150.00"}
                    </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={30} mt={1}>
                <Grid item xs={6}>
                        <Typography>{bills?.flatMap(b => b?.items)?.find(i => i?.item_name?.includes("Laboratory Tests"))?.item_name}</Typography>

                    </Grid>     
                    <Grid item xs={6}>
                    <Typography>
                 
  ${bills?.flatMap(b => b?.items)?.find(i => i?.["s.no."] === 22)?.final_amount}
</Typography>

                    </Grid>
                </Grid>
                <Grid container spacing={39} mt={1}>
                <Grid item xs={6}>
<Typography>
  {bills?.flatMap(b => b?.items)?.find(i => i?.["s.no."] === 23)?.item_name}
</Typography>

                    </Grid>
                    <Grid item xs={6}>  
                    <Typography>
  ${bills?.flatMap(b => b?.items)?.find(i => i?.["s.no."] === 23)?.final_amount}
</Typography>   
                    </Grid>
                </Grid>
                <Grid container spacing={48} mt={1}>
                <Grid item xs={6}>
<Typography>
  {bills?.flatMap(b => b?.items)?.find(i => i?.["s.no."] === 24)?.item_name}
</Typography>       
                    </Grid>
                    <Grid item xs={6}>  
                    <Typography>
    ${bills?.flatMap(b => b?.items)?.find(i => i?.["s.no."] === 24)?.final_amount}
</Typography>
                    </Grid>
                </Grid>
                <Divider sx={{ mt:2,mb:1,borderWidth: 2, borderColor: "#000"}} />
                <Grid container spacing={50} >
                <Grid item xs={6}>
                    <Typography fontWeight="bold">Total Amount:</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography fontWeight="bold">
${bills?.flatMap(b => b?.items)?.find(i => i?.["s.no."] === 10)?.final_amount}
</Typography>   
                </Grid>
                </Grid>
                <Divider sx={{ borderWidth: 2, borderColor: "#000"}} />
                <Grid container spacing={30} mt={1}>
                <Grid item xs={6}>

                <Typography align="center" fontWeight={"bold"}  mt={2}>
                    Payment Method:
                </Typography>
                </Grid>
                <Grid item xs={6}>
                <Typography align="center" mt={2}>
                    Cash
                </Typography>
                </Grid>
                </Grid>
                <Divider sx={{ mb:4,borderWidth: 2, borderColor: "#000"}} />
                <Typography align="center" fontStyle={"italic"} fontSize={12}   >
                    Thank you for choosing City Medical Center<br/>
For any queries, please contact: billing@citymedical.com
</Typography>
<Grid container spacing={30} my={4}>
    <Grid item xs={6}>
        <Typography align="center"  fontSize={12}>
           Cashier Signature: _________________
        </Typography>
    </Grid>
    <Grid item xs={6}>
        <Typography align="center"  fontSize={12}>
           [OFFICIAL STAMP]
        </Typography>
    </Grid>
</Grid>     

            </Paper>
         </Box>

)
};