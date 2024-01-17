import getLevel from "../get.Level";
import fetchData from "../http";

jest.mock("../http");

beforeEach(() => {
  jest.resetAllMocks();
});

describe("test function getLevel", () => {
  describe("fetchData return status ok", () => {
    test("userId = 1", () => {
      fetchData.mockReturnValue({ status: "ok", level: "standard" });
      const result = getLevel(1);

      expect(result).toBe(`Ваш текущий уровень: standard`);
    });

    test("userId = 2", () => {
      fetchData.mockReturnValue({ status: "ok", level: "standard" });
      const result = getLevel(2);

      expect(result).toBe(`Ваш текущий уровень: standard`);
    });
  });

  describe("fetchData return status not ok", () => {
    test("userId = 1", () => {
      fetchData.mockReturnValue({ status: false });
      const result = getLevel(1);

      expect(result).toBe(`Информация об уровне временно недоступна`);
    });
  });
});
