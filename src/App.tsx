import { Layout } from "antd"
const { Header, Content, Footer} = Layout;
import * as React from 'react';

interface IAppState {

}

interface IAppProps {
    
}

export default class App extends React.Component<IAppProps, IAppState> {

    constructor(props: IAppProps){
        super(props)
    }

    public render(){
        return (
            <Layout style={{}}>
                <Header style={{ background: '#fff', padding: 0, textAlign: 'center' }}>
                    Our App
                </Header>
                <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                    <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
                        not mobile
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        )
    } 
}