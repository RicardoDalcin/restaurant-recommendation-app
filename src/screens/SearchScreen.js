import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import SearchBar from '../components/SearchBar'
import yelp from '../api/yelp'
import useBusinesses from '../hooks/useBusinesses'
import BusinessList from '../components/BusinessList'

const SearchScreen = () => {

  const [term, setTerm] = useState('')
  const [getBusinesses, businesses] = useBusinesses()

  const filterBusinessesByPrice = (price) => {
    return businesses.filter(b => b.price === price)
  }

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => getBusinesses(term)}
      />
      <ScrollView>
        <BusinessList
          title='Cost Effective'
          businesses={filterBusinessesByPrice("$")}
        />
        <BusinessList
          title='Bit Pricier'
          businesses={filterBusinessesByPrice("$$")}
        />
        <BusinessList
          title='Big Spender'
          businesses={filterBusinessesByPrice("$$$")}
        />
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({

})

export default SearchScreen