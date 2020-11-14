<template>
  <div class="home container-fluid">
    <div class="row">
      <CreateBugComponent />
    </div>
    <div class="row">
      <div class="col-8 offset-2">
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
