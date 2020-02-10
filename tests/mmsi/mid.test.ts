import { MMSI } from "@mmsi";

test("It extracts MID codes from vessel MMSIs", () => {
  expect(new MMSI(231123456).midCode).toBe("231");
  expect(new MMSI(316123456).midCode).toBe("316");
  expect(new MMSI(445123456).midCode).toBe("445");
  expect(new MMSI(536123456).midCode).toBe("536");
  expect(new MMSI(664123456).midCode).toBe("664");
  expect(new MMSI(770123456).midCode).toBe("770");
});

test("It extracts MID codes from SAR aircraft MMSIs", () => {
  expect(new MMSI(111316123).midCode).toBe("316");
  expect(new MMSI(111512123).midCode).toBe("512");
  expect(new MMSI(111403567).midCode).toBe("403");
});

test("It extracts MID codes from MMSIs for craft associated with parent ships", () => {
  expect(new MMSI(983169876).midCode).toBe("316");
  expect(new MMSI(984459876).midCode).toBe("445");
  expect(new MMSI(986649876).midCode).toBe("664");
  expect(new MMSI(986089876).midCode).toBe("608");
});

test("It extracts MID codes from navigational aid MMSIs", () => {
  expect(new MMSI(993169876).midCode).toBe("316");
  expect(new MMSI(994459876).midCode).toBe("445");
  expect(new MMSI(996649876).midCode).toBe("664");
  expect(new MMSI(996089876).midCode).toBe("608");
});

test("It returns undefined when MMSIs do not include MID codes", () => {
  expect(new MMSI(970881234).midCode).toBeUndefined();
  expect(new MMSI(972881234).midCode).toBeUndefined();
  expect(new MMSI(974881234).midCode).toBeUndefined();
  expect(new MMSI(12345678).midCode).toBeUndefined();
  expect(new MMSI(123456789).midCode).toBeUndefined();
  expect(new MMSI(990000000).midCode).toBeUndefined();
  expect(new MMSI(111000000).midCode).toBeUndefined();
})