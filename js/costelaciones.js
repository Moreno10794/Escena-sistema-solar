////Sagitario////

const material03 = new THREE.LineBasicMaterial({ color: 0xFFFFFF });
const points4 = [];
points4.push(new THREE.Vector3(150, 50, 500));
points4.push(new THREE.Vector3(170, 70, 500));
points4.push(new THREE.Vector3(152, 75, 500));

const geometry03 = new THREE.BufferGeometry().setFromPoints(points4);
const line4 = new THREE.Line(geometry03, material03);
scene.add(line4);


const material04 = new THREE.LineBasicMaterial({ color: 0xFFFFFF });
const points5 = [];
points5.push(new THREE.Vector3(170, 70, 500));
points5.push(new THREE.Vector3(176, 88, 500));
points5.push(new THREE.Vector3(195, 112, 500));
points5.push(new THREE.Vector3(185, 126, 500));
points5.push(new THREE.Vector3(165, 138, 500));
points5.push(new THREE.Vector3(145, 134, 500));
points5.push(new THREE.Vector3(135, 125, 500));
points5.push(new THREE.Vector3(125, 130, 500));
points5.push(new THREE.Vector3(108, 138, 500));
points5.push(new THREE.Vector3(105, 120, 500));
points5.push(new THREE.Vector3(110, 105, 500));
points5.push(new THREE.Vector3(95, 100, 500));

const geometry04 = new THREE.BufferGeometry().setFromPoints(points5);
const line5 = new THREE.Line(geometry04, material04);
scene.add(line5);

const material05 = new THREE.LineBasicMaterial({ color: 0xFFFFFF });
const points6 = [];
points6.push(new THREE.Vector3(125, 130, 500));
points6.push(new THREE.Vector3(130, 140, 500));
points6.push(new THREE.Vector3(128, 157, 500));
points6.push(new THREE.Vector3(138, 155, 500));
points6.push(new THREE.Vector3(145, 170, 500));

const geometry05 = new THREE.BufferGeometry().setFromPoints(points6);
const line6 = new THREE.Line(geometry05, material05);
scene.add(line6);

const material06 = new THREE.LineBasicMaterial({ color: 0xFFFFFF });
const points7 = [];
points7.push(new THREE.Vector3(128, 157, 500));
points7.push(new THREE.Vector3(118, 159, 500));

const geometry06 = new THREE.BufferGeometry().setFromPoints(points7);
const line7 = new THREE.Line(geometry06, material06);
scene.add(line7);

const material07 = new THREE.LineBasicMaterial({ color: 0xFFFFFF });
const points8 = [];
points8.push(new THREE.Vector3(108, 138, 500));
points8.push(new THREE.Vector3(100, 160, 500));

const geometry07 = new THREE.BufferGeometry().setFromPoints(points8);
const line8 = new THREE.Line(geometry07, material07);
scene.add(line8);

const material08 = new THREE.LineBasicMaterial({ color: 0xFFFFFF });
const points9 = [];
points9.push(new THREE.Vector3(105, 120, 500));
points9.push(new THREE.Vector3(85, 120, 500));
points9.push(new THREE.Vector3(75, 140, 500));

const geometry08 = new THREE.BufferGeometry().setFromPoints(points9);
const line9 = new THREE.Line(geometry08, material08);
scene.add(line9);

var geometry17 = new THREE.SphereGeometry(3, 50, 50);
const material17 = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });
var esfera18 = new THREE.Mesh(geometry17, material17);
scene.add(esfera18);
esfera18.position.x = 150;
esfera18.position.y = 50;
esfera18.position.z = 500;

var geometry18 = new THREE.SphereGeometry(3, 50, 50);
const material18 = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });
var esfera19 = new THREE.Mesh(geometry18, material18);
scene.add(esfera19);
esfera19.position.x = 170;
esfera19.position.y = 70;
esfera19.position.z = 500;

var geometry19 = new THREE.SphereGeometry(3, 50, 50);
const material19 = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });
var esfera20 = new THREE.Mesh(geometry19, material19);
scene.add(esfera20);
esfera20.position.x = 152;
esfera20.position.y = 75;
esfera20.position.z = 500;

var geometry20 = new THREE.SphereGeometry(3, 50, 50);
const material20 = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });
var esfera21 = new THREE.Mesh(geometry20, material20);
scene.add(esfera21);
esfera21.position.x = 176;
esfera21.position.y = 88;
esfera21.position.z = 500;

var geometry21 = new THREE.SphereGeometry(5, 50, 50);
const material21 = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });
var esfera22 = new THREE.Mesh(geometry21, material21);
scene.add(esfera22);
esfera22.position.x = 195;
esfera22.position.y = 112;
esfera22.position.z = 500;

var geometry22 = new THREE.SphereGeometry(3, 50, 50);
const material22 = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });
var esfera23 = new THREE.Mesh(geometry22, material22);
scene.add(esfera23);
esfera23.position.x = 185;
esfera23.position.y = 126;
esfera23.position.z = 500;

var geometry23 = new THREE.SphereGeometry(3, 50, 50);
const material23 = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });
var esfera24 = new THREE.Mesh(geometry23, material23);
scene.add(esfera24);
esfera24.position.x = 165;
esfera24.position.y = 138;
esfera24.position.z = 500;

var geometry24 = new THREE.SphereGeometry(3, 50, 50);
const material24 = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });
var esfera25 = new THREE.Mesh(geometry24, material24);
scene.add(esfera25);
esfera25.position.x = 145;
esfera25.position.y = 134;
esfera25.position.z = 500;

var geometry25 = new THREE.SphereGeometry(3, 50, 50);
const material25 = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });
var esfera26 = new THREE.Mesh(geometry25, material25);
scene.add(esfera26);
esfera26.position.x = 135;
esfera26.position.y = 125;
esfera26.position.z = 500;

var geometry26 = new THREE.SphereGeometry(3, 50, 50);
const material26 = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });
var esfera27 = new THREE.Mesh(geometry26, material26);
scene.add(esfera27);
esfera27.position.x = 125;
esfera27.position.y = 130;
esfera27.position.z = 500;

var geometry27 = new THREE.SphereGeometry(3, 50, 50);
const material27 = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });
var esfera28 = new THREE.Mesh(geometry27, material27);
scene.add(esfera28);
esfera28.position.x = 108;
esfera28.position.y = 138;
esfera28.position.z = 500;

var geometry28 = new THREE.SphereGeometry(3, 50, 50);
const material28 = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });
var esfera29 = new THREE.Mesh(geometry28, material28);
scene.add(esfera29);
esfera29.position.x = 105;
esfera29.position.y = 120;
esfera29.position.z = 500;

var geometry29 = new THREE.SphereGeometry(3, 50, 50);
const material29 = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });
var esfera30 = new THREE.Mesh(geometry29, material29);
scene.add(esfera30);
esfera30.position.x = 110;
esfera30.position.y = 105;
esfera30.position.z = 500;

var geometry30 = new THREE.SphereGeometry(3, 50, 50);
const material30 = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });
var esfera31 = new THREE.Mesh(geometry30, material30);
scene.add(esfera31);
esfera31.position.x = 95;
esfera31.position.y = 100;
esfera31.position.z = 500;

////arriba 1////
var geometry31 = new THREE.SphereGeometry(3, 50, 50);
const material31 = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });
var esfera32 = new THREE.Mesh(geometry31, material31);
scene.add(esfera32);
esfera32.position.x = 130;
esfera32.position.y = 140;
esfera32.position.z = 500;

var geometry32 = new THREE.SphereGeometry(3, 50, 50);
const material32 = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });
var esfera33 = new THREE.Mesh(geometry32, material32);
scene.add(esfera33);
esfera33.position.x = 128;
esfera33.position.y = 157;
esfera33.position.z = 500;

var geometry33 = new THREE.SphereGeometry(3, 50, 50);
const material33 = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });
var esfera34 = new THREE.Mesh(geometry33, material33);
scene.add(esfera34);
esfera34.position.x = 138;
esfera34.position.y = 155;
esfera34.position.z = 500;

var geometry34 = new THREE.SphereGeometry(3, 50, 50);
const material34 = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });
var esfera35 = new THREE.Mesh(geometry34, material34);
scene.add(esfera35);
esfera35.position.x = 145;
esfera35.position.y = 170;
esfera35.position.z = 500;

var geometry35 = new THREE.SphereGeometry(3, 50, 50);
const material35 = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });
var esfera36 = new THREE.Mesh(geometry35, material35);
scene.add(esfera36);
esfera36.position.x = 118;
esfera36.position.y = 159;
esfera36.position.z = 500;

 ////arriba 2////
var geometry36 = new THREE.SphereGeometry(5, 50, 50);
const material36 = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });
var esfera37 = new THREE.Mesh(geometry36, material36);
scene.add(esfera37);
esfera37.position.x = 100;
esfera37.position.y = 160;
esfera37.position.z = 500;

////arriba 3////
var geometry37 = new THREE.SphereGeometry(3, 50, 50);
const material37 = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });
var esfera38 = new THREE.Mesh(geometry37, material37);
scene.add(esfera38);
esfera38.position.x = 85;
esfera38.position.y = 120;
esfera38.position.z = 500;

var geometry38 = new THREE.SphereGeometry(3, 50, 50);
const material38 = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });
var esfera39 = new THREE.Mesh(geometry38, material38);
scene.add(esfera39);
esfera39.position.x = 75;
esfera39.position.y = 140;
esfera39.position.z = 500;

var spriteMaterial = new THREE.SpriteMaterial( 
{ 
    map: new THREE.ImageUtils.loadTexture( 'Images/Glow.png' ),
    color: 0xffffff, transparent: true, blending: THREE.AdditiveBlending
});
var sprite1 = new THREE.Sprite( spriteMaterial );
var sprite2 = new THREE.Sprite( spriteMaterial );
var sprite3 = new THREE.Sprite( spriteMaterial );
var sprite4 = new THREE.Sprite( spriteMaterial );
var sprite5 = new THREE.Sprite( spriteMaterial );
var sprite6 = new THREE.Sprite( spriteMaterial );
var sprite7 = new THREE.Sprite( spriteMaterial );
var sprite8 = new THREE.Sprite( spriteMaterial );
var sprite9 = new THREE.Sprite( spriteMaterial );
var sprite10 = new THREE.Sprite( spriteMaterial );
var sprite11 = new THREE.Sprite( spriteMaterial );
var sprite12 = new THREE.Sprite( spriteMaterial );
var sprite13 = new THREE.Sprite( spriteMaterial );
var sprite14 = new THREE.Sprite( spriteMaterial );
var sprite15 = new THREE.Sprite( spriteMaterial );
var sprite16 = new THREE.Sprite( spriteMaterial );
var sprite17 = new THREE.Sprite( spriteMaterial );
var sprite18 = new THREE.Sprite( spriteMaterial );
var sprite19 = new THREE.Sprite( spriteMaterial );
var sprite20 = new THREE.Sprite( spriteMaterial );
var sprite21 = new THREE.Sprite( spriteMaterial );
var sprite22 = new THREE.Sprite( spriteMaterial );
sprite1.scale.set(10, 10, 5.0);
sprite2.scale.set(10, 10, 5.0);
sprite3.scale.set(10, 10, 5.0);
sprite4.scale.set(10, 10, 5.0);
sprite5.scale.set(20, 20, 5.0);
sprite6.scale.set(10, 10, 5.0);
sprite7.scale.set(10, 10, 5.0);
sprite8.scale.set(10, 10, 5.0);
sprite9.scale.set(10, 10, 5.0);
sprite10.scale.set(10, 10, 5.0);
sprite11.scale.set(10, 10, 5.0);
sprite12.scale.set(10, 10, 5.0);
sprite13.scale.set(10, 10, 5.0);
sprite14.scale.set(10, 10, 5.0);
sprite15.scale.set(10, 10, 5.0);
sprite16.scale.set(10, 10, 5.0);
sprite17.scale.set(10, 10, 5.0);
sprite18.scale.set(10, 10, 5.0);
sprite19.scale.set(10, 10, 5.0);
sprite20.scale.set(20, 20, 5.0);
sprite21.scale.set(10, 10, 5.0);
sprite22.scale.set(10, 10, 5.0);
esfera18.add(sprite1);
esfera19.add(sprite2);
esfera20.add(sprite3);
esfera21.add(sprite4);
esfera22.add(sprite5);
esfera23.add(sprite6);
esfera24.add(sprite7);
esfera25.add(sprite8);
esfera26.add(sprite9);
esfera27.add(sprite10);
esfera28.add(sprite11);
esfera29.add(sprite12);
esfera30.add(sprite13);
esfera31.add(sprite14);
esfera32.add(sprite15);
esfera33.add(sprite16);
esfera34.add(sprite17);
esfera35.add(sprite18);
esfera36.add(sprite19);
esfera37.add(sprite20);
esfera38.add(sprite21);
esfera39.add(sprite22);

///leo/////

  const material = new THREE.LineBasicMaterial({color: 0xFFFFFF});
const points = [];
points.push(new THREE.Vector3(-500,0,0));
points.push(new THREE.Vector3(-500,20,-30));
points.push(new THREE.Vector3(-500,30,-80));
points.push(new THREE.Vector3(-500,20,-92));
points.push(new THREE.Vector3(-500,5,-95));
points.push(new THREE.Vector3(-500,2,-33));
points.push(new THREE.Vector3(-500,-2,0));

const geometry = new THREE.BufferGeometry().setFromPoints(points);
const line = new THREE.Line(geometry, material);
scene.add(line);

const material0 = new THREE.LineBasicMaterial({color: 0xFFFFFF});
const points1 = [];
points1.push(new THREE.Vector3(-500,30,-80));
points1.push(new THREE.Vector3(-500,40,-80));
points1.push(new THREE.Vector3(-500,50,-92));
points1.push(new THREE.Vector3(-500,42,-103));

const geometry0 = new THREE.BufferGeometry().setFromPoints(points1);
const line1 = new THREE.Line(geometry0, material0);
scene.add(line1);

var geometry1= new THREE.SphereGeometry(5,50,50);
const material1 = new THREE.MeshBasicMaterial({color: 0xFFFFFF});
var esfera = new THREE.Mesh(geometry1,material1);
scene.add(esfera);
esfera.position.x= -500;
esfera.position.y= 0;
esfera.position.z= 0;

var geometry2= new THREE.SphereGeometry(3,50,50);
const material2 = new THREE.MeshBasicMaterial({color: 0xFFFFFF});
var esfera3 = new THREE.Mesh(geometry2,material2);
scene.add(esfera3);
esfera3.position.x= -500;
esfera3.position.y= 19;
esfera3.position.z= -30;

var geometry3= new THREE.SphereGeometry(5,50,50);
const material3 = new THREE.MeshBasicMaterial({color: 0xFFFFFF});
var esfera4 = new THREE.Mesh(geometry3,material3);
scene.add(esfera4);
esfera4.position.x= -500;
esfera4.position.y= 30;
esfera4.position.z= -80;

var geometry4= new THREE.SphereGeometry(3,50,50);
const material4 = new THREE.MeshBasicMaterial({color: 0xFFFFFF});
var esfera5 = new THREE.Mesh(geometry4,material4);
scene.add(esfera5);
esfera5.position.x= -500;
esfera5.position.y= 20;
esfera5.position.z= -91;

var geometry5= new THREE.SphereGeometry(5,50,50);
const material5 = new THREE.MeshBasicMaterial({color: 0xFFFFFF});
var esfera6 = new THREE.Mesh(geometry5,material5);
scene.add(esfera6);
esfera6.position.x= -500;
esfera6.position.y= 5;
esfera6.position.z= -95;

var geometry6= new THREE.SphereGeometry(3,50,50);
const material6 = new THREE.MeshBasicMaterial({color: 0xFFFFFF});
var esfera7 = new THREE.Mesh(geometry6,material6);
scene.add(esfera7);
esfera7.position.x= -500;
esfera7.position.y= 2;
esfera7.position.z= -33;

//////arriba//////

var geometry7= new THREE.SphereGeometry(3,50,50);
const material7 = new THREE.MeshBasicMaterial({color: 0xFFFFFF});
var esfera8 = new THREE.Mesh(geometry6,material6);
scene.add(esfera8);
esfera8.position.x= -500;
esfera8.position.y= 40;
esfera8.position.z= -80;

var geometry8= new THREE.SphereGeometry(5,50,50);
const material8 = new THREE.MeshBasicMaterial({color: 0xFFFFFF});
var esfera9 = new THREE.Mesh(geometry8,material8);
scene.add(esfera9);
esfera9.position.x= -500;
esfera9.position.y= 50;
esfera9.position.z= -92;

var geometry9= new THREE.SphereGeometry(3,50,50);
const material9 = new THREE.MeshBasicMaterial({color: 0xFFFFFF});
var esfera10 = new THREE.Mesh(geometry9,material9);
scene.add(esfera10);
esfera10.position.x= -500;
esfera10.position.y= 42;
esfera10.position.z= -103;

var sprite23 = new THREE.Sprite( spriteMaterial);
var sprite24 = new THREE.Sprite( spriteMaterial);
var sprite25 = new THREE.Sprite( spriteMaterial);
var sprite26 = new THREE.Sprite( spriteMaterial);
var sprite27 = new THREE.Sprite( spriteMaterial);
var sprite28 = new THREE.Sprite( spriteMaterial);
var sprite29 = new THREE.Sprite( spriteMaterial);
var sprite30 = new THREE.Sprite( spriteMaterial);
var sprite31 = new THREE.Sprite( spriteMaterial);
sprite23.scale.set(18, 18, 5.0);
sprite24.scale.set(10, 10, 5.0);
sprite25.scale.set(18, 18, 5.0);
sprite26.scale.set(10, 10, 5.0);
sprite27.scale.set(18, 18, 5.0);
sprite28.scale.set(10, 10, 5.0);
sprite29.scale.set(10, 10, 5.0);
sprite30.scale.set(18, 18, 5.0);
sprite31.scale.set(10, 10, 5.0);
esfera.add(sprite23)
esfera3.add(sprite24)
esfera4.add(sprite25)
esfera5.add(sprite26)
esfera6.add(sprite27)
esfera7.add(sprite28)
esfera8.add(sprite29)
esfera9.add(sprite30)
esfera10.add(sprite31)

////Libra////

const material01 = new THREE.LineBasicMaterial({color: 0xFFFFFF});
const points2 = [];
points2.push(new THREE.Vector3(0,200,-500));
points2.push(new THREE.Vector3(-15,220,-500));
points2.push(new THREE.Vector3(50,280,-500));
points2.push(new THREE.Vector3(55,360,-500));
points2.push(new THREE.Vector3(-50,400,-500));
points2.push(new THREE.Vector3(50,280,-500));

const geometry01 = new THREE.BufferGeometry().setFromPoints(points2);
const line2 = new THREE.Line(geometry01, material01);
scene.add(line2);

const material02 = new THREE.LineBasicMaterial({color: 0xFFFFFF});
const points3 = [];
points3.push(new THREE.Vector3(-50,400,-500));
points3.push(new THREE.Vector3(-50,320,-500));
points3.push(new THREE.Vector3(-150,280,-500));

const geometry02 = new THREE.BufferGeometry().setFromPoints(points3);
const line3 = new THREE.Line(geometry02, material02);
scene.add(line3);


var geometry10= new THREE.SphereGeometry(5,50,50);
const material10 = new THREE.MeshBasicMaterial({color: 0xFFFFFF});
var esfera11 = new THREE.Mesh(geometry10,material10);
scene.add(esfera11);
esfera11.position.x= 0;
esfera11.position.y= 200;
esfera11.position.z= -500;

var geometry11= new THREE.SphereGeometry(3,50,50);
const material11 = new THREE.MeshBasicMaterial({color: 0xFFFFFF});
var esfera12 = new THREE.Mesh(geometry11,material11);
scene.add(esfera12);
esfera12.position.x= -15;
esfera12.position.y= 220;
esfera12.position.z= -500;

var geometry12= new THREE.SphereGeometry(5,50,50);
const material12 = new THREE.MeshBasicMaterial({color: 0xFFFFFF});
var esfera13 = new THREE.Mesh(geometry12,material12);
scene.add(esfera13);
esfera13.position.x= 50;
esfera13.position.y= 280;
esfera13.position.z= -500;


var geometry13= new THREE.SphereGeometry(5,50,50);
const material13 = new THREE.MeshBasicMaterial({color: 0xFFFFFF});
var esfera14 = new THREE.Mesh(geometry13,material13);
scene.add(esfera14);
esfera14.position.x= 55;
esfera14.position.y= 360;
esfera14.position.z= -500;

var geometry14= new THREE.SphereGeometry(5,50,50);
const material14 = new THREE.MeshBasicMaterial({color: 0xFFFFFF});
var esfera15 = new THREE.Mesh(geometry14,material14);
scene.add(esfera15);
esfera15.position.x= -50;
esfera15.position.y= 400;
esfera15.position.z= -500;

var geometry15= new THREE.SphereGeometry(3,50,50);
const material15 = new THREE.MeshBasicMaterial({color: 0xFFFFFF});
var esfera16 = new THREE.Mesh(geometry15,material15);
scene.add(esfera16);
esfera16.position.x= -50;
esfera16.position.y= 320;
esfera16.position.z= -500;

var geometry16= new THREE.SphereGeometry(5,50,50);
const material16 = new THREE.MeshBasicMaterial({color: 0xFFFFFF});
var esfera17 = new THREE.Mesh(geometry16,material16);
scene.add(esfera17);
esfera17.position.x= -150;
esfera17.position.y= 280;
esfera17.position.z= -500;

var sprite32 = new THREE.Sprite( spriteMaterial);
var sprite33 = new THREE.Sprite( spriteMaterial);
var sprite34 = new THREE.Sprite( spriteMaterial);
var sprite35 = new THREE.Sprite( spriteMaterial);
var sprite36 = new THREE.Sprite( spriteMaterial);
var sprite37 = new THREE.Sprite( spriteMaterial);
var sprite38 = new THREE.Sprite( spriteMaterial);
sprite32.scale.set(18, 18, 5.0);
sprite33.scale.set(10, 10, 5.0);
sprite34.scale.set(18, 18, 5.0);
sprite35.scale.set(18, 18, 5.0);
sprite36.scale.set(18, 18, 5.0);
sprite37.scale.set(10, 10, 5.0);
sprite38.scale.set(18, 18, 5.0);
esfera11.add(sprite32)
esfera12.add(sprite33)
esfera13.add(sprite34)
esfera14.add(sprite35)
esfera15.add(sprite36)
esfera16.add(sprite37)
esfera17.add(sprite38)