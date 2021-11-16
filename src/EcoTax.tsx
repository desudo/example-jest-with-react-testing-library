import React, { FunctionComponent } from 'react';

interface EcoTaxProps {
  price: number;
}

const EcoTax: FunctionComponent<EcoTaxProps> = ({ price }) => <span>{ `Contains ${price}€ economical taxes` }</span>;

export { EcoTax };