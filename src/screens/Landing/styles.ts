import { container, title } from 'styles';

export default {
	container: {
		zIndex: '12',
		color: '#FFFFFF',
		...container,
	},
	brand: {
		display: 'flex',
		alignItems: 'center',
	},
	brandImage: {
		width: '70px',
		height: '70px',
	},
	brandText: {
		textTransform: 'uppercase',
		marginTop: '-15px',
		marginLeft: '-10px',
		'& h1': {
			margin: 0,
			'&:nth-child(2)': {
				lineHeight: 0,
			},
		},
	},
	title: {
		...title,
		display: 'inline-block',
		position: 'relative',
		margin: 0,
		marginTop: '1.75rem',
		minHeight: '32px',
		color: '#FFFFFF',
		textDecoration: 'none',
	},
	subtitle: {
		...title,
		fontSize: '1.313rem',
		maxWidth: '500px',
		color: '#bebebe',
		margin: '0 0 0.875rem',
		fontWeight: '200',
	},
	main: {
		background: '#FFFFFF',
		position: 'relative',
		zIndex: '3',
	},
	mainRaised: {
		margin: '-60px 30px 0px',
		borderRadius: '6px',
		boxShadow:
			'0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
	},
};
