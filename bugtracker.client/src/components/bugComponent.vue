<template>
  <div class="bugComponent">
    <router-link :to="{name: 'ActivePage', params: {bugId: bugProps.id}}" class="text-dark">
      <div class="row bg-light text-dark radius-25 p-1 my-1 shadow-lg grow">
        <div class="col-1">
          <i :class="{'text-danger': bugProps.closed}" class="fa fa-circle fa-2x text-success" aria-hidden="true"></i>
        </div>
        <div class="col-3 d-flex">
          <p class="text-center my-auto">
            {{ bugProps.title }}
          </p>
        </div>
        <div class="col-6 d-flex">
          <p class="text-left my-auto">
            {{ bugProps.content }}
          </p>
        </div>

        <div class="col-2 text-right">
          <h6>
            {{ bugProps.updatedAt.split('T').splice(0,1).join('') }}
          </h6>
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
.grow:hover {
  transform: scale(1.01);
  transition: all .25s ease-in-out;
  }

</style>
