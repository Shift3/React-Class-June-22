export default function changeLocation(location) {
  console.log(location);
  return { type: "CHANGE_LOCATION", payload: location };
}
