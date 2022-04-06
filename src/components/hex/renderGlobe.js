import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import map from '../../assets/img/map_inverted.png'
import json from '../../datasets/hexasphere.json'

import {width, height} from '../../utils/windowDimensions'

export const renderGlobe = () => {
    
    var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor("black", 1);
    document.body.appendChild(renderer.domElement);

    const scene = new THREE.Scene();

    const size = {
        width: window.innerWidth,
        height: window.innerHeight
    }

    window.addEventListener('resize', ()=>{
        size.width = window.innerWidth;
        size.height = window.innerHeight; 
        
        camera.aspect = size.width/size.height
        camera.updateProjectionMatrix()

        //Update renderer:
        renderer.setSize(size.width, size.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    })

    const camera = new THREE.PerspectiveCamera(70, size.width / size.height);
    camera.position.z = 30;
    scene.add(camera);

    const geometry = new THREE.SphereBufferGeometry(10, 50, 50);
    var material = new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load(map),
        color: "blue"
    });
    var cube = new THREE.Mesh(geometry, material);
    cube.scale.set(.95, .95, .95);
    scene.add(cube);

    json.tiles.forEach((el) => {
        const geometry = new THREE.BufferGeometry();

        const positions = el.boundary.reduce((vertices, boundry, idx) => {
            if (idx < el.boundary.length - 2) {
                return [
                    ...vertices,
                    el.boundary[0].x, el.boundary[0].y, el.boundary[0].z,
                    el.boundary[idx + 1].x, el.boundary[idx + 1].y, el.boundary[idx + 1].z,
                    el.boundary[idx + 2].x, el.boundary[idx + 2].y, el.boundary[idx + 2].z,
                ]
            }
            return vertices
        },
            []
        )
        // console.log(positions)
        const isTransparent = el.color === "transparent"
        const opacity = isTransparent ? 0 : 1;
        geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
        const material = new THREE.MeshBasicMaterial({
            ...(!isTransparent && { color: el.color }),
            opacity: opacity,
            transparent: isTransparent
        })

        var mesh = new THREE.Mesh(
            geometry,
            material
        )

        scene.add(mesh);

        const edges = new THREE.EdgesHelper(mesh, "#00CCFF")
        edges.material.linewidth = 2
        scene.add(edges)
    })

    function render() {
        requestAnimationFrame(render);
        renderer.render(scene, camera);
    }
    render();

    const controls = new OrbitControls(camera, renderer.domElement)

    controls.enablePan = true;
    controls.maxPolarAngle = Math.PI;

    controls.enableDamping = true;
} 