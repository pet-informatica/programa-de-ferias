import React, {Component} from 'react';
import Section from './../components/Section';
import CalendarFeed from './../components/CalendarFeed';
import {Image, Header, Embed} from 'semantic-ui-react';

export default class Home extends Component{
    render(){
        return(
            <div id="motivacao" style={{marginTop:'-10px'}}>
                <Image style={{zIndex:'-10'}} src="http://res.cloudinary.com/dkbuneg9h/image/upload/v1511745793/background-img-2_mokgdf_tkq3zv.jpg"/>
                <Image style={{marginTop: '4em'}}size="small" centered src="http://res.cloudinary.com/dkbuneg9h/image/upload/v1477079274/pet/pet_wn9jqn.png"/>
                <Section>
                    <p style={{marginBottom: '2em'}}>Celulares e computadores estão dominando o mundo. Quase tudo o que fazemos hoje requer alguma forma de programação. Mas não estamos fazendo o suficiente nas escolas para encorajar o aprendizado da computação e preparar nossos alunos para este futuro!</p>
					<Embed id="mHW1Hsqlp6A" source='youtube' placeholder="http://res.cloudinary.com/dkbuneg9h/image/upload/v1511325108/Ruchi-facebook-first-female-enginer_min_r2pssr.jpg"/>
                    <p style={{marginTop: '2em'}}>Quer começar a fazer parte deste mundo? O <a href="https://pet-informatica.github.io">PET-Informática</a> pode ajudar. Participe do Programa de Férias e envolva-se conosco em curso introdutório muito divertido!</p>
                </Section>
                <div style={{background:'#fafafa'}}>
                    <Image style={{marginTop: '4em'}} src="http://res.cloudinary.com/dkbuneg9h/image/upload/c_crop,h_568,w_1920,y_256/v1511797774/education-technology-school-and-people-concept-group-of-smiling-students-working-with-computers-in-computer-class-at-school_vuletns3e__F0000_oahbzu.png"/>
                    <Section title="SOBRE" marged>
                        <p>Todo ano, durante o período de férias escolares, o <a href="https://pet-informatica.github.io">PET-Informática</a> ministra o programa de férias, um curso gratuito voltado para alunos do ensino médio e estudantes universitários que se interessem por aprender programação. É uma forma de difundir o conhecimento da computação e aproximar estudantes de um mundo cada vez mais tecnológico. Venha aprender uma linguagem de programação conosco! Vamos te mostrar que programar não é só coisa de quem faz computação!</p>
                    </Section>
                    <div id="calendario"/>
                    <Section title="CALENDÁRIO" marged unjustify undivided font='16px'>
                        <CalendarFeed/>
                    </Section>
                </div>
            </div>
        );
    }
}