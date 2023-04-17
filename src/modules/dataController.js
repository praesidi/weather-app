const dataController = (() => {
	const apiKey = '52a94c4a83484cb1a15122652230904';
	let userLocation;
	let currentFormat = 'c';

	const setWeatherFormat = (value) => {
		currentFormat = value;
	};

	const getWeatherFormat = () => {
		return currentFormat;
	};

	const setUserLocation = (position) => {
		userLocation = position;
		//console.log(userLocation);
	};

	const getUserLocation = () => {
		return userLocation;
	};

	const getWeatherData = async () => {
		try {
			const response = await fetch(
				`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${userLocation}&aqi=no&alerts=no`
			);
			const data = await response.json();
			const { location, current } = data;
			const dataObj = {
				city: location.name,
				region: location.region,
				country: location.country,
				condition: current.condition.text,
				icon: current.condition.icon,
				feelslike_c: current.feelslike_c,
				feelslike_f: current.feelslike_f,
				humidity: current.humidity,
				last_updated: current.last_updated,
				precip_in: current.precip_in,
				precip_mm: current.precip_mm,
				temp_c: current.temp_c,
				temp_f: current.temp_f,
				wind_kph: current.wind_kph,
				wind_mph: current.wind_mph,
			};

			return dataObj;
		} catch (err) {
			console.log(err);
		}
	};

	const handleUserCoordinates = (position) => {
		const latitude = position.coords.latitude;
		const longitude = position.coords.longitude;
		const userCoordinates = `${latitude},${longitude}`;

		setUserLocation(userCoordinates);
	};

	const requestUserLocation = () => {
		navigator.geolocation.getCurrentPosition(handleUserCoordinates);
	};

	return {
		handleUserCoordinates,
		requestUserLocation,
		getUserLocation,
		setUserLocation,
		getWeatherFormat,
		setWeatherFormat,
		getWeatherData,
	};
})();

export default dataController;
