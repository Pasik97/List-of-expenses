import { defaultConvertionRateValue, InitialTransactionData, Transaction } from "../constants";

export const mockConversionRate = 9.99;

export const mockInitialTransactionData: InitialTransactionData = {
   name: 'Mock transation', 
   amountPln: 10.11,
};

export const mockTransaction: Transaction = {
   ...mockInitialTransactionData,
   amountEur: mockInitialTransactionData.amountPln / defaultConvertionRateValue,
   fixedAmountEur: Number((mockInitialTransactionData.amountPln / defaultConvertionRateValue).toFixed(2)),
};
