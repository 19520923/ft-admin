import Card from "@mui/material/Card";
import { useState } from "react";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import PostPreview from "./post-preview";
import PropTypes from "prop-types";
import Pagination from "react-custom-pagination";
import { RootStore } from "store/RootStore";
import { observer } from "mobx-react-lite";

const PostList = ({ posts, type }) => {
  const {
    posts: {
      all: { getPostById },
      blocked: { removePostById },
    },
  } = RootStore;

  const blockPost = (postId) => {
    getPostById(postId).blockPost();
  };

  const unblockPost = (postId) => {
    if (type === "BLOCKED") {
      removePostById(postId);
    } else {
      getPostById(postId).unblockPost();
    }
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
          {posts.map((post) => (
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
              is_active={post.is_active}
              noGutter
              blockPost={() => blockPost(post._id)}
              unblockPost={() => unblockPost(post._id)}
            />
          ))}
        </SoftBox>
      </SoftBox>
    </Card>
  );
};

PostList.propTypes = {
  posts: PropTypes.array,
  type: PropTypes.string,
};

export default observer(PostList);
