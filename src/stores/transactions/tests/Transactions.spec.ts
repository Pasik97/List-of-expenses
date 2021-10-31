import Transactions from "stores/transactions/Transactions";
import * as M from './mockData';
import { defaultConvertionRateValue } from "../constants";

describe('Transactions', () => {
   let transactions: Transactions;

   beforeEach(() => {
      transactions = new Transactions();
   });

   describe('after initialization', () => {
      it('should have empty transactionsList', () => {
         expect(transactions.transactionsList.size).toEqual(0);
      });

      it('should have pln, eur, fixedEur fields in transationsSummmary set to 0', () => {
         expect(transactions.transactionsSummay.pln).toEqual(0);
         expect(transactions.transactionsSummay.eur).toEqual(0);
         expect(transactions.transactionsSummay.fixedEur).toEqual(0);
      });

      it(`should have conversionRate set to ${defaultConvertionRateValue}`, () => {
         expect(transactions.conversionRate).toEqual(defaultConvertionRateValue);
      });
   });

   describe('setConversionRate', () => {
      it('should set conversion rate property', () => {
         expect(transactions.conversionRate).toEqual(defaultConvertionRateValue);

         transactions.setConversionRate(M.mockConversionRate);

         expect(transactions.conversionRate).toEqual(M.mockConversionRate);
      });
   });

   describe('addNewTransaction', () => {
      it('should add new transaction to transactionsList', () => {
         expect(transactions.transactionsList.size).toEqual(0);

         transactions.addNewTransaction(M.mockInitialTransactionData);

         const addedTransaction = transactions.transactionsList.values().next().value;

         expect(transactions.transactionsList.size).toEqual(1);
         expect(addedTransaction).toEqual(M.mockTransaction);
      });

      it('should increase values in transactionsSummay object', () => {
         expect(transactions.transactionsSummay.pln).toEqual(0);
         expect(transactions.transactionsSummay.eur).toEqual(0);
         expect(transactions.transactionsSummay.fixedEur).toEqual(0);

         transactions.addNewTransaction(M.mockInitialTransactionData);

         const amountEur = M.mockInitialTransactionData.amountPln / defaultConvertionRateValue;
         const fixedAmountEur = Number(amountEur.toFixed(2));

         expect(transactions.transactionsSummay.pln).toEqual(M.mockInitialTransactionData.amountPln);
         expect(transactions.transactionsSummay.eur).toEqual(amountEur);
         expect(transactions.transactionsSummay.fixedEur).toEqual(fixedAmountEur);
      });

      it('should not add transaction if conversion rate is null', () => {
         expect(transactions.transactionsList.size).toEqual(0);

         transactions.setConversionRate(null);

         transactions.addNewTransaction(M.mockInitialTransactionData);

         expect(transactions.transactionsList.size).toEqual(0);
      });
   });

   describe('removeTransaction', () => {
      it('should remove transaction from transactionsList', () => {
         expect(transactions.transactionsList.size).toEqual(0);

         transactions.addNewTransaction(M.mockInitialTransactionData);

         expect(transactions.transactionsList.size).toEqual(1);

         const transactionToRemove = transactions.transactionsList.values().next().value;

         transactions.removeTransaction(transactionToRemove);

         expect(transactions.transactionsList.size).toEqual(0);
      });

      it('should decrease values in transactionsSummay object', () => {
         expect(transactions.transactionsSummay.pln).toEqual(0);
         expect(transactions.transactionsSummay.eur).toEqual(0);
         expect(transactions.transactionsSummay.fixedEur).toEqual(0);

         transactions.addNewTransaction(M.mockInitialTransactionData);

         const amountEur = M.mockInitialTransactionData.amountPln / defaultConvertionRateValue;
         const fixedAmountEur = Number(amountEur.toFixed(2));

         expect(transactions.transactionsSummay.pln).toEqual(M.mockInitialTransactionData.amountPln);
         expect(transactions.transactionsSummay.eur).toEqual(amountEur);
         expect(transactions.transactionsSummay.fixedEur).toEqual(fixedAmountEur);

         const transactionToRemove = transactions.transactionsList.values().next().value;

         transactions.removeTransaction(transactionToRemove);

         expect(transactions.transactionsSummay.pln).toEqual(0);
         expect(transactions.transactionsSummay.eur).toEqual(0);
         expect(transactions.transactionsSummay.fixedEur).toEqual(0);
      });
   });
});
