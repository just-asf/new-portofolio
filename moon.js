import * as THREE from "https://unpkg.com/three@0.161.0/build/three.module.js";

const container = document.getElementById("moon-3d");
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  45,
  container.clientWidth / container.clientHeight,
  0.1,
  1000
);
camera.position.z = 3;

const renderer = new THREE.WebGLRenderer({
  alpha: true,
  antialias: true,
});
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);
container.appendChild(renderer.domElement);

const loader = new THREE.TextureLoader();
const moonTexture = loader.load("./ressource/img/texture-moon.jpg");
const geometry = new THREE.SphereGeometry(1, 64, 64);
const material = new THREE.MeshStandardMaterial({
  map: moonTexture,
});
const moon = new THREE.Mesh(geometry, material);
scene.add(moon);

const light = new THREE.PointLight(0xffffff, 10);
light.position.set(0, 2, 3);
scene.add(light);

function animate() {
  requestAnimationFrame(animate);
  moon.rotation.y += 0.002;
  renderer.render(scene, camera);
}

animate();

window.addEventListener("resize", () => {
  renderer.setSize(container.clientWidth, container.clientHeight);
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();
});
