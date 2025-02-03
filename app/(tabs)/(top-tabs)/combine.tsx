import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Combine = () => {
  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <View className='ml-8 mr-8 mt-4'>
        <Text>Combine</Text>
      </View>
    </SafeAreaView>
  )
}

export default Combine