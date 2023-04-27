import { useState } from 'react';
import Container from 'react-bootstrap/Container';

import orderConfirmation from './pages/confirmation/OrderConfirmation';
import OrderEntry from './pages/entry/OrderEntry';
import OrderSummary from './pages/summary/OrderSummary';

import { OrderDetailsProvider } from './contexts/order-details';

type TOrderPhase = 'inProgress' | 'review' | 'completed';

function App() {
  // orderPhase needs to be 'inProgress', 'review' or 'completed'
  const [orderPhase, setOrderPhase] = useState<TOrderPhase>('inProgress');

  let Component = OrderEntry; // default to order page
  switch (orderPhase) {
    case 'inProgress':
      Component = OrderEntry;
      break;
    case 'review':
      Component = OrderSummary;
      break;
    case 'completed':
      Component = orderConfirmation;
      break;
    default:
  }

  return (
    <Container>
      <OrderDetailsProvider>
        <Container>{<Component setOrderPhase={setOrderPhase} />}</Container>
      </OrderDetailsProvider>
      {/* confirmation page does not need provider */}
    </Container>
  );
}
export default App;
