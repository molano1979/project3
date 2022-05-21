import React from "react";
import { 
    NavbarContainer, 
    LeftContainer,
    RightContainer,
    NavbarInnerContainer,
    NavbarExtendedContainer,
    NavbarLinkContainer,
 } from "../styles/Navbar.style";


function Navbar() {
    return (
    <NavbarContainer> 
        <NavbarInnerContainer>
        <LeftContainer>
            <NavbarLinkContainer>
                <img src="../img/logo.png" alt=""></img>
            </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer>
        </RightContainer>
        </NavbarInnerContainer>
        <NavbarExtendedContainer></NavbarExtendedContainer>
    </NavbarContainer>
    );
}

export default Navbar;