export enum SortType {
   Title = 'Title',
   AmountPln = 'AmountPln',
   AmountEur = 'AmountEur',
}

export enum SortDirection {
   Asc = 'Asc',
   Desc = 'Desc',
}

export interface TransactionListHeaderProps {
   currentSortType: SortType;
   currentSortDirection: SortDirection;
   onSortChange: (sortType: SortType, sortDirection: SortDirection) => void;
};
