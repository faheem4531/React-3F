import { Center, OrbitControls, Text3D, useMatcapTexture } from '@react-three/drei'
import { Perf } from 'r3f-perf'


export default function Experience() {

    // https://github.com/nidorx/matcaps/blob/master/PAGE-17.md
    const [matcapTexture] = useMatcapTexture('7B5254_E9DCC7_B19986_C8AC91', 256)
    const [matcapTextureX] = useMatcapTexture('7E5344_22120E_CCAB9C_8D919D', 256)


    // const tempArray = [...Array[100]]

    return <>

        <Perf position="top-left" />

        <OrbitControls makeDefault />

        <Center>
            <Text3D
                font="./fonts/helvetiker_regular.typeface.json"
                size={0.75}
                height={0.2}
                curveSegments={12}
                bevelEnabled
                bevelThickness={0.02}
                bevelSize={0.02}
                bevelOffset={0}
                bevelSegments={5}
            >
                HELLO R3F
                <meshMatcapMaterial matcap={matcapTexture} />
            </Text3D>
        </Center>

        {[...Array(100)].map((value, index) =>
            <mesh
                key={index}
                position={[
                    (Math.random() - 0.5) * 10,
                    (Math.random() - 0.5) * 10,
                    (Math.random() - 0.5) * 10
                ]}
                scale={0.2 + Math.random() * 0.2}
                rotation={[
                    Math.random() * Math.PI,
                    Math.random() * Math.PI,
                    0
                ]}
            >
                <torusGeometry args={[1, 0.6, 16, 32]} />
                <meshMatcapMaterial matcap={matcapTextureX} />
            </mesh>
        )}

    </>
}