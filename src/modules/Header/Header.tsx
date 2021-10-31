import React, { useContext, useState } from 'react';
import { observer } from 'mobx-react';
import * as P from './parts';
import { StoreProviderContext } from 'modules/StoreProvider/StoreProvider';
import { doubleNumberRegex } from 'utils/validators';

const Header: React.FC = observer(() => {
   const { transactions } = useContext(StoreProviderContext);

   const [rate, setRate] = useState<string>(`${transactions.conversionRate}`);

   const onRateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const isRateValid = doubleNumberRegex.test(event.target.value);

      if (isRateValid || !event.target.value.length) {
         setRate(event.target.value);

         const newRate = Number(event.target.value) || 0;

         transactions.setConversionRate(newRate);
      }
   };

   return (
      <P.HeaderWrapper>
         <P.Title title="List of expenses">List of expenses</P.Title>
         <P.ConversionRateWrapper>
            <P.ConversionLabel>1EUR = </P.ConversionLabel>
            <P.RateInput name="rate" value={rate || ''} onChange={onRateChange} />
            <P.ConversionLabel>PLN</P.ConversionLabel>
         </P.ConversionRateWrapper>
      </P.HeaderWrapper>
   )
});


export default Header;