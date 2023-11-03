import { Box, Container, Typography } from "@mui/material";
import { useState, useEffect } from "react";

const weatherApiKey = import.meta.env.VITE_WEATHER_API_KEY;
//const weatherApiKey = "";
const API_WEATHER = `http://api.weatherapi.com/v1/current.json?key=${weatherApiKey}&lang=es&q=-34.86649,-61.5302`;

function CardClima() {
  const [city, setCity] = useState("");
  const [error, setError] = useState({
    error: false,
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const [weather, setWeather] = useState({
    city: "",
    country: "",
    temperature: 0,
    condition: "",
    conditionText: "",
    icon: "",
  });

  const fetchApiWeather = async () => {
    setError({ error: false, message: "" });
    setLoading(true);

    try {
      const res = await fetch(API_WEATHER + city);
      const data = await res.json();

      if (data.error) {
        throw { message: data.error.message };
      }

      setWeather({
        city: data.location.name,
        country: data.location.country,
        temperature: data.current.temp_c,
        condition: data.current.condition.code,
        conditionText: data.current.condition.text,
        icon: data.current.condition.icon,
      });
    } catch (error: any) {
      setError({ error: true, message: error.message });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApiWeather();
  }, []);

  /* 
   
  */
  return (
    <Container maxWidth="xs" sx={{ mt: 2 }}>
      <Box
        sx={{
          display: "grid",
          gap: 2,
          textAlign: "center",
        }}
      >
        <Typography variant="h4" component="h2">
          {weather.city}, {weather.country}
        </Typography>
        <Box
          component="img"
          alt={weather.conditionText}
          src={weather.icon}
          sx={{ margin: "0 auto" }}
        />
        <Typography variant="h5" component="h3">
          {weather.temperature} °C
        </Typography>
        <Typography variant="h6" component="h4">
          {weather.conditionText}
        </Typography>
      </Box>

      <Typography textAlign="center" sx={{ mt: 2, fontSize: "10px" }}>
        Powered by:{" "}
        <a href="https://www.weatherapi.com/" title="Weather API">
          WeatherAPI.com
        </a>
      </Typography>
    </Container>
  );
}

export { CardClima };
