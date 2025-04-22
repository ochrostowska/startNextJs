// NavBar.tsx
import { HamburgerSvg } from "@/components/Svg";
import { scrollToElement } from "@/helpers/scrollToElement";
import { PRODUCTS_FRAGMENT_ID } from "@/pages/_home/ProductsFragment";
import { useState } from "react";
import styled from "styled-components";
import { Logo } from "../Logo";

export const NavBar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <Navigation>
      <Logo />

      <MenuButton onClick={() => setShowNavbar(!showNavbar)}>
        <HamburgerSvg />
      </MenuButton>

      <NavList active={showNavbar}>
        <ul>
          <NavItem>
            <NavLink
              as="button"
              onClick={() => scrollToElement(PRODUCTS_FRAGMENT_ID)}
            >
              Oferta
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              as="button"
              onClick={() => scrollToElement(MEASUREMENT_CARDS_FRAGMENT_ID)}
            >
              Do pobrania
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href={Routes.Realisations}>Realizacje</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Kontakt</NavLink>
          </NavItem>
        </ul>
      </NavList>
    </Navigation>
  );
};

// styled.ts or inside the same file
import { Routes } from "@/nav/routes";
import { MEASUREMENT_CARDS_FRAGMENT_ID } from "@/pages/_home/MeasurementCardsFragment";
import { css } from "styled-components";

export const Navigation = styled.nav`
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.2s;

  margin-left: ${({ theme }) => theme.constants.fragmentHorizontalOffset};
  margin-right: ${({ theme }) => theme.constants.fragmentHorizontalOffset};
  margin-top: ${({ theme }) => theme.constants.fragmentVerticalOffset};

  @media ${({ theme }) => theme.media.tabPort} {
    margin-left: ${({ theme }) =>
      theme.constants.fragmentHorizontalOffsetTablet};
    margin-right: ${({ theme }) =>
      theme.constants.fragmentHorizontalOffsetTablet};
    margin-top: ${({ theme }) => theme.constants.fragmentVerticalOffsetTablet};
  }

  @media ${({ theme }) => theme.media.phone} {
    margin-left: ${({ theme }) =>
      theme.constants.fragmentHorizontalOffsetTablet};
    margin-right: ${({ theme }) =>
      theme.constants.fragmentHorizontalOffsetTablet};
  }
`;

export const MenuButton = styled.div`
  display: none;

  @media ${({ theme }) => theme.media.tabPort} {
    display: block;
    cursor: pointer;
    z-index: 1000;
  }
`;

export const NavList = styled.div<{ active: boolean }>`
  ul {
    display: flex;
    justify-content: space-between;
    list-style-type: none;

    li:not(:last-child) {
      margin-right: 6rem;
    }
  }

  @media ${({ theme }) => theme.media.tabPort} {
    position: absolute;
    right: 0;
    top: 0;
    padding-top: 8rem;
    padding-left: 2rem;
    background-color: ${({ theme }) => theme.colors.white};
    height: calc(100vh - 60px);
    overflow: hidden;
    width: 0;
    transition: all 0.2s;

    ul {
      display: flex;
      flex-direction: column;

      li {
        margin-right: 0;
        margin-top: 2.2rem;
      }
    }

    ${({ active, theme }) =>
      active &&
      css`
        width: 27rem;
        border-left: 2px dashed ${theme.colors.greyLight2};
      `}
  }
`;

export const NavItem = styled.li``;

export const NavLink = styled.a`
  all: unset;
  cursor: pointer;
  display: inline-block;

  font-size: ${({ theme }) => theme.constants.defaultFontSize};
  letter-spacing: 0.3rem;
  transition: all 0.2s;

  &:hover {
    box-shadow: inset 0 -1rem 0 ${({ theme }) => theme.colors.secondaryLight};
  }
`;
