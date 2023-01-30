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

function FoodBlockedPage() {
  const [page, setPage] = useState(1);
  const {
    foods: { blocked },
    getBlockedFoods,
    selectedFood,
    setSelectedFood,
  } = RootStore;

  useEffect(() => {
    getBlockedFoods(page);
  }, [page]);

  useEffect(() => {
    if (blocked.rows.length > 0) {
      setSelectedFood(blocked.rows[0].toJSON());
    }
  }, [blocked.rows]);

  return (
    <DashboardLayout>
      <DashboardNavbar action="foods" />
      <SoftBox height="100%" mt={4}>
        <SoftBox display="flex">
          <SoftBox width="49%" mr="2%">
            {blocked.rows.length > 0 ? <FoodList foods={blocked.rows} type="BLOCKED" /> : null}
          </SoftBox>

          <SoftBox height={2000} width="49%">
            {selectedFood !== null && <FoodDetail />}
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

export default observer(FoodBlockedPage);
