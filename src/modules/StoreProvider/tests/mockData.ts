import Stores from "stores/Stores";

export const mockStore: Stores = {
   transactions: {
      transactionsList: new Set(),
      transactionsSummay: { pln: 0, eur: 0, fixedEur: 0},
      conversionRate: 12.11,
      setConversionRate: jest.fn(),
      addNewTransaction: jest.fn(),
      removeTransaction: jest.fn(),
   }
}
