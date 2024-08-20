import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Nav>
      <NavList>
        <NavItem>
          <NavLink to="/">Home</NavLink>
        </NavItem>
        {/* <NavItem>
          <NavLink to="/AboutMe">About Me</NavLink>
        </NavItem> */}
        <NavItem>
          <NavLink to="ContactMe">Contact Me</NavLink>
        </NavItem>
      </NavList>
    </Nav>
  );
};

const Nav = styled.nav`
  background-color: #452050;
  padding: 5px;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  padding: 5px;
  margin: 5px;
`;

const NavItem = styled.li`
  margin: 10px;
  margin-right: 100px;
  margin-left: 100px;
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-family: Arial, Helvetica, sans-serif;

  &:hover {
    text-decoration: underline;
  }
`;

export default Navbar;
