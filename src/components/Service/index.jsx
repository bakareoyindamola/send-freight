import React, { useState } from 'react';
import { AirplaneSharp } from 'react-ionicons';
import { ReactComponent as VesselSVG } from '../../assets/vessels.svg';
import { ReactComponent as TruckSVG } from '../../assets/truck.svg';
import {
  HeaderText,
  HeaderWrapper,
  SubText,
  Wrapper,
  InnerWrapper,
  Heading,
  ContentWrapper,
  ItemWrapper,
  ItemName, SVGWrapper,
} from './Service';

export default function Service() {
  const [active, setActive] = useState('air');
  return (
    <Wrapper>
      <HeaderWrapper>
        <HeaderText>New Booking</HeaderText>
        <SubText>Fill in the information below to get a quote or create a new booking</SubText>
      </HeaderWrapper>
      <InnerWrapper>
        <Heading>Select a service</Heading>
        <ContentWrapper>
          <ItemWrapper
            onClick={() => {
              setActive('air');
            }}
            className={active === 'air' && 'active'}
          >
            <ItemName>Air Freight</ItemName>
            <SVGWrapper className="airplane ion">
              <AirplaneSharp
                color="#000"
                title="airplane"
                height="80px"
                width="80px"
              />
            </SVGWrapper>
          </ItemWrapper>
          <ItemWrapper
            onClick={() => {
              setActive('sea');
            }}
            className={active === 'sea' && 'active'}
          >
            <ItemName>Sea Freight</ItemName>
            <SVGWrapper>
              <VesselSVG />
            </SVGWrapper>
          </ItemWrapper>
          <ItemWrapper
            onClick={() => {
              setActive('inland');
            }}
            className={active === 'inland' && 'active'}
          >
            <ItemName>
              Inland
              <br />
              (Truck & Barge)
            </ItemName>
            <SVGWrapper>
              <TruckSVG />
            </SVGWrapper>
          </ItemWrapper>
          <ItemWrapper
            onClick={() => {
              setActive('custom');
            }}
            className={active === 'custom' && 'active'}
          >
            <ItemName>Customs Clearance</ItemName>
            <SVGWrapper>
              <VesselSVG />
            </SVGWrapper>
          </ItemWrapper>
        </ContentWrapper>
      </InnerWrapper>
    </Wrapper>
  );
}
