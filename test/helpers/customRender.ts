import {
  queries,
  render,
  RenderOptions,
  RenderResult
} from "@testing-library/react";
import * as textContentQueries from "./textContentQueries";
import { ReactElement } from "react";

const customQueries = {
  ...queries,
  ...textContentQueries
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "queries">
): RenderResult<typeof customQueries, HTMLElement> => {
  const defaultRenderResult = render(ui, {
    queries: customQueries,
    ...options
  });

  return {
    ...defaultRenderResult
  };
};

export { customRender };
