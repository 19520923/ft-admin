import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import { useState } from "react";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import FoodPreview from "./food-preview";
import { observer } from "mobx-react-lite";
import Pagination from "react-custom-pagination";
import { RootStore } from "store/RootStore";

function FoodList({ foods, type }) {
  const {
    foods: {
      all: { getFoodById },
      blocked: { removeFoodById },
    },
  } = RootStore;
  const [currentPage, setCurrentPage] = useState(1);
  const [foodsPerpage, setFoodsPerPage] = useState(5);

  //get current Foods
  const indexOfLastFood = currentPage * foodsPerpage;
  const indexOfFirstFood = indexOfLastFood - foodsPerpage;
  const currentFoods = foods.slice(indexOfFirstFood, indexOfLastFood);

  // when user clicks on number this function will execute
  const paginate = (number) => {
    setCurrentPage(number);
  };

  const blockFood = (foodId) => {
    getFoodById(foodId).blockFood();
  };

  const unblockFood = (foodId) => {
    if (type === "BLOCKED") {
      removeFoodById(foodId);
    } else {
      getFoodById(foodId).unblockFood();
    }
  };

  return (
    <Card>
      <SoftBox pt={3} px={2}>
        <SoftTypography variant="h6" fontWeight="bold">
          LIST OF FOOD
        </SoftTypography>
      </SoftBox>
      <SoftBox pt={1} pb={2} px={2}>
        <SoftBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          {currentFoods.map((food) => (
            <FoodPreview
              key={food._id}
              detailFood={food}
              avatar_url={food.author.avatar_url}
              name={food.name}
              user={food.author.name}
              rate={food.score}
              time={food.created_at}
              photo={[food.photo]}
              is_active={food.is_active}
              blockFood={() => blockFood(food._id)}
              unblockFood={() => unblockFood(food._id)}
            />
          ))}
        </SoftBox>
      </SoftBox>
    </Card>
  );
}

FoodList.propTypes = {
  foods: PropTypes.array,
  type: PropTypes.string,
};

export default observer(FoodList);
