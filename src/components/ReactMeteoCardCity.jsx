import { Card } from 'react-bootstrap';

const ReactMeteoCardCity = ({ weatherData }) => {
  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>{weatherData.name}</Card.Title>
        <Card.Text>
          Tempo: {weatherData.description}<br />
          Temperatura: {weatherData.temp} °C<br />
          Velocià Vento: {weatherData.wind} m/s
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ReactMeteoCardCity;