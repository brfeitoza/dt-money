import incomeImage from '../../assets/income.svg';
import outcomeImage from '../../assets/outcome.svg';
import totalImage from '../../assets/total.svg';

import * as Styled from './styles';

export function Summary() {
  return (
    <Styled.Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImage} alt="Entradas" />
        </header>
        <strong>R$ 1.000,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImage} alt="Saídas" />
        </header>
        <strong>- R$ 500,00</strong>
      </div>
      <div>
        <header>
          <p>Total</p>
          <img src={totalImage} alt="Total" />
        </header>
        <strong>R$ 500,00</strong>
      </div>
    </Styled.Container>
  );
}
