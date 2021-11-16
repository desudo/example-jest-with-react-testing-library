import React, { FunctionComponent, ReactElement } from 'react';

interface PriceProps {
  retailPrice: number;
}

const Price: FunctionComponent<PriceProps> = ({ retailPrice }) : ReactElement => {
  const [priceWithoutDecimal, decimal] = `${retailPrice}`.split('.')

  const formattedPriceWithoutDecimals = new Intl.NumberFormat('de').
    format(Number.parseInt(priceWithoutDecimal, 10));

  return <div>{ `${formattedPriceWithoutDecimals},${decimal ?  decimal.padEnd(2, '0') : '—'}` }</div>
};

export { Price };