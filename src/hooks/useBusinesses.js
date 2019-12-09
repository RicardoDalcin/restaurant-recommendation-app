import { useEffect, useState } from 'react'
import yelp from '../api/yelp'

export default () => {
  const [businesses, setBusinesses] = useState([])

  const getBusinesses = async (searchTerm) => {
    const response = await yelp.get('/search', {
      params: {
        limit: 50,
        term: searchTerm,
        location: 'san jose'
      }
    })
    setBusinesses(response.data.businesses)
  }

  useEffect(() => {
    getBusinesses('pasta')
  }, [])

  return [getBusinesses, businesses]
}