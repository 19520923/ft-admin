// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Icon from "@mui/material/Icon";
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftPagination from "components/SoftPagination";
import SoftTypography from "components/SoftTypography";
import FoodPreview from "./food-preview";
import { observer } from "mobx-react-lite";

function FoodList({ foods }) {
  return (
    <Card id="list_food">
      <SoftBox pt={3} px={2}>
        <SoftTypography variant="h6" fontWeight="medium">
          Recipes
        </SoftTypography>
      </SoftBox>
      <SoftBox pt={1} pb={2} px={2}>
        <SoftBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          {foods.map((food) => (
            <FoodPreview
              key={food._id}
              name={food.name}
              user={food.author.name}
              rate={food.score}
              time={food.created_at}
            />
          ))}
        </SoftBox>
      </SoftBox>
      <SoftBox px={18} pb={5}>
        <SoftPagination>
          <SoftPagination item>
            <Icon>keyboard_arrow_left</Icon>
          </SoftPagination>
          <SoftPagination item active>
            1
          </SoftPagination>
          <SoftPagination item>2</SoftPagination>
          <SoftPagination item>3</SoftPagination>
          <SoftPagination item>
            <Icon>keyboard_arrow_right</Icon>
          </SoftPagination>
        </SoftPagination>
      </SoftBox>
    </Card>
  );
}

FoodList.propTypes = {
  foods: PropTypes.array,
};

export default observer(FoodList);
