import { deepEqual } from "node:assert/strict";
import { test } from "node:test";
import { greet } from "./index";

test("should greet person", () => {
  const result = greet("Alek");
  deepEqual(result, { message: "Welcome, Alek!" });
});
test("empty input should return Invalid name provided", () => {
  const result = greet("");
  deepEqual(result, { error: "Invalid name provided." });
});
