import './styles/main.sass';
import dataController from './modules/dataController';
import domController from './modules/domController';
//import handlersController from './modules/handlersController';

async function handleGeolocation(position) {
	dataController.handleUserCoordinates(position);
	const weatherData = await dataController.getWeatherData();
	console.log(weatherData);
	domController.populateWeatherContainer(
		weatherData,
		dataController.getWeatherFormat()
	);
}

function getCurrentPosition() {
	navigator.geolocation.getCurrentPosition(handleGeolocation);
}

getCurrentPosition();
