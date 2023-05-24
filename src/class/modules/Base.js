import { randomHashKey } from '@/utils'

class Base {
  constructor () {
    this.setHashKey()
  }

  setHashKey () {
    this.hashKey = randomHashKey(['up_en', 'low_en', 'num'], 40)
  }
}

export default Base
