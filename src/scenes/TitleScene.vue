<script>
import { Scene, Image, useGame, refObj } from "phavuer";
import assets from "../assets/assets.json";
import { defineComponent } from "vue";

export default defineComponent({
  components: { Scene, Image },
  setup() {
    const game = useGame();

    const burger = refObj(null);

    const preload = (scene) => {
      assets.forEach(({ name, path }) => {
        scene.load.image(name, path);
      });
    }

    const onClick = (event, x, y, image, data) => {
      const obj = burger.value;
    }

    return { preload, onClick, burger };
  }
})
</script>

<template>
  <Scene name="TitleScene" :autoStart="true" @preload="preload">
    <Image texture="phavuer" :origin="0" :x="200" />
    <Image ref="burger" texture="burger" :origin="0" :x="300" :y="150" @pointerdown="onClick" />
  </Scene>
</template>
