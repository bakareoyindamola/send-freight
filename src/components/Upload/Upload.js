import styled from 'styled-components/macro';

// eslint-disable-next-line import/prefer-default-export
export const Wrapper = styled.div`
  padding: 20px;
  background: #FFF;

  @media screen and (min-width: 100px) {
    padding: 30px;
  }
`;

export const SVGWrapper = styled.div`
  width: 20px;
  height: 20px;
`;

export const HeaderWrapper = styled.div`
  margin-top: 5px;

  @media screen and (min-width: 870px) {
    display: flex;
  }
`;

export const ButtonsWrapper = styled.div`
  background: #F3F3F3;
  padding: .2rem;
  max-width: 150px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 42px;

  @media screen and (min-width: 870px) {
    width: 100%;
    margin-right: 25px;
  }
`;

export const Button = styled.button`
  border: none;
  background: #FFF;
  border-right: .01rem solid #F3F3F3;
  padding: .5rem 0;
  cursor: pointer;
  color: #808080;
  font-weight: 600;
  
  &:last-of-type {
    border-right: 0;
    border-left: .01rem solid #F3F3F3;
  }
`;

export const HeaderInputsWrapper = styled.div`
  margin-top: 10px;
  display: grid;
  gap: 1rem;
  
  @media screen and (min-width: 630px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 870px) {
    margin: 0;
    width: 100%;
    gap: 25px;
  }
`;

export const BottomInputsWrapper = styled.div`
  margin-top: 1rem;
  display: grid;
  gap: 1rem;
  
  @media screen and (min-width: 630px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 870px) {
    margin-top: 25px;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
  }
`;

export const InputWrapper = styled.div`
  background: #F3F3F3;
  display: flex;
  position: relative;
  align-items: center;
  height: 42px;
  padding-left: ${({ short }) => (short ? '48px' : '70px')};
`;

export const InputSVGWrapper = styled.div`
  position: absolute;
  top: 11px;
  left: 12px;
`;

export const InputPlaceholder = styled.span`
  position: absolute;
  top: 8px;
  left: 34px;
  font-weight: 400;
  color: #808080;
`;

export const Input = styled.input`
  border: none;
  width: 100%;
  background: transparent;
  padding: .6rem;
  outline: none;
  
  &::placeholder {
    color: #B1B1B1;
  }
`;

export const BottomInputWrapper = styled.div`
  background: #F3F3F3;
  display: flex;
  position: relative;
  align-items: center;
  height: 42px;
`;

export const DateButton = styled.button`
  background: #F3F3F3;
  text-align: left;
  height: 42px;
  outline: none;
  border: none;
  width: 100%;
  color: #808080;
  font-size: .9rem;
  font-weight: 400;
  padding: ${({ down }) => (down ? '0 12px' : '0 40px')};
  position: relative;
  
  span {
    position: absolute;
    left: 12px;
    top: 11px;
  }
  
  div span {
    left: 90%;
    top: 11px;
  }
`;
