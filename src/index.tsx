import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { GraphConfig } from "src/graphConfig"
import { IAppConfig } from "src/App"
import { IGraphConfig } from './components/Graph';

const appConfig: IAppConfig = {
    graphConfig: GraphConfig
}

document.title = 'graph';
ReactDOM.render(
    <App 
        appConfig={appConfig}
    />,
    document.getElementById('root') as HTMLElement
);
