import * as THREE from '../external/three.js';

class UnderwaterBubbles {
    constructor(scene, numberOfBubbles = 500) {
        this.scene = scene;
        this.numberOfBubbles = numberOfBubbles;
        this.pos = new THREE.Vector3(0,0,0);
        this.range = 3;
        this.bubbles = [];

        this.createBubbles();
    }

    createBubbles() {
        const geometry = new THREE.SphereGeometry(0.01, 16, 16);
        const material = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.6 });

        for (let i = 0; i < this.numberOfBubbles; i++) {
            const bubble = new THREE.Mesh(geometry, material);
            bubble.position.set(
                Math.random() * 10 - 5,
                Math.random() * 5 - 2.5,
                Math.random() * 10 - 5
            );
            this.bubbles.push(bubble);
            this.scene.add(bubble);
        }
    }

    animate(deltaTime) {
        this.bubbles.forEach(bubble => {
            bubble.position.y += 0.005;
            if (bubble.position.y > this.range) {
                bubble.position.y = -this.range;
            }
        });
    }
}
export default UnderwaterBubbles;