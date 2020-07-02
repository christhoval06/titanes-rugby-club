import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

import Button from 'components/Button';

import styles from './styles';

const useStyles = makeStyles(styles);

const Socials: React.SFC = () => {
	const classes = useStyles();
	return (
		<div className={classes.list}>
			<Tooltip
				id="instagram-twitter"
				title="Siguenos en twitter"
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
				title="Siguenos en facebook"
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
				title="Siguenos en instagram"
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
		</div>
	);
};

export default Socials;
