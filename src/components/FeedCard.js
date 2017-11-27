import React, {Component} from 'react';
import {Card} from 'semantic-ui-react';

export default class FeedCard extends Component{
    render(){
      return(
        <Card
            header={this.props.header}
            meta={this.props.meta}
            description={this.props.description}
        />
      );
    }
}