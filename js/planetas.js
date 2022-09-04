var quaternion = new THREE.Quaternion();
let scene, camera, renderer, esfera2;
function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 45, 30000);
  camera.position.set(500, 200, 500);
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  let controls = new THREE.OrbitControls(camera);
  controls.addEventListener('change', renderer);
  controls.minDistance = 500;
  controls.maxDistance = 1500;

  let materialArray = [];//arreglo
  let texture_ft = new THREE.TextureLoader().load('kenon_star_ft.jpg');
  let texture_bk = new THREE.TextureLoader().load('kenon_star_bk.jpg');
  let texture_up = new THREE.TextureLoader().load('kenon_star_up.jpg');
  let texture_dn = new THREE.TextureLoader().load('kenon_star_dn.jpg');
  let texture_rt = new THREE.TextureLoader().load('kenon_star_rt.jpg');
  let texture_lf = new THREE.TextureLoader().load('kenon_star_lf.jpg');

  materialArray.push(new THREE.MeshBasicMaterial({ map: texture_ft }));
  materialArray.push(new THREE.MeshBasicMaterial({ map: texture_bk }));
  materialArray.push(new THREE.MeshBasicMaterial({ map: texture_up }));
  materialArray.push(new THREE.MeshBasicMaterial({ map: texture_dn }));
  materialArray.push(new THREE.MeshBasicMaterial({ map: texture_rt }));
  materialArray.push(new THREE.MeshBasicMaterial({ map: texture_lf }));

  for (let i = 0; i < 6; i++)
    materialArray[i].side = THREE.BackSide;
  let estrellas = new THREE.BoxGeometry(1000, 1000, 1000);
  let skybox = new THREE.Mesh(estrellas, materialArray);
  scene.add(skybox);

  //sol///
  sol = new THREE.Mesh(new THREE.SphereGeometry(25, 32, 32),
    new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture('texturas/sol.jpg') }));
  scene.add(sol);

  //luz///
  const pointLight = new THREE.PointLight(0xFFFFFF, 2, 500);
  scene.add(pointLight);

  //mercurio
  mercurio = new THREE.Mesh(new THREE.SphereGeometry(4, 32, 32),
    new THREE.MeshStandardMaterial({ map: THREE.ImageUtils.loadTexture('texturas/mercurio.jpg') }));
  scene.add(mercurio);


  //venus
  venus = new THREE.Mesh(new THREE.SphereGeometry(7, 32, 32),
    new THREE.MeshStandardMaterial({ map: THREE.ImageUtils.loadTexture('texturas/venus.jpg') }));
  scene.add(venus);

  //tierra
  tierra = new THREE.Mesh(new THREE.SphereGeometry(7, 32, 32),
    new THREE.MeshStandardMaterial({ map: THREE.ImageUtils.loadTexture('texturas/tierra.jpg') }));
  scene.add(tierra);

  pivotPoint = new THREE.Object3D();
  tierra.add(pivotPoint);

  // luna tierra
  luna1 = new THREE.Mesh(new THREE.SphereGeometry(2, 32, 32),
    new THREE.MeshStandardMaterial({ map: THREE.ImageUtils.loadTexture('texturas/mercurio.jpg') }));
  pivotPoint.add(luna1);

  //marte
  marte = new THREE.Mesh(new THREE.SphereGeometry(6, 32, 32),
    new THREE.MeshStandardMaterial({ map: THREE.ImageUtils.loadTexture('texturas/marte.jpg') }));
  scene.add(marte);

  pivotPoint2 = new THREE.Object3D();
  marte.add(pivotPoint2);

  // luna marte
  luna2 = new THREE.Mesh(new THREE.SphereGeometry(2, 32, 32),
    new THREE.MeshStandardMaterial({ map: THREE.ImageUtils.loadTexture('texturas/mercurio.jpg') }));
  pivotPoint2.add(luna2);

  //luna marte 2
  luna3 = new THREE.Mesh(new THREE.SphereGeometry(2, 32, 32),
    new THREE.MeshStandardMaterial({ map: THREE.ImageUtils.loadTexture('texturas/mercurio.jpg') }));
  pivotPoint2.add(luna3);

  //jupiter
  jupiter = new THREE.Mesh(new THREE.SphereGeometry(7, 32, 32),
    new THREE.MeshStandardMaterial({ map: THREE.ImageUtils.loadTexture('texturas/jupiter.jpg') }));
  scene.add(jupiter);

  //saturno
  saturno = new THREE.Mesh(new THREE.SphereGeometry(6, 32, 32),
    new THREE.MeshStandardMaterial({ map: THREE.ImageUtils.loadTexture('texturas/saturno.jpg') }));
  scene.add(saturno);

  //urano
  urano = new THREE.Mesh(new THREE.SphereGeometry(5, 32, 32),
    new THREE.MeshStandardMaterial({ map: THREE.ImageUtils.loadTexture('texturas/urano.jpg') }));
  scene.add(urano);

  //neptuno
  neptuno = new THREE.Mesh(new THREE.SphereGeometry(5, 32, 32),
    new THREE.MeshStandardMaterial({ map: THREE.ImageUtils.loadTexture('texturas/neptuno.jpg') }));
  scene.add(neptuno);

  //pluto
  pluto = new THREE.Mesh(new THREE.SphereGeometry(4, 32, 32),
    new THREE.MeshStandardMaterial({ map: THREE.ImageUtils.loadTexture('texturas/pluto.jpg') }));
  scene.add(pluto);

  pivotPoint3 = new THREE.Object3D();
  pluto.add(pivotPoint3);

  //pluto luna
  luna4 = new THREE.Mesh(new THREE.SphereGeometry(2, 32, 32),
    new THREE.MeshStandardMaterial({ map: THREE.ImageUtils.loadTexture('texturas/mercurio.jpg') }));
  pivotPoint3.add(luna4);

  var gridHelper = new THREE.PolarGridHelper(200, 0, 11);
  scene.add(gridHelper);


  var time = 0;
  var render = function () {
    requestAnimationFrame(render);

    // rotacion sol

    sol.rotation.y += -0.07;

    //rotacion mercurio

    mercurio.rotation.y += -0.03;
    mercurio.position.x = 55 * Math.cos(4 * time);
    mercurio.position.z = 55 * Math.sin(4 * time);

    //rotacion venus

    venus.rotation.y += -0.02;
    venus.position.x = 72 * Math.cos(3 * time);
    venus.position.z = 72 * Math.sin(3 * time);

    //rotacion tierra

    tierra.rotation.y += -0.04;
    tierra.position.x = 90 * Math.cos(2 * time);
    tierra.position.z = 90 * Math.sin(2 * time);

    //rotacion luna tierra

    luna1.rotation.y += -0.03;
    luna1.position.x = 12 * Math.cos(0.9 * time);
    luna1.position.z = 12 * Math.sin(0.9 * time);

    //rotacion marte

    marte.rotation.y += -0.04;
    marte.position.x = 110 * Math.cos(1 * time);
    marte.position.z = 110 * Math.sin(1 * time);

    //rotacion luna marte

    luna2.rotation.y += -0.03;
    luna2.position.x = 9 * Math.cos(0.09 * time);
    luna2.position.z = 9 * Math.sin(0.09 * time);

    //rotacion luna marte 2

    luna3.rotation.y += -0.03;
    luna3.position.x = 13 * Math.cos(0.001 * time);
    luna3.position.z = 13 * Math.sin(0.001 * time);

    //rotacion jupiter

    jupiter.rotation.y += -0.07;
    jupiter.position.x = 127 * Math.cos(0.9 * time);
    jupiter.position.z = 127 * Math.sin(0.9 * time);

    //rotacion saturno

    saturno.rotation.y += -0.06;
    saturno.position.x = 145 * Math.cos(0.8 * time);
    saturno.position.z = 145 * Math.sin(0.8 * time);

    //rotacion urano

    urano.rotation.y += -0.05;
    urano.position.x = 164 * Math.cos(0.7 * time);
    urano.position.z = 164 * Math.sin(0.7 * time);

    //rotacion neptuno

    neptuno.rotation.y += -0.06;
    neptuno.position.x = 182 * Math.cos(0.6 * time);
    neptuno.position.z = 182 * Math.sin(0.6 * time);

    //pluto rotacion 

    pluto.rotation.y += -0.03;
    pluto.position.x = 200 * Math.cos(0.5 * time);
    pluto.position.z = 200 * Math.sin(0.5 * time);

    //rotacion luna pluto

    luna4.rotation.y += -0.03;
    luna4.position.x = 10 * Math.cos(0.9 * time);
    luna4.position.z = 10 * Math.sin(0.9 * time);

    time = time + 0.01;
    renderer.render(scene, camera);

  };

  render();

  animate();
}

function animate() {
  requestAnimationFrame(animate);

  renderer.render(scene, camera);

};



init();
