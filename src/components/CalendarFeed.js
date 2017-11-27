import React, {Component} from 'react';
import {Grid, Icon, Card} from 'semantic-ui-react';

export default class HistoryFeed extends Component{
    render(){
        return(
          <Grid columns={2} divided>
            <Grid.Row>
                <Grid.Column textAlign="right">
                    <Icon name="flag checkered" size="huge" flipped='horizontally'></Icon>
                </Grid.Column>
                <Grid.Column>
                    <Card align='left' header='25, Dezembro, 2017' description='Início das Inscrições'></Card>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column floated='right'>
                    <Card align='right' header='12, Janeiro, 2018' description='Fim das Inscrições'></Card>
                </Grid.Column>
                <Grid.Column floated='left'>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column textAlign="right">
                    <Icon name="calendar" size="huge"></Icon>
                </Grid.Column>
                <Grid.Column>
                    <Card align='left' header='15, Janeiro, 2018' meta='das 9h às 12h, diariamente' description='Início das Aulas'></Card>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column floated='right'>
                    <Card align='right' header='29, Janeiro, 2018' description='Fim das Aulas'></Card>
                </Grid.Column>
                <Grid.Column floated='left'>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column textAlign="right">
                    <Icon name="graduation" size="huge" flipped='horizontally'></Icon>
                </Grid.Column>
                <Grid.Column>
                    <Card align='left' header='05, Fevereiro, 2018' description='Divulgação das Notas'></Card>
                </Grid.Column>
            </Grid.Row>
        </Grid>
        );
    }
}