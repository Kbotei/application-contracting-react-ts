import { expect, test } from "vitest";
import { validators } from "../validation";

// Tests: Required validator
test("send null to required validator", () => {
  expect(validators.required(null)).toBe("Required.");
});

test("send empty string to required validator", () => {
  expect(validators.required("")).toBe("Required.");
});

test("send non-empty string to required validator", () => {
  expect(validators.required("test")).toBe(null);
});

// Tests: Phone Number validator
test("send null to phone number validator", () => {
  expect(validators.validPhoneNumber(null)).toBe("Required.");
});

test("send invalid phone number to phone number validator", () => {
  expect(validators.validPhoneNumber("12-323-4567")).toBe(
    "Invalid phone number."
  );
});

test("send invalid phone number to phone number validator", () => {
  expect(validators.validPhoneNumber("(320) 555-1234")).toBe(null);
});
