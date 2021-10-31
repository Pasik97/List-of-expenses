import Stores from "stores/Stores";
import Transactions from "stores/transactions/Transactions";

describe('Stores', () => {
   it('should store instanse of Transactions class', () => {
      const stores = new Stores();
      
      expect(stores.transactions).toBeInstanceOf(Transactions);
   })
});
