import React from 'react';
import { CalendarClear, CaretDown, Location } from 'react-ionicons';
import {
  Wrapper,
  SVGWrapper,
  HeaderWrapper,
  ButtonsWrapper,
  Button,
  InputWrapper,
  BottomInputsWrapper,
  Input,
  InputSVGWrapper,
  HeaderInputsWrapper,
  InputPlaceholder, BottomInputWrapper, DateButton,
} from './Upload';

import { ReactComponent as CautionSVG } from '../../assets/alert-circle-outline.svg';

export default function Upload() {
  return (
    <Wrapper>
      <SVGWrapper>
        <CautionSVG />
      </SVGWrapper>
      <HeaderWrapper>
        <ButtonsWrapper>
          <Button>Import</Button>
          <Button>Export</Button>
        </ButtonsWrapper>
        <HeaderInputsWrapper>
          <InputWrapper>
            <InputSVGWrapper>
              <Location
                color="#00000"
                title="Location"
                height="20px"
                width="20px"
              />
            </InputSVGWrapper>
            <InputPlaceholder>From</InputPlaceholder>
            <Input placeholder="City or port" />
          </InputWrapper>
          <InputWrapper short>
            <InputSVGWrapper>
              <Location
                color="#00000"
                title="Location"
                height="20px"
                width="20px"
              />
            </InputSVGWrapper>
            <InputPlaceholder>To</InputPlaceholder>
            <Input placeholder="City or port" />
          </InputWrapper>
        </HeaderInputsWrapper>
      </HeaderWrapper>
      <BottomInputsWrapper>
        <DateButton>
          <CalendarClear
            color="#00000"
            title="calender"
            height="20px"
            width="20px"
          />
          Ready Date
        </DateButton>
        <DateButton down>
          <div down>
            <CaretDown
              color="#00000"
              title="caret-down"
              height="20px"
              width="20px"
            />
          </div>
          Incoterms
        </DateButton>
        <BottomInputWrapper>
          <Input placeholder="Total Cargo Value" />
        </BottomInputWrapper>
      </BottomInputsWrapper>
    </Wrapper>
  );
}
