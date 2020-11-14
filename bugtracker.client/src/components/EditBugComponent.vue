<template>
  <div class="editBugComponent">
    <button class="btn btn-dark radius-25 mr-1" v-if="!activeBug.closed" data-toggle="modal" :data-target="'#edit'+activeBug.id">
      Edit
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
            <button class="btn btn-danger radius-25">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { AppState } from '../AppState'
import { computed } from 'vue'
export default {
  name: 'EditBugComponent',
  setup() {
    return {

      activeBug: computed(() => AppState.activeBug)
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
