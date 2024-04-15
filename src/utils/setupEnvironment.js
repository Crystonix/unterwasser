import * as THREE from 'three';

function setupEnvironment(scene) {
    // Ambient light
    const ambientLight = new THREE.AmbientLight('blue', 0.5);
    scene.add(ambientLight);

    // Directional light
    const directionalLight = new THREE.DirectionalLight('light red', 5);
    directionalLight.position.set(0, 5, 0);
    // Shadow configuration
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 64;
    directionalLight.shadow.mapSize.height = 64;
    directionalLight.shadow.camera.near = 0.5;
    directionalLight.shadow.camera.far = 32;
    scene.add(directionalLight);

    // Fog
    const fogColor = new THREE.Color("mediumseagreen");
    const fogDensity = 0.2;
    scene.fog = new THREE.FogExp2(fogColor, fogDensity);
}

export { setupEnvironment };
