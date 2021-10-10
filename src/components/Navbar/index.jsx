import React, { useEffect, useState } from 'react';
import { MenuOutline, SearchOutline } from 'react-ionicons';
import {
  Wrapper,
  InnerWrapper,
  LogoText,
  MenuButton,
  MobileWrapper,
  InputWrapper,
  SearchInput,
  LinksWrapper,
  Link, DesktopNavWrapper,
} from './NavBar';
import useDimension from '../../hooks/useDimensions';

export default function Navbar() {
  const [mobileNav, setMobileNav] = useState(false);
  const [width] = useDimension('width');

  useEffect(() => {
    if (width > 850) {
      setMobileNav(false);
    }
  }, [width]);

  return (
    <Wrapper>
      <InnerWrapper>
        <LogoText>
          send
          <span>FREIGHT</span>
        </LogoText>

        <DesktopNavWrapper>
          <InputWrapper>
            <SearchOutline
              color="#ffffff"
              title="Search"
              height="20px"
              width="20px"
            />
            <SearchInput
              placeholder="Search"
            />
          </InputWrapper>
          <LinksWrapper>
            <Link href="/" border>Request Quote</Link>
            <Link href="/">Book Shipment</Link>
          </LinksWrapper>
        </DesktopNavWrapper>

        <MenuButton
          onClick={() => {
            setMobileNav((state) => !state);
          }}
        >
          <MenuOutline
            color="#ffffff"
            title="MENU"
            height="40px"
            width="40px"
          />
        </MenuButton>
      </InnerWrapper>

      <MobileWrapper className={mobileNav ? 'active' : 'inactive'}>
        <InputWrapper>
          <SearchInput
            placeholder="Search"
          />
        </InputWrapper>
        <LinksWrapper>
          <Link href="/" border>Request Quote</Link>
          <Link href="/">Book Shipment</Link>
        </LinksWrapper>
      </MobileWrapper>
    </Wrapper>
  );
}
