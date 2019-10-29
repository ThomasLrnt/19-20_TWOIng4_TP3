// API : https://openweathermap.org/api

// Clé api
const API_KEY = "4081444b7b90198136fefe6ed4ccf35b";
// Url API
const API_URL = "https://api.openweathermap.org/data/2.5/forecast/daily/";
// Base source icon
const API_URL_ICON = "http://openweathermap.org/img/wn/";


class API_WEATHER_DAILY{
  constructor(city){
    // Si la ville n'est pas définit alors la ville par défault est Paris
    if(city === undefined){
      city = "paris";
    }
    this.city = city;
  }

  // Faire la requete à l'API openweathermap
  // Retourne une promise - Météo de demain
  fetchTomorrowForecast(){
    return axios
    .get(`${API_URL}?q=${this.city}&cnt=1&units=metric&appid=${API_KEY}`, {
      crossdomain: true
    })
  }
    
    
  // Retourne une promise - Météo de demain
  fetchAfterTomorrowForecast(){
    return axios
    .get(`${API_URL}?q=${this.city}&cnt=2&units=metric&appid=${API_KEY}`, {
      crossdomain: true
    })
  }    
    
  // Retourne une promise - Météo de demain
  fetchAfterAfterTomorrowForecast(){
    return axios
    .get(`${API_URL}?q=${this.city}&cnt=3&units=metric&appid=${API_KEY}`, {
      crossdomain: true
    })
  }
}