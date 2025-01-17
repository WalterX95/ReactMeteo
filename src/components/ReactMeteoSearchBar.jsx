import { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactMeteoCardCity from './ReactMeteoCardCity';
import ReactMeteoForecast from './ReactMeteoForecast';

const ReactMeteoSearchBar = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);

  const fetchWeatherData = async () => {
    const apiKey = '045d05c46810ac7f184ef1336cc7e0f3';
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},IT&appid=${apiKey}&units=metric`;

    try {
      const response = await fetch(weatherUrl);
      const data = await response.json();

      if (response.ok) {
        setWeatherData({
          name: data.name,
          description: data.weather[0].description,
          temp: data.main.temp,
          wind: data.wind.speed,
        });

        // Dummy forecast data as OpenWeatherMap free tier doesn't provide it
        setForecastData([
          { day: 'Oggi', description: 'Sereno', temp: 22 },
          { day: 'il giorno dopo', description: 'Nuvoloso', temp: 20 },
          { day: 'Tra tre giorni', description: 'Pioggia', temp: 18 },
        ]);
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert('Errore nel riporto dati');
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (city) {
      fetchWeatherData();
    } else {
      alert('Inserisci la tua città');
    }
  };

  return (
    <Container className="mt-5">
      <h1 className="text-center">MeteoReact</h1>
      <Form onSubmit={handleSearch} className="my-4">
        <Form.Group controlId="cityInput">
          <Form.Label>Inserisci Città:</Form.Label>
          <Form.Control
            type="text"
            placeholder="esempio : , Rome"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">
          Cerca
        </Button>
      </Form>

      {weatherData && <ReactMeteoCardCity weatherData={weatherData} />}

      {forecastData.length > 0 && <ReactMeteoForecast forecastData={forecastData} />}
    </Container>
  );
};

export default ReactMeteoSearchBar;