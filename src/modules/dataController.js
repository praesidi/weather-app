const dataController = (() => {
	const apiKey = '52a94c4a83484cb1a15122652230904';
	const defaultUserLocation = 'Tokyo';
	let userLocation;

	const getWeatherData = async () => {
		try {
			const response = await fetch(
				`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${defaultUserLocation}}`
			);
			const data = await response.json();
			console.log(data);
		} catch (err) {
			console.log(err);
		}
	};

	const getConditionList = async () => {
		try {
			const response = await fetch(
				'https://www.weatherapi.com/docs/weather_conditions.json'
			);
			const list = await response.json();
			console.log(list);
		} catch (err) {
			console.log(err);
		}
	};

	// const saveUserLocation = (position) => {
	// 	userLocation = position;
	// };

	// const handleLocationRequestError = (error) => {
	// 	//userLocation = defaultUserLocation;
	// 	console.log(error);
	// };

	// const requestUserLocation = () => {
	// 	navigator.geolocation.getCurrentPosition(
	// 		saveUserLocation,
	// 		handleLocationRequestError
	// 	);
	// };

	return {
		getWeatherData,
		getConditionList,
		//requestUserLocation,
		getWeatherData,
	};
})();

export default dataController;
