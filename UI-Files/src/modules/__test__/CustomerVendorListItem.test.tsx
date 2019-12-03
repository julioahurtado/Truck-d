import { NumbertoStringTime } from "../Customer/components/CustomerVendorListItem";

describe("The time should be converted from an integer to a string ", () => {
  it("and handle the transistion from AM to PM", () => {
    expect(NumbertoStringTime(1230)).toBe("12:30 P.M.");
  });
  it("and handle times before 1 AM", () => {
    expect(NumbertoStringTime(0)).toBe("12:00 A.M.");
  });
  it("and handle late night hours", () => {
    expect(NumbertoStringTime(2359)).toBe("11:59 P.M.");
  });
  it("and handle hours before 10 AM", () => {
    expect(NumbertoStringTime(959)).toBe("09:59 A.M.");
  });
});
