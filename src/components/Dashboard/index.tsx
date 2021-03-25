import { Summary, TransactionsTable } from '../index';

import * as Styled from './styles';

export function Dashboard() {
  return (
    <Styled.Container>
      <Summary />
      <TransactionsTable />
    </Styled.Container>
  );
}
