import React, { createContext, } from 'react';
import { StoreProviderProps } from './constants';
import Stores from 'stores/Stores';

export const StoreProviderContext = createContext<Stores>({} as Stores);

const StoreProvider: React.FC<StoreProviderProps> = ({
   children,
   store,
}) => (
   <StoreProviderContext.Provider value={store}>
      {children}
   </StoreProviderContext.Provider>
);

export default StoreProvider;
