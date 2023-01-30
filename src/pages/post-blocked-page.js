import SoftBox from "components/SoftBox";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import { PostList, PostDetail } from "mocules";
import { useEffect, useState } from "react";
import { RootStore } from "store/RootStore";
import { observer } from "mobx-react-lite";
import Pagination from "react-custom-pagination";
import { LIMIT } from "constants/constants";

function PostBlockedPage() {
  const [page, setPage] = useState(1);
  const {
    posts: { blocked },
    getBlockedPosts,
    selectedPost,
    setSelectedPost,
  } = RootStore;

  useEffect(() => {
    getBlockedPosts(page);
    //console.log("block post: ", blocked.rows.length);
  }, [page]);

  useEffect(() => {
    if (blocked.rows.length > 0) {
      setSelectedPost(blocked.rows[0].toJSON());
    }
  }, [blocked.rows]);

  return (
    <DashboardLayout>
      <DashboardNavbar action="posts" />
      <SoftBox height="100%" mt={4}>
        <SoftBox display="flex">
          <SoftBox width="49%" mr="2%">
            {blocked.rows.length > 0 && <PostList posts={blocked.rows} type="BLOCKED" />}
          </SoftBox>
          <SoftBox height={2000} width="49%">
            {selectedPost !== null && <PostDetail />}
          </SoftBox>
        </SoftBox>
      </SoftBox>
      <Footer />
      <SoftBox width="38%" alignItems="center" position="fixed" bottom="2rem">
        {blocked.rows.length > 0 && (
          <Pagination
            totalPosts={blocked.count}
            postsPerPage={LIMIT}
            paginate={(p) => setPage(p)}
            //showLast={true}
            //showFirst={true}
            //showIndex={true}
            selectColor={"#24A5FE"}
            bgColor={"#a3acbc"}
            indexbgColor={"#82d616"}
            indexBorderRadius={"3%"}
          />
        )}
      </SoftBox>
    </DashboardLayout>
  );
}

export default observer(PostBlockedPage);
