import { convertJsonToTs } from "../src/index";
describe("convertJsonToTs - Additional Test Cases", () => {
  it.skip("should handle empty arrays gracefully", () => {
    const json = { emptyArray: [] };
    const result = convertJsonToTs(json, "Root");

    const expected = `
    interface Root {
      emptyArray: any[];
    }
  `.trim();

    expect(result.trim().replace(/\s+/g, " ")).toBe(
      expected.replace(/\s+/g, " ")
    );
  });

  it("should handle mixed nested arrays", () => {
    const json = { nested: [[[1]], [2], 3] };
    const result = convertJsonToTs(json, "Root");

    const expected = `
    interface Root {
      nested: number[][][];
    }
    `.trim();

    expect(result.trim().replace(/\s+/g, " ")).toBe(
      expected.replace(/\s+/g, " ")
    );
  });

  it("should handle dates as Date type", () => {
    const json = { createdAt: "2023-01-01T12:00:00Z", updatedAt: null };
    const result = convertJsonToTs(json, "Root");

    const expected = `
    interface Root {
      createdAt: Date;
      updatedAt?: any;
    }
    `.trim();

    expect(result.trim().replace(/\s+/g, " ")).toBe(
      expected.replace(/\s+/g, " ")
    );
  });

  it("should handle deeply nested objects", () => {
    const json = {
      level1: {
        level2: {
          level3: {
            level4: {
              value: "deep",
            },
          },
        },
      },
    };
    const result = convertJsonToTs(json, "Root");

    const expected = `
    interface Root {
      level1: Level1;
    }
    interface Level1 {
      level2: Level2;
    }
    interface Level2 {
      level3: Level3;
    }
    interface Level3 {
      level4: Level4;
    }
    interface Level4 {
      value: string;
    }
    `.trim();

    expect(result.trim().replace(/\s+/g, " ")).toBe(
      expected.replace(/\s+/g, " ")
    );
  });

  it("should handle circular references", () => {
    const json: any = {};
    json.self = json; // Circular reference

    expect(() => convertJsonToTs(json, "Root")).toThrow(
      /Circular reference detected in Root/
    );
  });

  it("should handle empty objects", () => {
    const json = { emptyObject: {} };
    const result = convertJsonToTs(json, "Root");

    const expected = `
    interface Root {
      emptyObject: EmptyObject;
    }
    interface EmptyObject {}
    `.trim();

    expect(result.trim().replace(/\s+/g, " ")).toBe(
      expected.replace(/\s+/g, " ")
    );
  });

  it("should handle arrays of objects", () => {
    const json = { items: [{ name: "Item 1" }, { name: "Item 2" }] };
    const result = convertJsonToTs(json, "Root");

    const expected = `
    interface Root {
      items: Item[];
    }
    interface Item {
      name: string;
    }
    `.trim();

    expect(result.trim().replace(/\s+/g, " ")).toBe(
      expected.replace(/\s+/g, " ")
    );
  });
});
