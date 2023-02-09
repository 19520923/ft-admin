// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import { ProfileHeader } from "mocules";
import { useState, useEffect } from "react";
import { RootStore } from "store/RootStore";
import { PostList, PostDetail, FoodDetail, FoodList } from "mocules";
import { observer } from 'mobx-react-lite'
import { useLocation } from "react-router-dom";

function ProfileUserPage() {
    const {
        numTabOnProfile,
        setNumTabOnProfile
    } = RootStore;

    const location  = useLocation()
    const user = location.state
    
    useEffect(() => {
        setNumTabOnProfile("posts")
    },[])


    const ProfilePosts = () => {
        const {
            getPostById,
            selectedPost,
            setSelectedPost,
        } = RootStore;
        const [postList, setPostList] = useState([]);

        useEffect(() => {
            const a = getPostById(user.profile._id)
            setPostList(a)
        }, []);

        return (
            <SoftBox>
                {
                    postList.length > 0 ? 
                    <SoftBox mt={5} px={3} display='flex'> 
                        <SoftBox width='49%' mr='2%'>
                            <PostList posts={postList} />
                        </SoftBox>
                        <SoftBox width='49%' >
                            {selectedPost && <PostDetail />}
                        </SoftBox>
                    </SoftBox>
                    :
                    <SoftBox width={"100%"} pt={3} px={2}>
                        <SoftTypography variant="text" color={"text"}>
                            There are no posts yet
                        </SoftTypography>
                    </SoftBox>
                }  
            </SoftBox>
        )
    }

    const ProfileFoods = () => {
        const {
            getFoodById,
            selectedFood,
            setSelectedFood,
        } = RootStore;
        const [foodList, setFoodList] = useState([]);

        useEffect(() => {
            const a = getFoodById(user.profile._id)
            setFoodList(a)
        }, []);

        return (
            <SoftBox>
                {
                    foodList.length > 0 ? 
                    <SoftBox mt={5} px={3} display='flex'> 
                        <SoftBox width='49%' mr='2%'>
                            <FoodList foods={foodList} />
                        </SoftBox>
                        <SoftBox width='49%' >
                            {selectedFood && <FoodDetail />}
                        </SoftBox>
                    </SoftBox>
                    :
                    <SoftBox width={"100%"} pt={3} px={2}>
                        <SoftTypography variant="text" color={"text"}>
                            There are no posts yet
                        </SoftTypography>
                    </SoftBox>
                }  
            </SoftBox>
        )
    }

    const ProfileFollowers = () => {
        return (
            <SoftBox width={"100%"} pt={3} px={2}>
                <SoftTypography variant="text" color={"text"}>
                    There are no followers yet
                </SoftTypography>
            </SoftBox>
        )
    }

    const ProfileFollowings = () => {
        return (
            <SoftBox width={"100%"} pt={3} px={2}>
                <SoftTypography variant="text" color={"text"}>
                    There are no followings yet
                </SoftTypography>
            </SoftBox>
        )
        
    }

    return (
        <DashboardLayout>
            <ProfileHeader user={user} />
            <SoftBox height='100%'>
                {/* Handle logic tap tabs to change components */}
                {/* When user tap Posts */}
                {
                    numTabOnProfile === 'posts' ?
                        <ProfilePosts />
                        : numTabOnProfile === 'foods' ?
                            <ProfileFoods /> 
                            : numTabOnProfile === 'followers' ?
                                <ProfileFollowers />
                                : numTabOnProfile === 'followings' ?
                                    <ProfileFollowings /> : <ProfilePosts />

                }
            </SoftBox>
        </DashboardLayout>
    );
}

export default observer(ProfileUserPage);
