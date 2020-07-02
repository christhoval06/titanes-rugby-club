import tooltip from 'styles/tooltip';

export default theme => ({
	list: {
		display: 'flex',
		flexDirection: 'row',
	},

	navLink: {
		color: 'inherit',
		position: 'relative',
		padding: '0.9375rem',
		fontWeight: '400',
		fontSize: '12px',
		textTransform: 'uppercase',
		borderRadius: '300px',
		lineHeight: '20px',
		textDecoration: 'none',
		margin: '0px',
		display: 'inline-flex',
		width: '32px',
		height: '32px',
		'&:hover,&:focus': {
			color: 'inherit',
			background: 'rgba(200, 200, 200, 0.2)',
		},
		[theme.breakpoints.down('sm')]: {
			width: 'calc(100% - 30px)',
			marginLeft: '15px',
			marginBottom: '8px',
			marginTop: '8px',
			textAlign: 'left',
			'& > span:first-child': {
				justifyContent: 'flex-start',
			},
		},
	},
	socialIcons: {
		position: 'relative',
		fontSize: '20px !important',
		marginRight: 0,
	},
	...tooltip,
});
