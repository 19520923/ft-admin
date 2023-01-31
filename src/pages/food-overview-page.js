import Grid from "@mui/material/Grid";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import { FoodList, FoodDetail } from "mocules";
import { RootStore } from "store/RootStore";
import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import Pagination from "react-custom-pagination";
import { LIMIT } from "constants/constants";

function FoodOverviewPage() {
  const [page, setPage] = useState(1);
  const {
    foods: { all },
    getFoods,
    selectedFood,
    setSelectedFood,
  } = RootStore;

  useEffect(() => {
    getFoods(page);
    // console.log("food all: ", all.toJSON());
  }, [page]);

  useEffect(() => {
    if (all.rows.length > 0) {
      setSelectedFood(all.rows[0].toJSON());
    } else {
      setSelectedFood(null)
    }
  }, [all.rows]);

  return (
    <DashboardLayout>
      <DashboardNavbar action="foods" />
      <SoftBox mt={4}>
        <SoftBox display="flex">
          <SoftBox width="49%" mr="2%">
            {all.rows.length > 0 && <FoodList foods={all.rows} type="ALL" />}
          </SoftBox>

          <SoftBox height={2000} width="49%">
            {selectedFood !== null && <FoodDetail />}
          </SoftBox>
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

export default observer(FoodOverviewPage);
