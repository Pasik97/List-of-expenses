import React, { useContext, useState } from 'react';
import { observer } from 'mobx-react';
import * as P from './parts';
import { SortDirection, SortType } from './constants';
import { sortTransactions } from './helpers';
import TransactionsListHeader from './TransactionsListHeader';
import { StoreProviderContext } from 'modules/StoreProvider/StoreProvider';
import { Transaction } from 'stores/transactions/constants';

const TransactionsList: React.FC = observer(() => {
   const { transactions } = useContext(StoreProviderContext);

   const [sortType, setSortType] = useState<SortType>(SortType.Title);
   const [sortDirection, setSortDirection] = useState<SortDirection>(SortDirection.Desc);

   const onSortChange = (sortType: SortType, sortDirection: SortDirection) => {
      setSortType(sortType);
      setSortDirection(sortDirection);
   }

   const onRemove = (transaction: Transaction) => {
      transactions.removeTransaction(transaction);
   }

   const userTransactions: Transaction[] = sortTransactions(
      transactions.transactionsList,
      sortType,
      sortDirection,
   );

   return !userTransactions.length ? null : (
      <P.TransactionsListWrapper>
         <TransactionsListHeader
            currentSortType={sortType}
            currentSortDirection={sortDirection}
            onSortChange={onSortChange}
         />
         {userTransactions.map((transaction) => (
            <P.Row key={transaction.name + transaction.amountPln + transaction.fixedAmountEur}>
               <P.Cell><P.Label>{transaction.name}</P.Label></P.Cell>
               <P.Cell><P.Label>{transaction.amountPln}</P.Label></P.Cell>
               <P.Cell><P.Label>{transaction.fixedAmountEur}</P.Label></P.Cell>
               <P.Cell><P.DeleteButton onClick={() => onRemove(transaction)}>Delete</P.DeleteButton></P.Cell>
            </P.Row>
         ))}
      </P.TransactionsListWrapper>
   );
})

export default TransactionsList;
