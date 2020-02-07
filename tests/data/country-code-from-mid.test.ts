import { countryCodeFromMID } from "@mmsi/data";

test.each([
  ["204", "PT-20"],
  ["215", "MT"],
  ["219", "DK"],
  ["220", "DK"],
  ["229", "MT"],
  ["251", "IS"],
  ["256", "MT"],
  ["316", "CA"],
  ["348", "MS"],
  ["423", "AZ"],
  ["459", "NP"],
  ["531", "LA"],
  ["533", "MY"],
  ["613", "CM"],
  ["668", "ST"],
  ["710", "BR"],
  ["730", "CO"],
  ["760", "PE"],
])("It returns the correct country codes for given MID codes", (MID, cc) => {
  expect(countryCodeFromMID(MID)).toBe(cc);
});