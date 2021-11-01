import { create } from 'react-test-renderer';
import App from '../App';

jest.mock('modules/Header/Header');
jest.mock('modules/AddTransactionForm/AddTransactionForm');
jest.mock('modules/TransactionsList/TransactionsList');
jest.mock('modules/TransactionsSummary/TransactionsSummary');

describe('<App />', () => {
   it('should render Header, AddTransactionForm, TransactionsList, TransactionsSummary components', () => {
      const component = create(<App />);

      expect(component.toJSON()).toMatchSnapshot();
   });
});
