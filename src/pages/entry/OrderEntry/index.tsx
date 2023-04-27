import Button from 'react-bootstrap/Button';
import Options from '../Options';
import { useOrderDetails } from '../../../contexts/order-details';
import { formatCurrency } from '../../../utilities';

type TOrderPhase = 'inProgress' | 'review' | 'completed';

type TProps = {
  setOrderPhase: (orderPhase: TOrderPhase) => void;
};

const OrderEntry = ({ setOrderPhase }: TProps) => {
  const { totals } = useOrderDetails();

  return (
    <div>
      <Options optionType="scoops" />
      <Options optionType="toppings" />
      <h2>Grand total: {formatCurrency(totals.scoops + totals.toppings)}</h2>
      <Button onClick={() => setOrderPhase('review')}>Order Sundae!</Button>
    </div>
  );
};

export default OrderEntry;
