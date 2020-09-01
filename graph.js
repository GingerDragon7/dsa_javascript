// example of graph class

// here, we are using adjacenct list to  implement graph algorithm in javascript

class Graph{
	constructor(noOfVertices)
	{
		this.noOfVertices = noOfVertices;
		this.AdjList = new Map();
	}
}

// implement functions to perform basics operations on the graph 


// addVertex(v)


addVertex(v)
{
	this.AdjList.set(v, []);

}


// addEdge(src,dest)

// add edge to the graph 

addEdge(v,w)
{
	this.AdjList.get(v).push(w);
	this.AdjList.get(w).push(v);
}


// printGraph()
// it prints vertices and adjacency list 

printGraph()
{

}








