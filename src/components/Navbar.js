import React, { Component } from "react";
import {HashLink as Link} from 'react-router-hash-link';
import {
  Container,
  Icon,
  Menu,
  Sidebar,
  Responsive,
} from "semantic-ui-react";

const NavBarMobile = ({
  children,
  onPusherClick,
  onToggle,
  visible
}) => (
  <Sidebar.Pushable>
    <Sidebar
      as={Menu}
      animation="overlay"
      icon="labeled"
      vertical
      visible={visible}
    >
			<Menu.Item disabled content='Inscrições' href='#'/>
      <Menu.Item content='Sobre'><Link hash to="#sobre">Sobre</Link></Menu.Item>
      <Menu.Item content='Calendário'><Link hash to="#calendario">Calendário</Link></Menu.Item>
      <Menu.Item disabled content='Ementa' href='#ementa'/>
      <Menu.Item content='Ementa'><Link hash to="#contato">Contato</Link></Menu.Item>
    </Sidebar>
    <Sidebar.Pusher
      dimmed={visible}
      onClick={onPusherClick}
      style={{ minHeight: "100vh" }}
    >
      <Menu fixed="top">
				<Menu.Item onClick={onToggle}>
          <Icon name="sidebar" />
        </Menu.Item>
				<Menu.Item header as='h3'>Programa de Férias</Menu.Item>
      </Menu>
      {children}
    </Sidebar.Pusher>
  </Sidebar.Pushable>
);

const NavBarDesktop = () => (
  <Menu fixed="top">
    <Container>
        <Menu.Item header as='h3'>Programa de Férias</Menu.Item>
        <Menu.Menu position="right">
            <Menu.Item disabled content='Inscrições' href='#'/>
						<Menu.Item content='Sobre' ><Link hash to="#sobre">Sobre</Link></Menu.Item>
            <Menu.Item content='Calendário'><Link hash to="#calendario">Calendario</Link></Menu.Item>
            <Menu.Item disabled content='Ementa' href='#ementa'/>
            <Menu.Item content='Contato'><Link hash to="#contato">Contato</Link></Menu.Item>
        </Menu.Menu>
    </Container>
  </Menu>
);

const NavBarChildren = ({ clas, children }) => (
  <Container fluid className={"inv-lat-marg "+clas} style={{marginTop: "4em"}}>{children}</Container>
);

export default class Navbar extends Component {

  state = {
    visible: false
  };

  handlePusher = () => {
    const { visible } = this.state;

    if (visible) this.setState({ visible: false });
  };

  handleToggle = () => this.setState({ visible: !this.state.visible });

  render() {
    const { children } = this.props;
    const { visible } = this.state;

    return (
      <div>
        <Responsive {...Responsive.onlyMobile}>
          <NavBarMobile
            onPusherClick={this.handlePusher}
            onToggle={this.handleToggle}
            visible={visible}
          >
            <NavBarChildren clas='mobile'>{children}</NavBarChildren>
          </NavBarMobile>
        </Responsive>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <NavBarDesktop />
          <NavBarChildren clas='desktop'>{children}</NavBarChildren>
        </Responsive>
      </div>
    );
  }
}
