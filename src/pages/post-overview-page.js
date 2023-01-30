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
import Pagination from "react-custom-pagination";
import { LIMIT } from "constants/constants";

function PostOverviewPage() {
  const [page, setPage] = useState(1);
  const {
    posts: { all },
    getPosts,
    selectedPost,
    setSelectedPost,
  } = RootStore;

  useEffect(() => {
    getPosts(page);
  }, [page]);

  useEffect(() => {
    if (all.rows.length > 0) {
      setSelectedPost(all.rows[0].toJSON());
    }
  }, [all.rows]);

  return (
    <DashboardLayout>
      <DashboardNavbar action="posts" />
      <SoftBox height="100%" mt={4}>
        <SoftBox display="flex">
          <SoftBox width="49%" mr="2%">
            {all.rows.length > 0 && <PostList posts={all.rows} type="ALL" />}
          </SoftBox>
          <SoftBox width="49%">{selectedPost && <PostDetail />}</SoftBox>
        </SoftBox>
      </SoftBox>
      <Footer />
      <SoftBox width="38%" alignItems="center" position="fixed" bottom="2rem">
        {all.rows.length > 0 && (
          <Pagination
            totalPosts={all.count}
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

export default observer(PostOverviewPage);
