class Graph {
  constructor() {
    this.vertices = [];
    this.adjacent = new Map();
    this.edges = 0;
  }

  addVertex(v) {
    this.vertices.push(v);
    this.adjacent.set(v, []);
  }

  addEdge(v, w) {
    this.adjacent.get(v).push(w);
    this.adjacent.get(w).push(v);
    this.edges++;
  }

  dfs(startingNode) {
    const visited = new Map();
    this.vertices.forEach((v) => visited.set(v, false));

    return this.dfsHelper(startingNode, visited, []);
  }

  dfsHelper(node, visited, result) {
    visited.set(node, true);
    result.push(node);

    const neighbors = this.adjacent.get(node);
    neighbors.forEach((neighbor) => {
      if (!visited.get(neighbor)) {
        this.dfsHelper(neighbor, visited, result);
      }
    });

    return result;
  }
}

// // 예시를 위한 그래프 생성
// const graph = new Graph();
// const vertices = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
// vertices.forEach((vertex) => graph.addVertex(vertex));
// graph.addEdge("A", "B");
// graph.addEdge("A", "C");
// graph.addEdge("A", "D");
// graph.addEdge("B", "E");
// graph.addEdge("B", "F");
// graph.addEdge("C", "G");
// graph.addEdge("C", "H");
// graph.addEdge("D", "I");

// // 시작 노드 'A'에서 DFS 실행
// const result = graph.dfs("A");
// console.log(result);
