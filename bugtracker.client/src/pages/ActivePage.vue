<template>
  <div class="activePage container-fluid">
    <div class="row pt-5 mt-5">
      <div class="col-8 offset-2 bg-light p-2 radius shadow-lg">
        <div class="row">
          <div class="col-12 d-flex justify-content-between">
            <div class="d-flex move-left">
              <i :class="{'text-danger': activeBug.closed}" class="fa fa-circle fa-2x text-success" aria-hidden="true"></i>
              <h3 class="my-auto pl-4">
                {{ activeBug.title }}
              </h3>
            </div>
            <div class="d-flex">
              <button class="btn" data-toggle="collapse" data-target="#contentId">
                <i class="fas fa-info-circle"></i>
              </button>
              <editBugComponent />
              <button class="btn btn-danger radius-25" v-if="!activeBug.closed" @click="editBug(activeBug.id, activeBug)">
                Close Case
              </button>
            </div>
          </div>
        </div>

        <div class="row collapse" id="contentId" v-if="activeBug.id">
          <div class="col-12 d-flex justify-content-center">
            <div class="d-flex text-dark bg-light radius-25 p-2 my-2">
              <img :src="activeBug.creatorImg" class="rounded-circle mr-4 align-self-center" height="75" alt="">
              <div class="align-self-center">
                <h6 class="">
                  {{ activeBug.creatorEmail.split('@').splice(0,1).join('') }}
                </h6>
                <h6 class="small">
                  Created: {{ activeBug.createdAt.split('T').splice(0,1).join('') }}
                </h6>
                <h6 class="small">
                  Modified: {{ activeBug.updatedAt.split('T').splice(0,1).join('') }}
                </h6>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-12 text-left">
            <p class="p-2">
              {{ activeBug.content }}
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <newNoteComponent v-if="!activeBug.closed" />
          </div>
        </div>

        <div class="row">
          <div class="col-10 offset-1">
            <noteComponent v-for="note in notes" :key="note.id" :note-props="note" />
          </div>
        </div>
        <div class="row">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { bugService } from '../services/BugService'
import { AppState } from '../AppState'
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import NoteComponent from '../components/NoteComponent'
import NewNoteComponent from '../components/newNoteComponent'
import EditBugComponent from '../components/EditBugComponent'
export default {
  name: 'ActivePage',
  setup() {
    const route = useRoute()
    onMounted(() => {
      bugService.getActiveBug(route.params.bugId)
    })

    return {
      activeBug: computed(() => AppState.activeBug),
      notes: computed(() => AppState.notes),
      editBug(id, bug) {
        bugService.editBug(id, bug)
      }

    }
  },
  components: { NoteComponent, NewNoteComponent, EditBugComponent }
}
</script>

<style lang="scss" scoped>
.move-left {
  position: relative;
  left: -55px;
}

.small {
  font-size: 10;
}

</style>
