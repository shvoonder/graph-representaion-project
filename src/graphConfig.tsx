import * as React from 'react'


 // const EMPTY_TYPE = 'customEmpty';  Empty node type
 // const SPECIAL_TYPE = 'special';
 // const EMPTY_EDGE_TYPE = 'emptyEdge';
 // const SPECIAL_EDGE_TYPE = 'specialEdge';


 // const nodeTypes = [EMPTY_TYPE,SPECIAL_TYPE];
 // const edgeTypes = [EMPTY_EDGE_TYPE, SPECIAL_EDGE_TYPE];
export const GraphConfig =  {
    
    NodeTypes: {
      empty: { // required to show empty nodes
        typeText: "None",
        shapeId: "#empty", // relates to the type property of a node
        shape: (
          <symbol viewBox="0 0 100 100" id="empty" key="0">
            <circle cx="50" cy="50" r="45"/>
          </symbol>
        )
      },
      custom: { // required to show empty nodes
        typeText: "Custom",
        shapeId: "#custom", // relates to the type property of a node
        shape: (
          <symbol viewBox="0 0 50 25" id="custom" key="0">
            <ellipse cx="50" cy="25" rx="50" ry="25"/>
          </symbol>
        )
      }
    },
     EdgeTypes: {
        emptyEdge: { 
            shapeId: "#empty", 
            shape: (
              <symbol id="empty" key="0">
                <line />
              </symbol>
            )
            }
        }
  }

   
  export const NODE_KEY = "id"       // Allows D3 to correctly update DOM

  export const sample = {
    "graph": {
        "nodes": [
        {
            "id": 1,
            "title": "Node A",
            "x": 258.3976135253906,
            "y": 331.9783248901367,
            "type": "empty"
        },
        {
            "id": 2,
            "title": "Node B",
            "x": 593.9393920898438,
            "y": 260.6060791015625,
            "type": "empty"
        },
        {
            "id": 3,
            "title": "Node C",
            "x": 237.5757598876953,
            "y": 61.81818389892578,
            "type": "custom"
        },
        {
            "id": 4,
            "title": "Node C",
            "x": 600.5757598876953,
            "y": 600.81818389892578,
            "type": "custom"
        }
        ],
        "edges": [
        {
            "source": 1,
            "target": 2,
            "type": "emptyEdge"
        },
        {
            "source": 2,
            "target": 4,
            "type": "emptyEdge"
        }
        
        ]
    }
  }