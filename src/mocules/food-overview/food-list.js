import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import { useState } from "react";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import FoodPreview from "./food-preview";
import { observer } from "mobx-react-lite";
import Pagination from "react-custom-pagination";

function FoodList({ foods }) {

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
              name={food.name}
              user={food.author.name}
              rate={food.score}
              time={food.created_at}
            />
          ))}
        </SoftBox>
      </SoftBox>
      <SoftBox pb={5}>
        <Pagination
          totalPosts={foods.length}
          foodsPerpage={foodsPerpage}
          paginate={paginate}
          view={5}
          //showLast={true}
          //showFirst={true}
          //showIndex={true}
          selectColor={"#24A5FE"}
          bgColor={"#a3acbc"}
          indexbgColor={"#82d616"}
          indexBorderRadius={"3%"}
        />
      </SoftBox>
    </Card>
  );
}

FoodList.propTypes = {
  foods: PropTypes.array,
};

export default observer(FoodList);
