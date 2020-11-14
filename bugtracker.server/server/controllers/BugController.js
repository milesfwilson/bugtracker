import { Auth0Provider } from '@bcwdev/auth0provider'
import { bugService } from '../services/BugService'
import { noteService } from '../services/NoteService'
import BaseController from '../utils/BaseController'

export class BugController extends BaseController {
  constructor() {
    super('api/bugs')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getAllBugs)
      .get('/:bugId', this.getOneBug)
      .post('', this.createBug)
      .put('/:bugId', this.editBug)
      .get('/:bugId/notes', this.getNotesByBug)
  }

  async getAllBugs(req, res, next) {
    try {
      res.send(await bugService.getAllBugs(req.query))
    } catch (error) {
      next(error)
    }
  }

  async getNotesByBug(req, res, next) {
    try {
      res.send(await noteService.getNotesByBug(req.params.bugId))
    } catch (error) {
      next(error)
    }
  }

  async getOneBug(req, res, next) {
    try {
      res.send(await bugService.getOneBug(req.params.bugId))
    } catch (error) {
      next(error)
    }
  }

  async createBug(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      res.send(await bugService.createBug(req.body))
    } catch (error) {
      next(error)
    }
  }

  async editBug(req, res, next) {
    try {
      res.send(await bugService.editBug(req.params.bugId, req.body))
    } catch (error) {
      next(error)
    }
  }
}
