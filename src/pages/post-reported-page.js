// @mui material components
import SoftTypography from "components/SoftTypography";
// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { PostList } from "mocules";
import { PostDetail } from "mocules";
import { useEffect, useState } from "react";
import { RootStore } from "store/RootStore";
import { observer } from "mobx-react-lite";
import Pagination from "react-custom-pagination";
import { LIMIT } from "constants/constants";

function PostReportedPage() {
  const [page, setPage] = useState(1);
  const {
    posts: { reported },
    getReportedPosts,
    selectedPost,
    setSelectedPost,
  } = RootStore;

  useEffect(() => {
    getReportedPosts(page);
  }, [page]);

  useEffect(() => {
    if (reported.rows.length > 0) {
      setSelectedPost(reported.rows[0].toJSON());
    } else {
      setSelectedPost(null);
    }
  }, [reported.rows]);

  return (
    <DashboardLayout>
      <DashboardNavbar action="posts" />
      {
        reported.rows.length > 0 ?
        <SoftBox>
          <SoftBox height="100%" mt={4}>
            <SoftBox display="flex">
              <SoftBox width="49%" mr="2%">
                {reported.rows.length > 0 && <PostList posts={reported.rows} type="REPORTED" />}
              </SoftBox>
              <SoftBox height={2000} width="49%">
                {selectedPost !== null && <PostDetail />}
              </SoftBox>
            </SoftBox>
          </SoftBox>
          <SoftBox width="38%" alignItems="center" position="fixed" bottom="2rem">
            {reported.rows.length > 0 && (
              <Pagination
                totalPosts={reported.count}
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

export default observer(PostReportedPage);
