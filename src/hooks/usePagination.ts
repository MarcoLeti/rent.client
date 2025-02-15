import { OnChangeFn } from '@tanstack/react-table';
import { useState } from 'react';

interface PaginationState {
  pageSize: number;
  pageIndex: number;
}

interface PaginationResult {
  onPaginationChange: OnChangeFn<PaginationState>;
  pagination: PaginationState;
  limit: number;
  skip: number;
  resetPagination: () => void;
}

export function usePagination(initialSize: number = 5): PaginationResult {
  const initialPaginationState: PaginationState = {
    pageSize: initialSize,
    pageIndex: 0,
  };

  const resetPagination = () => {
    setPagination(initialPaginationState);
  };

  const [pagination, setPagination] = useState<PaginationState>(
    initialPaginationState
  );

  const { pageSize, pageIndex } = pagination;

  return {
    onPaginationChange: setPagination,
    pagination,
    limit: pageSize,
    skip: pageSize * pageIndex,
    resetPagination,
  };
}
