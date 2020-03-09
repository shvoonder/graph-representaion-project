import * as React from 'react'


  const EMPTY_TYPE = 'customEmpty'; 
  const SPECIAL_TYPE = 'special';
  const EMPTY_EDGE_TYPE = 'emptyEdge';
  const SPECIAL_EDGE_TYPE = 'specialEdge';
  export const nodeTypes = [EMPTY_TYPE, SPECIAL_TYPE];
  export const edgeTypes = [EMPTY_EDGE_TYPE, SPECIAL_EDGE_TYPE];
  export const NODE_KEY = "id"  

  const EmptyNodeShape = (
    <symbol viewBox="0 0 154 154" width="154" height="154" id="emptyNode">
      <circle cx="77" cy="77" r="76" fill="currentColor" />
    </symbol>
  );
  
  const CustomEmptyShape = (
    <symbol viewBox="0 0 100 100" id="customEmpty">
      <circle cx="50" cy="50" r="45" />
    </symbol>
  );
  
  const SpecialShape = (
    <symbol viewBox="-27 0 154 154" id="special" width="154" height="154">
      <rect transform="translate(50) rotate(45)" width="109" height="109" />
    </symbol>
  );
  
  const EmptyEdgeShape = (
    <symbol viewBox="0 0 50 50" id="emptyEdge">
      <circle cx="25" cy="25" r="8" fill="currentColor" />
    </symbol>
  );
  
  const SpecialEdgeShape = (
    <symbol viewBox="0 0 50 50" id="specialEdge">
      <rect
        transform="rotate(45)"
        x="27.5"
        y="-7.5"
        width="15"
        height="15"
        fill="currentColor"
      />
    </symbol>
  );
  
  export const GraphConfig =  {
    
    EdgeTypes: {
        emptyEdge: {
          shape: EmptyEdgeShape,
          shapeId: '#emptyEdge',
        },
        specialEdge: {
          shape: SpecialEdgeShape,
          shapeId: '#specialEdge',
        },
      },
     NodeSubTypes:{
        emptyNode: {
            shape: EmptyNodeShape,
            shapeId: '#empty',
        }
     } ,
      NodeTypes: {
        emptyNode: {
          shape: EmptyNodeShape,
          shapeId: '#emptyNode',
          typeText: '',
        },
        empty: {
          shape: CustomEmptyShape,
          shapeId: '#empty',
          typeText: 'None',
        },
        special: {
          shape: SpecialShape,
          shapeId: '#special',
          typeText: 'Special',
        },
      },
    };
    
