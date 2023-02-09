import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
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
    } else {
      setSelectedPost(null);
    }
  }, [blocked.rows]);

  return (
    <DashboardLayout>
      <DashboardNavbar action="posts" />
      {
        blocked.rows.length > 0 ?
        <SoftBox>
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
        </SoftBox>
        :
        <SoftBox width={"100%"} pt={3} px={2}>
          <SoftTypography variant="text" color={"text"}>
            No valid data
          </SoftTypography>
        </SoftBox>
      }
    </DashboardLayout>
  );
}

export default observer(PostBlockedPage);
