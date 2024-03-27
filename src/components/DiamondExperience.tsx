import { useRef } from "react";
import { Canvas, useLoader, useFrame, ObjectMap } from "@react-three/fiber";
import { useGLTF, Environment, OrbitControls, MeshRefractionMaterial } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { RGBELoader } from "three-stdlib";
import * as THREE from "three";
import { type GLTF } from "three-stdlib";

interface DiamondProps {
	rotation: [number, number, number];
	position: [number, number, number];
}

function Diamond(props: DiamondProps): React.ReactElement {
	const ref = useRef<THREE.Mesh>(null);
	const { nodes }: GLTF & ObjectMap = useGLTF("/dflat.glb");

	// Use a custom envmap/scene-backdrop for the diamond material
	const texture = useLoader(
		RGBELoader,
		"https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr"
	);

	useFrame(() => {
		if (ref.current) {
			ref.current.rotation.y += 0.001;
		}
	});

	return (
		<mesh ref={ref} geometry={nodes.Diamond_1_0.geometry} {...props}>
			<MeshRefractionMaterial
				envMap={texture}
				bounces={3}
				aberrationStrength={0.01}
				ior={2.75}
				fresnel={1}
				color={"white"}
				fastChroma
				toneMapped={false}
			/>
		</mesh>
	);
}

export default function DiamondExperience() {
	return (
		<Canvas camera={{ position: [0, 0.8, 3], fov: 45 }}>
			<Diamond rotation={[0, 0, 0]} position={[0, 0, 0]} />
			<Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr" />
			<OrbitControls makeDefault autoRotate autoRotateSpeed={0.1} minPolarAngle={0} maxPolarAngle={Math.PI / 2} />
			<EffectComposer>
				<Bloom luminanceThreshold={1} intensity={0.01} levels={9} mipmapBlur />
			</EffectComposer>
		</Canvas>
	);
}
