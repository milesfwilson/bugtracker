import { dbContext } from '../db/DbContext'

import { BadRequest } from '../utils/Errors'

class NoteService {
  async deleteNote(noteId, userId) {
    const exists = await dbContext.Notes.findById(noteId)
    if (!exists) {
      throw new BadRequest('This Note does not exist')
    // @ts-ignore
    } else if (exists._doc.creatorId === userId) {
      await dbContext.Notes.findByIdAndDelete(noteId)
      return 'Comment has been delorted!'
    }
  }

  async getNotesByBug(bugId) {
    return await dbContext.Notes.find({ bugId: bugId })
  }

  async getAllNotes(query = {}) {
    return await dbContext.Notes.find(query)
  }

  async getOneNote(noteId) {
    return await dbContext.Notes.findById(noteId)
  }

  async createNote(body) {
    return await dbContext.Notes.create(body)
  }

  async editNote(id, body, userId) {
    const exists = await dbContext.Notes.findById(id)
    if (!exists) {
      throw new BadRequest('This Note does not exist')
    // @ts-ignore
    } else if (exists._doc.creatorId === userId) {
      await dbContext.Notes.findByIdAndUpdate(id, body)
      return 'Note has been updated!'
    }
  }
}

export const noteService = new NoteService()
