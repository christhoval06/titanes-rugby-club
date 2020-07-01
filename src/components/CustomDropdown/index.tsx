import React, { useState, useRef } from 'react';
import classNames from 'classnames';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Paper from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';
import Divider from '@material-ui/core/Divider';
import Icon from '@material-ui/core/Icon';
import Popper from '@material-ui/core/Popper';

import Button, { ButtonProps } from 'components/Button';

import styles from './styles';

type Color = 'black' | 'primary' | 'info' | 'success' | 'warning' | 'danger' | 'rose';

interface CustomDropdownProps extends WithStyles<typeof styles, true> {
	hoverColor: Color;
	buttonText: React.ReactNode;
	buttonIcon: React.ReactNode | React.FC | string;
	dropdownList: Array<React.ReactNode>;
	buttonProps: ButtonProps;
	dropup: boolean;
	dropdownHeader: React.ReactNode;
	rtlActive: boolean;
	caret: boolean;
	left: boolean;
	noLiPadding: boolean;
	onClick: () => void;
}

const CustomDropdown: React.SFC<CustomDropdownProps> = ({
	onClick,
	classes,
	buttonText,
	buttonIcon,
	dropdownList,
	buttonProps,
	dropup,
	dropdownHeader,
	caret = true,
	hoverColor = 'primary',
	left,
	rtlActive,
	noLiPadding,
}) => {
	const [open, setOpen] = useState<boolean>(false);
	const anchorEl: React.Ref<typeof Button> = useRef<typeof Button>(null);

	const handleClick = () => {
		setOpen(prev => !prev);
	};

	const handleClose = param => {
		setOpen(false);

		onClick && onClick(param);
	};

	const handleCloseAway = event => {
		if (anchorEl.current.contains(event.target)) {
			return;
		}
		setOpen(false);
	};

	const caretClasses = classNames({
		[classes.caret]: true,
		[classes.caretActive]: open,
		[classes.caretRTL]: rtlActive,
	});
	const dropdownItem = classNames({
		[classes.dropdownItem]: true,
		[classes[hoverColor + 'Hover']]: true,
		[classes.noLiPadding]: noLiPadding,
		[classes.dropdownItemRTL]: rtlActive,
	});
	let icon = null;
	switch (typeof buttonIcon) {
		case 'function':
			icon = <buttonIcon className={classes.buttonIcon} />;
			break;
		case 'object':
			if (buttonIcon.type.muiName === 'Icon') {
				icon = buttonIcon;
			}
			break;
		case 'string':
			icon = <Icon className={classes.buttonIcon}>{buttonIcon}</Icon>;
			break;
		default:
			icon = null;
			break;
	}
	return (
		<div>
			<div>
				<Button
					aria-label="Notifications"
					aria-owns={open ? 'menu-list' : null}
					aria-haspopup="true"
					{...buttonProps}
					ref={anchorEl}
					onClick={handleClick}
				>
					{icon}
					{buttonText !== undefined ? buttonText : null}
					{caret ? <b className={caretClasses} /> : null}
				</Button>
			</div>
			<Popper
				open={open}
				anchorEl={anchorEl.current}
				transition
				disablePortal
				placement={dropup ? (left ? 'top-start' : 'top') : left ? 'bottom-start' : 'bottom'}
				className={classNames({
					[classes.popperClose]: !open,
					[classes.popperResponsive]: true,
				})}
			>
				{({ TransitionProps, placement }) => (
					<Grow in={open} style={dropup ? { transformOrigin: '0 100% 0' } : { transformOrigin: '0 0 0' }}>
						<Paper className={classes.dropdown}>
							<ClickAwayListener onClickAway={handleCloseAway}>
								<MenuList role="menu" className={classes.menuList}>
									{dropdownHeader !== undefined ? (
										<MenuItem className={classes.dropdownHeader} onClick={() => handleClose(dropdownHeader)}>
											{dropdownHeader}
										</MenuItem>
									) : null}
									{dropdownList.map((prop, key) => {
										if (prop.divider) {
											return (
												<Divider
													key={key}
													onClick={() => handleClose('divider')}
													className={classes.dropdownDividerItem}
												/>
											);
										}
										return (
											<MenuItem key={key} onClick={() => handleClose(prop)} className={dropdownItem}>
												{prop}
											</MenuItem>
										);
									})}
								</MenuList>
							</ClickAwayListener>
						</Paper>
					</Grow>
				)}
			</Popper>
		</div>
	);
};

export default withStyles(styles)(CustomDropdown);
