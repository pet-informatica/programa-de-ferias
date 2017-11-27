import React, {Component} from 'react';
import Section from './../components/Section';
import {Image, Header, Embed} from 'semantic-ui-react';

export default class Home extends Component{
    render(){
        return(
            <div style={{marginTop:'-10px'}}>
                <Image style={{zIndex:'-10'}} src="http://res.cloudinary.com/dkbuneg9h/image/upload/v1511745793/background-img-2_mokgdf_tkq3zv.jpg"/>
                <Image style={{marginTop: '4em'}}size="small" centered src="http://res.cloudinary.com/dkbuneg9h/image/upload/v1477079274/pet/pet_wn9jqn.png"/>
                <Section>
                    <p style={{marginBottom: '2em'}}>Celulares e computadores estão dominando o mundo. Quase tudo o que fazemos hoje requer alguma forma de programação. Mas não estamos fazendo o suficiente nas escolas para encorajar o aprendizado da computação e preparar nossos alunos para este futuro!</p>
					<Embed id="mHW1Hsqlp6A" source='youtube' placeholder="http://res.cloudinary.com/dkbuneg9h/image/upload/v1511325108/Ruchi-facebook-first-female-enginer_min_r2pssr.jpg"/>
                    <p style={{marginTop: '2em'}}>Quer começar a fazer parte deste mundo? O PET-Informática pode ajudar. Participe do Programa de Férias e envolva-se conosco em curso introdutório muito divertido!</p>
                </Section>
            </div>
        );
    }
}