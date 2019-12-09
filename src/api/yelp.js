import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer OHYa8IFpHaeGaKQoYn0hmGu3vRNMhjBrIvhGBysluhkj333SYxf-92aLYJzc5w3o35kUhDP46UGLIov2TrGMxq6twa4xf2OocGRaDydZpOVzzf5WH4VF2y-UigzpXXYx'
  }
})