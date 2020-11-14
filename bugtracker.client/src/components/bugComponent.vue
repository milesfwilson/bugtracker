<template>
  <div class="bugComponent">
    <router-link :to="{name: 'ActivePage', params: {bugId: bugProps.id}}" class=" text-dark">
      <div :class="{'bg-danger': !bugProps.closed, 'bg-success': bugProps.closed}" class="row">
        <div class="col-3">
          {{ bugProps.title }}
        </div>
        <div class="col-6">
          {{ bugProps.content }}
        </div>

        <div class="col-3 text-right">
          {{ bugProps.updatedAt.split('T').splice(0,1).join('') }}
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'BugComponent',
  props: ['bugProps'],
  setup() {
    return {}
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
