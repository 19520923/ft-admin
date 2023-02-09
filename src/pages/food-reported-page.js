// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import SoftTypography from "components/SoftTypography";
import { FoodList, FoodDetail } from "mocules";
import { RootStore } from "store/RootStore";
import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import Pagination from "react-custom-pagination";
import { LIMIT } from "constants/constants";

function FoodReportedPage() {
  const [page, setPage] = useState(1);
  const {
    foods: { reported },
    getReportedFoods,
    selectedFood,
    setSelectedFood
  } = RootStore;

  useEffect(() => {
    getReportedFoods(page);
  }, [page]);

  useEffect(() => {
    if (reported.rows.length > 0) {
      setSelectedFood(reported.rows[0].toJSON());
    } else {
      setSelectedFood(null)
    }
  }, [reported.rows]);

  return (
    <DashboardLayout>
      <DashboardNavbar action="foods" />
      {
        reported.rows.length > 0 ?
        <SoftBox>
          <SoftBox height="100%" mt={4}>
            <SoftBox display="flex">
              <SoftBox width="49%" mr="2%">
                {reported.rows.length > 0 ? <FoodList foods={reported.rows} /> : null}
              </SoftBox>

              <SoftBox height={2000} width="49%">
                {selectedFood !== null && <FoodDetail />}
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

export default observer(FoodReportedPage);
