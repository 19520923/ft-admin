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

function FoodBlockedPage() {
  const [page, setPage] = useState(1);
  const {
    foods: { blocked },
    getBlockedFoods,
    selectedFood,
    setSelectedFood
  } = RootStore;

  useEffect(() => {
    getBlockedFoods(page);
  }, [page]);

  useEffect(() => {
    // console.log('block: ', blocked.toJSON());
    setSelectedFood(null)
  }, [])

  return (
    <DashboardLayout>
      <DashboardNavbar action="foods" />
      <SoftBox height='100%' mt={4}>
        <SoftBox display='flex'>
          <SoftBox width='49%' mr='2%'>
            {
              blocked.rows.length > 0 ?
                <FoodList foods={blocked.rows} type="BLOCKED" /> :
                null
            }
          </SoftBox>

          <SoftBox height={2000} width='49%'>
            {selectedFood !== null && <FoodDetail />}
          </SoftBox>
        </SoftBox>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default observer(FoodBlockedPage);
