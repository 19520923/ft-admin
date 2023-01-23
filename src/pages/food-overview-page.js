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

function FoodOverviewPage() {
  const [page, setPage] = useState(1);
  const {
    foods: { all },
    getFoods,
    selectedFood,
    setSelectedFood
  } = RootStore;

  useEffect(() => {
    getFoods(page);
    //console.log("food all: ", all.toJSON());
  }, [page]);

  useEffect(() => {
    setSelectedFood(null)
  }, [])

  return (
    <DashboardLayout>
      <DashboardNavbar action="foods" />
      <SoftBox height='100%' mt={4}>
        <SoftBox display='flex'>
          <SoftBox width='49%' mr='2%'>
            {
              all.rows.length > 0 ?
                <FoodList foods={all.rows} /> :
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

export default observer(FoodOverviewPage);
