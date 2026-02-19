import { Box, List, ListItemButton, ListItemIcon, Tooltip } from "@mui/material";
import { Routes, Route, useNavigate } from "react-router-dom";
import DescriptionIcon from "@mui/icons-material/Description";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import BadgeIcon from "@mui/icons-material/Badge";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import ReceiptIcon from "@mui/icons-material/Receipt";

import ClaimSummary from "./ClaimSummary";
import BankDetailsView from "./BankDetails";
import GovernmentIdView from "./Governmentid";
import CityMedical from "./CityMedical";
import Rx from "./Rx";

import CashRecept from "./CashRecept";
import PatientRegistration from "./PatientRegistration";

export default function Layout() {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      
      {/* Sidebar */}
      <Box sx={{ width: 80, bgcolor: "#f5f5f5" }}>
        <List>
          <Tooltip title="Claim Form">
            <ListItemButton onClick={() => navigate("/")}>
              <ListItemIcon><DescriptionIcon /></ListItemIcon>
            </ListItemButton>
          </Tooltip>

          <Tooltip title="Bank Details">
            <ListItemButton onClick={() => navigate("/bank")}>
              <ListItemIcon><AccountBalanceIcon /></ListItemIcon>
            </ListItemButton>
          </Tooltip>

          <Tooltip title="Government ID">
            <ListItemButton onClick={() => navigate("/govid")}>
              <ListItemIcon><BadgeIcon /></ListItemIcon>
            </ListItemButton>
          </Tooltip>

          <Tooltip title="Medical">
            <ListItemButton onClick={() => navigate("/medical")}>
              <ListItemIcon><LocalHospitalIcon /></ListItemIcon>
            </ListItemButton>
          </Tooltip>

          <Tooltip title="Receipt">
            <ListItemButton onClick={() => navigate("/receipt")}>
              <ListItemIcon><ReceiptIcon /></ListItemIcon>
            </ListItemButton>
          </Tooltip>
        </List>
      </Box>

      {/* Page Content */}
      <Box sx={{ flexGrow: 1, p: 3, overflowY: "auto" }}>
        <Routes>
          <Route path="/" element={<ClaimSummary />} />
          <Route path="/bank" element={<BankDetailsView />} />
          <Route path="/govid" element={<GovernmentIdView />} />
          <Route path="/medical" element={<CityMedical />} />
          <Route path="/receipt" element={<CashRecept />} />
        </Routes>
      </Box>
    </Box>
  );
}
