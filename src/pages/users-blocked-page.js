/**
=========================================================
* Soft UI Dashboard React - v4.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Table from "examples/Tables/Table";

// Data
import authorsTableData from "layouts/users/data/authorsTableData";
import projectsTableData from "layouts/users/data/projectsTableData";
import { useEffect } from "react";
import { RootStore } from "store/RootStore";
import { observer } from "mobx-react-lite";

function UsersBlockedPage() {

  return (
    <DashboardLayout>
      <DashboardNavbar action="users" />
      
    </DashboardLayout>
  );
}

export default observer(UsersBlockedPage);