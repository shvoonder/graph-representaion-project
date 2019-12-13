import {Layout, Menu, Icon  } from "antd"
const { Header, Content, Footer, Sider } = Layout;

import * as React from 'react';

interface IAppState {
    isMobile: boolean
    showGraph: boolean
}

interface IAppProps {
    maxNodes: number
}

export default class App extends React.Component<IAppProps, IAppState> {

    constructor(props: IAppProps){
        super(props)
        const isMobile: boolean = this.isMobile()
        const showGraph = false        
        this.setState({
            isMobile,
            showGraph
        })
    }

    private isMobile(): boolean {
        return window.innerWidth< 1000;
    }

    public render(){
        const { isMobile, showGraph } = this.state
        const { maxNodes } = this.props;
        return (
            <Layout style={{}}>
                <Header style={{ background: '#fff', padding: 0 }} />
                <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                    {isMobile ? 
                    (<div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
                        mobile
                    </div>)
                    :
                    (<div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
                        not mobile
                    </div>)}
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        )
    } 
}