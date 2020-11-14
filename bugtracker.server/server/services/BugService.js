import { dbContext } from '../db/DbContext'

// import { BadRequest } from '../utils/Errors'

class BugService {
  async getAllBugs(query = {}) {
    return await dbContext.Bugs.find(query)
  }

  async getOneBug(bugId) {
    return await dbContext.Bugs.findById(bugId)
  }

  async createBug(body) {
    return await dbContext.Bugs.create(body)
  }

  async editBug(id, body) {
    return await dbContext.Bugs.findByIdAndUpdate(id, body)
  }
}

export const bugService = new BugService()
