import { translateTime } from "../Vendor/components/VendorSignUp";

describe("The time should be converted from a string to an integer ", () => {
  it("and handle times before 1 am", () => {
    expect(translateTime("00:30")).toBe(30);
  });
  it("and handle times before 10 AM", () => {
    expect(translateTime("09:30")).toBe(930);
  });
  it("and handle noon", () => {
    expect(translateTime("12:00")).toBe(1200);
  });
  it("and handle times after noon", () => {
    expect(translateTime("15:30")).toBe(1530);
  });
  it("and handle times in the late after noon", () => {
    expect(translateTime("21:30")).toBe(2130);
  });
  it("and handle midnight", () => {
    expect(translateTime("00:00")).toBe(0);
  });
});
