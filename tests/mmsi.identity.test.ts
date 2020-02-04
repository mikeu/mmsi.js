import { MMSI } from "../src/index";

test("It left-pads set values shorter than nine characters with 0", () => {
  const mmsi = new MMSI();

  mmsi.identity = "123456";
  expect(mmsi.identity).toBe("000123456");

  mmsi.identity = "hello";
  expect(mmsi.identity).toBe("0000hello");

  mmsi.identity = "98765432";
  expect(mmsi.identity).toBe("098765432");
});

test("It truncates longer set values down to the left-most nine characters", () => {
  const mmsi = new MMSI();
  
  mmsi.identity = "1234567890";
  expect(mmsi.identity).toBe("123456789");

  mmsi.identity = "Hello, world!";
  expect(mmsi.identity).toBe("Hello, wo");
});