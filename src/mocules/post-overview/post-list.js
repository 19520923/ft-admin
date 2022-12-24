import Card from "@mui/material/Card";
import { useState } from "react";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import PostPreview from "./post-preview";
import PropTypes from "prop-types";
import { observer } from "mobx-react-lite";
import Pagination from "react-custom-pagination";

const PostList = ({ posts }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(2);

  //get current Posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // when user clicks on number this function will execute
  const paginate = (number) => {
    setCurrentPage(number);
  };

  return (
    <Card>
      <SoftBox pt={3} px={2}>
        <SoftTypography variant="h6" fontWeight="bold">
          LIST OF POST
        </SoftTypography>
      </SoftBox>
      <SoftBox pt={1} pb={2} px={2}>
        <SoftBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          {currentPosts.map((post) => (
            <PostPreview
              key={post._id}
              detailPost={post}
              avatar={post.author.avatar_url}
              fullname={post.author.name}
              username={post.author.username}
              date={post.created_at}
              checkin={post.location.name}
              caption={post.content}
              photos={post.photos}
              noGutter
            />
          ))}
        </SoftBox>
      </SoftBox>
      <SoftBox px={25} pb={5} alignItems="center" >
        <Pagination
          totalPosts={posts.length}
          postsPerPage={postsPerPage}
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
};

PostList.propTypes = {
  posts: PropTypes.array,
};

export default observer(PostList);
