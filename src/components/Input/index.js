import React from 'react';
import {TextInput, View, Text} from 'react-native';
import CommonStyles from '../../utills/CommonStyles';
import styles from './styles';

const Input = ({
  placeholder,
  keyboardType,
  secureTextEntry = false,
  fieldLable,
  onPress,
  editable = true,
  maxLength,
  numberOfLines,
  value,
  multiline = false,
  containerStyle = {},
  textStyle = {},
  viewCountanerStyle,
  onChangeText,
  autoCapitalize,
  inlineImageLeft,
  inlineImagePadding,
}) => {
  return (
    <View style={CommonStyles.row}>
      <View style={[styles.inputContainer, viewCountanerStyle]}>
        <Text style={styles.label}>{fieldLable}</Text>
        <View style={styles.mainContainer}>
          <View>
            <TextInput
              multiline={multiline}
              style={[styles.input, containerStyle]}
              placeholder={placeholder}
              label={fieldLable}
              keyboardType={keyboardType}
              secureTextEntry={secureTextEntry}
              value={value}
              onChangeText={onChangeText}
              textStyle={textStyle}
              maxLength={maxLength}
              onPress={onPress}
              editable={editable}
              autoCapitalize={autoCapitalize}
              numberOfLines={numberOfLines}
              inlineImageLeft={inlineImageLeft}
              inlineImagePadding={inlineImagePadding}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
export default Input;
