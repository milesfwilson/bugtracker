import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class BugService {
  async getBugs() {
    try {
      const res = await api.get('api/bugs')
      AppState.bugs = res.data
    } catch (err) {
      logger.error('HAVE YOU STARTED YOUR SERVER YET???', err)
    }
  }

  async getActiveBug(id) {
    try {
      const res = await api.get('api/bugs/' + id)
      AppState.activeBug = res.data
      logger.log(AppState.activeBug)
    } catch (error) {
      logger.error(error)
    }
  }

  async createBug(newBug) {
    try {
      const res = await api.post('api/bugs/', newBug)
      AppState.bugs = res.data
      this.getBugs()
    } catch (err) {
      logger.error('HAVE YOU STARTED YOUR SERVER YET???', err)
    }
  }

  async editBug(id, newBug) {
    try {
      await api.get('api/bugs/' + id, newBug)
      this.getBugs()
    } catch (err) {
      logger.error('HAVE YOU STARTED YOUR SERVER YET???', err)
    }
  }
}

export const bugService = new BugService()
