import { useEffect, useState } from 'react';

const LocationComponent = () => {
  const [locationData, setLocationData] = useState(null);

  useEffect(() => {
    // Fetch location data
    fetch('https://ipapi.co/json/')
      .then(response => response.json())
      .then(data => setLocationData(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      {locationData ? (
        <div>
          <h2>Your Location:</h2>
          <p>City: {locationData.city}</p>
          <p>Region: {locationData.region}</p>
          <p>Country: {locationData.country_name}</p>
        </div>
      ) : (
        <p>Loading location data...</p>
      )}
    </div>
  );
};

export default LocationComponent;
