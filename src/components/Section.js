import React, {Component} from 'react';
import {Container, Header, Icon, Image} from 'semantic-ui-react';

export default class Section extends Component{
    render(){
        return(
            <Container text style={{marginTop: () => (this.props.marged? '0em':'5em'), fontSize: '28px', textAlign:'justify'}}>
                <Header size="huge" dividing textAlign="center">
                    {this.props.title}
                </Header>
                <br/>
                {this.props.children}
            </Container>
        );
    }
}