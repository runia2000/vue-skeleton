<template>
  <div>
    <h4>Dummy Page</h4>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'NavProvider',
    data: function () {
      return {
        selected: ''
      }
    },
    computed: mapGetters({
      user: 'user/user'
    }),
    created: function () {
      this.$store.dispatch('user/getUser')
    }
  }
</script>
