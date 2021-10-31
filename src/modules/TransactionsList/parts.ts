import styled from 'styled-components';
import media from 'utils/media';

export const TransactionsListWrapper = styled.div``;

export const Cell = styled.div`
   color: #1a1a1a;
   font-size: 16px;
   line-height: 21px;
   border-right: 1px solid #1a1a1a;
   padding: 6px;
   display: flex;
   align-items: center;

   &:last-of-type {
      border-right: none;
   }
`;

export const HeaderCell = styled(Cell)`
   font-weight: 700;
   background-color: #cccccc;
   
   &:hover, &:active {
      cursor: pointer;
   }
`;

export const Row = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr 1fr 1fr;
   border: 1px solid #1a1a1a;
   border-top: none;

   &:first-of-type {
      border-top: 1px solid #1a1a1a;
   }

   &:nth-of-type(2n+3) {
      ${Cell} {
         background-color: #eeeeee;
      }
   }

   ${media.fromTablet} {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr 1fr;
   }

   ${media.fromDesktop} {
      display: grid;
      grid-template-columns: 3fr 1fr 1fr 1fr;
   }
`;

export const Label = styled.p`
   margin: 0;
   overflow-wrap: anywhere;
`;

export const DeleteButton = styled.button`
   color: #4d4d4d;
   font-size: 16px;
   line-height: 21px;
   border: none;
   outline: none;
   background: none;

   &:hover, &:active {
      cursor: pointer;
      color: #1a1a1a;
   }
`;
