import Card from "@mui/material/Card";
// import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";;
import SimpleImageSlider from "react-simple-image-slider";
import SoftAvatar from "components/SoftAvatar";
import IconButton from "@mui/material/IconButton";
import PropTypes from "prop-types";
import { observer } from 'mobx-react-lite'

export const images = [
    "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
];

const FoodContent = ({ food }) => {
    const avartarDoraemon = 'https://i.pinimg.com/564x/85/9f/52/859f5219ba0b8d67f399c0db5a648694.jpg'

    return (
        <SoftBox>
            <SoftBox display="flex" justifyContent="space-between" alignItems="center" pt={3} px={2}>
                <SoftBox display="flex" alignItems="center">
                    <IconButton
                        size="small"
                        color="inherit"
                    //onClick={handleConfiguratorOpen}
                    >
                        <SoftAvatar
                            src={food.author.avatar_url}
                            alt="profile-image"
                            //variant="rounded"
                            size="m"
                            shadow="sm"
                        />
                    </IconButton>
                    <SoftTypography variant="h6" fontWeight="medium" textTransform="capitalize">
                        {food.author.name}
                    </SoftTypography>
                </SoftBox>

                <SoftBox display="flex" alignItems="flex-start">
                    <SoftBox color="text" mr={0.5} lineHeight={0}>
                        <Icon color="primary" fontSize="small">
                            star
                        </Icon>
                    </SoftBox>
                    <SoftTypography variant="button" color="text" fontWeight="regular">
                        {food.score}
                    </SoftTypography>
                </SoftBox>
            </SoftBox>

            <SoftBox pt={3} pb={2} >
                <SoftBox>
                    <SimpleImageSlider
                        width={"100%"}
                        height={350}
                        images={[food.photo]}
                        showBullets={false}
                        showNavs={false}
                        navMargin={10}
                    />
                </SoftBox>
                <SoftBox px={2}>
                    <SoftBox display="flex">
                        <SoftTypography mr={2} mt={2} variant="body1" fontWeight="medium" textTransform="capitalize">
                            {food.name}
                        </SoftTypography>
                    </SoftBox>
                    <SoftBox display="flex">
                        <SoftTypography mr={2} mt={2} variant="h5" fontWeight="medium" textTransform="capitalize">
                            Ingredients
                        </SoftTypography>
                    </SoftBox>
                    {
                        food.ingredients.map((ingredient, index) => {
                            return (
                                <SoftBox
                                    key={index}
                                    p={0}
                                    m={0}
                                    ml={6}
                                    lineHeight={0}>
                                    <SoftTypography variant="body2" color="text">
                                        - {ingredient}
                                    </SoftTypography>
                                </SoftBox>
                            )
                        })
                    }
                    <SoftBox display="flex">
                        <SoftTypography mr={2} mt={2} variant="h5" fontWeight="medium" textTransform="capitalize">
                            Process
                        </SoftTypography>
                    </SoftBox>
                    {
                        food.recipe.map((step, index) => {
                            return (
                                <SoftBox
                                    key={index}
                                    p={0}
                                    m={0}
                                    ml={6}
                                    lineHeight={0}>
                                    <SoftTypography variant="body2" color="text">
                                        {index + 1}. {step}
                                    </SoftTypography>
                                </SoftBox>
                            )
                        })
                    }
                </SoftBox>
            </SoftBox>
        </SoftBox>
    );
}

export default observer(FoodContent);

FoodContent.propTypes = {
    food: PropTypes.shape({
        _id: PropTypes.string,
        name: PropTypes.string,
        author: PropTypes.shape({
            name: PropTypes.string,
            avatar_url: PropTypes.string
        }),
        score: PropTypes.number,
        num_score: PropTypes.number,
        photo: PropTypes.string,
        ingredients: PropTypes.arrayOf(PropTypes.string),
        recipe: PropTypes.arrayOf(PropTypes.string)
    }),
};
