import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Tooltip from '@material-ui/core/Tooltip';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

import Button from 'components/Button';

import styles from './styles';

const useStyles = makeStyles(styles);

const Links: React.SFC = () => {
	const classes = useStyles();
	return (
		<List className={classes.list}>
			<ListItem className={classes.listItem}>
				<Link
					to="/"
					component={props => (
						<Button {...props} component="a" color="transparent" className={classes.navLink}>
							Home
						</Button>
					)}
				/>
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
			<ListItem className={classes.listItem}>
				{/*<Tooltip title="Delete">
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>*/}
				<Tooltip
					id="instagram-twitter"
					title="Follow us on twitter"
					placement={window.innerWidth > 959 ? 'top' : 'left'}
					classes={{ tooltip: classes.tooltip }}
				>
					<Button
						href="https://twitter.com/CreativeTim?ref=creativetim"
						target="_blank"
						color="transparent"
						className={classes.navLink}
					>
						<TwitterIcon className={classes.socialIcons + ' fab fa-twitter'} />
					</Button>
				</Tooltip>
				<Tooltip
					id="instagram-facebook"
					title="Follow us on facebook"
					placement={window.innerWidth > 959 ? 'top' : 'left'}
					classes={{ tooltip: classes.tooltip }}
				>
					<Button
						color="transparent"
						href="https://www.facebook.com/CreativeTim?ref=creativetim"
						target="_blank"
						className={classes.navLink}
					>
						<FacebookIcon className={classes.socialIcons + ' fab fa-facebook'} />
					</Button>
				</Tooltip>
				<Tooltip
					id="instagram-tooltip"
					title="Follow us on instagram"
					placement={window.innerWidth > 959 ? 'top' : 'left'}
					classes={{ tooltip: classes.tooltip }}
				>
					<Button
						color="transparent"
						href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
						target="_blank"
						className={classes.navLink}
					>
						<InstagramIcon className={classes.socialIcons + ' fab fa-instagram'} />
					</Button>
				</Tooltip>
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
