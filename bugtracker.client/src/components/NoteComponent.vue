<template>
  <div class="NoteComponent row">
    <div class="col-2">
      Name
    </div>
    <div class="col-8">
      <p>
        {{ noteProps.content }}
      </p>
    </div>
    <div class="col-2">
      <button class="btn" @click="deleteNote(noteProps.id)">
        Delete
      </button>
    </div>
  </div>
</template>

<script>
import { noteService } from '../services/NoteService'
export default {
  name: 'NoteComponent',
  props: ['noteProps'],
  setup() {
    return {
      deleteNote(id) {
        noteService.deleteNote(id)
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
