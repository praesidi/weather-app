import dataController from './dataController';
import domController from './domController';

const handlersController = (() => {
	const form = document.getElementById('form');
	const searchbar = document.getElementById('searchbar');
	const formatSwitcher = document.getElementById('format-switcher');

	const changeCurrentFormat = () => {
		if (formatSwitcher.checked) {
			dataController.setWeatherFormat('f');
		} else {
			dataController.setWeatherFormat('c');
		}

		domController.populateWeatherContainer(
			dataController.getLastFetchedData(),
			dataController.getWeatherFormat()
		);
	};

	async function handleSearchbar(e) {
		e.preventDefault();
		dataController.setUserLocation(searchbar.value);
		try {
			const weatherData = await dataController.getWeatherData();
			domController.populateWeatherContainer(
				weatherData,
				dataController.getWeatherFormat()
			);
		} catch (err) {
			domController.showErrorMessage();
		}
	}

	form.addEventListener('submit', handleSearchbar);
	formatSwitcher.addEventListener('change', changeCurrentFormat);
})();

export default handlersController;
