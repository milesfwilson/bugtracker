<template>
  <div class="NoteComponent row radius-25 shadow-lg m-2 p-1" v-if="noteProps.bugId == activeBug.id">
    <div class="col-10 d-flex">
      <p class=" my-auto">
        {{ noteProps.content }}
      </p>
    </div>
    <div class="col-2 d-flex justify-content-end">
      <button class="btn" @click="deleteNote(noteProps.id)" v-if="!activeBug.closed">
        <i class="fa fa-trash-o" aria-hidden="true"></i>
      </button>
    </div>
  </div>
</template>

<script>
import { noteService } from '../services/NoteService'
import { computed } from 'vue'
import { AppState } from '../AppState'
export default {
  name: 'NoteComponent',
  props: ['noteProps'],
  setup() {
    return {
      activeBug: computed(() => AppState.activeBug),

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
