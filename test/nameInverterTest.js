const chai = require("chai");
const assert = chai.assert;

const nameInverter = require("../nameInverter");

describe("nameInverter", function () {
  it("should return an empty string when passed an empty string", function () {
    assert.strictEqual(nameInverter(""), "");
  });

  it("should return a single name when passed a single name", function () {
    assert.strictEqual(nameInverter("name"), "name");
  });

  it("should return a single name when passed a single name with extra spaces", function () {
    assert.strictEqual(nameInverter(" name "), "name");
  });

  it("should return a last-name, first-name when passed a first and last-name", function () {
    assert.strictEqual(nameInverter("first last"), "last, first");
  });

  it("should return an empty string when passed a single honorific", function () {
    assert.strictEqual(nameInverter("Dr. "), "");
  });

  it("should return honorific first-name when passed honorific first-name", function () {
    assert.strictEqual(nameInverter("Dr. first"), "Dr. first");
  });

  it("should return a honorific last-name, first-name when passed honorific first-name last-name", function () {
    assert.strictEqual(nameInverter("Dr. first-name last-name"), "Dr. last-name, first-name");
  });

  it("should return a honorific last-name, first-name when passed honorific first-name last-name with extra spaces", function () {
    assert.strictEqual(nameInverter(" Dr. first-name last-name "), "Dr. last-name, first-name");
  });

  it("should throw an error when name is undefined", function () {
    assert.throws(() => nameInverter(undefined), 'Error');
  });
});