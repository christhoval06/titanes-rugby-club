import React from 'react';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createMuiTheme } from '@material-ui/core';

import Landing from 'screens/Landing';

const history = createBrowserHistory();

const theme = createMuiTheme({
	overrides: {
		MuiCssBaseline: {
			'@global': {
				html: {
					WebkitFontSmoothing: 'auto',
				},
				body: {
					textDecoration: 'none',
					fontWeight: '700',
					fontFamily: `"Roboto", "Times New Roman", serif`,
					backgroundColor: '#f5f5f5',
				},
			},
		},
	},
});

export default function App() {
	return (
		<ThemeProvider theme={theme}>
			<Router history={history}>
				<CssBaseline />
				<Switch>
					{/* <Route path="/about" render={() => <Landing name="About" />} /> */}
					<Route path="/" component={Landing} />
				</Switch>
			</Router>
		</ThemeProvider>
	);
}
