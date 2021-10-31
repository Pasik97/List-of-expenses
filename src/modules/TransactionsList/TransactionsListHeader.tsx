import React from 'react';
import * as P from './parts';
import { SortDirection, TransactionListHeaderProps, SortType } from './constants';
import { observer } from 'mobx-react';

const TransactionsListHeader: React.FC<TransactionListHeaderProps> = observer(({
   currentSortType,
   currentSortDirection,
   onSortChange,
}) => {
   const isDescDirection = currentSortDirection === SortDirection.Desc;

   return (
      <P.Row>
         <P.HeaderCell
            onClick={() => onSortChange(SortType.Title, isDescDirection ? SortDirection.Asc : SortDirection.Desc)}
         >
            <P.Label>{currentSortType === SortType.Title && (isDescDirection ? '🡇 ' : '🡅 ')}Title</P.Label>
         </P.HeaderCell>
         <P.HeaderCell
            onClick={() => onSortChange(SortType.AmountPln, isDescDirection ? SortDirection.Asc : SortDirection.Desc)}
         >
            <P.Label>{currentSortType === SortType.AmountPln && (isDescDirection ? '🡇 ' : '🡅 ')}Amount (PLN)</P.Label>
         </P.HeaderCell>
         <P.HeaderCell
            onClick={() => onSortChange(SortType.AmountEur, isDescDirection ? SortDirection.Asc : SortDirection.Desc)}
         >
            <P.Label>{currentSortType === SortType.AmountEur && (isDescDirection ? '🡇 ' : '🡅 ')}Amount (EUR)</P.Label>
         </P.HeaderCell>
         <P.HeaderCell>
            <P.Label>Options</P.Label>
         </P.HeaderCell>
      </P.Row>
   )
});

export default TransactionsListHeader;
