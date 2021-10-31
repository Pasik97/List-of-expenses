import Transactions from './transactions/Transactions';

class Stores {
   transactions: Transactions;

   constructor() {
      this.transactions = new Transactions();
   }
}

export default Stores;
