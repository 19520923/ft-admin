import Grid from "@mui/material/Grid";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import { FoodList, FoodDetail } from "mocules";

function FoodOverviewPage() {
    return (
        <DashboardLayout>
            <DashboardNavbar action='foods' />
            <SoftBox mt={4}>
                <SoftBox my={3}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            <FoodList />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FoodDetail />
                        </Grid>
                    </Grid>
                </SoftBox>
            </SoftBox>
            <Footer />
        </DashboardLayout>
    );
}

export default FoodOverviewPage;