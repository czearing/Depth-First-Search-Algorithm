import * as React from "react";
import { ThemeProvider } from "@fluentui/react";
import "./styles.css";

export default function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <h1 className="header">DFS [ Depth First Search ]</h1>
        <div className="content">
          <h4>Explanation:</h4>
          <p>
            1. Initialize a stack and set it to an array containing the root
            node.
          </p>
          <p>2. While there are items in the stack:</p>
          <p>3. Set the current node to stack.pop();</p>
          <p>4. If the currentNode.value === the searchValue then return.</p>
          <p>5. If there is a left node push it to the stack.</p>
          <p>6. If there is a right node push it to the stack.</p>
          <img
            className="image"
            alt="Diagram"
            src="https://miro.medium.com/max/690/1*JHNQ1UwPJx-l79Mq75eFNw.gif"
          />
          <h4>Time Complexity: O(N) [N = edges in tree]</h4>
          <h4>Auxiliary Space: O(N) [N = nodes stored in queue]</h4>
        </div>
      </div>
    </ThemeProvider>
  );
}
