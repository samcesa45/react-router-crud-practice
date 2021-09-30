import React from 'react';
import classes from './layout.module.css';
import MainNavigation from './MainNavigation';
const Layout = (props) => {
	return (
		<>
			<MainNavigation />
			<main className={classes.main}>{props.children}</main>
		</>
	);
};

export default Layout;
