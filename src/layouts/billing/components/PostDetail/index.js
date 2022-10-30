import React, { Component } from "react";
import PropTypes from "prop-types";
import "./post_detail.css";
import SoftBox from "components/SoftBox";
import FbImageLibrary from "react-fb-image-grid";


function PostDetail ({author, avatar, content, images, created_at, reactions}){
    return (
      <SoftBox>
        <SoftBox >
          <SoftBox >
            <SoftBox >
              <img src={avatar} alt="Avatar" />
            </SoftBox>
            <SoftBox >
              <SoftBox >{author}</SoftBox>
              <SoftBox >{created_at}</SoftBox>
            </SoftBox>
          </SoftBox>
          <SoftBox>{content}</SoftBox>
          <SoftBox >
            <FbImageLibrary hideOverlay={true} images={images} />
          </SoftBox>
          <SoftBox>
            <span>
              {isLiked && "You, "} {reactions[0]} & {reactions.length - 2} others
            </span>
          </SoftBox>
          <hr />
          <SoftBox >
            {isReactions && (
              <SoftBox >
                <span onClick={this.reacted} className="FacebookEmoji">
                  <img src="assests/reactions/like.png" />
                </span>
              </SoftBox>
            )}
            <span className="oneThird" onMouseEnter={this.reactions} onClick={this.liked}>
              Like
            </span>
            <span className="oneThird">Comment</span>
            <span className="oneThird">Share</span>
          </SoftBox>
        </SoftBox>
      </SoftBox>
    );
  }

  PostDetail.propTypes = {
    author: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    images: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    reactions: PropTypes.string.isRequired,
  };

export default PostDetail;
