/**
 * 3D Neural Network Visualization
 * Cyberpunk minimal aesthetic for AI researcher portfolio
 */

(function() {
  'use strict';

  // Configuration
  const CONFIG = {
    nodeCount: 65,
    connectionDensity: 0.04,
    hubCount: 3,
    colors: {
      primary: 0x00ffff,    // Cyan
      secondary: 0x8a2be2,  // Purple
      accent: 0xff00ff,     // Magenta
      background: 0x0a0a12
    },
    animation: {
      autoRotateSpeed: 0.0008,
      nodePulseSpeed: 0.002,
      nodePulseAmount: 0.15,
      fadeInDuration: 1500,
      materializationDelay: 20
    }
  };

  // State
  let scene, camera, renderer;
  let nodes = [];
  let connections = [];
  let hubNodes = [];
  let gridPlane;
  let isHovering = false;
  let autoRotate = true;
  let lastInteraction = 0;
  let fadeProgress = 0;
  let startTime = 0;
  let prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let isDragging = false;
  let previousMousePosition = { x: 0, y: 0 };
  let rotationVelocity = { x: 0, y: 0 };

  // Check WebGL support
  function isWebGLSupported() {
    try {
      const canvas = document.createElement('canvas');
      return !!(window.WebGLRenderingContext &&
        (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
    } catch (e) {
      return false;
    }
  }

  // Initialize
  function init() {
    const canvas = document.getElementById('neuralCanvas');
    if (!canvas || !isWebGLSupported()) {
      if (canvas) canvas.style.display = 'none';
      return;
    }

    // Scene setup
    scene = new THREE.Scene();
    scene.background = new THREE.Color(CONFIG.colors.background);
    scene.fog = new THREE.FogExp2(CONFIG.colors.background, 0.015);

    // Camera
    camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 8, 25);
    camera.lookAt(0, 0, 0);

    // Renderer
    try {
      renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance'
      });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    } catch (e) {
      if (canvas) canvas.style.display = 'none';
      return;
    }

    // Create elements
    createGridPlane();
    createNeuralNetwork();
    createLighting();

    // Event listeners
    setupEventListeners();

    // Start animation
    startTime = performance.now();
    animate();
  }

  function createGridPlane() {
    const gridSize = 60;
    const gridDivisions = 30;

    gridPlane = new THREE.Group();

    const gridHelper = new THREE.GridHelper(gridSize, gridDivisions, 0x8a2be2, 0x8a2be2);
    gridHelper.position.y = -8;
    gridHelper.material.opacity = 0.15;
    gridHelper.material.transparent = true;
    gridPlane.add(gridHelper);

    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x00ffff,
      transparent: true,
      opacity: 0.3
    });

    const lineGeometry = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(-gridSize/2, -8, 0),
      new THREE.Vector3(gridSize/2, -8, 0)
    ]);
    const centerLineX = new THREE.Line(lineGeometry, lineMaterial);
    gridPlane.add(centerLineX);

    const lineGeometryZ = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(0, -8, -gridSize/2),
      new THREE.Vector3(0, -8, gridSize/2)
    ]);
    const centerLineZ = new THREE.Line(lineGeometryZ, lineMaterial);
    gridPlane.add(centerLineZ);

    scene.add(gridPlane);
  }

  function createNeuralNetwork() {
    const nodeGeometry = new THREE.SphereGeometry(1, 16, 16);
    const hubGeometry = new THREE.SphereGeometry(1.8, 24, 24);

    const hubPositions = [
      new THREE.Vector3(-6, 2, -3),
      new THREE.Vector3(5, -1, 4),
      new THREE.Vector3(2, 4, -5)
    ];

    for (let i = 0; i < CONFIG.nodeCount; i++) {
      let position;

      if (i < CONFIG.hubCount) {
        position = hubPositions[i].clone();
      } else {
        const clusterChoice = Math.random() < 0.6 ? Math.floor(Math.random() * CONFIG.hubCount) : -1;
        if (clusterChoice >= 0) {
          const hubPos = hubPositions[clusterChoice];
          position = new THREE.Vector3(
            hubPos.x + (Math.random() - 0.5) * 12,
            hubPos.y + (Math.random() - 0.5) * 10,
            hubPos.z + (Math.random() - 0.5) * 12
          );
        } else {
          position = new THREE.Vector3(
            (Math.random() - 0.5) * 30,
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 25
          );
        }
      }

      const isHub = i < CONFIG.hubCount;
      const geometry = isHub ? hubGeometry.clone() : nodeGeometry.clone();
      const scale = isHub ? 1.0 + Math.random() * 0.5 : 0.4 + Math.random() * 0.8;

      const material = new THREE.MeshPhongMaterial({
        color: isHub ? CONFIG.colors.secondary : CONFIG.colors.primary,
        emissive: isHub ? CONFIG.colors.secondary : CONFIG.colors.primary,
        emissiveIntensity: isHub ? 0.4 : 0.2,
        transparent: true,
        opacity: 0,
        shininess: 100
      });

      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.copy(position);
      mesh.scale.setScalar(scale);
      mesh.userData = {
        originalScale: scale,
        baseEmissive: isHub ? 0.4 : 0.2,
        phase: Math.random() * Math.PI * 2,
        isHub: isHub,
        index: i
      };

      if (isHub) {
        const glowGeometry = new THREE.SphereGeometry(geometry.parameters.radius * 1.8, 16, 16);
        const glowMaterial = new THREE.MeshBasicMaterial({
          color: CONFIG.colors.secondary,
          transparent: true,
          opacity: 0,
          side: THREE.BackSide
        });
        const glowMesh = new THREE.Mesh(glowGeometry, glowMaterial);
        mesh.add(glowMesh);
        mesh.userData.glowMesh = glowMesh;
        hubNodes.push(mesh);
      }

      nodes.push(mesh);
      scene.add(mesh);
    }

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const distance = nodes[i].position.distanceTo(nodes[j].position);
        if (distance < 12 && Math.random() < CONFIG.connectionDensity) {
          createConnection(nodes[i], nodes[j]);
        }
      }
    }

    connections.sort((a, b) => a.userData.distance - b.userData.distance);
  }

  function createConnection(nodeA, nodeB) {
    const points = [nodeA.position.clone(), nodeB.position.clone()];
    const geometry = new THREE.BufferGeometry().setFromPoints(points);

    const distance = nodeA.position.distanceTo(nodeB.position);
    const opacity = Math.max(0.1, 0.5 - distance / 30);

    const material = new THREE.LineBasicMaterial({
      color: CONFIG.colors.primary,
      transparent: true,
      opacity: 0
    });

    const line = new THREE.Line(geometry, material);
    line.userData = {
      distance: distance,
      nodeA: nodeA,
      nodeB: nodeB,
      baseOpacity: opacity
    };

    connections.push(line);
    scene.add(line);
  }

  function createLighting() {
    const ambient = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambient);

    const cyanLight = new THREE.PointLight(CONFIG.colors.primary, 0.8, 50);
    cyanLight.position.set(10, 10, 10);
    scene.add(cyanLight);

    const purpleLight = new THREE.PointLight(CONFIG.colors.secondary, 0.6, 50);
    purpleLight.position.set(-10, 5, -10);
    scene.add(purpleLight);

    const magentaLight = new THREE.PointLight(CONFIG.colors.accent, 0.4, 40);
    magentaLight.position.set(0, -5, 15);
    scene.add(magentaLight);
  }

  function setupEventListeners() {
    const canvas = renderer?.domElement;
    if (!canvas) return;

    canvas.addEventListener('mousedown', onMouseDown);
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mouseup', onMouseUp);
    canvas.addEventListener('mouseleave', onMouseUp);
    canvas.addEventListener('wheel', onWheel, { passive: false });

    canvas.addEventListener('touchstart', onTouchStart, { passive: true });
    canvas.addEventListener('touchmove', onTouchMove, { passive: false });
    canvas.addEventListener('touchend', onTouchEnd);

    window.addEventListener('resize', onResize);

    window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', (e) => {
      prefersReducedMotion = e.matches;
    });
  }

  let mousePos = new THREE.Vector2();
  let raycaster = new THREE.Raycaster();

  function onMouseDown(event) {
    isDragging = true;
    previousMousePosition = { x: event.clientX, y: event.clientY };
    lastInteraction = performance.now();
    autoRotate = false;
  }

  function onMouseUp() {
    isDragging = false;
    lastInteraction = performance.now();
  }

  function onMouseMove(event) {
    mousePos.x = (event.clientX / window.innerWidth) * 2 - 1;
    mousePos.y = -(event.clientY / window.innerHeight) * 2 + 1;

    if (isDragging) {
      const deltaX = event.clientX - previousMousePosition.x;
      const deltaY = event.clientY - previousMousePosition.y;

      rotationVelocity.x = deltaY * 0.005;
      rotationVelocity.y = deltaX * 0.005;

      scene.rotation.y += deltaX * 0.005;
      scene.rotation.x += deltaY * 0.005;
      scene.rotation.x = Math.max(-0.5, Math.min(0.5, scene.rotation.x));

      previousMousePosition = { x: event.clientX, y: event.clientY };
      lastInteraction = performance.now();
      autoRotate = false;
    }
  }

  function onWheel(event) {
    event.preventDefault();
    camera.position.z += event.deltaY * 0.01;
    camera.position.z = Math.max(15, Math.min(40, camera.position.z));
    lastInteraction = performance.now();
  }

  function onTouchStart(event) {
    if (event.touches.length === 1) {
      isDragging = true;
      previousMousePosition = { x: event.touches[0].clientX, y: event.touches[0].clientY };
      lastInteraction = performance.now();
      autoRotate = false;
    }
  }

  function onTouchMove(event) {
    event.preventDefault();
    if (isDragging && event.touches.length === 1) {
      const deltaX = event.touches[0].clientX - previousMousePosition.x;
      const deltaY = event.touches[0].clientY - previousMousePosition.y;

      scene.rotation.y += deltaX * 0.005;
      scene.rotation.x += deltaY * 0.005;
      scene.rotation.x = Math.max(-0.5, Math.min(0.5, scene.rotation.x));

      previousMousePosition = { x: event.touches[0].clientX, y: event.touches[0].clientY };
    }
  }

  function onTouchEnd() {
    isDragging = false;
    lastInteraction = performance.now();
  }

  function onResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  function animate() {
    requestAnimationFrame(animate);

    const now = performance.now();
    const elapsed = now - startTime;

    fadeProgress = Math.min(1, elapsed / CONFIG.animation.fadeInDuration);

    if (!isDragging && now - lastInteraction > 3000) {
      autoRotate = true;
    }

    if (autoRotate && !prefersReducedMotion) {
      scene.rotation.y += CONFIG.animation.autoRotateSpeed;
    }

    if (!isDragging && (Math.abs(rotationVelocity.x) > 0.0001 || Math.abs(rotationVelocity.y) > 0.0001)) {
      scene.rotation.x += rotationVelocity.x;
      scene.rotation.y += rotationVelocity.y;
      scene.rotation.x = Math.max(-0.5, Math.min(0.5, scene.rotation.x));

      rotationVelocity.x *= 0.95;
      rotationVelocity.y *= 0.95;
    }

    nodes.forEach((node, index) => {
      const userData = node.userData;
      const material = node.material;

      const materializationTime = index * CONFIG.animation.materializationDelay;
      if (elapsed > materializationTime) {
        const nodeProgress = Math.min(1, (elapsed - materializationTime) / 500);
        material.opacity = easeOutQuad(nodeProgress) * fadeProgress;
      }

      if (!prefersReducedMotion) {
        const pulse = Math.sin(now * CONFIG.animation.nodePulseSpeed + userData.phase);
        const pulseAmount = userData.isHub ?
          CONFIG.animation.nodePulseAmount * 1.5 :
          CONFIG.animation.nodePulseAmount;
        const scale = userData.originalScale * (1 + pulse * pulseAmount);
        node.scale.setScalar(scale);

        if (userData.glowMesh) {
          userData.glowMesh.material.opacity = 0.05 + pulse * 0.03;
        }
      }

      if (!isHovering) {
        material.emissiveIntensity = userData.baseEmissive * fadeProgress;
      }
    });

    connections.forEach((line) => {
      const material = line.material;
      material.opacity = line.userData.baseOpacity * fadeProgress;
    });

    if (!prefersReducedMotion && !isDragging) {
      raycaster.setFromCamera(mousePos, camera);
      const intersects = raycaster.intersectObjects(nodes);

      nodes.forEach(node => {
        if (node.userData.isHub) {
          node.material.emissiveIntensity = node.userData.baseEmissive * fadeProgress;
        }
      });

      if (intersects.length > 0) {
        const hoveredNode = intersects[0].object;
        hoveredNode.material.emissiveIntensity = 0.8 * fadeProgress;
        isHovering = true;

        connections.forEach(conn => {
          if (conn.userData.nodeA === hoveredNode || conn.userData.nodeB === hoveredNode) {
            conn.material.opacity = Math.min(0.8, conn.userData.baseOpacity * 2) * fadeProgress;
          }
        });
      } else {
        isHovering = false;
      }
    }

    const scrollY = window.scrollY || window.pageYOffset;
    const parallaxOffset = scrollY * 0.0005;
    camera.position.y = 8 - parallaxOffset;

    renderer.render(scene, camera);
  }

  function easeOutQuad(t) {
    return t * (2 - t);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
