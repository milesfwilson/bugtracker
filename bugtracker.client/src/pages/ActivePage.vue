<template>
  <div class="activePage container-fluid">
    <div class="row mt-5">
      <div class="col-8 offset-2 bg-light p-2">
        <div class="row">
          <div class="col-12 text-left">
            <h3>
              {{ activeBug.title }}
            </h3>
          </div>
        </div>
        <div class="row">
          <div class="col-12 text-center">
            <p>
              {{ activeBug.content }}
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-10 offset-1">
            <noteComponent v-for="note in notes" :key="note.id" :note-props="note" />
          </div>
        </div>
      </div>
    </div>
    <newNoteComponent />
  </div>
</template>

<script>
import { bugService } from '../services/BugService'
import { AppState } from '../AppState'
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import NoteComponent from '../components/NoteComponent'
import NewNoteComponent from '../components/newNoteComponent'
export default {
  name: 'ActivePage',
  setup() {
    const route = useRoute()
    onMounted(() => {
      bugService.getActiveBug(route.params.bugId)
    })

    return {
      activeBug: computed(() => AppState.activeBug),
      notes: computed(() => AppState.notes)

    }
  },
  components: { NoteComponent, NewNoteComponent }
}
</script>

<style lang="scss" scoped>

</style>
