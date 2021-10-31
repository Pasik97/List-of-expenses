import React from 'react';
import styled from 'styled-components';
import Header from './modules/Header/Header';
import AddTransactionForm from './modules/AddTransactionForm/AddTransactionForm';
import StoreProvider from './modules/StoreProvider/StoreProvider';
import TransactionsList from './modules/TransactionsList/TransactionsList';
import TransactionsSummary from './modules/TransactionsSummary/TransactionsSummary';
import Stores from './stores/Stores';
import media from './utils/media';

const AppWrapper = styled.div`
   margin: 0 8px;

   ${media.fromTablet} {
      margin: 0 128px;
   }

   ${media.fromDesktop} {
      margin: 0 25%;
   }
`;

const store = new Stores();

export const App: React.FC = () => (
   <StoreProvider store={store}>
      <AppWrapper>
         <Header />
         <AddTransactionForm />
         <TransactionsList />
         <TransactionsSummary />
      </AppWrapper>
   </StoreProvider>
)

export default App;
