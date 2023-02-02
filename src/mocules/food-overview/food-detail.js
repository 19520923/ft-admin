import Card from "@mui/material/Card";
import SoftBox from "components/SoftBox";
// import Divider from "@mui/material/Divider";

import CoolTabs from "react-cool-tabs";
import FoodContent from "./food-content";
import FoodEvaluation from "./food-evaluation";
import PropTypes from "prop-types";
import { RootStore } from "store/RootStore";
import { observer } from "mobx-react-lite";

export const images = [
  "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
];

const FoodDetail = () => {
  const { selectedFood } = RootStore;
  const food = selectedFood.toJSON()

  return (
    <SoftBox sx={{ height: "100%" }}>
      <CoolTabs
        tabKey={"1"}
        style={{ width: "100%", height: "100%", background: "white" }}
        activeTabStyle={{ background: "white", color: "#00ABD8" }}
        unActiveTabStyle={{ background: "white", color: "gray" }}
        activeLeftTabBorderBottomStyle={{ background: "#00ABD8", height: 4 }}
        activeRightTabBorderBottomStyle={{ background: "#00ABD8", height: 4 }}
        tabsBorderBottomStyle={{ background: "white", height: 4 }}
        leftContentStyle={{ background: "white" }}
        rightContentStyle={{ background: "white" }}
        leftTabTitle={"Recipe"}
        rightTabTitle={"Evaluation"}
        contentTransitionStyle={'transform 0.2s ease-in'}
        borderTransitionStyle={'all 0.2s ease-in'}
        leftContent={<FoodContent food={food} />}
        rightContent={<FoodEvaluation commentList={food.rates.rows} />}
      />
    </SoftBox>
  );
}

FoodDetail.propTypes = {
  food: PropTypes.object,
};

export default observer(FoodDetail);

