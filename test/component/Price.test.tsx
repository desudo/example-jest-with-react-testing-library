import { PriceTag } from "../../src/PriceTag";
import { customRender } from "../helpers/customRender";
import React from 'react';
import { EcoTax } from '../../src/EcoTax';

describe("Headline", (): void => {
  test("renders the price in a language specific format.", async (): Promise<void> => {
    const { getByTextContent } = customRender(
      <PriceTag retailPrice={ 3_099.99 } />
    );

    getByTextContent('3.099,99');
  });

  test("renders the eco tax with given percentage.", async (): Promise<void> => {
    const { getByTextContent } = customRender(
      <EcoTax price={ 0.24 } />
    );

    getByTextContent('Contains 0.24€ economical taxes', { exact: true });
  });
});
