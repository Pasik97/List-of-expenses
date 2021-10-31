import * as M from './mockData';
import { SortDirection, SortType } from '../constants';
import * as H from '../helpers';

describe('sortFunction', () => {
   it('should return 1 if first argument is larger or egual than second', () => {
      expect(H.sortFunction(3, 2)).toEqual(1);
      expect(H.sortFunction(3, 3)).toEqual(1);
   });

   it('should return -1 if first argument is smaller than second', () => {
      expect(H.sortFunction(2, 3)).toEqual(-1);
   });
});

describe('sortTransactions', () => {
   it(`should sort transaction to ascending base on title if ${SortType.Title} and ${SortDirection.Asc} were passed`, () => {
      expect(H.sortTransactions(
         M.mockUnsortedTransactionsList,
         SortType.Title,
         SortDirection.Asc,
      )).toEqual(M.transactionsSortedAscByTitle);
   });

   it(`should sort transaction to descending base on title if ${SortType.Title} and ${SortDirection.Desc} were passed`, () => {
      expect(H.sortTransactions(
         M.mockUnsortedTransactionsList,
         SortType.Title,
         SortDirection.Desc,
      )).toEqual(M.transactionsSortedDescByTitle);
   });

   it(`should sort transaction to ascending base on amountPln if ${SortType.AmountPln} and ${SortDirection.Asc} were passed`, () => {
      expect(H.sortTransactions(
         M.mockUnsortedTransactionsList,
         SortType.AmountPln,
         SortDirection.Asc,
      )).toEqual(M.transactionsSortedAscByAmountPln);
   });

   it(`should sort transaction to descending base on amountPln if ${SortType.AmountPln} and ${SortDirection.Desc} were passed`, () => {
      expect(H.sortTransactions(
         M.mockUnsortedTransactionsList,
         SortType.AmountPln,
         SortDirection.Desc,
      )).toEqual(M.transactionsSortedDescByAmountPln);
   });

   it(`should sort transaction to ascending base on amountEur if ${SortType.AmountEur} and ${SortDirection.Asc} were passed`, () => {
      expect(H.sortTransactions(
         M.mockUnsortedTransactionsList,
         SortType.AmountEur,
         SortDirection.Asc,
      )).toEqual(M.transactionsSortedAscByAmountEur);
   });

   it(`should sort transaction to descending base on amountEur if ${SortType.AmountEur} and ${SortDirection.Desc} were passed`, () => {
      expect(H.sortTransactions(
         M.mockUnsortedTransactionsList,
         SortType.AmountEur,
         SortDirection.Desc,
      )).toEqual(M.transactionsSortedDescByAmountEur);
   });
});
