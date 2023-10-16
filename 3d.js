let screensaverTimeout;
const screensaverContainer = document.getElementById("screensaver");
const canvasContainer = document.getElementById("screensaver-canvas");

function init() {
    // Create a Three.js scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    canvasContainer.appendChild(renderer.domElement);

    // Create a cube and add it to the scene
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    // Define the animation loop
    const animate = () => {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
    };

    animate();
}

function showScreensaver() {
    screensaverContainer.style.display = "block";
    init();
}

function hideScreensaver() {
    screensaverContainer.style.display = "none";
}

function resetScreensaverTimeout() {
    clearTimeout(screensaverTimeout);
    screensaverTimeout = setTimeout(showScreensaver, 60000); // Show screensaver after 1 minute of inactivity
}

// Add event listeners for user activity
window.addEventListener("mousemove", resetScreensaverTimeout);
window.addEventListener("keydown", resetScreensaverTimeout);
window.addEventListener("click", resetScreensaverTimeout);

// Initial setup
resetScreensaverTimeout();
