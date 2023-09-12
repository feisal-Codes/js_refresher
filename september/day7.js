/** 

 a summary of the key points and concepts 

**Note 1: Introduction to Graph Data Structure**

- **Definition:** A graph is a data structure that consists of nodes (vertices) and edges connecting these nodes.

- **Types of Graphs:** Graphs can be categorized as directed or undirected, weighted or unweighted.

- **Example:** A social network can be represented as a graph, where users are nodes, and friendships are edges.

**Note 2: Advantages and Use Cases of Graphs**

- **Advantages:**
  - Graphs are versatile and can model various real-world relationships.
  - They allow efficient representation and analysis of complex networks.

- **Use Cases:**
  - Social networks, transportation networks, and computer networks can be represented using graphs.
  - Graph algorithms are used in route planning, recommendation systems, and more.

**Note 3: Building a Graph in JavaScript**

```javascript
function buildGraph(edges) {
  let graph = Object.create(null);

  function addEdge(from, to) {
    if (graph[from] == null) {
      graph[from] = [to];
    } else {
      graph[from].push(to);
    }
  }

  for (let [from, to] of edges.map(r => r.split("-"))) {
    addEdge(from, to);
    addEdge(to, from);
  }

  return graph;
}
```

- Explanation: This code builds an undirected graph from an array of edge strings.

**Note 4: Recursive Functions**

- **Definition:** Recursive functions are functions that call themselves with modified arguments.

- **Example:**
  ```javascript
  function factorial(n) {
    if (n === 0) {
      return 1;
    }
    return n * factorial(n - 1);
  }
  ```

- **N/B:** Recursive functions require a base case to terminate.

**Note 5: Unwinding the Stack in Recursive Functions**

- **Definition:** After reaching the base case, the program "unwinds" the stack, calculating results for higher levels using results from lower levels.

- **Example:** In the factorial example, after calculating `factorial(0)`, the stack unwinds to calculate `factorial(1)`, `factorial(2)`, and so on.

**Note 6: Array Indexing and Length**

- **Definition:** Arrays in JavaScript are indexed starting from 0, and their length represents the number of elements.

- **Example:**
  ```javascript
  let fruits = ["apple", "banana", "cherry"];
  console.log(fruits[0]); // Outputs "apple"
  console.log(fruits.length); // Outputs 3
  ```

**Note 7: Implementing the `unshift` Function**

```javascript
function unshift(array, ...elements) {
  const newarr = [];

  // Populate the new array with elements
  for (let i = 0; i < elements.length; i++) {
    newarr[i] = elements[i];
  }

  for (let i = 0; i < array.length; i++) {
    newarr[elements.length + i] = array[i];
  }

  return newarr;
}
```

- Explanation: This code implements the `unshift` function using loops.

**Note 8: Optimized Bubble Sort**

```javascript
function optimizedBubbleSort(array) {
  let n = array.length;
  let swapped;

  do {
    swapped = false;

    for (let i = 0; i < n - 1; i++) {
      if (array[i] > array[i + 1]) {
        // Swap elements
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swapped = true;
      }
    }

    n--; // Reduce the loop size by 1 after each pass

  } while (swapped);

  return array;
}
```

- Explanation: This code implements the optimized bubble sort algorithm.

**Note 9: Key Concepts in Bubble Sort**

- **Bubble Sort:** A simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.

- **Optimization:** After each pass, the largest unsorted element is guaranteed to be at the end, so the loop size is reduced by 1 to optimize the algorithm.




*/