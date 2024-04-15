import * as THREE from '../external/three.js';
import {loadShader} from "../utils/loadShader";

class UnderwaterPlant {
    constructor(scene) {
        this.scene = scene;
        this.createPlant();
    }

    async createPlant() {
        const planeGeometry = new THREE.PlaneGeometry(0.1, 2, 10, 50);

        const planeMaterial = new THREE.MeshStandardMaterial();

        planeMaterial.vertexShader = await loadShader('src/shader/plant_vertex.glsl');

        planeMaterial.uniforms = {
            time: {value: 0}
        };

        this.planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);

        this.scene.add(this.planeMesh);
        this.planeMesh.position.set(1.0,0.5,1.0);
    }

    update(deltaTime) {
    }
    getMesh(){
        return this.planeMesh;
    }
}

export default UnderwaterPlant;