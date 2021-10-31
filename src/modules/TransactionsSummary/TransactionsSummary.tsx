import React, { useContext } from 'react';
import { observer } from 'mobx-react';
import * as P from './parts';
import { StoreProviderContext } from 'modules/StoreProvider/StoreProvider';

const TransactionsSummary: React.FC = observer(() => {
   const { transactions } = useContext(StoreProviderContext);
   const { pln, fixedEur } = transactions.transactionsSummay;

   return !pln ? null : (
      <P.Summary>Sum: {pln} PLN ({fixedEur} EUR)</P.Summary>
   )
});

export default TransactionsSummary;
