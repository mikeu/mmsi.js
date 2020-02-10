import { MMSI } from "@mmsi";

test("It left-pads set values shorter than nine characters with 0", () => {
  const mmsi = new MMSI();

  mmsi.identity = "123456";
  expect(mmsi.formatted).toBe("000123456");

  mmsi.identity = "hello";
  expect(mmsi.formatted).toBe("0000hello");

  mmsi.identity = "98765432";
  expect(mmsi.formatted).toBe("098765432");
});