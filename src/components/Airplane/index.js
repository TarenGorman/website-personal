import React, { Component } from 'react';
import * as THREE from 'three';
import './index..css';

class Airplane extends Component {
  constructor(props) {
    super(props)

    this.animate = this.animate.bind(this);
    this.mesh = {};
    this.points = {};
  }

  componentDidMount() {
    this.init()
    this.mount.appendChild( this.renderer.domElement );
    this.animate()
  }

  componentWillUnmount() {
    this.mount.removeChild( this.renderer.domElement );
  }

  onWindowResize() {
    // Event Listener possibility
    if (this.height !== this.mount.clientHeight || this.width !== this.mount.clientWidth) {
      this.height = this.mount.clientHeight;
      this.width = this.mount.clientWidth;
      console.log("resized")
    }
  }

  initStarPoints() {
    const geometry = new THREE.Geometry();
		for ( var i = 0; i < 20000; i ++ ) {
			var vertex = new THREE.Vector3();
			vertex.x = (Math.random() * 1600) - 800;
			vertex.y = (Math.random() * 1600) - 800;
			vertex.z = (Math.random() * 1600) - 800;
			geometry.vertices.push( vertex );
    }
    const sparks = require("./images/sparks.jpg")
    const texture = new THREE.TextureLoader().load(sparks)
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set( 1, 1 );
    const material = new THREE.PointsMaterial( { size: 2.0 , map: texture} );
    this.points = new THREE.Points(geometry, material);
    this.scene.add( this.points );
  }

  initBox() {
    const geometry = new THREE.BoxGeometry( 400, 200, 200 , 2, 5, 5);
    const material = new THREE.MeshBasicMaterial( { color: 0x10d26f, wireframe: true } );
    this.mesh = new THREE.Mesh( geometry, material );
    this.scene.add( this.mesh );
    this.mesh.position.z = -800;
  }

  initAirplane() {
    var loader = new THREE.JSONLoader();
    const airplaneJSON = require("./models/airplane.json");
    let airplaneParsed = loader.parse(airplaneJSON)
    this.addModelToScene( airplaneParsed );
  }

  addModelToScene( model ) {
      const material = new THREE.MeshBasicMaterial( { color: 0x10d26f, wireframe: true } );
      this.mesh = new THREE.Mesh( model.geometry, material );
      this.mesh.scale.set( 35.0, 35.0, 35.0 );
      this.scene.add( this.mesh );
      this.mesh.position.z = -800;
      this.mesh.rotation.x = 0.5;
  }

  init() {
    this.height = this.mount.clientHeight;
    this.width = this.mount.clientWidth;
    this.scene = new THREE.Scene();
    this.clock = new THREE.Clock();

    this.camera = new THREE.PerspectiveCamera( 75, this.width / this.height, 1, 10000 );
    this.camera.position.z = -400;
    this.renderer = new THREE.WebGLRenderer({alpha:true});
    // this.initBox(); // Place holder mesh for scale reference
    this.initAirplane();
    this.initStarPoints();
  }

  animate() {
    requestAnimationFrame( this.animate );
    const time = this.clock.getElapsedTime()
    this.mesh.rotation.x += 0.005 * Math.cos( time * 0.5 )
    this.points.rotation.y += 0.003;
    if (this.mount !== null) {
      this.onWindowResize()
    }
    this.renderer.setSize( this.width, this.height, false);
    this.camera.aspect = ( this.width / this.height );
    this.renderer.render( this.scene, this.camera );
    this.camera.updateProjectionMatrix();
  }

  render() {
    return (
      <div className="container" ref={(mount) => { this.mount = mount }}/>
    );
  }
}

export default Airplane;
