import { create } from "react-test-renderer";
import * as M from './mockData';
import TransactionsSummary from "../TransactionsSummary";
import StoreProvider from "modules/StoreProvider/StoreProvider";

describe('<TransactionsSummary />', () => {
   it('should render summary of pln and eur amount', () => {
      const component = create(
         <StoreProvider store={M.mockStore}>
            <TransactionsSummary />
         </StoreProvider>,
      )

      expect(component.toJSON()).toMatchSnapshot();
   });

   it('should render null if pln amount is 0', () => {
      const component = create(
         <StoreProvider store={M.mockStoreWithEmptyTransactionSummary}>
            <TransactionsSummary />
         </StoreProvider>,
      )

      expect(component.toJSON()).toBeNull();
   });
});
