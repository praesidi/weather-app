const domController = (() => {
	const weatherContainer = document.getElementById('weather-container');

	const createWeatherWidget = (obj, format) => {
		const weatherInfo = String.raw`
      <div class="weather-header">
        <span>${
					format === 'c' ? `${obj.temp_c} &#8451;` : `${obj.temp_f} &#8457;`
				}</span>
        <div class="weather-icon">
          <img src=${obj.icon} alt="weather icon">
        </div>
      </div>
      <div class="weather-body">
        <div class="left-col">
          <p><span>Feels Like:</span> ${
						format === 'c'
							? `${obj.feelslike_c} &#8451;`
							: `${obj.feelslike_f} &#8457;`
					}</p>
          <p><span>Humidity:</span> ${obj.humidity}%</p>
          <p><span>Wind:</span> ${
						format === 'c' ? `${obj.wind_kph} kp/h` : `${obj.wind_mph} mp/h`
					}</p>
          <p><span>Precipitation:</span> ${
						format === 'c' ? `${obj.precip_mm} mm` : `${obj.precip_in} in`
					}</p>
        </div>
        <div class="right-col">
          <p><span>Condition:</span> ${obj.condition}</p>
          <p><span>City:</span> ${obj.city}</p>
          <p><span>Region:</span> ${obj.region}</p>
          <p><span>Country:</span> ${obj.country}</p>
        </div>
      </div>
      <div class="weather-footer">
        <p><span>Last Updated:</span> ${obj.last_updated}<p>
      </div>
    `;

		return weatherInfo;
	};

	const createErrorMessage = () => {
		const error = String.raw`
			<h1 style="text-align: center;">Something went wrong ;(</h1>
			<h3 style="text-align: center;">Please try searching again...</p>
		`;

		return error;
	};

	const createGreetingMessage = () => {
		const error = String.raw`
			<h1 style="text-align: center;">Welcome to the Weather App!</h1>
			<h3 style="text-align: center;">Please select a location to get weather information</h3>
		`;

		return error;
	};

	const populateWeatherContainer = (obj, format) => {
		weatherContainer.textContent = '';
		weatherContainer.innerHTML = createWeatherWidget(obj, format);
	};

	const showErrorMessage = () => {
		weatherContainer.textContent = '';
		weatherContainer.innerHTML = createErrorMessage();
	};

	const showGreetingMessage = () => {
		weatherContainer.textContent = '';
		weatherContainer.innerHTML = createGreetingMessage();
	};

	const showLoadingSpinner = () => {
		weatherContainer.textContent = '';
		weatherContainer.innerHTML = '<span class="loader"></span>';
	};

	return {
		populateWeatherContainer,
		showGreetingMessage,
		showLoadingSpinner,
		showErrorMessage,
	};
})();

export default domController;
