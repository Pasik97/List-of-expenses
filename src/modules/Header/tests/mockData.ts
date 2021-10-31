import Stores from "stores/Stores";
import { TransactionsSummary } from "stores/transactions/constants";

export const mockTransactionSummary: TransactionsSummary = {
   pln: 10,
   eur: 5,
   fixedEur: 20,
};

export const mockStore: Stores = {
   transactions: {
      transactionsList: new Set(),
      transactionsSummay: mockTransactionSummary,
      conversionRate: 12.11,
      setConversionRate: jest.fn(),
      addNewTransaction: jest.fn(),
      removeTransaction: jest.fn(),
   }
}
