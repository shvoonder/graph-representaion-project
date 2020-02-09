import * as React from 'react';
import { GraphView } from 'react-digraph';
import { GraphConfig, NODE_KEY, sample } from 'src/graphConfig'
import { node } from 'prop-types';

export interface IGraphConfig {
  NodeTypes: INodeTypes,
  NodeSubtypes: INodeSubtypes
  EdgeTypes: IEdgeTypes
}

interface INode {
  id: number,
  title: string,
  x: number,
  y: number,
  type: string
}

interface IEdge {
  source: number
  target: number
  type: string
}

interface INodeTypes {
  empty: {
      typeText: string;
      shapeId: string;
      shape: JSX.Element;
  };
  custom: {
      typeText: string;
      shapeId: string;
      shape: JSX.Element;
  };
}

interface INodeSubtypes {

}

interface IEdgeTypes {
  EdgeTypes: {
    emptyEdge: {
        shapeId: string;
        shape: JSX.Element;
    };
  }
}

interface IGraph {
  nodes: INode[],
  edges: IEdge[]
}

interface IGraphProps {
  graphConfig: IGraphConfig
}

interface IGraphState {
  graph: IGraph,
  selected: any
}

export class Graph extends React.Component<IGraphProps, IGraphState> {
  
  constructor(props) {
    super(props);
      
    this.state = {
      graph: {
        nodes: [],
        edges: []
      },
      selected: []
    }
  }
  
  /* Define custom graph editing methods here */
  
  render() {
    const { graphConfig } = this.props
    const { NodeTypes, NodeSubtypes, EdgeTypes } = graphConfig
    const { graph, selected } = this.state
    const { nodes, edges } = graph
  
    return (
      <div id='graph' style={{}}>
        <GraphView  ref='GraphView'
                    nodeKey={NODE_KEY}
                    nodes={nodes}
                    edges={edges}
                    selected={selected}
                    nodeTypes={NodeTypes}
                    nodeSubtypes={NodeSubtypes}
                    edgeTypes={EdgeTypes}
                    onSelectNode={this.onSelectNode}
                    onCreateNode={this.onCreateNode}
                    onUpdateNode={this.onUpdateNode}
                    onDeleteNode={this.onDeleteNode}
                    onSelectEdge={this.onSelectEdge}
                    onCreateEdge={this.onCreateEdge}
                    onSwapEdge={this.onSwapEdge}
                    onDeleteEdge={this.onDeleteEdge}/>
      </div>
    );
  }
  
  onSelectNode(node: INode) {
    const { selected } = this.state
    selected.push(node)
    this.setState({
      selected: selected
    })
  }

  onCreateNode = (x: number, y: number) => {
    const graph = this.state.graph;
    const type = "Custom";
    const viewNode = {
      id: Date.now(),
      title: '',
      type,
      x,
      y,
    };
    }

    getNodeIndex(node: INode) {
        return this.state.graph.nodes.findIndex(node => {
          return node[NODE_KEY] === node[NODE_KEY];
        });
      }
    
    getEdgeIndex(edge: IEdge) {
        return this.state.graph.edges.findIndex(edgeCheck => {
            return(edgeCheck.source === edge.source && edgeCheck.target===edge.target 
            );   
        });
      }

   onUpdateNode (node: INode) {
        const graph = this.state.graph;
        const i = this.getNodeIndex(node);
    
        graph.nodes[i] = node;
        this.setState({ graph });
      };

    onDeleteNode (node: INode, nodeId: string, nodeArr: INode[]){
            const graph = this.state.graph;
            const newEdges = graph.edges.filter((edge, i) => {
              return (
                edge.source !== node[NODE_KEY] && edge.target !== node[NODE_KEY]
              );
            });  
      }
    onSelectEdge(edge:IEdge){
        const {selected}=this.state;
        selected.push(edge)
        this.setState({selected:selected});
    }


    onCreateEdge (sourceViewNode: INode, targetViewNode: INode){
        const graph = this.state.graph;
        const type ="Custom"
        const viewEdge = {
          source: sourceViewNode[NODE_KEY],
          target: targetViewNode[NODE_KEY],
          type,
        };
        if (viewEdge.source !== viewEdge.target) {
          graph.edges = [...graph.edges, viewEdge];
          this.setState({
            graph,
            selected: viewEdge,
          });
        }
      };
    
      
     onSwapEdge (sourceViewNode: INode,targetViewNode: INode,viewEdge: IEdge){
        const graph = this.state.graph;
        const i = this.getEdgeIndex(viewEdge);
        const edge = JSON.parse(JSON.stringify(graph.edges[i]));

        edge.source = sourceViewNode[NODE_KEY];
        edge.target = targetViewNode[NODE_KEY];
        graph.edges[i] = edge;
        graph.edges = [...graph.edges];
        this.setState({
            graph,
            selected: edge,
        });
    };
    onDeleteEdge (viewEdge: IEdge, edges: IEdge[]) {
        const graph = this.state.graph;

        graph.edges = edges;
        this.setState({
            graph,
            selected: null,
        });
    };





    }  




