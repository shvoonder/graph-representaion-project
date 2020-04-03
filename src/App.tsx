// import { Layout } from "antd"
// const { Header, Content} = Layout;
// import {  BrowserRouter as Router,} from 'react-router-dom';
import * as React from 'react';
import { Graph, IGraphConfig} from "./components/Graph";
// import {IEdge,INode} from 'react-digraph';

export interface IAppConfig {
    graphConfig: IGraphConfig

}


interface IAppState {
   
}

interface IAppProps {
    appConfig: IAppConfig
}




export default class App extends React.Component<IAppProps, IAppState> {
    
    
    constructor(props: IAppProps){
        super(props)
     }
    
    public render(){
        const { appConfig } = this.props
        const { graphConfig } = appConfig
    

        return (
            <div>
                <Graph graphConfig={graphConfig} />
            </div> 
       
        )
     
    } 
}