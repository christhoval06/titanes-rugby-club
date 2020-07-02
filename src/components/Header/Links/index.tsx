import React from 'react';
import { Link as RLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import Button from 'components/Button';

import styles from './styles';

const useStyles = makeStyles(styles);

const Links: React.SFC = () => {
	const classes = useStyles();
	return (
		<List className={classes.list}>
			<ListItem className={classes.listItem}>
				<Button color="transparent" className={classes.navLink} to="/" component={RLink}>
					Inicio
				</Button>
			</ListItem>
			<ListItem className={classes.listItem}>
				<Button
					href="https://www.creative-tim.com/product/material-kit-react?ref=mkr-navbar"
					color="transparent"
					target="_blank"
					className={classes.navLink}
				>
					About
				</Button>
			</ListItem>
			<ListItem className={classes.listItem}>
				<Button
					href="https://www.creative-tim.com/product/material-kit-react?ref=mkr-navbar"
					color="transparent"
					target="_blank"
					className={classes.navLink}
				>
					Team
				</Button>
			</ListItem>
			<ListItem className={classes.listItem}>
				<Button
					href="https://www.creative-tim.com/product/material-kit-react?ref=mkr-navbar"
					color="transparent"
					target="_blank"
					className={classes.navLink}
				>
					Blog
				</Button>
			</ListItem>
			<ListItem className={classes.listItem}>
				<Button
					href="https://www.creative-tim.com/product/material-kit-react?ref=mkr-navbar"
					color="transparent"
					target="_blank"
					className={classes.navLink}
				>
					Contacto
				</Button>
			</ListItem>
		</List>
	);
};

export default Links;

/*
<ListItem className={classes.listItem}>
				<CustomDropdown
					noLiPadding
					buttonText="Components"
					buttonProps={{
						className: classes.navLink,
						color: 'transparent',
					}}
					buttonIcon={Apps}
					dropdownList={[
						<Link to="/" className={classes.dropdownLink}>
							All components
						</Link>,
						<a
							href="https://creativetimofficial.github.io/material-kit-react/#/documentation?ref=mkr-navbar"
							target="_blank"
							className={classes.dropdownLink}
						>
							Documentation
						</a>,
					]}
				/>
			</ListItem>
			*/
