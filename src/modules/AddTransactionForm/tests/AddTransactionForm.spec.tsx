import { act, create } from "react-test-renderer";
import * as M from './mockData';
import AddTransactionForm from "../AddTransactionForm";
import { AddButton, Input, Validation } from "../parts";
import StoreProvider from "modules/StoreProvider/StoreProvider";

describe('<AddTransactionForm />', () => {
   it('should render button and 2 inputs to enter transaction title and amount', () => {
      const component = create(
         <StoreProvider store={M.mockStore}>
            <AddTransactionForm />
         </StoreProvider>,
      );

      expect(component.toJSON()).toMatchSnapshot();
   });

   describe('onTitleChange', () => {
      it('should set title input value if user enter title longer than 5 characters', () => {
         const component = create(
            <StoreProvider store={M.mockStore}>
               <AddTransactionForm />
            </StoreProvider>,
         );
         let titleInput = component.root.findAllByType(Input)[0];

         act(() => {
            titleInput.props.onChange({ target: { value: 'Mock title' } });
         });

         titleInput = component.root.findAllByType(Input)[0];
   
         expect(titleInput.props.value).toEqual('Mock title');
      });

      it('should set title input value and set title validation if user enter title shorter than 5 characters', () => {
         const component = create(
            <StoreProvider store={M.mockStore}>
               <AddTransactionForm />
            </StoreProvider>,
         );
         let titleInput = component.root.findAllByType(Input)[0];
         let validationTitle = component.root.findAllByType(Validation)[0];
         
         expect(validationTitle.props.children).toEqual('');

         act(() => {
            titleInput.props.onChange({ target: { value: '  a  ' } });
         });

         titleInput = component.root.findAllByType(Input)[0];
         validationTitle = component.root.findAllByType(Validation)[0];
   
         expect(titleInput.props.value).toEqual('  a  ');
         expect(validationTitle.props.children).toEqual('Title should have at least 5 characters');
      });

      it('should set title input value and set title validation if user clear input', () => {
         const component = create(
            <StoreProvider store={M.mockStore}>
               <AddTransactionForm />
            </StoreProvider>,
         );
         let titleInput = component.root.findAllByType(Input)[0];
         let validationTitle = component.root.findAllByType(Validation)[0];
         
         expect(validationTitle.props.children).toEqual('');

         act(() => {
            titleInput.props.onChange({ target: { value: '' } });
         });

         titleInput = component.root.findAllByType(Input)[0];
         validationTitle = component.root.findAllByType(Validation)[0];
   
         expect(titleInput.props.value).toEqual('');
         expect(validationTitle.props.children).toEqual('Field required');
      });
   });

   describe('onAmountChange', () => {
      it('should set amount input value if user enter valid number', () => {
         const component = create(
            <StoreProvider store={M.mockStore}>
               <AddTransactionForm />
            </StoreProvider>,
         );
         let amountInput = component.root.findAllByType(Input)[1];

         act(() => {
            amountInput.props.onChange({ target: { value: '12.11' } });
         });

         amountInput = component.root.findAllByType(Input)[1];
   
         expect(amountInput.props.value).toEqual('12.11');
      });

      it('should set amount input value and amount validation if user clear input', () => {
         const component = create(
            <StoreProvider store={M.mockStore}>
               <AddTransactionForm />
            </StoreProvider>,
         );
         let amountInput = component.root.findAllByType(Input)[1];
         let validationAmount = component.root.findAllByType(Validation)[1];
         
         expect(validationAmount.props.children).toEqual('');

         act(() => {
            amountInput.props.onChange({ target: { value: '' } });
         });

         amountInput = component.root.findAllByType(Input)[1];
         validationAmount = component.root.findAllByType(Validation)[1];
   
         expect(amountInput.props.value).toEqual('');
         expect(validationAmount.props.children).toEqual('Field required');
      });

      it('should not set amount input value if user enter invalid value', () => {
         const component = create(
            <StoreProvider store={M.mockStore}>
               <AddTransactionForm />
            </StoreProvider>,
         );
         let amountInput = component.root.findAllByType(Input)[1];

         act(() => {
            amountInput.props.onChange({ target: { value: 'awdawd' } });
         });

         amountInput = component.root.findAllByType(Input)[1];
   
         expect(amountInput.props.value).toEqual('');
      });

      it('should not set amount input value if decimals in number entered by user are longer than 2', () => {
         const component = create(
            <StoreProvider store={M.mockStore}>
               <AddTransactionForm />
            </StoreProvider>,
         );
         let amountInput = component.root.findAllByType(Input)[1];

         act(() => {
            amountInput.props.onChange({ target: { value: '12.2222222' } });
         });

         amountInput = component.root.findAllByType(Input)[1];
   
         expect(amountInput.props.value).toEqual('');
      });
   });

   describe('onAddButtonClick', () => {
      it('should call addNewTransaction Transactions class method', () => {
         const component = create(
            <StoreProvider store={M.mockStore}>
               <AddTransactionForm />
            </StoreProvider>,
         );
         let addButton = component.root.findByType(AddButton);

         addButton.props.onClick();
   
         expect(M.mockStore.transactions.addNewTransaction).toHaveBeenCalled();
      });
   });
});
