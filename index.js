function findMatching(drivers, stringName) {
  const lowerCaseName = stringName.toLowerCase();
  return drivers.filter(
    (stringName) => stringName.toLowerCase() === lowerCaseName
  );
}
function fuzzyMatch(drivers, letters) {
  return drivers.filter((driver) => driver.startsWith(letters));
}
function matchName(drivers, stringName) {
  return drivers.filter((drivers) => drivers.name === stringName);
}
