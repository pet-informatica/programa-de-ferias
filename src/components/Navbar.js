import React, { Component } from "react";
import {
  Container,
  Icon,
  Image,
  Menu,
  Sidebar,
  Item,
  Responsive,
  Dropdown,
  Header
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
			<Menu.Item content="Sobre" href="/"/>
      <Menu.Item content="Inscrições" href="/inscricoes"/>
      <Menu.Item content="Ementa" href="/ementa"/>
      <Menu.Item content='Material Didático' href='/material-didatico'/>
    </Sidebar>
    <Sidebar.Pusher
      dimmed={visible}
      onClick={onPusherClick}
      style={{ minHeight: "100vh" }}
    >
      <Menu fixed="top" color='blue'>
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
						<Menu.Item content='Sobre' href='/'/>
            <Menu.Item content='Inscrições' href='/inscricoes'/>
            <Menu.Item content='Ementa' href='/ementa'/>
            <Menu.Item content='Material Didático' href='/material-didatico'/>
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
