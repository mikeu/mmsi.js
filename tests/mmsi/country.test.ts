import { MMSI } from "@mmsi";

test.each([
  // Vessels
  [231123456, "Faroe Islands"],
  [316123456, "Canada"],
  [445123456, "North Korea"],
  [536123456, "Northern Mariana Islands"],
  [664123456, "Seychelles"],
  [770123456, "Uruguay"],
  // SAR aircraft
  [111316123, "Canada"],
  [111512123, "New Zealand"],
  [111403567, "Saudi Arabia"],
  // Craft associated with parent ships
  [983169876, "Canada"],
  [984459876, "North Korea"],
  [986649876, "Seychelles"],
  [986089876, "Ascension Island"],
  [993169876, "Canada"],
  [994459876, "North Korea"],
  [996649876, "Seychelles"],
  [996089876, "Ascension Island"],
])("It extracts country names from MMSIs with valid MIDs", (mmsi, commonName) => {
  const country = new MMSI(mmsi).country;
  expect(country).toBeDefined();
  expect(country.commonName).toBe(commonName);
});

test.each([
  [970881234],
  [972881234],
  [974881234],
  [12345678],
  [123456789],
  [990000000],
  [111000000],
])("It returns undefined when MMSIs do not include country names", (mmsi) => {
  expect(new MMSI(mmsi).country).toBeUndefined();
})