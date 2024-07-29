import React from 'react';
import OSIcons from './footer/OSIcons';
import New from './footer/New';
import Prepurchase from './footer/Prepurchase';
import Price from './footer/Price';
import styles from './GameCard.module.css';

const getSteamHeaderImageURL = id => (
	`https://shared.akamai.steamstatic.com//store_item_assets/steam/apps/${id}/header.jpg?t=1720756536`
);

const GameCard = ({
	id,
	isWindowsSupported,
	isMacOSSupported,
	isSteamOSSupported,
	canPrepurchase,
	isNew,
	fullPrice,
	discountedPrice,
}) => (
	<div className={ styles.card }>
		<div className={ styles.capsule }>
			<img src={ getSteamHeaderImageURL(id) } />
		</div>
		<div className={ styles.footer }>
			<OSIcons
				isWindowsSupported={isWindowsSupported}
				isMacOSSupported={isMacOSSupported}
				isSteamOSSupported={isSteamOSSupported}
			/>
			<div className={ styles.purchaseInformation }>
				{ canPrepurchase && <Prepurchase />}
				{ isNew && <New /> }
				<Price
					fullPrice={ fullPrice }
					discountedPrice={	discountedPrice }
				/>
			</div>
		</div>
	</div>
);

export default GameCard;