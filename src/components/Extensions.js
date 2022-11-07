import React from 'react';
import {Text, TextInput} from 'react-native';
import {appTextColor, placeholderColor} from '../utilities/Constants';

export const AppText = ({children, style = {}}) => (
  <Text
    style={[
      {
        color: appTextColor,
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
        color: appTextColor,
      },
      style,
    ]}
    placeholder={placeholder}
    placeholderTextColor={placeholderColor}
    autoFocus={autoFocus}
    onChangeText={onChangeText}>
    {children}
  </TextInput>
);
