// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import FoodComment from "./food-comment";
import PropTypes from "prop-types";
import { observer } from "mobx-react-lite";

export const images = [
    "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
];

const FoodEvaluation = ({ commentList }) => {
    return (
        <SoftBox px={5} >
            {
                commentList && commentList.map((e, index) => {
                    return (
                        <FoodComment key={index} commentDetail={e} />
                    )
                })
            }
        </SoftBox>
    )
}

FoodEvaluation.propTypes = {
    commentList: PropTypes.any,
};

export default observer(FoodEvaluation);