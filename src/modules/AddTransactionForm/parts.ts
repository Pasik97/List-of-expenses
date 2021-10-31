import styled from 'styled-components';
import media from 'utils/media';

export const AddTransactionFormWrapper = styled.div`
   color: #1a1a1a;
   font-size: 18px;
   line-height: 21px;
   margin: 24px 0;
`;

export const Row = styled.div`
   margin-bottom: 8px;

   ${media.fromTablet} {
      display: grid;
      grid-template-columns: 3fr 1fr;
   }
`;

export const InputWrapper = styled.div`
   margin: 0 0 8px 0;

   ${media.fromTablet} {
      display: grid;
      grid-template-columns: 1fr 1fr;
   }
`;

export const InputLabel = styled.p`
   white-space: nowrap;
   margin: 0;

   ${media.onlyMobile} {
      margin-bottom: 6px;
   }

   ${media.fromTablet} {
      flex-grow: 1;
   }
`;

export const Input = styled.input`
   color: #1a1a1a;
   font-size: 18px;
   line-height: 21px;
   border: none;
   outline: none;
   border-bottom: 1px solid #dddddd;

   &:focus {
      border-bottom: 1px solid #1a1a1a;
   }

   ${media.fromTablet} {
      flex-grow: 1;
   }
`;

export const AddButton = styled.button`
   color: #1a1a1a;
   font-size: 18px;
   line-height: 21px;
   background: none;
   border: 2px solid #dddddd;
   padding: 6px 24px;

   &:disabled {
      color: #dddddd;
   }

   &:hover, &active {
      border-color: #1a1a1a;
      cursor: pointer;
   }

   ${media.fromTablet} {
      height: fit-content;
      width: fit-content;
      justify-self: flex-end;
   }
`;

export const ValidateInputWrapper = styled.div`
   display: flex;
   flex-direction: column;

   ${media.fromTablet} {
      margin-left: 16px;
      flex-grow: 1;
   }
`;

export const Validation = styled.p`
   margin: 8px 0 0 0;
   color: red;
   font-size: 13px;
   line-height: 16px;
   min-height: 16px;
`;
