import { useState, useEffect } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";// Soft UI Dashboard React base styles
import breakpoints from "assets/theme/base/breakpoints";

// Images
import burceMars from "assets/images/bruce-mars.jpg";
import curved0 from "assets/images/curved-images/curved0.jpg";
import FastfoodIcon from '@mui/icons-material/Fastfood';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import PeopleIcon from '@mui/icons-material/People';
import GroupsIcon from '@mui/icons-material/Groups';
import { RootStore } from "store/RootStore";
import PropTypes from "prop-types";

function ProfileHeader({ user }) {
    const [tabsOrientation, setTabsOrientation] = useState("horizontal");
    const [tabValue, setTabValue] = useState(0);
    const {
        setNumTabOnProfile
    } = RootStore;

    useEffect(() => {
        // A function that sets the orientation state of the tabs.
        function handleTabsOrientation() {
            return window.innerWidth < breakpoints.values.sm
                ? setTabsOrientation("vertical")
                : setTabsOrientation("horizontal");
        }

        /** 
         The event listener that's calling the handleTabsOrientation function when resizing the window.
        */
        window.addEventListener("resize", handleTabsOrientation);

        // Call the handleTabsOrientation function to set the state with the initial value.
        handleTabsOrientation();

        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleTabsOrientation);
    }, [tabsOrientation]);

    const handleSetTabValue = (event, newValue) => {
        setTabValue(newValue)
        setNumTabOnProfile(newValue)
    };

    return (
        <SoftBox position="relative">
            <SoftBox
                display="flex"
                alignItems="center"
                position="relative"
                minHeight="18.75rem"
                borderRadius="xl"
                sx={{
                    backgroundImage: ({ functions: { rgba, linearGradient }, palette: { gradients } }) =>
                        `${linearGradient(
                            rgba(gradients.info.main, 0.6),
                            rgba(gradients.info.state, 0.6)
                        )}, url(${user.profile.cover_url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "50%",
                    overflow: "hidden",
                }}
            />
            <Card
                sx={{
                    backdropFilter: `saturate(200%) blur(30px)`,
                    backgroundColor: ({ functions: { rgba }, palette: { white } }) => rgba(white.main, 0.8),
                    boxShadow: ({ boxShadows: { navbarBoxShadow } }) => navbarBoxShadow,
                    position: "relative",
                    mt: -8,
                    mx: 3,
                    py: 2,
                    px: 2,
                }}
            >
                <Grid container spacing={3} alignItems="center">
                    <Grid item>
                        <SoftAvatar
                            src={user.profile.avatar_url}
                            alt="profile-image"
                            variant="rounded"
                            size="xl"
                            shadow="sm"
                        />
                    </Grid>
                    <Grid item>
                        <SoftBox height="100%" mt={0.5} lineHeight={1}>
                            <SoftTypography variant="h5" fontWeight="medium">
                                {user.profile.name}
                            </SoftTypography>
                            <SoftTypography variant="button" color="text" fontWeight="medium">
                                {user.profile.username}
                            </SoftTypography>
                        </SoftBox>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6} sx={{ ml: "auto" }}>
                        <AppBar position="static">
                            <Tabs
                                orientation={tabsOrientation}
                                value={tabValue}
                                onChange={handleSetTabValue}
                                sx={{ background: "transparent" }}
                            >
                                <Tab label="Posts" icon={<NewspaperIcon />} />
                                <Tab label="Foods" icon={<FastfoodIcon />} />
                                <Tab label="Followers" icon={<GroupsIcon />} />
                                <Tab label="Followings" icon={<PeopleIcon />} />
                            </Tabs>
                        </AppBar>
                    </Grid>
                </Grid>
            </Card>
        </SoftBox>
    );
}

export default ProfileHeader;

ProfileHeader.propTypes = {
    user: PropTypes.object,
};
