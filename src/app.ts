import { GameLoop } from './GameLoop.js';
import OceanCleanup from './MalwareMalvin.js';

const oceanCleanup = new OceanCleanup(document.getElementById('game') as HTMLCanvasElement);

const gameLoop = new GameLoop(oceanCleanup);
window.addEventListener('load', () => {
  gameLoop.start();
});
