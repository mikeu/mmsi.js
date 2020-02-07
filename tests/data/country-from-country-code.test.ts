import { countryFromCountryCode } from "@mmsi/data";

test.each([
  ["CA", "Canada"],
  ["GB", "United Kingdom"],
  ["IS", "Iceland"],
  ["KZ", "Kazakhstan"],
  ["NP", "Nepal"],
  ["PL", "Poland"],
  ["UA", "Ukraine"],
  ["VG", "British Virgin Islands"],
  ["IT", "Italy"],
])("It returns the correct country for given codes", (cc, commonName) => {
  const country = countryFromCountryCode(cc);
  expect(country).toBeDefined();
  expect(country.commonName).toBe(commonName);
});