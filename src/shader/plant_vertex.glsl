uniform float time;

void main() {
    vec3 pos = position;
    // Apply deformation based on x and y coordinates
    float deform = sin(pos.x * 2.0 + time * 0.5) * sin(pos.y * 5.0 + time * 0.2) * 0.05;
    pos.z += deform;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}