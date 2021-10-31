import { act, create } from "react-test-renderer";
import * as M from './mockData';
import TransactionsList from "../TransactionsList";
import TransactionsListHeader from "../TransactionsListHeader";
import { SortDirection, SortType } from "../constants";
import { DeleteButton } from "../parts";
import StoreProvider from "modules/StoreProvider/StoreProvider";

jest.mock("../TransactionsListHeader");

describe('<TransactionsList />', () => {
   it('should render TransactionsListHeader and rows with transactions with title, amount pln and eur and button to delete', () => {
      const component = create(
         <StoreProvider store={M.mockStoreWithMultipleTransactions}>
            <TransactionsList />
         </StoreProvider>,
      );

      expect(component.toJSON()).toMatchSnapshot();
   });

   it('should render null if user have no transactions', () => {
      const component = create(
         <StoreProvider store={M.mockStoreWithEmptyTransactionsList}>
            <TransactionsList />
         </StoreProvider>,
      );

      expect(component.toJSON()).toBeNull();
   });

   describe('onSortChange', () => {
      it('should set sortType and sortDirection based on received arguments', () => {
         const component = create(
            <StoreProvider store={M.mockStoreWithMultipleTransactions}>
               <TransactionsList />
            </StoreProvider>,
         );
         let header = component.root.findByType(TransactionsListHeader);

         expect(header.props.currentSortType).toEqual(SortType.Title);
         expect(header.props.currentSortDirection).toEqual(SortDirection.Desc);

         act(() => {
            header.props.onSortChange(SortType.AmountPln, SortDirection.Asc)
         });
         
         header = component.root.findByType(TransactionsListHeader);

         expect(header.props.currentSortType).toEqual(SortType.AmountPln);
         expect(header.props.currentSortDirection).toEqual(SortDirection.Asc);
      });
   });

   describe('onRemove', () => {
      it('should call removeTransaction Transactions class method', () => {
         const component = create(
            <StoreProvider store={M.mockStoreWithMultipleTransactions}>
               <TransactionsList />
            </StoreProvider>,
         );
         const deleteButton = component.root.findAllByType(DeleteButton)[0];

         deleteButton.props.onClick();

         expect(M.mockStoreWithMultipleTransactions.transactions.removeTransaction).toHaveBeenCalled();
      });
   });
});
