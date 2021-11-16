import React, { FunctionComponent, ReactElement } from "react";
import { Price } from './Price';

interface Props {
  retailPrice: number;
}

const PriceTag: FunctionComponent<Props> = (props): ReactElement => <Price {...props} />;

export { PriceTag };
