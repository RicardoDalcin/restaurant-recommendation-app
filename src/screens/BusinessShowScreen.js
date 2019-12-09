import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import yelp from '../api/yelp'

const BusinessShowScreen = ({ navigation }) => {

  const [business, setBusiness] = useState(null)

  const id = navigation.getParam('id')

  const getBusiness = async (id) => {
    const response = await yelp.get(`/${id}`)
    setBusiness(response.data)
  }

  useEffect(() => {
    getBusiness(id)
  }, [])

  if (!business) {
    return null
  }

  return (
    <View>
      <Text>Show {business.name}</Text>
      <FlatList
        data={business.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => <Image style={styles.image} source={{ uri: item }} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    height: 120,
    width: 250
  }
})

export default BusinessShowScreen