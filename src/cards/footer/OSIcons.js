import React from 'react';
import WindowsIcon from '../icons/WindowsIcon';
import MacOSIcon from '../icons/MacOSIcon';
import SteamOSIcon from '../icons/SteamOSIcon';
import styles from './OSIcons.module.css';

const OSIcons = ({
	isWindowsSupported,
	isMacOSSupported,
	isSteamOSSupported,
}) => (
	<div className={ styles.osIcons }>
		{ isWindowsSupported && <WindowsIcon /> }
		{ isMacOSSupported && <MacOSIcon />	}
		{ isSteamOSSupported &&	<SteamOSIcon />	}
	</div>
);

export default OSIcons;
