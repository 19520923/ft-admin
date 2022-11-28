// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import FoodComment from "./food-comment";

export const images = [
    "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
];

function FoodEvaluation() {
    return (
        <SoftBox px={5} >
            <FoodComment
                color="success"
                icon="arrow_upward"
                name="Dang Duy Bang"
                description="Wow! Congratulation"
                value="00:59 - 22/10/2022"
                star="8"
            />
            <FoodComment
                color="success"
                icon="arrow_upward"
                name="Nguyen Minh Thai"
                description="Look Delicous"
                value="10:59 - 20/11/2022"
                star="9"
            />
        </SoftBox>
    )
}

export default FoodEvaluation;