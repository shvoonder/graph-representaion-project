import { Layout } from "antd"
const { Header, Content, Footer} = Layout;
import * as React from 'react';
import { Graph, IGraphConfig } from "./components/Graph";
import {
    BrowserRouter as Router,
    NavLink,
  } from 'react-router-dom';

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
        return (<Router>
            <Layout style={{}}>
                <Header style={{ background: '#fff', padding: 0, textAlign: 'center' }}>
                <nav>
                    <NavLink to="/" exact={true} activeClassName="active">
                    Home
                    </NavLink>
                    <NavLink to="/bwdl" activeClassName="active">
                     BWDL
                    </NavLink>
                </nav>
                </Header>
                <Content style={{ margin: '200px 200px 0', overflow: 'initial' }}>
                    <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
                        <Graph
                            graphConfig={graphConfig}
                        />
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
            </Router>
        )
    } 
}