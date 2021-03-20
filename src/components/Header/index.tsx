import logoImage from '../../assets/logo.svg';

import * as Styled from './styles';

interface HeaderProps {
  openNewTransactionModal: () => void;
}

export function Header({ openNewTransactionModal }: HeaderProps) {
  return (
    <Styled.Container>
      <Styled.Content>
        <img src={logoImage} alt="dt money" />

        <button type="button" onClick={openNewTransactionModal}>
          Nova transação
        </button>
      </Styled.Content>
    </Styled.Container>
  );
}
