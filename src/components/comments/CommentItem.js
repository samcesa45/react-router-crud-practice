import classes from './CommentItem.module.css';

import React from 'react';

const CommentItem = (props) => {
	return (
		<li className={classes.item}>
			<p>{props.text}</p>

			<button className="btn">delete comment</button>
		</li>
	);
};

export default CommentItem;
