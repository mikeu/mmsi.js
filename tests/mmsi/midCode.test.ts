import { MMSI } from "@mmsi";

test("It extracts MID codes from vessel MMSIs", () => {
  expect(new MMSI(231123456).MID).toBe("231");
  expect(new MMSI(316123456).MID).toBe("316");
  expect(new MMSI(445123456).MID).toBe("445");
  expect(new MMSI(536123456).MID).toBe("536");
  expect(new MMSI(664123456).MID).toBe("664");
  expect(new MMSI(770123456).MID).toBe("770");
});

test("It extracts MID codes from SAR aircraft MMSIs", () => {
  expect(new MMSI(111316123).MID).toBe("316");
  expect(new MMSI(111512123).MID).toBe("512");
  expect(new MMSI(111403567).MID).toBe("403");
});

test("It extracts MID codes from MMSIs for craft associated with parent ships", () => {
  expect(new MMSI(983169876).MID).toBe("316");
  expect(new MMSI(984459876).MID).toBe("445");
  expect(new MMSI(986649876).MID).toBe("664");
  expect(new MMSI(986089876).MID).toBe("608");
});

test("It extracts MID codes from navigational aid MMSIs", () => {
  expect(new MMSI(993169876).MID).toBe("316");
  expect(new MMSI(994459876).MID).toBe("445");
  expect(new MMSI(996649876).MID).toBe("664");
  expect(new MMSI(996089876).MID).toBe("608");
});

test("It returns undefined when MMSIs do not include MID codes", () => {
  expect(new MMSI(970881234).MID).toBeUndefined();
  expect(new MMSI(972881234).MID).toBeUndefined();
  expect(new MMSI(974881234).MID).toBeUndefined();
  expect(new MMSI(12345678).MID).toBeUndefined();
  expect(new MMSI(123456789).MID).toBeUndefined();
  expect(new MMSI(990000000).MID).toBeUndefined();
  expect(new MMSI(111000000).MID).toBeUndefined();
})