import { SortDirection, SortType } from "./constants";
import { Transaction } from "stores/transactions/constants";

export const sortFunction = (
   first: number | string,
   second: number | string,
) => first >= second ? 1 : -1;

export const sortTransactions = (
   transactions: Set<Transaction>,
   sortType: SortType,
   sortDirection: SortDirection,
) => {
   const transactionArray = [...transactions];

   switch (sortType) {
      case SortType.Title:
         transactionArray.sort((transactionA, transactionB) => (
            sortDirection === SortDirection.Asc
               ? sortFunction(transactionA.name, transactionB.name)
               : sortFunction(transactionB.name, transactionA.name)
         ));
         break;
      case SortType.AmountPln:
         transactionArray.sort((transactionA, transactionB) => (
            sortDirection === SortDirection.Asc
               ? sortFunction(transactionA.amountPln, transactionB.amountPln)
               : sortFunction(transactionB.amountPln, transactionA.amountPln)
         ));
         break;
      case SortType.AmountEur:
         transactionArray.sort((transactionA, transactionB) => (
            sortDirection === SortDirection.Asc
               ? sortFunction(transactionA.amountEur, transactionB.amountEur)
               : sortFunction(transactionB.amountEur, transactionA.amountEur)
         ));
         break;
   }

   return transactionArray;
}
