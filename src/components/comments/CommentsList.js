import React from 'react';

import CommentItem from './CommentItem';
import classes from './CommentsList.module.css';
// const comments = [
// 	{ id: 'c1', text: 'great comment' },
// 	{ id: 'c2', text: 'sure comment' },
// ];
const CommentsList = (props) => {
	return (
		<ul className={classes.comments}>
			{props.comments.map((comment) => (
				<CommentItem key={comment.id} text={comment.text} />
			))}
		</ul>
	);
};

export default CommentsList;
