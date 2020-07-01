import React from 'react';
import { makeStyles, Grid as MGrid, GridProps } from '@material-ui/core';

const styles = {
	grid: {
		marginRight: '-15px',
		marginLeft: '-15px',
		width: 'auto',
	},
	item: {
		position: 'relative',
		width: '100%',
		minHeight: '1px',
		paddingRight: '15px',
		paddingLeft: '15px',
		flexBasis: 'auto',
	},
};
const useStyles = makeStyles(styles);

interface MGridProps extends GridProps {
	item?: boolean;
}

const Grid: React.SFC<GridProps> = ({ children, item = false, className, ...props }: MGridProps) => {
	const classes = useStyles();
	return (
		<MGrid
			container={!item}
			item={item}
			{...props}
			className={[item ? classes.item : classes.grid, className].join(' ')}
		>
			{children}
		</MGrid>
	);
};
export default Grid;
