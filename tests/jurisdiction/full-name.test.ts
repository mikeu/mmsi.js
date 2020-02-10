import { Jurisdiction } from "@mmsi/jurisdiction";

test("It returns the name as the full name, when no full name is specified in constructor", () => {
  expect(new Jurisdiction("TS", "Test").fullName).toBe("Test");
});

test("It returns the name as the full name after setting property", () => {
  const j = new Jurisdiction("TS", "Test");

  j.name = "Something else";

  expect(j.fullName).toBe("Something else");
})

test("It returns full name set through constructor", () => {
  expect(new Jurisdiction("TS", "Test", "This is only a test").fullName).toBe("This is only a test");
})

test("It returns full name set via property", () => {
  const j = new Jurisdiction("TS", "Test");

  j.fullName = "This is only a test";

  expect(j.fullName).toBe("This is only a test");
})