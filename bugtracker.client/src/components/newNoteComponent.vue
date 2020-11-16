<template>
  <div class="newNoteComponent">
    <button type="button" class="btn" data-toggle="modal" data-target="#modelId">
      <h4 class="text-dark">
        Add Comment
      </h4>
    </button>

    <!-- Modal -->
    <div class="modal fade"
         id="modelId"
         tabindex="-1"
         role="dialog"
         aria-labelledby="modelTitleId"
         aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              Add New Note
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="container-fluid">
              <div class="row">
                <div class="col-12">
                  <form class="form-group" @submit.prevent="createNote(activeBug.id)">
                    <input type="text" class="form-control radius-25 my-2" placeholder="Content" v-model="state.newNote.content">
                    <button class="btn btn-block btn-dark radius-25" type="submit">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, computed } from 'vue'
import { noteService } from '../services/NoteService'
import { AppState } from '../AppState'
export default {
  name: 'NewNoteComponent',
  setup() {
    const state = reactive({
      newNote: {

      }
    })

    return {
      state,
      activeBug: computed(() => AppState.activeBug),
      createNote(bugId, newNote) {
        noteService.createNote(bugId, state.newNote)
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
