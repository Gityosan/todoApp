import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'

// const apiUrl = process.env.VUE_APP_DEV_API_URL

const apiUrl = 'https://api-ap-northeast-1.graphcms.com/v2/ckl21mipwgflq01yw7o0qebz1/master'

export default () => ({
  link: new HttpLink({ uri: apiUrl }),
  cache: new InMemoryCache(),
})
