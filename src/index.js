import Phaser from "phaser";
import { createApp } from "vue";
import { createPhavuerApp } from "phavuer";
import MainScene from "./scenes/MainScene.vue";
import config from "./modules/config.js";

const app = createApp(MainScene);
const game = new Phaser.Game({
  type: Phaser.AUTO,
  width: config.WIDTH,
  height: config.HEIGHT,
  backgroundColor: "black",
  parent: "game",
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 }
    }
  },
  audio: {
    disableWebAudio: true
  },
  input: {
    activePointers: 3
  }
});

createPhavuerApp(game, app);

window.addEventListener("resize", () => game.scale.refresh());
