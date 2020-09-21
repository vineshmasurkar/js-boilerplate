const getAboutUsLink = require("../aboutus");

test("Returns about-us for English language", () => {
  expect(getAboutUsLink("en-US")).toBe("/about-us");
});

test("Returns default (czech) o-nas for invalid language", () => {
  expect(getAboutUsLink("xx-XX")).toBe("/o-nas");
});
