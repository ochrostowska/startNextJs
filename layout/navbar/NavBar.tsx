// NavBar.tsx
import { HamburgerSvg } from "@/components/Svg";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Logo } from "../Logo";

export const NavBar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const { translate } = useTranslate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setHasScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navigation hasScrolled={hasScrolled}>
      <Link href="/" passHref>
        <Logo />
      </Link>
      <MenuButton onClick={() => setShowNavbar(!showNavbar)}>
        <HamburgerSvg />
      </MenuButton>

      <NavList active={showNavbar}>
        <ul>
          {/* <NavItem>
            <NavLink
              as="button"
              onClick={() => scrollToElement(PRODUCTS_FRAGMENT_ID)}
            >
              Oferta
            </NavLink>
          </NavItem> */}
          <NavItem>
            <NavLink href={Routes.Downloads}>
              {translate("navDownloads")}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href={Routes.Realisations}>
              {translate("navRealisations")}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href={Routes.Contact}>{translate("navContact")}</NavLink>
          </NavItem>
        </ul>
      </NavList>
    </Navigation>
  );
};

// styled.ts or inside the same file
import { Routes } from "@/nav/routes";
import { useTranslate } from "@/translations";
import Link from "next/link";
import { css } from "styled-components";

export const Navigation = styled.nav<{ hasScrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease-in;
  background-color: ${({ theme }) => theme.colors.white};
  padding-left: ${({ theme }) => theme.constants.fragmentHorizontalOffset};
  padding-right: ${({ theme }) => theme.constants.fragmentHorizontalOffset};
  padding-top: ${({ theme }) => theme.constants.fragmentVerticalOffsetTablet};
  padding-bottom: ${({ theme }) =>
    theme.constants.fragmentVerticalOffsetTablet};
  box-shadow: 0 4px 8px
    rgba(0, 0, 0, ${({ hasScrolled }) => (hasScrolled ? "0.05" : "0")});

  @media ${({ theme }) => theme.media.tabPort} {
    padding-left: ${({ theme }) =>
      theme.constants.fragmentHorizontalOffsetTablet};
    padding-right: ${({ theme }) =>
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
    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;
    padding-top: 8rem;
    padding-left: 2rem;
    background-color: ${({ theme }) => theme.colors.white};
    height: 100vh;
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
