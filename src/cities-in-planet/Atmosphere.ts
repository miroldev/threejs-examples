import { AdditiveBlending, BackSide, Mesh, ShaderMaterial, SphereGeometry } from 'three'
import vertexShader from './shaders/atmosphere/vertex.glsl?raw'
import fragmentShader from './shaders/atmosphere/fragment.glsl?raw'
export default class Atmosphere {
    main: Mesh
    constructor () {

        this.main = this.create()
    }
    create () {
        const geometry = new SphereGeometry(6, 50, 50)
        const material = new ShaderMaterial({
            vertexShader,
            fragmentShader,
            blending: AdditiveBlending,
            side: BackSide
        })
        const mesh = new Mesh(geometry, material)
        // mesh.scale.set(1.1, 1.1, 1.1)

        return mesh
    }
}