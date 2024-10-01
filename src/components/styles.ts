import { css } from 'styled-system/css'
import { container, divider, grid, gridItem, vstack } from 'styled-system/patterns'

const commonButtonStyles = {
	cursor: 'pointer',
	rounded: '2xl',
	p: '2',
	boxShadow: {
		base: '-12px 12px 18px rgba(0, 0, 0, 0.3), inset 32px -32px 48px rgba(0, 0, 0, 0.3), inset -32px 32px 48px rgba(255, 255, 255, 0.6)',
		_hover:
			'-8px 8px 14px rgba(0, 0, 0, 0.2), inset 24px -24px 36px rgba(0, 0, 0, 0.2), inset -24px 24px 36px rgba(255, 255, 255, 0.5)',
		_active:
			'-4px 4px 8px rgba(0, 0, 0, 0.4), inset 12px -12px 18px rgba(0, 0, 0, 0.4), inset -12px 12px 18px rgba(255, 255, 255, 0.3)'
	}
}

const commonInputStyles = {
	p: '2',
	rounded: 'lg',
	borderColor: 'teal.600',
	border: '1px solid'
}

export const consoleStyles = {
	container: container({ p: '4', color: 'teal.950' }),
	tabs: css({
		display: 'flex',
		borderBottom: '2px solid',
		borderBottomColor: 'stone.200',
		gap: '4'
	}),
	tab: css({
		p: '2',
		cursor: 'pointer'
	}),
	activeTab: css({
		fontWeight: 'bold',
		bg: 'teal.600',
		color: 'white'
	}),
	buttonList: grid({
		gridTemplateColumns: '4',
		gap: '8'
	}),
	button: css({
		...commonButtonStyles,
		paddingY: 4,
		bg: 'teal.900',
		color: 'white'
	})
}

export const panelStyles = {
	container: container(),
	dragRegion: css({
		position: 'fixed',
		w: 'full',
		height: 'full',
		top: '0',
		left: '0'
	}),
	title: css({
		bg: 'orange.200/90',
		px: 4,
		roundedTop: '2xl',
		fontSize: '1.6rem',
		fontWeight: 'bold',
		textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)'
	}),
	description: css({
		fontSize: '1rem',
		bg: 'orange.200/50',
		px: 8,
		fontWeight: 'medium',
		lineHeight: '1.5',
		textAlign: 'left',
		whiteSpace: 'pre-wrap'
	})
}

export const formStyles = {
	container: vstack({ gap: 1 }),
	newTipRow: grid({
		columns: 4
	}),
	updateTipRow: grid({
		columns: 5
	}),
	titleItem: gridItem({
		...commonInputStyles,
		colSpan: 1
	}),
	descriptionItem: gridItem({
		...commonInputStyles,
		colSpan: 4
	}),
	autoHideItem: gridItem({
		...commonInputStyles,
		colSpan: 1
	}),
	durationItem: gridItem({
		...commonInputStyles,
		colSpan: 1
	}),
	addButtonItem: gridItem({
		...commonInputStyles,
		...commonButtonStyles,
		colSpan: 1,
		border: 'none',
		bg: { base: 'teal.600', _hover: 'teal.800' },
		color: 'white'
	}),
	saveButtonItem: gridItem({
		...commonInputStyles,
		...commonButtonStyles,
		colSpan: 1,
		border: 'none',
		bg: { base: 'teal.600', _hover: 'teal.800' },
		color: 'white'
	}),
	deleteButtonItem: gridItem({
		...commonInputStyles,
		...commonButtonStyles,
		colSpan: 1,
		border: 'none',
		bg: { base: 'rose.500', _hover: 'rose.800' },
		color: 'white'
	}),
	divider: divider({
		color: 'stone.300',
		m: 8
	})
}

export const settingStyles = {
	container: grid({
		gridTemplateColumns: '2',
		gap: '2',
		alignItems: 'center',
		justifyItems: 'start'
	}),
	button: css({
		...commonButtonStyles,
		bg: 'red.500',
		color: 'white',
		paddingX: '8'
	})
}
