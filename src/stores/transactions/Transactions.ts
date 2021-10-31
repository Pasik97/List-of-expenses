import { action, makeAutoObservable, observable } from "mobx";
import * as C from './constants';

class Transactions {
   @observable
   transactionsList = new Set<C.Transaction>();

   @observable
   transactionsSummay: C.TransactionsSummary = {
      pln: 0,
      eur: 0,
      fixedEur: 0,
   };

   @observable
   conversionRate: number | null = C.defaultConvertionRateValue;

   constructor() {
      makeAutoObservable(this)
   }

   @action
   setConversionRate(newRate: number | null) {
      this.conversionRate = newRate;
   }

   @action
   addNewTransaction(transaction: C.InitialTransactionData) {
      if (this.conversionRate) {
         const amountEur = transaction.amountPln / this.conversionRate;
         const fixedAmountEur = Number(amountEur.toFixed(2));

         const newTransaction: C.Transaction = {
            ...transaction,
            amountEur,
            fixedAmountEur,
         };

         this.transactionsList.add(newTransaction);
         this.transactionsSummay = {
            pln: this.transactionsSummay.pln + transaction.amountPln,
            eur: this.transactionsSummay.eur + amountEur,
            fixedEur: this.transactionsSummay.fixedEur + fixedAmountEur,
         };
      }
   }

   @action
   removeTransaction(transaction: C.Transaction) {
      this.transactionsSummay = {
         pln: this.transactionsSummay.pln - transaction.amountPln,
         eur: this.transactionsSummay.eur - transaction.amountEur,
         fixedEur: this.transactionsSummay.fixedEur - transaction.fixedAmountEur,
      };
      this.transactionsList.delete(transaction);
   }
}

export default Transactions;
