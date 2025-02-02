import { View, Text } from 'react-native'
import React from 'react'
import { verifyInstallation } from 'nativewind';

const Forehead = () => {
  verifyInstallation();
  return (
    <View className="flex-1 items-center justify-center bg-white">

      <Text className='text-red-600'>Open up App.js to start working on your app!</Text>

    </View>
  )
}

export default Forehead