import React from 'react';
import { NumericFormat } from 'react-number-format';

const PercentFormat = ({ value }) => (
	<NumericFormat
		value={ value }
		displayType="text"
		decimalScale={ 0 }
		prefix="-"
		suffix="%"
	/>
);

export default PercentFormat;
