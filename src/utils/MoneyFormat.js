import React from 'react';
import { NumericFormat } from 'react-number-format';

const MoneyFormat = ({ value }) => (
	<NumericFormat
		value={ value }
		displayType="text"
		prefix="$"
	/>
);

export default MoneyFormat;
