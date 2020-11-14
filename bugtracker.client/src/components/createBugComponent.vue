<template>
  <div class="createBugComponent col-8 offset-2">
    <form class="form-group border border-dark shadow radius p-2" @submit.prevent="createBug()">
      <input type="text" class="form-control radius-25 shadow" placeholder="Title" v-model="state.newBug.title">
      <input type="text" class="form-control radius-25 shadow my-2" placeholder="Description" v-model="state.newBug.content">
      <button class="btn btn-dark btn-block radius-25" type="submit">
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
