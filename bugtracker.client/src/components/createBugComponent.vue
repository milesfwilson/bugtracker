<template>
  <div class="createBugComponent col-8 offset-2">
    <form class="form-group" @submit.prevent="createBug()">
      <input type="text" class="form-control" placeholder="Title" v-model="state.newBug.title">
      <input type="text" class="form-control" placeholder="Description" v-model="state.newBug.content">
      <button class="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import { reactive, computed } from 'vue'
import { AppState } from '../AppState'
import { bugService } from '../services/BugService'
export default {
  name: 'CreateBugComponent',
  setup() {
    const state = reactive({
      newBug: {

      }
    })
    return {
      state,
      profile: computed(() => AppState.profile),
      createBug(newBug) {
        bugService.createBug(state.newBug)
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
