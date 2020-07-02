import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core';

import styles from './styles';

import Header from 'components/Header';
import HeaderLinks from 'components/Header/Links';
import SocialsLinks from 'components/Header/Socials';
import Parallax from 'components/Parallax';
import Grid from 'components/Grid';
import Button from 'components/Button';

const useStyles = makeStyles(styles);

const dashboardRoutes = [];

const Landing: React.SFC = props => {
	const classes = useStyles();
	return (
		<>
			<Header
				color="gray"
				routes={dashboardRoutes}
				brandComponent={
					<div className={classes.brand}>
						<img
							className={classes.brandImage}
							src={require('assets/images/titanes_logo.png')}
							alt="Titanes Rugby Club"
						/>
						<div className={classes.brandText}>
							<h1>rugby</h1>
							<h1>club</h1>
						</div>
					</div>
				}
				socialLinks={<SocialsLinks />}
				rightLinks={<HeaderLinks />}
				fixed
				changeColorOnScroll={{
					height: 400,
					color: 'white',
				}}
			/>
			<Parallax filter image={require('assets/images/landing-bg.jpeg')}>
				<div className={classes.container}>
					<Grid>
						<Grid item xs={12} sm={12} md={6}>
							<h1 className={classes.title}>Titanes Rugby Club</h1>
							<h3 className={classes.subtitle}>Hemandad, Honor y Disciplina</h3>
							<br />
							<Button
								color="danger"
								size="large"
								href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
								target="_blank"
								rel="noopener noreferrer"
							>
								<i className="fas fa-play" />
								Watch video
							</Button>
						</Grid>
					</Grid>
				</div>
			</Parallax>
		</>
	);
};

export default Landing;
