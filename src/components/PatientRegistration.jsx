import React from "react";
import { Box, Grid, Typography, Paper, Divider } from "@mui/material";

export default function PatientRegistration ({data}){
   

return (
    <Box display="flex" justifyContent="center" mt={6}  > 
    <Paper elevation={3} sx={{ width: 700, px: 4 , pt: 2,   }}>
        <Typography variant="h6" fontWeight="bold" align="center" mt={2}>
            PATIENT REGISTRATION FORM
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
        <Typography mb={2} fontStyle={"italic"} fontSize={12}>Please fill out this form completely. All fields marked with * are mandatory.</Typography>
        <Typography mt={2} fontWeight={"bold"} >PERSONAL INFORMATION</Typography>
        <Divider sx={{ mb:2,borderWidth: 1, borderColor: "#000"}} />
        <Grid container spacing={2} mt={1}>    
            <Grid item xs={6}>
                <Typography fontSize={13} >* First Name: ___________________________</Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography fontSize={13} > * Last Name: ___________________________</Typography>
            </Grid>
            </Grid>
             <Grid container spacing={2} mt={1}>    
            <Grid item xs={6}>
                <Typography fontSize={13} >* Date of Birth: ____/____/______  </Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography fontSize={13} >Gender: ■ Male  ■ Female ■ Other</Typography>
            </Grid>
            </Grid>
            <Typography mt={1} fontSize={13} >* Social Security Number: _______-_____-______</Typography>
             <Grid container spacing={2} mt={1}>    
            <Grid item xs={6}>
                <Typography fontSize={13} >* Phone Number: (_____)___________ </Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography fontSize={13} > Email: ______________________________</Typography>
            </Grid>
            </Grid>
            <Typography mt={3} fontSize={13} >* Address Line 1: __________________________________________________________<br/>
* Address Line 2: _________________________________________________________</Typography>
<Grid container spacing={2} mt={1} mb={4}>
            <Grid item xs={4}>
                <Typography fontSize={13} >* City: _____________________  </Typography>
            </Grid>
            <Grid item xs={4}>
                <Typography fontSize={13} >* State: _____________________  </Typography>
            </Grid>
                <Grid item xs={4}>
                <Typography fontSize={13} >* Zip Code: _____________________  </Typography>
            </Grid>
            </Grid>
            <Typography mt={2} fontWeight={"bold"} >EMERGENCY CONTACT</Typography>
            <Divider sx={{ mb:2,borderWidth: 1, borderColor: "#000"}} />
            <Typography mt={1} fontSize={13} >* Contact Name: ______________________________________________________</Typography>
                <Grid container spacing={2} mt={1}>
            <Grid item xs={6}>
                <Typography fontSize={13} >* Relationship: _____________________  </Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography fontSize={13} >* Phone Number: (_____)___________ </Typography>
            </Grid>
            </Grid>
            <Typography mt={2} fontWeight={"bold"} >INSURANCE INFORMATION</Typography>
            <Divider sx={{ mb:2,borderWidth: 1, borderColor: "#000"}} />
            <Typography mt={1} fontSize={13} >* Insurance Provider: ______________________________________________________</Typography>
            <Grid container spacing={2} mt={1}>
            <Grid item xs={6}>
                <Typography fontSize={13} >* Policy Number: _____________________  </Typography>        
            </Grid>
            <Grid item xs={6}>
                <Typography fontSize={13} >* Group Number: _____________________  </Typography>
            </Grid>
            </Grid>
             <Grid container spacing={2} mt={1}>
            <Grid item xs={6}>
                <Typography fontSize={13} >* Policy Holder Name: _____________________  </Typography>        
            </Grid>
            <Grid item xs={6}>
                <Typography fontSize={13} >* Relationship: _____________________  </Typography>
            </Grid>
            </Grid>
            <Typography mt={2} fontWeight={"bold"} >MEDICAL HISTORY</Typography>
            <Divider sx={{ mb:2,borderWidth: 1, borderColor: "#000"}} />
            <Typography mt={1} fontSize={13} >Do you have any allergies? ■ Yes ■ No </Typography>
            <Typography mt={1} fontSize={13} >If yes, please list: ____________________________________________________________</Typography>
            <Typography mt={1} fontSize={13} >Current Medications: ___________________________________________________________</Typography>
            <Typography mt={1} fontSize={13} >____________________________________________________________________________________</Typography>
            <Typography mt={4} fontSize={16} fontWeight={"bold"} >CONSENT AND AUTHORIZATION</Typography>
            <Divider sx={{ mb:2,borderWidth: 1, borderColor: "#000"}} />
            <Typography mt={1} fontSize={13} >I hereby consent to medical treatment and authorize City Medical Center to release my medical<br/>
information as necessary for treatment, payment, and healthcare operations. I certify that the<br/>
information provided above is accurate and complete to the best of my knowledge</Typography>
            <Grid container spacing={2} mt={4} mb={8}>
                <Grid item xs={6}>
                    <Typography fontSize={14}>
                        Patient Signature: _______________________
                    </Typography>
                </Grid>
                <Grid item xs={6} >  
                    <Typography fontSize={14}>
                        Date: _______________
      
                    </Typography>
                                </Grid>
                </Grid>
        </Paper> 
       
    </Box>
);
};
