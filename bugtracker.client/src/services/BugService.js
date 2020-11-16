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

  async sortByModified() {
    try {
      if (!AppState.sort.updatedSort) {
        AppState.bugs = AppState.bugs.sort((a, b) => b.updatedAt.split('T').splice(0, 1).join('').split('-').join('') - a.updatedAt.split('T').splice(0, 1).join('').split('-').join(''))
      } else {
        AppState.bugs = AppState.bugs.sort((b, a) => b.updatedAt.split('T').splice(0, 1).join('').split('-').join('') - a.updatedAt.split('T').splice(0, 1).join('').split('-').join(''))
      }
      AppState.sort.updatedSort = !AppState.sort.updatedSort
      // AppState.bugs.sort((a, b) => b.lastUpdated - a.lastUpdated)
    } catch (error) {
      logger.error(error)
    }
  }

  async sortByCreated() {
    try {
      if (!AppState.sort.createdSort) {
        AppState.bugs = AppState.bugs.sort((a, b) => b.createdAt.split('T').splice(0, 1).join('').split('-').join('') - a.createdAt.split('T').splice(0, 1).join('').split('-').join(''))
      } else {
        AppState.bugs = AppState.bugs.sort((b, a) => b.createdAt.split('T').splice(0, 1).join('').split('-').join('') - a.createdAt.split('T').splice(0, 1).join('').split('-').join(''))
      }
      AppState.sort.createdSort = !AppState.sort.createdSort
      // AppState.bugs.sort((a, b) => b.lastUpdated - a.lastUpdated)
    } catch (error) {
      logger.error(error)
    }
  }

  async getActiveBug(id) {
    try {
      const res = await api.get('api/bugs/' + id)
      AppState.activeBug = res.data
    } catch (error) {
      logger.error(error)
    }
  }

  async createBug(newBug) {
    try {
      await api.post('api/bugs/', newBug)

      this.getBugs()
    } catch (err) {
      logger.error('HAVE YOU STARTED YOUR SERVER YET???', err)
    }
  }

  async editBug(id, newBug) {
    try {
      newBug.closed = !newBug.closed
      await api.put('api/bugs/' + id, newBug)
      this.getBugs()
      this.getActiveBug(id)
    } catch (err) {
      logger.error('HAVE YOU STARTED YOUR SERVER YET???', err)
    }
  }

  async editBugContents(id, newBug) {
    try {
      await api.put('api/bugs/' + id, newBug)
      this.getBugs()
      this.getActiveBug(id)
    } catch (err) {
      logger.error('HAVE YOU STARTED YOUR SERVER YET???', err)
    }
  }
}

export const bugService = new BugService()
