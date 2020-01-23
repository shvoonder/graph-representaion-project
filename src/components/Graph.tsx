import * as React from 'react';
import { GraphView } from 'react-digraph';
import { GraphConfig, NODE_KEY, sample } from 'src/graphConfig'

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
  selected: INode[]
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

}