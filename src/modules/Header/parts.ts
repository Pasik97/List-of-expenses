import styled from 'styled-components';

export const HeaderWrapper = styled.header`
   display: flex;
   align-items: baseline;
   justify-content: space-between;
   margin: 16px 0;
`;

export const Title = styled.h2`
   color: #1a1a1a;
   font-size: 28px;
   line-height: 32px;
   margin: 0 8px 0 0;
   font-weight: 700;
`;

export const ConversionRateWrapper = styled.div`
   display: flex;
   align-items: baseline;
   color: #1a1a1a;
   font-size: 16px;
   line-height: 21px;
`;

export const RateInput = styled.input`
   color: #1a1a1a;
   font-size: 16px;
   line-height: 21px;
   padding: 0;
   border: none;
   outline: none;
   border-bottom: 1px solid #dddddd;
   width: 60px;

   &:focus {
      border-bottom: 1px solid #1a1a1a;
   }
`;

export const ConversionLabel = styled.p`
   margin: 0;
   white-space: pre;
`;
