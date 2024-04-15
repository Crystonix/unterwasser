import * as THREE from 'three';
import { setupCamera } from './setupCamera';
import {setupEnvironment} from "./setupEnvironment";

export default class CustomScene {
    constructor() {
        this.scene = new THREE.Scene();

        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);
        this.renderer.setClearColor(0xffffff);
        
        this.camera = setupCamera(this.renderer);


        //setupEnvironment(this.scene);

        this.objects = [];
        this.animate();

    }

    addObject(object) {
        this.objects.push(object);
        this.scene.add(object);
    }

    animate() {
        requestAnimationFrame(() => this.animate());
        this.renderer.render(this.scene, this.camera.getCamera());
    }
}

// Example usage:
const scene = new CustomScene();

// Add any objects you want to the scene
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.addObject(cube);
