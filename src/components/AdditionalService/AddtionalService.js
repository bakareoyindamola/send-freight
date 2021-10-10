import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  padding: 20px;
  background: #FFF;

  @media screen and (min-width: 100px) {
    padding: 30px;
  }
`;

export const Heading = styled.h4`
  color: #333;
`;

export const ContentWrapper = styled.div`
  margin-top: 20px;
  display: grid;
  grid-column-gap: 40px;
  grid-row-gap: 30px;
  
  @media screen and (min-width: 735px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ItemWrapper = styled.div`
  display: flex;
`;

export const Label = styled.label`
  position: relative;
  display: inline-block;
  width: 54px;
  height: 28px;
`;

export const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  
  &:checked+span {
    background: #0746A7;
  }
  
  &:focus+span {
    box-shadow: 0 0 1px #0746A7;
  }
  
  &:checked+span::before {
    transform: translateX(26px);
  }
`;

export const Span = styled.span`
  width: 54px;
  position: absolute;
  cursor: pointer;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: #E5E5E5;
  transition: 400ms;
  
  &::before {
    content: "";
    position: absolute;
    height: 20px;
    width: 20px;
    left: 4px;
    bottom: 4px;
    background: #fff;
    transition: 400ms;
  }
  
  &.round {
    border-radius: 28px;
    
    &::before {
      border-radius: 50%;
    }
  }
`;

export const TextWrapper = styled.div`
  margin-left: 40px;
`;

export const SubText = styled.p`
  color: #9C9DA1;
  font-size: .8rem;
`;
