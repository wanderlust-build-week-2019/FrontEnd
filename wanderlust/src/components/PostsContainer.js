import React from 'react';
import Post from './Post'
 
const PostsContainer = props => {
	return (
 		<div className="posts-container-wrapper">
                    <h1>DESTINATIONS</h1>

			{props.posts.map(post => (
				<Post key={post.imageUrl} place={post.place} country={post.country} price ={post.price}/>
			))}
		</div>
	);
};

export default PostsContainer;