import { jurisdictionFromCode } from "@mmsi/data";

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
])("It returns the correct jurisdictions for given codes", (cc, commonName) => {
  const j = jurisdictionFromCode(cc);
  expect(j).toBeDefined();
  expect(j.name).toBe(commonName);
});