import { Avatar } from '@material-ui/core';
import React from 'react'
import ThumbsUpIcon from '@material-ui/icons/ThumbUp'
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline"
import AccoutCircleIcon from "@material-ui/icons/AccountCircle"
import NearMeIcon from "@material-ui/icons/NearMe"
import {ExpandMoreOutlined} from "@material-ui/icons"
import "./Post.css";

function Post({profilePic, image, username, timestamp, message}) {
    return (
        <div className="post">
            <div className="post__top">
                <Avatar src={profilePic} className="post__avatar"/>
                <div className="post__topInfo">
                    <h3>{username}</h3>
                    <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                </div>
            </div>
            <div className="post__bottom">
                <p>{message}</p>    
            </div>
            <div className="post__image">
                <img src={image} alt="" />
            </div>

            <div className="post__options">
                <div className="post__option">
                    <ThumbsUpIcon/>
                    <p>Like</p>
                </div>
                <div className="post__option">
                    <ChatBubbleOutlineIcon/>
                    <p>Comment</p>
                </div>
                <div className="post__option">
                    <NearMeIcon/>
                    <p>Share</p>
                </div>
                <div className="post__option">
                    <AccoutCircleIcon/>
                    <ExpandMoreOutlined/>
                </div>
            </div>
        </div>
    )
}

export default Post
