import PropTypes from "prop-types";

// @mui material components
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";
import ActionItem from "examples/Items/ActionItem";
import { Grid, Menu } from "@mui/material";
import { useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import IconButton from "@mui/material/IconButton";
import SoftAvatar from "components/SoftAvatar";
import { RootStore } from "store/RootStore";
import noimage from "../../assets/images/no-image.png";
import { observer } from "mobx-react-lite";

function FoodPreview({ detailFood, avatar_url, name, user, rate, time, photo }) {
    const [openMenu, setOpenMenu] = useState(false);
    const handleOpenMenu = (event) => setOpenMenu(event.currentTarget);
    const handleCloseMenu = () => setOpenMenu(false);
    const { selectedFood, setSelectedFood } = RootStore;

    const handleViewPost = () => {
        //console.log("view Food: ", detailFood.toJSON())
        setSelectedFood(detailFood.toJSON())
        //console.log("view Post in store: ", selectedFood.toJSON())
    }

    const images = [
        "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
    ];

    const renderMenu = () => (
        <Menu Menu
            anchorEl={openMenu}
            anchorReference={null}
            anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
            }}
            open={Boolean(openMenu)}
            onClose={handleCloseMenu}
            sx={{ mt: 2 }}
        >
            <ActionItem
                icon="description"
                color="View"
                title={["View"]}
                date="View detail post."
                onClick={handleViewPost}
            />
            <ActionItem
                icon="delete"
                color="error"
                title={["Block"]}
                date="Block this post from community."
                onClick={handleCloseMenu}
            />
        </Menu>
    );

    return (
        <SoftBox
            component="li"
            display="flex"
            justifyContent="space-between"
            alignItems="flex-start"
            bgColor="grey-100"
            borderRadius="lg"
            pl={2}
            pr={2}
            pt={2}
            pb={2}
            mt={2}
        >
            <SoftBox width="100%" display="flex" flexDirection="column">
                <SoftBox
                    display="flex"
                    justifyContent="space-between"
                    alignItems={{ xs: "flex-start", sm: "center" }}
                    flexDirection={{ xs: "column", sm: "row" }}
                    mb={2}
                >
                    <SoftBox >
                        <IconButton
                            size="small"
                            color="inherit"
                        //onClick={handleConfiguratorOpen}
                        >
                            <SoftAvatar
                                src={avatar_url}
                                alt="profile-image"
                                variant="rounded"
                                size="m"
                                shadow="sm"
                            />
                        </IconButton>
                        <SoftTypography ml={1} variant="button" fontWeight="medium" textTransform="capitalize">
                            {user}
                        </SoftTypography>
                    </SoftBox>


                    <SoftBox
                        display="flex"
                        alignItems="center"
                        mt={{ xs: 2, sm: 0 }}
                        ml={{ xs: -1.5, sm: 0 }}
                    >
                        <SoftBox mr={1}>
                            <SoftButton variant="text" color="secondary">
                                {/* <Icon>subtitles_off</Icon>&nbsp;hide */}
                            </SoftButton>
                        </SoftBox>
                        <SoftButton variant="text" color="dark">
                            <Icon onClick={handleOpenMenu}>more_vert</Icon>&nbsp;
                            {renderMenu()}
                        </SoftButton>
                    </SoftBox>
                </SoftBox>
                <SoftBox display='flex' p={2}>
                    <SoftBox width={250}>
                        <SoftBox mb={1} lineHeight={0}>
                            <SoftTypography variant="caption" color="text">
                                <SoftTypography variant="subtitle2" fontWeight="medium" textTransform="uppercase">
                                    {name}
                                </SoftTypography>
                            </SoftTypography>
                        </SoftBox>
                        <SoftBox mb={1} lineHeight={0}>
                            <SoftTypography variant="caption" color="text">
                                Description:&nbsp;&nbsp;&nbsp;
                                <SoftTypography variant="caption" fontWeight="medium">
                                    {user}
                                </SoftTypography>
                            </SoftTypography>
                        </SoftBox>
                        <SoftBox mb={1} lineHeight={0}>
                            <SoftTypography variant="caption" color="text">
                                Rate:&nbsp;&nbsp;&nbsp;
                                <SoftTypography variant="caption" fontWeight="medium">
                                    {rate}
                                </SoftTypography>
                            </SoftTypography>
                        </SoftBox>
                        <SoftBox mb={1} lineHeight={0}>
                            <SoftTypography variant="caption" color="text">
                                Date:&nbsp;&nbsp;&nbsp;
                                <SoftTypography variant="caption" fontWeight="medium">
                                    {time.substring(0, 10)}
                                </SoftTypography>
                            </SoftTypography>
                        </SoftBox>
                    </SoftBox>
                    <SoftBox>
                        {
                            photo !== "" ?
                                <SimpleImageSlider
                                    width={150}
                                    height={120}
                                    images={photo}
                                    showBullets={false}
                                    showNavs={false}
                                    autoPlay={true}
                                />
                                :
                                <SimpleImageSlider
                                    width={150}
                                    height={120}
                                    images={[noimage]}
                                    showBullets={false}
                                    showNavs={false}
                                    autoPlay={true}
                                />
                        }
                    </SoftBox>
                </SoftBox>
            </SoftBox>
        </SoftBox>
    );
}
// Setting default values for the props of Bill
FoodPreview.defaultProps = {
    noGutter: false,
};

// Typechecking props for the Bill
FoodPreview.propTypes = {
    detailFood: PropTypes.object,
    avatar_url: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    rate: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
};

export default observer(FoodPreview);