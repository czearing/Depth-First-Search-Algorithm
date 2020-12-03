import { depthFirstSearch } from "./DepthFirstSearch";
import { testTree } from "./TestTree";

describe("DepthFirstSearch", () => {
  it("returns the correct path", () => {
    expect(depthFirstSearch(testTree, testTree[10], "12")).toStrictEqual([
      "10",
      "4",
      "17",
      "1",
      "9",
      "12"
    ]);
  });
  it("handles an item not in the tree", () => {
    expect(depthFirstSearch(testTree, testTree[10], "122")).toStrictEqual(null);
  });
});
