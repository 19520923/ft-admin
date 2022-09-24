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
import Grid from "@mui/material/Grid";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";

// Soft UI Dashboard React components
import MasterCard from "examples/Cards/MasterCard";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Billing page components
import PaymentMethod from "layouts/post/components/PaymentMethod";
import Invoices from "layouts/post/components/Invoices";
import BillingInformation from "layouts/post/components/BillingInformation";
import Transactions from "layouts/post/components/Transactions";

function Setting() {
    return (
        <DashboardLayout>
            <DashboardNavbar action='settings' />
            <SoftBox mt={4}>

            </SoftBox>
            <Footer />
        </DashboardLayout>
    );
}

export default Setting;
