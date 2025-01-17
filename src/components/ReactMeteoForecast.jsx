import { ListGroup } from 'react-bootstrap';

const ReactMeteoForecast = ({ forecastData }) => {
  return (
    <ListGroup>
      {forecastData.map((forecast, index) => (
        <ListGroup.Item key={index}>
          {forecast.day}: {forecast.description}, {forecast.temp} °C
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default ReactMeteoForecast;