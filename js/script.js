
// Fonction appelée lors du click du bouton
function start() {
  
    // Récupération de la ville dans l'input
    let ville = document.getElementById('city-input').value;
    // Si la aucune ville n'est rentrée, le paramètre est undifined
    if(ville == '') ville = undefined;
    // Création de l'objet apiWeather et apiWeatherDaily
    const apiWeather = new API_WEATHER(ville);
   // const apiWeatherDaily = new API_WEATHER_DAILY(ville);
 
    
  // Appel de la fonction fetchTodayForecast
  apiWeather
    .fetchTodayForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;

      // On récupère l'information principal
      const main = data.weather[0].main;
      const description = data.weather[0].description;
      const temp = data.main.temp;
      const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);

      // Modifier le DOM
      document.getElementById('today-forecast-main').innerHTML = main;
      document.getElementById('today-forecast-more-info').innerHTML = description;
      document.getElementById('icon-weather-container').innerHTML = icon;
      document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;
      
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
    
    
    // Météo des trois prochains jours
    // Appel de la focntion fetchTomorrowForecast
    apiWeatherDaily
        .fetchTomorrowForecast()
        .then(function(response){
            // Récupère la donnéee de l'API
            const main = data.weather[0].main;
            const description = data.weather[0].description;
            const icon = apiWeatherDaily.getHTMLElementFromIcon(data.weather[0].icon);
        
        // Modifier le DOM
        document.getElementById('today-forecast-main1').innerHTML = main;
        document.getElementById('today-forecast-more-info1').innerHTML = description;
        document.getElementById('icon-weather-container1').innerHTML = icon;
        document.getElementById('today-forecast-temp1').innerHTML = `${temp}°C`;        
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
    
    // fetchAfterTomorrow
    apiWeatherDaily
        .fetchAfterTomorrowForecast()
        .then(function(response){
            // Récupère la donnéee de l'API
            const main = data.weather[1].main;
            const description = data.weather[1].description;
            const icon = apiWeatherDaily.getHTMLElementFromIcon(data.weather[1].icon);
        
        // Modifier le DOM
        document.getElementById('today-forecast-main2').innerHTML = main;
        document.getElementById('today-forecast-more-info2').innerHTML = description;
        document.getElementById('icon-weather-container2').innerHTML = icon;
        document.getElementById('today-forecast-temp2').innerHTML = `${temp}°C`;        
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
    
    // fetchAfterAfterTomorrow
    apiWeatherDaily
        .fetchAfterAfterTomorrowForecast()
        .then(function(response){
            // Récupère la donnéee de l'API
            const main = data.weather[2].main;
            const description = data.weather[2].description;
            const icon = apiWeatherDaily.getHTMLElementFromIcon(data.weather[2].icon);
        
        // Modifier le DOM
        document.getElementById('today-forecast-main3').innerHTML = main;
        document.getElementById('today-forecast-more-info3').innerHTML = description;
        document.getElementById('icon-weather-container3').innerHTML = icon;
        document.getElementById('today-forecast-temp3').innerHTML = `${temp}°C`;        
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}
