// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Soft UI Dashboard React base styles
import typography from "assets/theme/base/typography";
import { ShortStatistic } from '../mocules'

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";

function DashboardPage() {
    const { size } = typography;
    const { chart, items } = reportsBarChartData;

    return (
        <DashboardLayout>
            <DashboardNavbar action='dashboard' />
            <SoftBox py={3}>
                <SoftBox mb={3}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6} xl={3}>
                            <ShortStatistic
                                title={{ text: "Number of Users" }}
                                count="500"
                                percentage={{ color: "success", text: "+15%/month" }}
                                icon={{ color: "secondary", component: "people" }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} xl={3}>
                            <ShortStatistic
                                title={{ text: "Number of Posts" }}
                                count="183"
                                percentage={{ color: "success", text: "+3%/month" }}
                                icon={{ color: "secondary", component: "post_add" }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} xl={3}>
                            <ShortStatistic
                                title={{ text: "Number of Foods" }}
                                count="200"
                                percentage={{ color: "success", text: "+2%/month" }}
                                icon={{ color: "secondary", component: "fastfood" }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} xl={3}>
                            <ShortStatistic
                                title={{ text: "Total Feedbacks" }}
                                count="100"
                                percentage={{ color: "success", text: "+5%/month" }}
                                icon={{
                                    color: "secondary",
                                    component: "shopping_cart",
                                }}
                            />
                        </Grid>
                    </Grid>
                </SoftBox>
            </SoftBox>
            <Footer />
        </DashboardLayout>
    );
}

export default DashboardPage;
