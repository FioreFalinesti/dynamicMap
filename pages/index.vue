<script>
import { ref } from "vue";

definePageMeta({
  layout: "default",
});

export default {
  setup() {
    const count = ref(0);

    return {
      count,
    };
  },

  mounted() {
    console.log(this.count); // 0
  },
};
</script>

<template>
  <!--<button @click="count++">{{ count }}</button>-->
  <Button label="Verify" />
</template>
