import axios from 'axios';
import { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import ScoopOption from '../ScoopOption';
import ToppingOption from '../ToppingOption';
import AlertBanner from '../../common/AlertBanner';

type TProps = {
  optionType: string;
};

const Options = ({ optionType }: TProps) => {
  type TItem = {
    name: string;
    imagePath: string;
  };

  const [items, setItems] = useState<TItem[]>([]);
  const [error, setError] = useState(false);

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

  const optionItems = items.map(item => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />
  ));

  return <Row>{optionItems}</Row>;
};

export default Options;
