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
import { useEffect, useState } from "react";
import { RootStore } from "store/RootStore";

function PostBlocked() {
  const [page, setPage] = useState(1);
  const {
    posts: { blocked },
    getBlockedPosts,
  } = RootStore;

  useEffect(() => {
    getBlockedPosts(page);
  }, [page]);

  return (
    <DashboardLayout>
      <DashboardNavbar action="posts" />
      <SoftBox mt={4}>
        <SoftBox my={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <PostList posts={blocked.rows} />
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

export default PostBlocked;
