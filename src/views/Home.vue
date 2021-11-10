<template>
  <EditorModal />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import EditorModal from "./EditorModal.vue";

export default defineComponent({
  name: "Home",
  components: { EditorModal },
});
</script>
