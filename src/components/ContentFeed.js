import React, {Component} from 'react';
import {Grid, Container, Card} from 'semantic-ui-react';

export default class ContentFeed extends Component{
    render(){
        return(
            <Grid columns={2} stackable>
                <Grid.Row>
                    <Grid.Column>
                        <Card fluid>
                            <Card.Content header as="h2" textAlign='center'>Ensino Médio</Card.Content>
                            <Card.Content description style={{fontSize:'18px'}}>Alunos de ensino médio deverão aprender o básico sobre programação, como conceitos gerais, lógica de programação, entrada e saída, strings, estruturas de dados, modularização e uma introdução à orientação objeto. A ementa completa e detalhada do curso será postada aqui em breve.</Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column>
                        <Card fluid>
                            <Card.Content header as="h2" textAlign='center'>Universitários</Card.Content>
                            <Card.Content decription style={{fontSize:'18px'}}>Alunos universitários devem aprender tudo o que é ensinado aos de ensino médio, porém com um foco maior na utilização de bibliotecas e funções voltadas para construção de gráficos, análise de dados, estatística e ecônomia. A ementa completa e detalhada do curso será postada aqui em breve.</Card.Content>
                        </Card>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}