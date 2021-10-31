import Stores from "stores/Stores";
import { Transaction, TransactionsSummary } from "stores/transactions/constants";

export const mockTransactionSummary: TransactionsSummary = {
   pln: 10,
   eur: 5,
   fixedEur: 20,
};

const mockTransaction: Transaction = {
   name: 'Mock transaction', 
   amountPln: 12, 
   amountEur: 5, 
   fixedAmountEur: 12,
};

const mockTransactionsList = new Set<Transaction>();

mockTransactionsList.add(mockTransaction);

export const mockStoreWithEmptyTransactionsList: Stores = {
   transactions: {
      transactionsList: new Set(),
      transactionsSummay: mockTransactionSummary,
      conversionRate: 12.11,
      setConversionRate: jest.fn(),
      addNewTransaction: jest.fn(),
      removeTransaction: jest.fn(),
   }
}

export const mockStore: Stores = {
   transactions: {
      ...mockStoreWithEmptyTransactionsList.transactions,
      transactionsList: mockTransactionsList,
      setConversionRate: jest.fn(),
      addNewTransaction: jest.fn(),
      removeTransaction: jest.fn(),
   }
}

const secondMockedTransaction = {
   name: 'Mockkkkk transaction', 
   amountPln: 1, 
   amountEur: 2, 
   fixedAmountEur: 3,
};

const thirdMockedTransaction = {
   name: 'Mockkkkk tra nsa ction 123', 
   amountPln: 123, 
   amountEur: 211, 
   fixedAmountEur: 33,
};

export const mockUnsortedTransactionsList = new Set<Transaction>();

mockUnsortedTransactionsList.add(mockTransaction);
mockUnsortedTransactionsList.add(thirdMockedTransaction);
mockUnsortedTransactionsList.add(secondMockedTransaction);

export const transactionsSortedAscByTitle = [
   mockTransaction, thirdMockedTransaction, secondMockedTransaction,
];

export const transactionsSortedDescByTitle = [
   secondMockedTransaction, thirdMockedTransaction, mockTransaction
];

export const transactionsSortedAscByAmountPln = [
   secondMockedTransaction, mockTransaction, thirdMockedTransaction,
];

export const transactionsSortedDescByAmountPln = [
   thirdMockedTransaction, mockTransaction, secondMockedTransaction
];

export const transactionsSortedAscByAmountEur = [
   secondMockedTransaction, mockTransaction, thirdMockedTransaction,
];

export const transactionsSortedDescByAmountEur = [
   thirdMockedTransaction, mockTransaction, secondMockedTransaction
];

export const mockStoreWithMultipleTransactions: Stores = {
   transactions: {
      ...mockStoreWithEmptyTransactionsList.transactions,
      transactionsList: mockUnsortedTransactionsList,
      setConversionRate: jest.fn(),
      addNewTransaction: jest.fn(),
      removeTransaction: jest.fn(),
   }
}
