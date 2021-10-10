import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  background-color: #0747a6;
  padding: 16px 24px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
`;

export const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoText = styled.a`
  color: #fff;
  font-weight: bold;
  font-size: 20px;
  
  span {
    font-size: 12px;
    margin-left: 3px;
  }
`;

export const MenuButton = styled.button`
  background: transparent;
  outline: none;
  border: none;
  display: flex;
  cursor: pointer;
  
  @media screen and (min-width: 851px) {
    display: none;
  }
`;

export const MobileWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 300px;
  background: rgba(0,0,0,.95);
  padding: 16px;
  transition: all .5s ease-in-out;
  
  &.inactive {
    left: -400px;
  }
  
  &.active {
    left: 0;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  
  span {
    position: absolute;
    top: 9px;
    right: 10px;
  }
  
  @media screen and (min-width: 850px) {
    flex: 1;
    max-width: 500px;
    margin-right: 40px;
  }
`;

export const SearchInput = styled.input`
  background: #3A6BBA;
  outline: none;
  border: none;
  width: 100%;
  padding: 12px 32px 12px 12px;
  color: whitesmoke;
  
  &::placeholder {
    color: whitesmoke;
  }
`;

export const LinksWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 16px;
  flex-direction: column;

  @media screen and (min-width: 850px) {
    margin-top: 0;
    flex-direction: row;
    flex: 1;
    max-width: 340px;
  }
`;

export const Link = styled.a`
  display: inline-block;
  padding: 10px;
  width: 100%;
  border: ${({ border }) => (border ? '1px solid #FFF' : '1px solid #59C788')};
  border-radius: 6px;
  text-align: center;
  font-weight: bold;
  background-color: ${({ border }) => (border ? 'transparent' : '#59C788')};
`;

export const DesktopNavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-left: 40px;

  @media screen and (max-width: 850px) {
    display: none;
  }
`;
