import axios from 'axios';
import { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import ScoopOption from '../ScoopOption';
import ToppingOption from '../ToppingOption';
import AlertBanner from '../../common/AlertBanner';
import { pricePerItem } from '../../../constants';
import { formatCurrency } from '../../../utilities';
import { useOrderDetails } from '../../../contexts/order-details';

type TProps = {
  optionType: 'scoops' | 'toppings';
};

const Options = ({ optionType }: TProps) => {
  type TItem = {
    name: string;
    imagePath: string;
  };

  const [items, setItems] = useState<TItem[]>([]);
  const [error, setError] = useState(false);
  const { totals } = useOrderDetails();

  // optionType is 'scoops' or 'toppings'
  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then(response => setItems(response.data))
      .catch(error => setError(true));
  }, [optionType]);

  if (error) {
    return <AlertBanner message={''} variant={''} />;
  }

  // TODO: replace 'null' with ToppingOption when available
  const ItemComponent = optionType === 'scoops' ? ScoopOption : ToppingOption;
  const title = optionType[0].toUpperCase() + optionType.slice(1).toLowerCase();

  const optionItems = items.map(item => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />
  ));

  return (
    <>
      <h2>{title}</h2>
      <p>{formatCurrency(pricePerItem[optionType])} each</p>
      <p>
        {title} total: {formatCurrency(totals[optionType])}
      </p>
      <Row>{optionItems}</Row>;
    </>
  );
};

export default Options;
