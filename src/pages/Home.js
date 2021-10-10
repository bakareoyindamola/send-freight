import React from 'react';
import styled from 'styled-components/macro';
import { ArrowBackOutline } from 'react-ionicons';
import {
  Navbar, Service, Upload, CargoDetails, AdditionalService,
} from '../components';

export default function Home() {
  return (
    <>
      <Navbar />
      <InnerWrapper>
        <SVGWrapper>
          <ArrowBackOutline
            color="#00000"
            title="back arrow"
            height="20px"
            width="20px"
          />
        </SVGWrapper>
        <Service />
        <Upload />
        <CargoDetails />
        <AdditionalService />
      </InnerWrapper>
    </>
  );
}

const InnerWrapper = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 114px 24px 50px;
  display: grid;
  grid-gap: 20px;
  position: relative;
`;

const SVGWrapper = styled.button`
  position: absolute;
  top: 124px;
  left: -20px;
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
`;
