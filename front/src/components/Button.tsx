import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

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
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        paddingHorizontal: 24,
        paddingVertical: 12,
        backgroundColor: '#f0f',
        ...style,
      }}
    >
      <Text style={{ color: 'white' }}>{title}</Text>
    </TouchableOpacity>
  )
}
