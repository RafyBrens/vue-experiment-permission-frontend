<template>
  <div class="home">
    <PermissionList/>
  </div>
</template>

<script>
import PermissionList from "@/views/PermissionList/PermissionList.vue";

export default {
  name: "Home",
  components: { 
    PermissionList
  }
};
</script>
