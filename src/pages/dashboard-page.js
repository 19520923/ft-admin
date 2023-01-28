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
import { ShortStatistic, TableTopUsers } from "../mocules";
import SoftTypography from "components/SoftTypography";
import API from "services/axiosClient";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import { CChart } from "@coreui/react-chartjs";
import { useEffect, useState } from "react";

function DashboardPage() {
  const { size } = typography;
  const currentYear = new Date().getFullYear();
  const { chart, items } = reportsBarChartData;
  const MONTHS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
  const [data, setData] = useState({
    total_users: 0,
    total_users_active: 0,
    total_users_deactive: 0,
    total_foods: 0,
    total_posts: 0,
    number_new_users_year: [],
    number_deactive_users_year: [],
    number_new_posts_year: [],
    number_new_foods_year: [],
    top_users: [],
  });
  const _fetchDashboard = async () => {
    const data = await API.getDashboard(currentYear);
    setData((state) => ({ ...state, ...data }));
  };

  useEffect(() => {
    _fetchDashboard();
  }, []);

  const formatYearData = (datasets) => {
    const arr = [];
    MONTHS.forEach((month) => {
      const item = _.find(datasets, (e) => Number(e._id) === Number(month));
      if (item) {
        arr.push(item.count);
      } else {
        arr.push(0);
      }
    });
    return arr;
  };

  const MiniStatisticView = () => {
    return (
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} xl={3}>
              <ShortStatistic
                title={{ text: "Number of Users" }}
                count={data.total_users}
                percentage={{ color: "success", text: "+15%/month" }}
                icon={{ color: "info", component: "people" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              <ShortStatistic
                title={{ text: "Number of Posts" }}
                count={data.total_posts}
                percentage={{ color: "success", text: "+3%/month" }}
                icon={{ color: "info", component: "post_add" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              <ShortStatistic
                title={{ text: "Number of Foods" }}
                count={data.total_foods}
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
    );
  };

  const ChartUser = () => {
    return (
      <SoftBox shadow="md" borderRadius="md" bgColor={"white"} p={5} variant="gradient">
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
              labels: MONTHS,
              datasets: [
                {
                  label: "New Users",
                  backgroundColor: "rgba(54, 162, 235, 0.2)",
                  borderColor: "rgba(54, 162, 235, 0.8)",
                  pointBackgroundColor: "#000",
                  pointBorderColor: "#fff",
                  data: formatYearData(data.number_new_users_year),
                },
                {
                  label: "Blocked Users",
                  backgroundColor: "rgba(255, 99, 132, 0.2)",
                  borderColor: "red",
                  pointBackgroundColor: "#000",
                  pointBorderColor: "#fff",
                  data: formatYearData(data.number_deactive_users_year),
                },
              ],
            }}
          />
        </SoftBox>

        <SoftBox mb={2}>
          <SoftTypography component="div" variant="button" fontWeight="bold" color="text">
            Active Users & Inactive Users
          </SoftTypography>
        </SoftBox>
        <CChart
          type="doughnut"
          customTooltips={false}
          data={{
            labels: ["Active", "Inactive"],
            datasets: [
              {
                backgroundColor: ["#8FDA99", "rgb(201, 203, 207)"],
                data: [data.total_users_active, data.total_users_deactive],
              },
            ],
          }}
        />
      </SoftBox>
    );
  };

  const ChartPostFood = () => {
    return (
      <SoftBox borderRadius="md" bgColor={"white"} p={5} variant="gradient" mb={3}>
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
            labels: MONTHS,
            datasets: [
              {
                label: "New Posts",
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                borderColor: "rgb(75, 192, 192)",
                borderWidth: 1,
                data: formatYearData(data.number_new_posts_year),
              },
              {
                label: "New Foods",
                backgroundColor: "rgba(255, 159, 64, 0.2)",
                borderColor: "rgb(255, 159, 64)",
                borderWidth: 1,
                data: formatYearData(data.number_new_foods_year),
              },
            ],
          }}
          labels="months"
        />
      </SoftBox>
    );
  };

  return (
    <DashboardLayout>
      <DashboardNavbar action="dashboard" />
      <MiniStatisticView />
      <SoftBox mb={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={5}>
            <ChartUser />
          </Grid>
          <Grid item xs={12} lg={7}>
            <ChartPostFood />
            {data.top_users.length > 0 && <TableTopUsers users={data.top_users} />}
          </Grid>
        </Grid>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default DashboardPage;
