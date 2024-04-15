//customScene.js

import * as THREE from 'three';
import { setupCamera } from './utils/setupCamera';
import {setupEnvironment} from "./utils/setupEnvironment";
import {setupTerrain} from "./utils/setupTerrain";
import UnderwaterBubbles from './particles/UnderwaterBubbles';

export default class CustomScene {
    constructor() {
        this.scene = new THREE.Scene();

        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);
        this.renderer.setClearColor('MediumseaGreen');
        this.renderer.shadowMap.enabled = true;

        this.camera = setupCamera(this.renderer);

        setupEnvironment(this.scene);
        setupTerrain(this.scene);

        this.underwaterBubbles = new UnderwaterBubbles(this.scene);
        this.clock = new THREE.Clock();

        this.animate();
    }

    animate() {
        const deltaTime = this.clock.getDelta();

        this.underwaterBubbles.animate(deltaTime);
        //this.underwaterPlant.update(deltaTime);
        this.renderer.render(this.scene, this.camera.getCamera());
        requestAnimationFrame(() => this.animate());
    }
}
