import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { IAppConfig } from "src/App"
import { IGraphConfig } from './components/Graph';

const NodeTypes= {
    empty: {
        typeText: "empty",
        shapeId: "empty",
        shape: <symbol viewBox="0 0 100 100" id="empty" key="0">
        <circle cx="50" cy="50" r="45"></circle>
      </symbol>
    }
    ,custom: {
        typeText: "empty",
        shapeId: "empty",
        shape: <symbol viewBox="0 0 100 100" id="empty" key="0">
        <circle cx="50" cy="50" r="45"></circle>
      </symbol>
    }
  }

  const EdgeTypes={ EdgeTypes: {emptyEdge: {
    shapeId: "emptyEdge" ,
    shape: <symbol viewBox="0 0 100 100" id="empty" key="0">
    <circle cx="50" cy="50" r="45"></circle>
    </symbol>
        }
    }
  }
  
const graphConfig : IGraphConfig= { NodeTypes ,EdgeTypes}




const appConfig: IAppConfig = {graphConfig: graphConfig}

document.title = 'graph';
ReactDOM.render(
    <App 
        appConfig={appConfig}
    />,
    document.getElementById('root') as HTMLElement
);
