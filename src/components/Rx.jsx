import React from "react";
import { Box, Grid, Typography, Paper } from "@mui/material";
import Divider from "@mui/material/Divider";

export default function Rx({data}){
    const patient =
    data?.edited_data?.patient_summary?.patient_details;

  const hospital =
    data?.edited_data?.patient_summary?.hospitalization_details;
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
          <Grid container direction="column" >
            <Grid container spacing={15}>
              <Grid item xs={4}>
                <Typography variant="h2" fontWeight="bold">
               Rx 
                  </Typography>
                  </Grid>
                  <Grid item xs={8}>
            <Grid item >
              <Typography variant="h6"  fontWeight="bold">
               {hospital?.treating_doctor_name || "-"}, MD
                </Typography>
            </Grid>
            <Grid item >
              <Typography>      
               {"Internal Medicine Specialist"}
                    </Typography>
                        </Grid>
                        <Grid item >
              <Typography>      
               {hospital?.treating_doctor_location || "City Medical Center, Suite 304"}
                    </Typography>
                        </Grid>
                        <Grid item >
              <Typography>      
               {hospital?.treating_doctor_organization || "Boston, MA 02101"}
                    </Typography>
                    </Grid>
                    <Grid item >
                      <Typography>
                         License: {hospital?.treating_doctor_registration_number} | phone: {hospital?.treating_doctor_phone || "(555) 123-4567"}
                          </Typography>
                          </Grid>
                        </Grid>                        
                        </Grid>
                       <Divider sx={{mb:2, borderWidth: 1, borderColor: "#000"}} />
                       <Typography fontSize={18} fontWeight="bold">
                        PATIENT INFORMATION
                        </Typography>
                        <Grid container spacing={40}>
                          <Grid item xs={4}>
                            <Typography>Name: {patient?.patient_name || "-"}</Typography>
                            </Grid>
                            <Grid item xs={8}>
                            <Typography>Age:{patient?.patient_age || "-"}Years</Typography>
                            </Grid>
                          </Grid>
                          <Grid container spacing={44}>
                          <Grid item xs={4}>
                            <Typography>Date: {formatDate(data?.edited_data?.nme_analysis?.bills?.[0]?.bill?.bill_date || "-")}</Typography>
                            </Grid>
                            <Grid item xs={8}>
                            <Typography>Patient ID:   PAT-{data?.edited_data?.nme_analysis?.bills?.[0]?.bill?.invoice_number?.slice(-6) || "-"}
                              </Typography>
                            </Grid>
                          </Grid>
                          <Typography fontSize={18} sx={{mt:4}} fontWeight="bold" mt={1}>
                        PRESCRIPTION 
                        </Typography>
                           <Divider sx={{ borderWidth: 1, borderColor: "#000"}} />
                           <Typography mt={2} fontWeight={'bold'}>
                            1.{data?.edited_data?.nme_analysis?.bills?.[2]?.items?.[0]?.item_name
                           ?.split(" ")
                          ?.slice(0, 2)
                           ?.join(" ") || "-"}
                            
                             </Typography>
                             <Typography ml={5}>
                              Dosage: 1 capsule three times daily<br/>
                                      Duration: 7 days<br/>
                                       Instructions: Take with food
                             </Typography>
                                <Typography mt={2} fontWeight={'bold'}>
                             
  2.{data?.edited_data?.nme_analysis?.bills?.[2]?.items?.[1]?.item_name
    ?.split(" ")
    ?.slice(0, -1)
    ?.join(" ") || "-"}
                            
                             </Typography>
                             <Typography ml={5}>
                              Dosage: 1-2 tablets every 6 hours as needed<br/>
                                      Duration: As required<br/>
                                       Instructions: Do not exceed 8 tablets in 24 hours
                             </Typography>
                               <Typography mt={2} fontWeight={'bold'}>
                                   3.{data?.edited_data?.nme_analysis?.bills?.[2]?.items?.[2]?.item_name
                                   ?.split(" ")
                                   ?.slice(0, 2)
                                   ?.join(" ") || "-"}
                             </Typography>
                             <Typography ml={5}>
                              
                            - Complete the full course of antibiotics even if feeling better<br/>
                                     - Drink plenty of fluids (8-10 glasses of water daily)<br/>
                                       - Rest adequately<br/>
                                       - Follow up if symptoms worsen or do not improve in 3 days
                             </Typography>
                              <Typography fontWeight={"bold"} mt={5}>GENERAL INSTRUCTIONS:</Typography>
                              <Typography mt={1}>- Complete the full course of antibiotics even if feeling better</Typography>
                               <Typography mt={1}>- Drink plenty of fluids (8-10 glasses of water daily)</Typography>
                                <Typography mt={1}>- Rest adequately</Typography>
                                 <Typography mt={1}>- Follow up if symptoms worsen or do not improve in 3 days</Typography>
                             <Grid container spacing={20} sx={{mt:6}}>
                              <Grid item xs={4}>
                                <Typography > Doctor's Signature: ________________________</Typography>
                                </Grid>
                                <Grid item xs={8}>
                                <Typography > Date:{formatDate(data?.edited_data?.nme_analysis?.bills?.[0]?.bill?.bill_date || "-")}</Typography>
                                </Grid>
                              </Grid>
                             
                              <Typography mt={20} fontStyle="italic" fontSize={12}>
                                This prescription is valid for 30 days from the date of issue. Not valid without doctor's signature.
                              </Typography>
                        </Grid>
                       
            </Paper>
         </Box>
    )
}