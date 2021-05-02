import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
const styles = StyleSheet.create({
  default: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    paddingHorizontal: 24,
    paddingVertical: 12,
    backgroundColor: '#f0f',
  },
  disabled: {
    opacity: 0.4,
  },
})

export default function Button({
  onPress,
  title,
  disabled,
  style,
}: {
  onPress: () => void
  title: string
  style?: any
  disabled?: boolean
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || false}
      style={[styles.default, disabled && styles.disabled, style]}
    >
      <Text style={{ color: 'white' }}>{title}</Text>
    </TouchableOpacity>
  )
}
