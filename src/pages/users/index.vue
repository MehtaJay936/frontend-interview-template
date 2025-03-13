<template>
    <h2>Users List Page</h2>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";

export default defineComponent({
  name: "users-list",
  components: {},

  mounted() {
    this.fetchUsers();
    console.log("api calling of users in mounted");
  },

  methods: {
    ...mapActions(["fetchUsers"]),
  },
});
</script>
