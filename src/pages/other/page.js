import React from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'
import { Button } from './components/Button'

function App({ other, dispatch }) {
  const { text } = other
  const changetext = () => dispatch({ type: 'other/fetch' })
  return (
    <View>
      <Text>{text}</Text>
      <Button onPress={changetext}>
        <Text>click</Text>{' '}
      </Button>
    </View>
  )
}
export default connect(({ other }) => ({ other }))(App)
