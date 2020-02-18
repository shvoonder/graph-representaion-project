import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { IAppConfig } from "src/App"
import { IGraphConfig } from './components/Graph';
import {GraphConfig} from './graphConfig'
  
const nGraphConfig : IGraphConfig = {
     NodeTypes: GraphConfig.NodeTypes ,
     EdgeTypes: GraphConfig.EdgeTypes 
    }

const appConfig: IAppConfig = {graphConfig: nGraphConfig}

document.title = 'graph-representaion';
ReactDOM.render(
    <App 
        appConfig={appConfig}
    />,
    document.getElementById('root') as HTMLElement
);
