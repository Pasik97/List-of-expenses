import { create } from "react-test-renderer";
import * as M from './mockData';
import TransactionsListHeader from "../TransactionsListHeader";
import { SortType, SortDirection } from "../constants";
import { HeaderCell } from "../parts";
import StoreProvider from "modules/StoreProvider/StoreProvider";

describe('<AddTransactionForm />', () => {
   describe(`with currentSortDirection set to ${SortDirection.Desc}`, () => {
      it(`should render table header cells with title with arrow down is sort type is ${SortType.Title}`, () => {
         const component = create(
            <StoreProvider store={M.mockStore}>
               <TransactionsListHeader
                  currentSortType={SortType.Title}
                  currentSortDirection={SortDirection.Desc}
                  onSortChange={jest.fn()}
               />
            </StoreProvider>,
         );

         expect(component.toJSON()).toMatchSnapshot();
      });

      it(`should render table header cells with amountPln with arrow down is sort type is ${SortType.AmountPln}`, () => {
         const component = create(
            <StoreProvider store={M.mockStore}>
               <TransactionsListHeader
                  currentSortType={SortType.AmountPln}
                  currentSortDirection={SortDirection.Desc}
                  onSortChange={jest.fn()}
               />
            </StoreProvider>,
         );

         expect(component.toJSON()).toMatchSnapshot();
      });

      it(`should render table header cells with amountEur with arrow down is sort type is ${SortType.AmountEur}`, () => {
         const component = create(
            <StoreProvider store={M.mockStore}>
               <TransactionsListHeader
                  currentSortType={SortType.AmountEur}
                  currentSortDirection={SortDirection.Desc}
                  onSortChange={jest.fn()}
               />
            </StoreProvider>,
         );

         expect(component.toJSON()).toMatchSnapshot();
      });

      it(`on title cell click should call onSortChange fn with ${SortType.Title} and ${SortDirection.Asc}`, () => {
         const mockOnSortChange = jest.fn()
         
         const component = create(
            <StoreProvider store={M.mockStore}>
               <TransactionsListHeader
                  currentSortType={SortType.AmountEur}
                  currentSortDirection={SortDirection.Desc}
                  onSortChange={mockOnSortChange}
               />
            </StoreProvider>,
         );
         
         component.root.findAllByType(HeaderCell)[0].props.onClick();

         expect(mockOnSortChange).toHaveBeenCalledWith(SortType.Title, SortDirection.Asc);
      });

      it(`on amountPln cell click should call onSortChange fn with ${SortType.AmountPln} and ${SortDirection.Asc}`, () => {
         const mockOnSortChange = jest.fn()
         
         const component = create(
            <StoreProvider store={M.mockStore}>
               <TransactionsListHeader
                  currentSortType={SortType.AmountEur}
                  currentSortDirection={SortDirection.Desc}
                  onSortChange={mockOnSortChange}
               />
            </StoreProvider>,
         );
         
         component.root.findAllByType(HeaderCell)[1].props.onClick();

         expect(mockOnSortChange).toHaveBeenCalledWith(SortType.AmountPln, SortDirection.Asc);
      });

      it(`on amountEur cell click should call onSortChange fn with ${SortType.AmountEur} and ${SortDirection.Asc}`, () => {
         const mockOnSortChange = jest.fn()
         
         const component = create(
            <StoreProvider store={M.mockStore}>
               <TransactionsListHeader
                  currentSortType={SortType.AmountEur}
                  currentSortDirection={SortDirection.Desc}
                  onSortChange={mockOnSortChange}
               />
            </StoreProvider>,
         );
         
         component.root.findAllByType(HeaderCell)[2].props.onClick();

         expect(mockOnSortChange).toHaveBeenCalledWith(SortType.AmountEur, SortDirection.Asc);
      });
   });

   describe(`with currentSortDirection set to ${SortDirection.Asc}`, () => {
      it(`should render table header cells with title with arrow up is sort type is ${SortType.Title}`, () => {
         const component = create(
            <StoreProvider store={M.mockStore}>
               <TransactionsListHeader
                  currentSortType={SortType.Title}
                  currentSortDirection={SortDirection.Asc}
                  onSortChange={jest.fn()}
               />
            </StoreProvider>,
         );

         expect(component.toJSON()).toMatchSnapshot();
      });

      it(`should render table header cells with amountPln with arrow up is sort type is ${SortType.AmountPln}`, () => {
         const component = create(
            <StoreProvider store={M.mockStore}>
               <TransactionsListHeader
                  currentSortType={SortType.AmountPln}
                  currentSortDirection={SortDirection.Asc}
                  onSortChange={jest.fn()}
               />
            </StoreProvider>,
         );

         expect(component.toJSON()).toMatchSnapshot();
      });

      it(`should render table header cells with amountEur with arrow up is sort type is ${SortType.AmountEur}`, () => {
         const component = create(
            <StoreProvider store={M.mockStore}>
               <TransactionsListHeader
                  currentSortType={SortType.AmountEur}
                  currentSortDirection={SortDirection.Asc}
                  onSortChange={jest.fn()}
               />
            </StoreProvider>,
         );

         expect(component.toJSON()).toMatchSnapshot();
      });

      it(`on title cell click should call onSortChange fn with ${SortType.Title} and ${SortDirection.Desc}`, () => {
         const mockOnSortChange = jest.fn()
         
         const component = create(
            <StoreProvider store={M.mockStore}>
               <TransactionsListHeader
                  currentSortType={SortType.AmountEur}
                  currentSortDirection={SortDirection.Asc}
                  onSortChange={mockOnSortChange}
               />
            </StoreProvider>,
         );
         
         component.root.findAllByType(HeaderCell)[0].props.onClick();

         expect(mockOnSortChange).toHaveBeenCalledWith(SortType.Title, SortDirection.Desc);
      });

      it(`on amountPln cell click should call onSortChange fn with ${SortType.AmountPln} and ${SortDirection.Desc}`, () => {
         const mockOnSortChange = jest.fn()
         
         const component = create(
            <StoreProvider store={M.mockStore}>
               <TransactionsListHeader
                  currentSortType={SortType.AmountEur}
                  currentSortDirection={SortDirection.Asc}
                  onSortChange={mockOnSortChange}
               />
            </StoreProvider>,
         );
         
         component.root.findAllByType(HeaderCell)[1].props.onClick();

         expect(mockOnSortChange).toHaveBeenCalledWith(SortType.AmountPln, SortDirection.Desc);
      });

      it(`on amountEur cell click should call onSortChange fn with ${SortType.AmountEur} and ${SortDirection.Desc}`, () => {
         const mockOnSortChange = jest.fn()
         
         const component = create(
            <StoreProvider store={M.mockStore}>
               <TransactionsListHeader
                  currentSortType={SortType.AmountEur}
                  currentSortDirection={SortDirection.Asc}
                  onSortChange={mockOnSortChange}
               />
            </StoreProvider>,
         );
         
         component.root.findAllByType(HeaderCell)[2].props.onClick();

         expect(mockOnSortChange).toHaveBeenCalledWith(SortType.AmountEur, SortDirection.Desc);
      });
   });
});
