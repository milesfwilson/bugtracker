import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  profile: {},
  bugs: [],
  notes: [],
  activeBug: {},
  sort: { order: 'all', updatedSort: false, createdSort: false }
})
