import React, { useContext, useState } from 'react';
import { observer } from 'mobx-react';
import * as P from './parts';
import { StoreProviderContext } from 'modules/StoreProvider/StoreProvider';
import { doubleNumberRegex } from 'utils/validators';
import { InitialTransactionData } from 'stores/transactions/constants';

const AddTransactionForm: React.FC = observer(() => {
   const { transactions } = useContext(StoreProviderContext);

   const [title, setTitle] = useState<string>('');
   const [titleValidation, setTitleValidation] = useState<string>('');
   const [amount, setAmount] = useState<string>('');
   const [amountValidation, setAmountValidation] = useState<string>('');

   const onTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setTitle(event.target.value);

      const textToValidate = event.target.value.trim();

      if (!textToValidate.length) {
         setTitleValidation('Field required');
      } else if (textToValidate.length < 5) {
         setTitleValidation('Title should have at least 5 characters');
      } else {
         setTitleValidation('');
      }
   };

   const onAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const isNumberValid = doubleNumberRegex.test(event.target.value);
      const decimals = event.target.value.split('.')[1];
      const areDecimalsValid = !decimals || decimals.length <= 2;

      if (!event.target.value.length || (isNumberValid && areDecimalsValid)) {
         setAmount(event.target.value);

         if (!event.target.value.length) {
            setAmountValidation('Field required');
         } else {
            setAmountValidation('');
         }
      }
   };

   const onAddButtonClick = () => {
      const newTransaction: InitialTransactionData = {
         name: title,
         amountPln: Number(amount),
      };

      transactions.addNewTransaction(newTransaction);
      setTitle('');
      setAmount('');
   };

   const isButtonDisabled = !transactions.conversionRate 
   || !!titleValidation 
   || !!amountValidation
   || !title
   || !amount;

   return (
      <P.AddTransactionFormWrapper>
         <P.Row>
            <P.InputWrapper>
               <P.InputLabel>Title of transaction</P.InputLabel>
               <P.ValidateInputWrapper>
                  <P.Input name="title" value={title} onChange={onTitleChange} />
                  <P.Validation>{titleValidation}</P.Validation>
               </P.ValidateInputWrapper>
            </P.InputWrapper>
         </P.Row>
         <P.Row>
            <P.InputWrapper>
               <P.InputLabel>Amount (in PLN) </P.InputLabel>
               <P.ValidateInputWrapper>
                  <P.Input name="amount" value={amount} onChange={onAmountChange} />
                  <P.Validation>{amountValidation}</P.Validation>
               </P.ValidateInputWrapper>
            </P.InputWrapper>
            <P.AddButton disabled={isButtonDisabled} onClick={onAddButtonClick}>Add</P.AddButton>
         </P.Row>
      </P.AddTransactionFormWrapper>
   )
});


export default AddTransactionForm;