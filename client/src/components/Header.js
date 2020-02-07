import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from "reactstrap";
import { DATE_OF_LAST_THIRTY_DAYS } from '../const';

import CustomLink from "./CustomLink";

const Header = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <header>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto brand">
          <span>🍺</span> RepoApp
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <CustomLink activeOnlyWhenExact={true} to="/" label="Home" />
            </NavItem>
            <NavItem>
              <CustomLink to={`/repos/${DATE_OF_LAST_THIRTY_DAYS}`} label="Repos" />
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </header>
  );
};

export default Header;