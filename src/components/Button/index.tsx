import React from 'react';
import classNames from 'classnames';
import makeStyles from '@material-ui/core/styles/makeStyles';
import MButton, { ButtonProps as MButtonProps } from '@material-ui/core/Button';

import styles from './styles';

const useStyles = makeStyles(styles);

type Color =
	| 'inherit'
	| 'default'
	| 'primary'
	| 'info'
	| 'success'
	| 'warning'
	| 'danger'
	| 'white'
	| 'facebook'
	| 'twitter'
	| 'google'
	| 'github'
	| 'transparent';

export interface ButtonProps extends MButtonProps {
	color: Color;
	simple: boolean;
	round: boolean;
	block: boolean;
	link: boolean;
	justIcon: boolean;
	children: React.ReactNode;
	className?: string;
}

const Button: React.RefForwardingComponent<React.ReactNode, ButtonProps> = React.forwardRef(
	({ color, round, children, fullWidth, disabled, simple, size, block, link, justIcon, className, ...props }, ref) => {
		const classes = useStyles();

		const btnClasses = classNames({
			[classes.button]: true,
			[classes[size]]: size,
			[classes[color]]: color,
			[classes.round]: round,
			[classes.fullWidth]: fullWidth,
			[classes.disabled]: disabled,
			[classes.simple]: simple,
			[classes.block]: block,
			[classes.link]: link,
			[classes.justIcon]: justIcon,
			[className]: className,
		});
		return (
			<MButton {...props} ref={ref} className={btnClasses}>
				{children}
			</MButton>
		);
	},
);

export default Button;
