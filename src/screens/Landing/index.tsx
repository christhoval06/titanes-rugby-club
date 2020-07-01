import React from 'react';
import classNames from 'classnames';
import { makeStyles, Button } from '@material-ui/core';

import styles from './styles';

import Header from 'components/Header';
import HeaderLinks from 'components/Header/Links';
import Parallax from 'components/Parallax';
import Grid from 'components/Grid';

const useStyles = makeStyles(styles);

const dashboardRoutes = [];

const Landing: React.SFC = props => {
	const classes = useStyles();
	return (
		<>
			<Header
				color="transparent"
				routes={dashboardRoutes}
				brand="Material Kit React"
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
								color="primary"
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
