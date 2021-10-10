import React, { useState } from 'react';
import {
  Wrapper,
  Heading,
  ContentWrapper,
  DetailsWrapper,
  TextWrapper,
  Text,
  Tabs,
  TabInput,
  TabLabel,
  Slider,
  FormWrapper, FormInput, FormLabel, InputWrapper, FormPlaceholder,
} from './CargoDetails';
import { Input, Label, Span } from '../AdditionalService/AddtionalService';

export default function CargoDetails() {
  const [value, onChangeValue] = useState('300');
  const [checked, setChecked] = useState(true);

  return (
    <Wrapper>
      <DetailsWrapper>
        <Heading>Cargo Details</Heading>
        <ContentWrapper>
          <Tabs>
            <TabInput type="radio" name="tabs" id="radio-1" />
            <TabLabel htmlFor="radio-1" className="tab">Total Dimensions</TabLabel>
            <TabInput type="radio" name="tabs" id="radio-2" />
            <TabLabel htmlFor="radio-2" className="tab">Package Details</TabLabel>
            <Slider className="tab-slider" />
          </Tabs>
          <FormWrapper>
            <InputWrapper className="form__div">
              <FormInput
                type="text"
                className="form__input"
                placeholder=" "
                value={value}
                onChange={(e) => onChangeValue(e.target.value)}
              />
              <FormLabel htmlFor="" className="form__label">Total Volume</FormLabel>
              <FormPlaceholder>cbm</FormPlaceholder>
            </InputWrapper>
            <InputWrapper className="form__div">
              <FormInput
                type="text"
                className="form__input"
                placeholder=" "
              />
              <FormLabel htmlFor="" className="form__label">Total Weight</FormLabel>
              <FormPlaceholder>kg</FormPlaceholder>
            </InputWrapper>
          </FormWrapper>
        </ContentWrapper>
      </DetailsWrapper>
      <TextWrapper>
        <Label>
          <Input
            type="checkbox"
            checked={checked}
            onChange={() => {
              setChecked((status) => !status);
            }}
          />
          <Span className="slider round" />
        </Label>
        <Text>Dangerous Cargo (ex. Chemicals, Battery)</Text>
      </TextWrapper>
    </Wrapper>
  );
}
