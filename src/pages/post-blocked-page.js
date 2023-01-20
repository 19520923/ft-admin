import SoftBox from "components/SoftBox";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import { PostList, PostDetail } from "mocules";
import { useEffect, useState } from "react";
import { RootStore } from "store/RootStore";
import { observer } from "mobx-react-lite";

function PostBlockedPage() {
  const [page, setPage] = useState(1);
  const {
    posts: { blocked },
    getBlockedPosts,
    selectedPost
  } = RootStore;

  useEffect(() => {
    getBlockedPosts(page);
    //console.log("block post: ", blocked.rows.length);
  }, [page, blocked]);

  return (
    <DashboardLayout>
      <DashboardNavbar action="posts" />
      <SoftBox height='100%' mt={4}>
        <SoftBox display='flex'>
          <SoftBox width='49%' mr='2%'>
            {blocked.rows.length > 0 ?
              <PostList posts={blocked.rows} type="BLOCKED"/> :
              null
            }
          </SoftBox>
          <SoftBox height={2000} width='49%' >
            {selectedPost !== null && <PostDetail />}
          </SoftBox>
        </SoftBox>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default observer(PostBlockedPage);
