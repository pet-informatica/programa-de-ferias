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
				<Container>
					<Item>
							<Image style={{width:'35px'}} src='http://res.cloudinary.com/dkbuneg9h/image/upload/v1477079274/pet/pet_wn9jqn.png' />
							<Item.Content style={{marginLeft:'10px'}}verticalAlign='middle'>
									<Item.Header as='h3'>Programa de Férias</Item.Header>
							</Item.Content>
					</Item>
				</Container>
      </Menu>
      {children}
    </Sidebar.Pusher>
  </Sidebar.Pushable>
);

const NavBarDesktop = () => (
  <Menu fixed="top"  color="blue" >
    <Container>
        <Item>
            <Image style={{width:'35px'}} src='http://res.cloudinary.com/dkbuneg9h/image/upload/v1477079274/pet/pet_wn9jqn.png' />
            <Item.Content style={{marginLeft:'10px'}}verticalAlign='middle'>
                <Item.Header as='h3'>Programa de Férias</Item.Header>
            </Item.Content>
        </Item>
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
