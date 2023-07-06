<script>
import { useGame } from "phavuer";
import TitleScene from "./TitleScene.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    TitleScene
  },
  setup() {
    console.log("Setup");
    const game = useGame();
    console.log(game);
  }
})
</script>

<template>
  <div class="container">
    <TitleScene />
  </div>
</template>
