import * as THREE from "https://unpkg.com/three@r150/build/three.module.js";

// 1. Create Scene
const scene = new THREE.Scene();

// 2. Create Camera
const camera = new THREE.PerspectiveCamera(
  75, // field of view
  window.innerWidth / window.innerHeight, // aspect ratio
  0.1, // near clipping
  1000 // far clipping
);
camera.position.z = 5;

// 3. Create Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 4. Create Geometry (Cube)
const geometry = new THREE.BoxGeometry();

// 5. Create Material (Color)
const material = new THREE.MeshBasicMaterial({
  color: 0x00ff00
});

// 6. Create Mesh (Object)
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// 7. Animation Loop
function animate() {
  requestAnimationFrame(animate);

  // Rotate cube
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  // Render scene
  renderer.render(scene, camera);
}

// Start animation
animate();