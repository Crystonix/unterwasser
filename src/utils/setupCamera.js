import * as THREE from 'three';
import {OrbitControls}  from "three/addons";

function setupCamera(renderer) {
    // Create camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight);
    camera.position.set(2, 2, 2);

    // Enable OrbitControls for interactive camera movement
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 1, 0); // Set the target to the center of the scene
    controls.update(); // Update controls to apply the target change

    // Set up resizing logic
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
        // Update any camera-related logic here
        controls.update();
    }

    function getCamera() {
        return camera;
    }

    return { update, getCamera };
}

export { setupCamera };
