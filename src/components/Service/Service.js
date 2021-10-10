import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  display: grid;
  grid-gap: 20px;
`;

export const HeaderWrapper = styled.div``;

export const HeaderText = styled.h3`
  color: #333;
  font-size: 1.8rem;
`;

export const SubText = styled.p`
  color: #9C9DA1;
  margin-top: 1rem;
`;

export const InnerWrapper = styled.div`
  padding: 20px;
  background: white;

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
  grid-gap: 20px;
  
  @media screen and (min-width: 650px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 950px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const ItemWrapper = styled.button`
  outline: none;
  border-radius: 5px;
  border: 1px solid #F2F2F2;
  height: 90px;
  display: flex;
  align-items: center;
  padding: 16px;
  position: relative;
  overflow: hidden;
  transition: all .4s ease-in-out;
  background-color: #FFF;
  cursor: pointer;

  &:hover, 
  &.active {
    background-color: #0746A7;
    border: 1px solid #0746A7;
    
    p {
      color: #fff;
    }
    
    svg {
      fill: #fff;

      path {
        stroke: #fff;
      }
    }
  }
`;

export const SVGWrapper = styled.div`
  position: absolute;
  bottom: -4px;
  right: -4px;
  
  svg {
    fill: #81868C;
    
    path {
      stroke: #81868C;
    }
  }
  
  &.airplane {
    transform: rotate(270deg);
  }
  
  &.ion {
    top: 31px;
    right: -14px;
  }
`;

export const ItemName = styled.p`
  text-align: left;
  @media screen and (min-width: 650px) {
    max-width: 130px;
  }
`;
