import { Text } from '@/components/Text'
import { SplashScreen } from 'expo-router'
import { useFonts } from 'expo-font'
import { useEffect } from 'react'
import Constants from 'expo-constants'
import { Colors } from '@/constants/Colors'

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [loaded] = useFonts({
    'Outfit-500': require('../assets/fonts/Outfit-Regular.ttf'),
    'Outfit-600': require('../assets/fonts/Outfit-SemiBold.ttf'),
    'Outfit-700': require('../assets/fonts/Outfit-Bold.ttf'),
  })

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) {
    return null
  }

  return (
    <Text
      weight={700}
      color={Colors.primary['orange-500']}
    >
      Hello World! {Constants.expoConfig?.extra?.IMAGE_URI}
    </Text>
  )
}
