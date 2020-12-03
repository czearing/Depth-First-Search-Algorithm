export const depthFirstSearch = (tree, rootNode, searchValue) => {
  let stack = [rootNode];
  let bestPath = [];
  let currentNode;
  while (stack.length) {
    currentNode = stack.pop();
    bestPath.push(currentNode.value);
    if (currentNode.value === searchValue) {
      return bestPath;
    }
    if (currentNode.left) {
      stack.push(tree[currentNode.left]);
    }
    if (currentNode.right) {
      stack.push(tree[currentNode.right]);
    }
  }
  return null;
};
