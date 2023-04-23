import Alert from 'react-bootstrap/Alert';

type TProps = {
  message: string;
  variant: string;
};

const AlertBanner = ({ message, variant }: TProps) => {
  const alertMessage =
    message || 'An unexpected error ocurred. Please try again later.';
  const alertVariant = variant || 'danger';
  return (
    <Alert variant={alertVariant} style={{ backgroundColor: 'red' }}>
      {alertMessage}
    </Alert>
  );
};

export default AlertBanner;
