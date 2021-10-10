import React from 'react';
import {
  Wrapper,
  ContentWrapper,
  Heading,
  ItemWrapper,
  Label,
  Input,
  Span,
  TextWrapper,
  SubText,
} from './AddtionalService';

export default function AdditionalService() {
  return (
    <Wrapper>
      <Heading>Additional Service</Heading>
      <ContentWrapper>
        <ItemWrapper>
          <Label>
            <Input type="checkbox" />
            <Span className="slider round" />
          </Label>
          <TextWrapper>
            <Heading>Export Forwarding</Heading>
            <SubText>We handle customs clearance and documentation.</SubText>
          </TextWrapper>
        </ItemWrapper>
        <ItemWrapper>
          <Label>
            <Input type="checkbox" />
            <Span className="slider round" />
          </Label>
          <TextWrapper>
            <Heading>Import Customs Clearance</Heading>
            <SubText>We handle customs clearance and regulatory requirements.</SubText>
          </TextWrapper>
        </ItemWrapper>
        <ItemWrapper>
          <Label>
            <Input type="checkbox" />
            <Span className="slider round" />
          </Label>
          <TextWrapper>
            <Heading>Cargo Insurance</Heading>
            <SubText>Protect your cargo from logistics risks up to its full value.</SubText>
          </TextWrapper>
        </ItemWrapper>
        <ItemWrapper>
          <Label>
            <Input type="checkbox" />
            <Span className="slider round" />
          </Label>
          <TextWrapper>
            <Heading>Transport / Delivery</Heading>
            <SubText>We deliver cargo to your door steps from the ports.</SubText>
          </TextWrapper>
        </ItemWrapper>
      </ContentWrapper>
    </Wrapper>
  );
}
