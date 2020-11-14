<template>
  <div class="home container-fluid">
    <div class="row my-2">
      <div class="col-2 offset-1 d-flex">
        <button class="btn btn-dark radius-25 shadow" data-toggle="collapse" data-target="#contentId">
          Start Tracking
        </button>
      </div>
    </div>
    <div class="row my-2 collapse" id="contentId">
      <div class="col-8 offset-2">
        <CreateBugComponent />
      </div>
    </div>
    <div class="row">
      <div class="col-8 offset-2">
        <div class="row">
          <div class="col-1">
            <h6>Status</h6>
          </div>
          <div class="col-3">
            <h6>Title</h6>
          </div>
          <div class="col-6">
            <h6>Description</h6>
          </div>
          <div class="col-2">
            <h6>Last Modified</h6>
          </div>
        </div>
        <BugComponent v-for="bug in bugs" :key="bug.id" :bug-props="bug" />
      </div>
    </div>
  </div>
</template>

<script>
import CreateBugComponent from '../components/createBugComponent'
import BugComponent from '../components/bugComponent'
import { computed } from 'vue'
import { AppState } from '../AppState'
export default {
  name: 'Home',
  setup() {
    return {
      bugs: computed(() => AppState.bugs)

    }
  },
  components: { CreateBugComponent, BugComponent }
}
</script>

<style scoped lang="scss">

</style>
