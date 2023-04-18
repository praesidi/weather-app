import './styles/main.sass';
import dataController from './modules/dataController';
import domController from './modules/domController';
import handlersController from './modules/handlersController';

async function handleGeolocation(position) {
	dataController.handleUserCoordinates(position);
	const weatherData = await dataController.getWeatherData();
	domController.populateWeatherContainer(
		weatherData,
		dataController.getWeatherFormat()
	);
}

function getCurrentPosition() {
	domController.showLoadingSpinner();
	navigator.geolocation.getCurrentPosition(
		handleGeolocation,
		domController.showGreetingMessage
	);
}

getCurrentPosition();
