import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const BusinessDetail = ({ business }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ url: business.image_url }} />
      <Text style={styles.name}>{business.name}</Text>
      <Text>{business.rating} Stars, {business.review_count} Reviews</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  image: {
    width: 250,
    borderRadius: 4,
    height: 120,
    marginBottom: 5
  },
  name: {
    fontWeight: 'bold'
  }
})

export default BusinessDetail