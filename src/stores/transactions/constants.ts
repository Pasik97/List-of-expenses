export interface InitialTransactionData {
   name: string;
   amountPln: number;
}

export interface Transaction {
   name: string;
   amountPln: number;
   amountEur: number;
   fixedAmountEur: number;
}

export interface TransactionsSummary {
   pln: number,
   eur: number,
   fixedEur: number,
}

export const defaultConvertionRateValue = 4.382;
