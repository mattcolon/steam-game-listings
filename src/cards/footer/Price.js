import React from 'react';
import MoneyFormat from '../../utils/MoneyFormat';
import PercentFormat from '../../utils/PercentFormat';
import styles from './Price.module.css';

const PriceWithDiscount = ({ fullPrice, discountedPrice }) => (
	<div className={ styles.discountedPriceInformation }>
		<div className={ styles.discountPercentage }>
			<PercentFormat
				value={ 100 - (discountedPrice / fullPrice * 100) }
			/>
		</div>
		<div className={ styles.priceWithDiscount }>
			<div className={ styles.fullPrice }>
				<MoneyFormat value={ fullPrice } />
			</div>
			<div className={ styles.discountedPrice }>
				<MoneyFormat value={ discountedPrice } />
			</div>
		</div>
	</div>
);

const PriceWithoutDiscount = ({ fullPrice }) => (
	<div className={ styles.priceWithoutDiscount }>
		{
			isNaN(fullPrice)
				? fullPrice
				  ? fullPrice
					: "Free To Play"
				: <MoneyFormat value={ fullPrice } />
		}
	</div>
);

const Price = ({ fullPrice, discountedPrice }) => (
	<div className={ styles.price }>
		{
			discountedPrice
				? <PriceWithDiscount
						fullPrice={ fullPrice }
						discountedPrice={ discountedPrice }
					/>
				: <PriceWithoutDiscount
						fullPrice={ fullPrice }
					/>
		}
	</div>
);

export default Price;
