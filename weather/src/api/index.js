const baseURL =
  "https://api.weatherapi.com/v1/current.json?key=bfcb2515fe2a4039a0c51214251212";

export const getWeaterDataForCity = async (city) => {
  const response = await fetch(`${baseURL}&q=${city}&aqi=yes`);
  return await response.json();
};
export const getWeaterDataForLocation = async (lat,lon) => {
  const response = await fetch(`${baseURL}&q=${lat},${lon}&aqi=yes`);
  return await response.json();
};
