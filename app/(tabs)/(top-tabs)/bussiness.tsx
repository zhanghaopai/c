import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { SegmentedControls } from 'react-native-radio-buttons'

const Bussiness = () => {
  const options = [
    "Option 1",
    "Option 2"
  ];
  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <View className='ml-8 mr-8 mt-4'>
        <SegmentedControls
          options={options}
        />
      </View>
    </SafeAreaView>
  )
}

export default Bussiness