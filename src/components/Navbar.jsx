import {Link, NavLink} from 'react-router-dom';
import styled from 'styled-components';

<Nav>
    <NavList>
        <NavItem>
            <NavLink to= "/">Home</NavLink>
        </NavItem>
        <NavItem>
            <NavLink to="/AboutMe">About Me</NavLink>
        </NavItem>
        <NavItem>
            <NavLink to="ContactMe">Contact Me</NavLink>
        </NavItem>
    </NavList>
</Nav>

const Nav = styled.nav`
    background-color: blue;
    padding: 5px;
`;

const NavList = styled.ul`
    list-style: none;
    display:flex;
    justify-content: center;
    padding: 0;
    margin: 0;
`;

export default NavBar;