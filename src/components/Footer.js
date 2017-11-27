import React, {Component} from 'react';
import {Container, Grid, List, Header} from 'semantic-ui-react';

export default class Footer extends Component{
    render(){
        return(
            <div style={{background:'black', marginTop:'5em'}}>
                <div id="contato"/>
                <Container style={{paddingTop:'4em'}}>
                    <Grid stackable columns={3} >
                        <Grid.Row>
                            <Grid.Column>
                                <Header style={{color:"white"}} textAlign="left" as="h4">FALE CONOSCO</Header>
                                <List verticalAlign="middle" style={{color:'white'}} size="big">
                                    <List.Item>
                                        <List.Icon name="mail"/>
                                        <List.Content>petinformatica-l@cin.ufpe.br</List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Icon name="facebook"/>
                                        <List.Content><a href="https://www.facebook.com/petinformatica">facebook</a></List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Icon name="instagram"/>
                                        <List.Content><a href="https://www.instagram.com/petinformatica/">instagram</a></List.Content>
                                    </List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column>
                                <Header style={{color:"white"}} textAlign="left" as="h4">CONHEÇA OUTROS PROJETOS</Header>
                                <List verticalAlign="middle" style={{color:'white'}} size="big">
                                    <List.Item>
                                        <List.Icon name="external"/>
                                        <List.Content><a href="https://pet-informatica.github.io/">Website</a></List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Icon name="external"/>
                                        <List.Content><a href="https://pet-informatica.github.io/opei">Olimpíada Pernambucana de Informática</a></List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Icon name="external"/>
                                        <List.Content><a href="https://pet-informatica.github.io/cinquest">CInquest</a></List.Content>
                                    </List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column>
                                
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
                <br/><br/><br/>
            </div>
        );
    }
}