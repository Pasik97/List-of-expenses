import { create } from 'react-test-renderer';
import { mockStore } from './mockData';
import StoreProvider from '../StoreProvider';

describe('<StoreProvider />', () => {
   it('should render div wrapper in provider', () => {
      const component = create(<StoreProvider store={mockStore}><div /></StoreProvider>);

      expect(component.toJSON()).toMatchSnapshot();
   });
});
