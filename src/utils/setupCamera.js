import * as THREE from '../external/three';
import {OrbitControls}  from "../external/three/examples/jsm/controls/OrbitControls";

function setupCamera(renderer) {

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight);
    camera.position.set(0, 2, 0);

    const control_is_enabled = false;
    if (control_is_enabled){
        const controls = new OrbitControls(camera, renderer.domElement);

        controls.target.set(0, 1, 0);
        controls.update();
    }

    window.addEventListener('resize', () => {
        handleResize();
    });

    handleResize(); // Ensure proper aspect ratio on initialization

    function handleResize() {
        const newWidth = window.innerWidth;
        const newHeight = window.innerHeight;

        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(newWidth, newHeight);
    }

    function update() {
        controls.update();
    }

    function getCamera() {
        return camera;
    }

    return { update, getCamera };
}

export { setupCamera };
