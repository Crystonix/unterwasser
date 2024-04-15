import * as THREE from 'three';
import {loadShader} from "./loadShader";

export function setupTerrain(scene){
    generateSandPlane(scene);
}

function generateSandPlane(scene) {
    var plane_geometry = new THREE.PlaneGeometry(16, 16, 16, 16);

    const textureLoader = new THREE.TextureLoader();
    const sandTexture = textureLoader.load('src/assets/textures/clay/clay_plaster_diff_4k.jpg');
    const displacementMap = textureLoader.load('src/assets/textures/clay/clay_plaster_disp_4k.png');

    var plane_material = new THREE.MeshStandardMaterial({
        map: sandTexture,
        displacementMap: displacementMap,
        displacementScale: 1,
        roughness: 0.8,
        metalness: 0.1,
    });

    var plane_mesh = new THREE.Mesh(plane_geometry, plane_material);
    plane_mesh.receiveShadow = true;
    plane_mesh.rotation.x = THREE.MathUtils.degToRad(-90);
    scene.add(plane_mesh);

    let previousTime = 0;
}