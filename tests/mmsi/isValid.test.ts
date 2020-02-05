import { MMSI } from "@mmsi";

test("It returns true for valid numeric MMSIs", () => {
  expect(new MMSI(316123456).isValid).toBe(true);
  expect(new MMSI(512987654).isValid).toBe(true);
  expect(new MMSI(258881000).isValid).toBe(true);
  // MMSIs starting with zeros will be zero-padded.
  expect(new MMSI(31612345).isValid).toBe(true);
  expect(new MMSI(3161234).isValid).toBe(true);
});

test("It returns true for valid string MMSIs", () => {
  expect(new MMSI("316123456").isValid).toBe(true);
  expect(new MMSI("512987654").isValid).toBe(true);
  expect(new MMSI("258881000").isValid).toBe(true);
  expect(new MMSI("031612345").isValid).toBe(true);
  expect(new MMSI("003161234").isValid).toBe(true);
  expect(new MMSI("  3161234").isValid).toBe(true);
  expect(new MMSI("3161234").isValid).toBe(true);
})

test("It returns false for invalid MMSIs", () => {
  expect( new MMSI(3.14159).isValid).toBe(false);
  expect( new MMSI("MMSI").isValid).toBe(false);
  expect( new MMSI("99.999999").isValid).toBe(false);
});