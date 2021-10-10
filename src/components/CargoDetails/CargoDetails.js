import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  padding: 20px;
  background: #FFF;
  
  @media screen and (min-width: 840px) {
    display: flex;
    justify-content: space-between;
  }
  
  @media screen and (min-width: 100px) {
    padding: 30px;
  }
`;

export const DetailsWrapper = styled.div`
  @media screen and (min-width: 840px) {
    max-width: 400px;
    width: 100%;
  }
`;

export const Heading = styled.h4`
  color: #333;
`;

export const ContentWrapper = styled.div`
  margin-top: 20px;
`;

export const Tabs = styled.div`
  display: flex;
  position: relative;
  background-color: #F2F1F6;
  border-radius: 6px;
  margin-bottom: 10px;
  padding: 0.2rem;
  max-width: 300px;
  width: 100%;
`;

export const TabInput = styled.input`
  display: none;

  &:checked + label{
    color: #0746A7;
  }
`;

export const TabLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  max-width: 300px;
  width: 100%;
  font-size: .8rem;
  background-color: transparent;
  transition: color 0.15s ease-in;
  cursor: pointer;
  border-radius: 6px;
  z-index: 2;
`;

export const Slider = styled.span`
  background-color: #FFF;
  position: absolute;
  display: flex;
  height: 39px;
  width: 150px;
  z-index: 1;
  border-radius: 6px;
  transition: .25s ease-out;
  
  @media screen and (max-width: 409px) {
    width: 130px;
  }
  
  @media screen and (max-width: 380px) {
    width: 125px;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
`;

export const Text = styled.p`
  margin-left: 20px;
  
  @media screen and (max-width: 600px) {
    font-size: .9rem;
  }
`;

export const FormWrapper = styled.form`
  display: grid;
  grid-gap: 20px;
  margin: 20px 0 40px;

  @media screen and (min-width: 470px) {
    grid-template-columns: repeat(2, 1fr);
    max-width: 400px;
    width: 100%;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  height: 48px;
`;

export const FormInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-size: .8rem;
  border: 1px solid #C8C8C8;
  outline: none;
  padding: 1rem 3rem 1rem 1rem;
  background: none;
  z-index: 1;
`;

export const FormLabel = styled.label`
  position: absolute;
  left: 1rem;
  top: 1rem;
  padding: 0 .4rem;
  background-color: #fff;
  color: #C8C8C8;
  font-size: .9rem;
  transition: .3s;
`;

export const FormPlaceholder = styled.span`
  position: absolute;
  top: .9rem;
  right: 1rem;
  font-size: .8rem;
  color: #C8C8C8;
`;
