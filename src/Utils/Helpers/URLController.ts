import { Flight } from "../../Types/Flight";

function urlController(params: URLSearchParams, flights: Flight[]) {
  const urlValidation = {
    from: checkFromValue(params.get("from"), flights),
    to: checkToValue(params.get("to"), flights),
    fareCategory: checkFareCategoryValue(params.get("fareCategory")),
    passengerCount: checkPassengerCount(params.get("passengerCount")),
  };

  return urlValidation;
}

function checkFromValue(from: string, flights: Flight[]) {
  return checkIsExist(from) && isAvailable(from, flights, "originAirport");
}
function checkToValue(to: string, flights: Flight[]) {
  return checkIsExist(to) && isAvailable(to, flights, "destinationAirport");
}
function checkFareCategoryValue(fareCategory: string) {
  return checkIsExist(fareCategory);
}
function checkPassengerCount(passengerCount: string) {
  return checkIsExist(passengerCount);
}

function checkIsExist(value: string) {
  return value.length ? value : undefined;
}

function isAvailable(value: string, data: Flight[], checkKeyBy: string) {
  const isExist = data.find((flight) =>
    flight[checkKeyBy].name
      .toLocaleLowerCase()
      .includes(value.toLocaleLowerCase())
  );

  return !!isExist ? value : undefined;
}

export default urlController;
