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

function Post() {
  const [page, setPage] = useState(1);
  const {
    posts: { all },
    getPosts,
  } = RootStore;
  const [selected, setSelected] = useState();

  useEffect(() => {
    getPosts(page);
  }, [page]);

  return (
    <DashboardLayout>
      <DashboardNavbar action="posts" />
      <SoftBox height='100%' mt={4}>
        <SoftBox display='flex'>
          <SoftBox width='49%' mr='2%'>
            <PostList posts={all.rows} />
          </SoftBox>
          <SoftBox height={2000} width='49%' >
            {!selected && <PostDetail post={all.rows} />}
          </SoftBox>
        </SoftBox>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Post;
