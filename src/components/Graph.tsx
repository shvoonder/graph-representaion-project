import * as React from 'react';
import { GraphView,IEdge,INode} from 'react-digraph';
import { NODE_KEY} from 'src/graphConfig';
// import { classNames } from 'react-select/src/utils';
// import { throws } from 'assert';


export interface IGraphConfig {
  NodeTypes: INodeTypes,
  NodeSubTypes:INodeSubTypes
  EdgeTypes: IEdgeTypes
}

interface INodeSubTypes{
    emptyNode: {
        shapeId: string;
        shape: JSX.Element;
    };
}
interface INodeTypes {
  emptyNode: {
      shapeId: string;
      shape: JSX.Element;
      typeText: string;
  };
  empty: {
    shapeId: string;
    shape: JSX.Element;
    typeText: string;
  };
  special:{
    shapeId: string;
    shape: JSX.Element;
    typeText: string;
  };
}
interface IEdgeTypes {
    emptyEdge: {
        shapeId: string;
        shape: JSX.Element;
    };
  
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
    GraphView: React.Component<import("react-digraph").IGraphViewProps, any, any> | React.RefObject<unknown> | null;

  
  constructor(props) {
    super(props);
      
    this.state = {graph: {nodes: [],edges: []}, selected: null }
  }
  
  onSelectNode = (viewNode: INode) => {
    this.setState({ selected: viewNode });
  };


  /* calcWeight = (viewNode:INode) => {
    let count=0;  
     for(const Edge of this.state.graph.edges ){
          if(Edge.source[NODE_KEY]===viewNode[NODE_KEY]){
            count++;
          }  
      }
      return count; 
  }; */
   
  
  
  
  /* id: this.state.graph.nodes.length+1,
     title:(0).toString(),
    type:"emptyNode",
    x:0,
    y:0,
    weight:0 */

  onCreateNode =(x: number, y: number) =>{
     const graph = this.state.graph
     const type = "emptyNode";
     const viewNode = {  
       id: this.state.graph.nodes.length+1,
       title:(0).toString(),
       type,
       x,
       y,
       weight:0,
     };
     graph.nodes = [...graph.nodes, viewNode];
    this.setState({ graph });
    };
    

    getNodeIndex=(node: INode)=> {
        return this.state.graph.nodes.findIndex(node => {
          return node[NODE_KEY] === node[NODE_KEY];
        });
      }
    
    getEdgeIndex=(edge: IEdge) =>{
        return this.state.graph.edges.findIndex(edgeCheck => {
            return(edgeCheck.source === edge.source && edgeCheck.target===edge.target 
            );   
        });
      }

   onUpdateNode= (node: INode) =>{
        const graph = this.state.graph;
        const i = this.getNodeIndex(node);
    
        graph.nodes[i] = node;
        this.setState({ graph });
      };

    onDeleteNode =(viewNode: INode, nodeId: string, nodeArr: INode[])=>{
        const graph = this.state.graph;
        for(const Edge of this.state.graph.edges ){
            if(Edge.target===viewNode[NODE_KEY]){
                this.updateWeight(Edge);
            }
        }
        const newEdges = graph.edges.filter((edge, i) => {
          return (
            edge.source !== viewNode[NODE_KEY] && edge.target !== viewNode[NODE_KEY]
          );
        });
        
        graph.nodes = nodeArr;
        graph.edges = newEdges;
    
        this.setState({ graph, selected: null });
      };

      onSelectEdge = (viewEdge: IEdge) => {
        this.setState({ selected: viewEdge });
      };

    onCreateEdge= (sourceViewNode: INode, targetViewNode: INode)=>{
        const graph = this.state.graph;
        const type ="emptyEdge"
        const viewEdge = {
          source: sourceViewNode[NODE_KEY],
          target: targetViewNode[NODE_KEY],
          type,
        };
        if (viewEdge.source !== viewEdge.target) {
          sourceViewNode.weight+=1;
          sourceViewNode.title=sourceViewNode.weight.toString();
          graph.edges = [...graph.edges, viewEdge];
          this.setState({graph,selected: viewEdge
          });
        }
      };
    
      
     onSwapEdge =(sourceViewNode: INode,targetViewNode: INode,viewEdge: IEdge)=>{
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

    updateWeight=(viewEdge:IEdge)=>{
        for(const Node of this.state.graph.nodes ){
            if(Node[NODE_KEY]===viewEdge.source){ 
            Node.weight-=1;
            Node.title=Node.weight.toString();
            }
        }
    };

    onDeleteEdge =(viewEdge: IEdge, edges: IEdge[])=> {
        const graph = this.state.graph;
        this.updateWeight(viewEdge);
        graph.edges = edges;
        this.setState({
            graph,
            selected: null,
        });
    };
    addStartNode = () => {
        const graph = this.state.graph;
        graph.nodes = [
          {
            id: this.state.graph.nodes.length+1,
            title:(0).toString(),
            type:"emptyNode",
            x:0,
            y:0,
            weight:0,
          },
          ...this.state.graph.nodes,
        ];
        this.setState({
          graph,
        });
      };
      deleteStartNode = () => {
        const graph = this.state.graph;
        graph.nodes.splice(0, 1);
        graph.nodes = [...this.state.graph.nodes];
        this.setState({
          graph,
        });
      };

      handleChange = (event: any) => {
        this.ERFunction(5,0.5)
      };
    



    ERFunction=(n:number , p: number)=>{
        let x:number;
        let y:number;
        let c:number;
        for (let i=0; i<n ; i++ ){
            x=Math.floor(Math.random() * 3000)+60;
            y=Math.floor(Math.random() * 3000)+60;
            this.onCreateNode(x, y);
        }
        for (const Node1  of this.state.graph.nodes){
            for (const Node2 of this.state.graph.nodes){
                c=Math.random();
                if(c>p && Node1[NODE_KEY]!==Node2[NODE_KEY]){
                    this.onCreateEdge(Node1,Node2);

                }
            }
        }
    };
    
    
    render() {
        const { graphConfig } = this.props
        const { NodeTypes,NodeSubTypes,EdgeTypes } = graphConfig
        const { graph, selected } = this.state
        const { nodes, edges } = graph
        this.GraphView = React.createRef();

        return (
          <div id='graph' style={{height:1000}}>
           <div className="graph-header">
          <button onClick={this.addStartNode}>Add Node</button>
          <button onClick={this.deleteStartNode}>Delete Node</button>
          <input
            className="total-nodes"
            type="number"
            onBlur={this.handleChange}
          />
          />
          </div>
            <GraphView ref={el => (this.GraphView = el)}
                        nodeKey={NODE_KEY}
                        nodes={nodes}
                        edges={edges}
                        selected={selected}
                        nodeTypes={NodeTypes}
                        nodeSubtypes={NodeSubTypes}
                        edgeTypes={EdgeTypes}
                        onSelectNode={this.onSelectNode}
                        onCreateNode={this.onCreateNode}
                        onUpdateNode={this.onUpdateNode}
                        onDeleteNode={this.onDeleteNode}
                        onSelectEdge={this.onSelectEdge}
                        onCreateEdge={this.onCreateEdge}
                        onSwapEdge={this.onSwapEdge}
                        onDeleteEdge={this.onDeleteEdge}
                        />
          </div>
        );
      }
}  




