import { ReactNode } from "react";
import Stores from "stores/Stores";

export interface StoreProviderProps {
   store: Stores;
   children: ReactNode;
}
