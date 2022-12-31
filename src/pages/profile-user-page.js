// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Footer from "examples/Footer";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import ProfilesList from "examples/Lists/ProfilesList";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";
import PlaceholderCard from "examples/Cards/PlaceholderCard";

// Overview page components
import Header from "layouts/profile/components/Header";
import PlatformSettings from "layouts/profile/components/PlatformSettings";

// Data
import profilesListData from "layouts/profile/data/profilesListData";

// Images
import homeDecor1 from "assets/images/home-decor-1.jpg";
import homeDecor2 from "assets/images/home-decor-2.jpg";
import homeDecor3 from "assets/images/home-decor-3.jpg";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import { ProfileHeader } from "mocules";
import { useState, useEffect } from "react";
import { RootStore } from "store/RootStore";
import { PostList, PostDetail, FoodDetail, FoodList } from "mocules";
import { observer } from 'mobx-react-lite'
import { useLocation } from "react-router-dom";

function ProfileUserPage() {
    const {
        numTabOnProfile
    } = RootStore;

    const location  = useLocation()
    const user = location.state

    useEffect(() => {
        console.log("user", user);
    }, [])
    /*
     handle fetch api table user's profile (include 
     posts, foods, followers, followings, profile info) 
     */


    const ProfilePosts = () => {
        const [page, setPage] = useState(1);
        const {
            posts: { all },
            getPosts,
        } = RootStore;
        const [selected, setSelected] = useState();

        useEffect(() => {
            getPosts(page);
        }, [page]);

        return (
            <SoftBox mt={5} px={3} display='flex'>
                <SoftBox width='49%' mr='2%'>
                    <PostList posts={all.rows} />
                </SoftBox>
                <SoftBox height={2000} width='49%' >
                    {!selected && <PostDetail post={all.rows[1]} />}
                </SoftBox>
            </SoftBox>
        )
    }

    const ProfileFoods = () => {
        const [page, setPage] = useState(1);
        const {
            foods: { all },
            getFoods,
        } = RootStore;

        useEffect(() => {
            getFoods(page);
        }, [page]);

        return (
            <SoftBox mt={5} px={3} display='flex'>
                <SoftBox width='49%' mr='2%'>
                    <FoodList foods={all.rows} />
                </SoftBox>
                <SoftBox height={2000} width='49%'>
                    <FoodDetail food={all.rows[0]} />
                </SoftBox>
            </SoftBox>
        )
    }

    const ProfileFollowers = () => {

    }

    const ProfileFollowings = () => {

    }

    return (
        <DashboardLayout>
            <ProfileHeader user={user} />
            <SoftBox>
                {/* Handle logic tap tabs to change components */}
                {/* When user tap Posts */}
                {
                    // numTabOnProfile === 'posts' ?
                    //     <ProfilePosts />
                    //     : numTabOnProfile === 'foods' ?
                    //         <ProfileFoods /> : <ProfilePosts />

                }

                {/* When user tap Followers */}
                <ProfileFollowers />
                {/* When user tap Followings */}
                <ProfileFollowings />
            </SoftBox>
        </DashboardLayout>
    );
}

export default observer(ProfileUserPage);
