import {
  StringtoNumberTime,
  NumbertoStringTime
} from "../Vendor/components/VendorProfileEditorFields";

describe("The time should be converted from a string to an integer ", () => {
  it("and handle times before 1 am", () => {
    expect(StringtoNumberTime("00:30")).toBe(30);
  });
  it("and handle times before 10 AM", () => {
    expect(StringtoNumberTime("09:30")).toBe(930);
  });
  it("and handle noon", () => {
    expect(StringtoNumberTime("12:00")).toBe(1200);
  });
  it("and handle times after noon", () => {
    expect(StringtoNumberTime("15:30")).toBe(1530);
  });
  it("and handle times in the late after noon", () => {
    expect(StringtoNumberTime("21:30")).toBe(2130);
  });
  it("and handle midnight", () => {
    expect(StringtoNumberTime("00:00")).toBe(0);
  });
});

describe("The time should be converted from an integer to a string ", () => {
  it("and handle the transistion from AM to PM", () => {
    expect(NumbertoStringTime(1230)).toBe("12:30");
  });
  it("and handle times before 1 AM", () => {
    expect(NumbertoStringTime(0)).toBe("00:00");
  });
  it("and handle late night hours", () => {
    expect(NumbertoStringTime(2359)).toBe("23:59");
  });
  it("and handle hours before 10 AM", () => {
    expect(NumbertoStringTime(959)).toBe("09:59");
  });
});
