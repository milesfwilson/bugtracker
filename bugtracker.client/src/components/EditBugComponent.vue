<template>
  <div class="editBugComponent">
    <button class="btn mr-1" v-if="!activeBug.closed && activeBug.creatorId == profile.id" data-toggle="modal" :data-target="'#edit'+activeBug.id">
      <i class="far fa-edit"></i>
    </button>

    <!-- Modal -->
    <div class="modal fade"
         :id="'edit'+activeBug.id"
         tabindex="-1"
         role="dialog"
         aria-labelledby="modelTitleId"
         aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              Edit Bug
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form class="form-group" @submit.prevent="editBugContents(activeBug.id)">
              <input type="text" class="form-control radius-25 my-2" :placeholder="activeBug.title" v-model="state.newBug.title">
              <input type="text" class="form-control radius-25 my-2" :placeholder="activeBug.content" v-model="state.newBug.content">
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
import { AppState } from '../AppState'
import { computed, reactive } from 'vue'
import { bugService } from '../services/BugService'
export default {
  name: 'EditBugComponent',
  setup() {
    const state = reactive({
      newBug: {

      }
    })
    return {
      state,
      activeBug: computed(() => AppState.activeBug),
      profile: computed(() => AppState.profile),
      editBugContents(id, newBug) {
        bugService.editBugContents(id, state.newBug)
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
