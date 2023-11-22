import * as THREE from "three"

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000)
const render = new THREE.WebGLRenderer()
render.setSize(window.innerWidth,window.innerHeight)
document.body.appendChild(render.domElement)

const cube = new THREE.Mesh(
    new THREE.BoxGeometry(1.5,1.5,1.5),
    new THREE.MeshBasicMaterial({
        color:"skyblue"
    })
)
scene.add(cube)
camera.position.z = 5

function animate(){
    requestAnimationFrame(animate)
    
    cube.rotation.x += 0.02
    cube.rotation.y += 0.02
    
    render.render(scene,camera)
}
animate()




