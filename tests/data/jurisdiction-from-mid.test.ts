import { jurisdictionFromMID } from "@mmsi/data";

test.each([
  ["204", "Azores"],
  ["215", "Malta"],
  ["219", "Denmark"],
  ["220", "Denmark"],
  ["229", "Malta"],
  ["251", "Iceland"],
  ["256", "Malta"],
  ["316", "Canada"],
  ["348", "Montserrat"],
  ["423", "Azerbaijan"],
  ["459", "Nepal"],
  ["531", "Laos"],
  ["533", "Malaysia"],
  ["613", "Cameroon"],
  ["668", "São Tomé and Príncipe"],
  ["710", "Brazil"],
  ["730", "Colombia"],
  ["760", "Peru"],
])("It returns the correct jurisdiction codes for given MID codes", (MID, commonName) => {
  const j = jurisdictionFromMID(MID);
  expect(j).toBeDefined();
  expect(j.name).toBe(commonName);
});