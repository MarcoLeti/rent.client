import { SortingState, OnChangeFn } from '@tanstack/react-table';
import { useState } from 'react';

interface Sorting {
  id: string;
  desc: boolean;
}

interface UseSortingReturnType {
  sorting: Sorting[];
  onSortingChange: OnChangeFn<SortingState>;
  order: 'ASC' | 'DESC';
  field: string;
}

// the state is an array of column states, however we’ll be sorting one column at a time, so the state will always be at index 0
export function useSorting(
  initialField: string = 'id',
  initialOrder: 'ASC' | 'DESC' = 'ASC'
): UseSortingReturnType {
  const [sorting, setSorting] = useState<Sorting[]>([
    { id: initialField, desc: initialOrder === 'DESC' },
  ]);

  const order: 'ASC' | 'DESC' = !sorting.length
    ? initialOrder
    : sorting[0].desc
      ? 'DESC'
      : 'ASC';
  const field: string = sorting.length ? sorting[0].id : initialField;

  return {
    sorting,
    onSortingChange: setSorting,
    order,
    field,
  };
}
