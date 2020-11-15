<template>
  <div class="NoteComponent row radius-25 shadow-lg m-2 p-1" v-if="noteProps.bugId == activeBug.id">
    <div class="col-10">
      <div class="d-flex move-left">
        <img :src="noteProps.creatorImg" class="rounded-circle mr-4" height="40" alt="">
        <p class=" my-auto">
          {{ noteProps.content }}
        </p>
      </div>
    </div>
    <div class="col-2 d-flex justify-content-end">
      <button v-if="!activeBug.closed" type="button" class="btn btn-dark radius-25" data-toggle="modal" :data-target="'#modal'+noteProps.id">
        Edit
      </button>
      <button class="btn" @click="deleteNote(noteProps.id)" v-if="!activeBug.closed">
        <i class="fa fa-trash-o" aria-hidden="true"></i>
      </button>
    </div>

    <!-- Button trigger modal -->

    <!-- Modal -->
    <div class="modal fade"
         :id="'modal'+noteProps.id"
         tabindex="-1"
         role="dialog"
         aria-labelledby="modelTitleId"
         aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              Edit Note
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form class="form-group" @submit.prevent="editNote(noteProps.id)">
              <input type="text" class="form-control radius-25 my-2" :placeholder="noteProps.content" v-model="state.newNote.content">
              <button class="btn btn-block btn-dark radius-25" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { noteService } from '../services/NoteService'
import { computed, reactive } from 'vue'
import { AppState } from '../AppState'
export default {
  name: 'NoteComponent',
  props: ['noteProps'],
  setup() {
    const state = reactive({
      newNote: {

      }
    })
    return {
      state,
      activeBug: computed(() => AppState.activeBug),

      deleteNote(id) {
        noteService.deleteNote(id)
      },
      editNote(id) {
        noteService.editNote(id, state.newNote)
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
.move-left {
  position: relative;
  left: -65px;
}
</style>
