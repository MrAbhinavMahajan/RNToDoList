import React from 'react';
import {Text, TextInput} from 'react-native';
import {COLORS} from '../utilities/Colors';

export const AppText = ({children, style = {}}) => (
  <Text
    style={[
      {
        color: COLORS.black,
      },
      style,
    ]}>
    {children}
  </Text>
);

export const AppTextInput = ({
  children,
  style = {},
  placeholder = '',
  onChangeText,
  autoFocus = false,
}) => (
  <TextInput
    style={[
      {
        color: COLORS.black,
      },
      style,
    ]}
    placeholder={placeholder}
    placeholderTextColor={COLORS.basic500}
    autoFocus={autoFocus}
    onChangeText={onChangeText}>
    {children}
  </TextInput>
);
