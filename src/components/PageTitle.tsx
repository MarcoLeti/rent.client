import React from 'react';
interface Props {
  children: React.ReactNode;
}
export const PageTitle = ({ children }: Props) => <h1>{children}</h1>;
