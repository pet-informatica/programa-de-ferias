import React, {Component} from 'react';
import {Container, Header, Icon, Image} from 'semantic-ui-react';

export default class Section extends Component{
   
    render(){
        return(
            <Container text style={{marginTop: (this.props.marged? '5em':'0em'), fontSize:'24px', textAlign: (this.props.unjustify? 'left' : 'justify')}}>
                <Header size="huge" dividing={!this.props.undivided} textAlign="center">
                    {this.props.title}
                </Header>
                <br/>
                <div style={{fontSize: (this.props.font? this.props.font : '24px')}}>
                    {this.props.children}
                </div>
            </Container>
        );
    }
}