// @mui material components
import Grid from "@mui/material/Grid";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import { PostList } from "mocules";
import { PostDetail } from "mocules";

function Post() {
    return (
        <DashboardLayout>
            <DashboardNavbar action='posts' />
            <SoftBox mt={4}>
                <SoftBox my={3}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            <PostList />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <PostDetail />
                        </Grid>
                    </Grid>
                </SoftBox>
            </SoftBox>
            <Footer />
        </DashboardLayout>
    );
}

export default Post;
