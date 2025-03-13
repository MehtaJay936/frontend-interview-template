<template>
  <h2>Post View page</h2>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions } from "vuex";

export default defineComponent({
  name: "posts-list",
  components: {},

  mounted() {
    this.fetchUsersPosts();
    console.log("api calling of users posts in mounted");
  },

  methods: {
    ...mapActions(["fetchUsersPosts"]),
  },
});
</script>
