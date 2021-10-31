import { act, create } from "react-test-renderer";
import * as M from './mockData';
import Header from "../Header";
import { RateInput } from "../parts";
import StoreProvider from "modules/StoreProvider/StoreProvider";

describe('<Header />', () => {
   it('should render title and input to change conversion rate', () => {
      const component = create(
         <StoreProvider store={M.mockStore}>
            <Header />
         </StoreProvider>,
      );

      expect(component.toJSON()).toMatchSnapshot();
   });

   describe('onRateChange', () => {
      it('should set input value and call setConversionRate transactions class method if user entered valid number', () => {
         const component = create(
            <StoreProvider store={M.mockStore}>
               <Header />
            </StoreProvider>,
         );
         let rateInput = component.root.findByType(RateInput);

         act(() => {
            rateInput.props.onChange({ target: { value: '12.22' } });
         });

         rateInput = component.root.findByType(RateInput);
   
         expect(M.mockStore.transactions.setConversionRate).toHaveBeenCalled();
         expect(rateInput.props.value).toEqual('12.22');
      });

      it('should set input value and call setConversionRate transactions class method if clear input', () => {
         const component = create(
            <StoreProvider store={M.mockStore}>
               <Header />
            </StoreProvider>,
         );
         let rateInput = component.root.findByType(RateInput);

         act(() => {
            rateInput.props.onChange({ target: { value: '' } });
         });

         rateInput = component.root.findByType(RateInput);
   
         expect(M.mockStore.transactions.setConversionRate).toHaveBeenCalled();
         expect(rateInput.props.value).toEqual('');
      });

      it('should not set input value and not call setConversionRate transactions class method if user enter invalid value', () => {
         const component = create(
            <StoreProvider store={M.mockStore}>
               <Header />
            </StoreProvider>,
         );
         let rateInput = component.root.findByType(RateInput);

         expect(rateInput.props.value).toEqual(`${M.mockStore.transactions.conversionRate}`);

         act(() => {
            rateInput.props.onChange({ target: { value: 'ddd' } });
         });

         rateInput = component.root.findByType(RateInput);
   
         expect(M.mockStore.transactions.setConversionRate).not.toHaveBeenCalled();
         expect(rateInput.props.value).toEqual(`${M.mockStore.transactions.conversionRate}`);
      });
   });
});
