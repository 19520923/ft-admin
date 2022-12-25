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
import { ShortStatistic, TableTopUsers } from '../mocules'
import SoftTypography from "components/SoftTypography";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import { CChart } from '@coreui/react-chartjs'

function DashboardPage() {
    const { size } = typography;
    const { chart, items } = reportsBarChartData;

    const MiniStatisticView = () => {
        return (
            <SoftBox py={3}>
                <SoftBox mb={3}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6} xl={3}>
                            <ShortStatistic
                                title={{ text: "Number of Users" }}
                                count="500"
                                percentage={{ color: "success", text: "+15%/month" }}
                                icon={{ color: "info", component: "people" }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} xl={3}>
                            <ShortStatistic
                                title={{ text: "Number of Posts" }}
                                count="183"
                                percentage={{ color: "success", text: "+3%/month" }}
                                icon={{ color: "info", component: "post_add" }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} xl={3}>
                            <ShortStatistic
                                title={{ text: "Number of Foods" }}
                                count="200"
                                percentage={{ color: "success", text: "+2%/month" }}
                                icon={{ color: "info", component: "fastfood" }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} xl={3}>
                            <ShortStatistic
                                title={{ text: "Total Feedbacks" }}
                                count="100"
                                percentage={{ color: "success", text: "+5%/month" }}
                                icon={{
                                    color: "info",
                                    component: "shopping_cart",
                                }}
                            />
                        </Grid>
                    </Grid>
                </SoftBox>
            </SoftBox>
        )
    }

    const ChartUser = () => {
        return (
            <SoftBox shadow="md" borderRadius="md" bgColor={'white'} p={5} variant="gradient" >
                <SoftBox mb={2}>
                    <SoftTypography component="div" variant="button" fontWeight="bold" color="text">
                        Users Chart
                    </SoftTypography>
                    <SoftBox display="flex" alignItems="center">
                        <SoftBox fontSize={size.lg} color="success" mb={0.3} mr={0.5} lineHeight={0}>
                            <Icon className="font-bold">arrow_upward</Icon>
                        </SoftBox>
                        <SoftTypography variant="button" color="text" fontWeight="medium">
                            2% more{" "}
                            <SoftTypography variant="button" color="text" fontWeight="regular">
                                in 2022
                            </SoftTypography>
                        </SoftTypography>
                    </SoftBox>
                </SoftBox>
                <SoftBox mb={5}>
                    <CChart
                        type="line"
                        customTooltips={false}
                        data={{
                            labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
                            datasets: [
                                {
                                    label: "New Users",
                                    backgroundColor: "rgba(54, 162, 235, 0.2)",
                                    borderColor: "rgba(54, 162, 235, 0.8)",
                                    pointBackgroundColor: "#000",
                                    pointBorderColor: "#fff",
                                    data: [40, 20, 12, 39, 10, 40, 39, 80, 20, 39, 10, 40, 39, 80, 40]
                                },
                                {
                                    label: "Blocked Users",
                                    backgroundColor: "rgba(255, 99, 132, 0.2)",
                                    borderColor: "red",
                                    pointBackgroundColor: "#000",
                                    pointBorderColor: "#fff",
                                    data: [0, 5, 4, 3, 10, 0, 2, 1, 5, 3, 10, 0, 9, 0, 4]
                                },
                            ],
                        }}
                    />
                </SoftBox>

                <SoftBox mb={2}>
                    <SoftTypography component="div" variant="button" fontWeight="bold" color="text">
                        Users Online & Users Offline {'Now'}
                    </SoftTypography>
                </SoftBox>
                <CChart
                    type="doughnut"
                    customTooltips={false}
                    data={{
                        labels: ['Users Online', 'Users Offline'],
                        datasets: [
                            {
                                backgroundColor: ['#8FDA99', 'rgb(201, 203, 207)'],
                                data: [60, 40],
                            },
                        ],
                    }}
                />
            </SoftBox>
        )
    }

    const ChartPostFood = () => {
        return (
            <SoftBox borderRadius="md" bgColor={'white'} p={5} variant="gradient" mb={3} >
                <SoftBox mb={2}>
                    <SoftTypography component="div" variant="button" fontWeight="bold" color="text">
                        Post & Food Chart
                    </SoftTypography>

                    <SoftBox display="flex" alignItems="center">
                        <SoftBox fontSize={size.lg} color="success" mb={0.3} mr={0.5} lineHeight={0}>
                            <Icon className="font-bold">arrow_upward</Icon>
                        </SoftBox>
                        <SoftTypography variant="button" color="text" fontWeight="medium">
                            4% more{" "}
                            <SoftTypography variant="button" color="text" fontWeight="regular">
                                in 2022
                            </SoftTypography>
                        </SoftTypography>
                    </SoftBox>
                </SoftBox>
                <CChart
                    type="bar"
                    customTooltips={false}
                    data={{
                        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
                        datasets: [
                            {
                                label: 'New Posts',
                                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                                borderColor: 'rgb(75, 192, 192)',
                                borderWidth: 1,
                                data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 10, 30, 40, 15, 30],
                            },
                            {
                                label: 'New Foods',
                                backgroundColor: 'rgba(255, 159, 64, 0.2)',
                                borderColor: 'rgb(255, 159, 64)',
                                borderWidth: 1,
                                data: [20, 10, 15, 39, 18, 60, 39, 80, 40, 10, 32, 21, 15, 30],
                            },
                        ],
                    }}
                    labels="months"
                />
            </SoftBox>
        )
    }

    return (
        <DashboardLayout>
            <DashboardNavbar action='dashboard' />
            <MiniStatisticView />
            <SoftBox mb={3}>
                <Grid container spacing={3}>
                    <Grid item xs={12} lg={5}>
                        <ChartUser />
                    </Grid>
                    <Grid item xs={12} lg={7}>
                        <ChartPostFood />
                        <TableTopUsers />
                    </Grid>
                </Grid>
            </SoftBox>
            <Footer />
        </DashboardLayout>
    );
}

export default DashboardPage;
