import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { Color } from "three";
import * as THREE from "three";

const HollyDonut = (): React.ReactElement => {
	return (
		<mesh position={[0, 0, 0]}>
			<torusGeometry args={[8, 0.5]} />
			<meshBasicMaterial color={new Color(10, 4, 2)} />
		</mesh>
	);
};

const TorusKnot = (): React.ReactElement => {
	const ref = useRef<THREE.Mesh>(null);
	useFrame(() => {
		if (ref.current) {
			ref.current.rotation.x += 0.005;
			ref.current.rotation.y += 0.003;
			ref.current.rotation.z += 0.002;
		}
	});

	return (
		<mesh ref={ref} position={[0, 0, 0]}>
			<torusKnotGeometry args={[1, 0.4, 100, 16]} />
			<meshStandardMaterial roughness={0} metalness={1} color={new Color(0xaaaaaa)} envMapIntensity={2.5} />
		</mesh>
	);
};

const RingLightExperience = (): React.ReactElement => {
	return (
		<div className="w-full h-full z-30">
			<Canvas camera={{ position: [0, 0, 3.3] }}>
				<Environment files={"environmentMaps/metro_noord_2k.hdr"}>
					<HollyDonut />
				</Environment>
				<TorusKnot />
			</Canvas>
		</div>
	);
};

export default RingLightExperience;
