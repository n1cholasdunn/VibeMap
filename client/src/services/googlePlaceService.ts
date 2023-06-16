export const fetchPlaceInfo = async function (
  lat: number,
  lng: number,
  name: string
) {
  const URL = `http://localhost:3333/place/${lat}/${lng}/${name}`;
  return await fetch(URL).then((res) => res.json());
};
