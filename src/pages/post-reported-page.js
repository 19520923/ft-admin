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
import { observer } from "mobx-react-lite";

function PostReportedPage() {
  const [page, setPage] = useState(1);
  const {
    posts: { reported },
    getReportedPosts,
    selectedPost,
    setSelectedPost
  } = RootStore;

  useEffect(() => {
    getReportedPosts(page);
  }, [page]);

  useEffect(() => {
    setSelectedPost(null)
  }, [])

  return (
    <DashboardLayout>
      <DashboardNavbar action="posts" />
      <SoftBox height="100%" mt={4}>
        <SoftBox display="flex">
          <SoftBox width="49%" mr="2%">
            {reported.rows.length > 0 ? <PostList posts={reported.rows} type="REPORTED" /> : null}
          </SoftBox>
          <SoftBox height={2000} width="49%">
            {selectedPost !== null && <PostDetail />}
          </SoftBox>
        </SoftBox>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default observer(PostReportedPage);
