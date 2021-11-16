import { buildQueries, Matcher, MatcherFunction, queryAllByText } from "@testing-library/react";

interface QueryParameterOptions {
  exact?: boolean;
}

const nodeContainsSearchText = ({
  searchText,
  exact,
  node
}: {
  searchText: string | RegExp;
  exact: boolean;
  node: Element | null;
}): boolean => {
  if (!node || !node.textContent) {
    return false;
  }

  const { textContent } = node;

  if (typeof searchText === 'string') {
    return exact ? textContent === searchText : textContent.includes(searchText);
  }

  if (!exact) {
    return searchText.test(textContent);
  }

  const match = searchText.exec(textContent);

  return Boolean(match && textContent === match[0]);
};

const queryAllByTextContent = (
  container: HTMLElement,
  text: string | RegExp,
  options?: QueryParameterOptions
): HTMLElement[] => {
  const { exact = false } = options ?? { };

  return queryAllByText(container, (content, node): boolean => {
    if (!node) {
      return false;
    }
    const nodeHasSearchText = nodeContainsSearchText({ searchText: text, exact, node });
    // eslint-disable-next-line unicorn/prefer-spread
    const childNodesDontHaveSearchText = Array.from(node.children).every(
      (childNode): boolean => !nodeContainsSearchText({ searchText: text, exact, node: childNode })
    );

    return nodeHasSearchText && childNodesDontHaveSearchText;
  });
};

const getMultipleError = (
  container: Element | null,
  text: string | RegExp
): string => `Found multiple elements with the text: ${text}`;
const getMissingError = (
  container: Element | null,
  text: string | RegExp
): string => `Unable to find an element with the text: ${text}`;

const [
  queryByTextContent,
  getAllByTextContent,
  getByTextContent,
  findAllByTextContent,
  findByTextContent
] = buildQueries(queryAllByTextContent, getMultipleError, getMissingError);

export {
  queryAllByTextContent,
  queryByTextContent,
  getAllByTextContent,
  getByTextContent,
  findAllByTextContent,
  findByTextContent
};

export type { QueryParameterOptions };
