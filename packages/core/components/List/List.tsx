import styled, { StyledComponent } from '@xstyled/styled-components';
import { th } from '@xstyled/system';

import ListItem from './ListItem';
import Divider from './ListDivider';

type ListProps = {
  width?: number;
};

export type IListProps = StyledComponent<'ul', any, ListProps, never> & {
  Item: typeof ListItem;
  Divider: typeof Divider;
};

const List: IListProps = Object.assign(
  styled.ul<ListProps>`
    background-color: bg;
    padding: 5 20 6;
    border: none;

    margin: 0;
    padding: 2;
    list-style: none;

    box-shadow: inset 1px 1px 0px 1px ${th('colors.white')},
      inset 0 0 0 1px ${th('colors.grays.3')},
      1px 1px 0 1px ${th('colors.black')};

    ${({ width }) => `
  width: ${width}px;
`};
  `,
  {
    Item: ListItem,
    Divider: Divider,
  },
);

List.displayName = 'List';

List.defaultProps = {
  width: 200,
};

export default List;
