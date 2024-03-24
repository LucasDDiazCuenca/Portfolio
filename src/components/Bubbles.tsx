import { MathUtils } from "three";
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Instances, Instance, Environment } from "@react-three/drei";
import { EffectComposer, N8AO, TiltShift2 } from "@react-three/postprocessing";

import * as THREE from "three";

const particles = Array.from({ length: 150 }, () => ({
	factor: MathUtils.randInt(20, 100),
	speed: MathUtils.randFloat(0.01, 0.75),
	xFactor: MathUtils.randFloatSpread(40),
	yFactor: MathUtils.randFloatSpread(10),
	zFactor: MathUtils.randFloatSpread(10),
}));

const FloatingBubbles = (): React.ReactElement => {
	return (
		<Canvas shadows dpr={[1, 2]} gl={{ antialias: false }} camera={{ fov: 80, position: [0, 0, 20] }}>
			<color attach="background" args={["#131313"]} />
			<fog attach="fog" args={["#000000", 30, -5]} />

			<ambientLight intensity={0.3} />

			<pointLight position={[10, 10, 10]} intensity={1} castShadow />

			<Bubbles ballcolor="#2a2a2a" />

			<EffectComposer enableNormalPass={false}>
				<N8AO aoRadius={5} intensity={1} color="#363636" />
				<TiltShift2 blur={0.4} />
			</EffectComposer>

			<Environment preset="city" />
		</Canvas>
	);
};

interface BubblesProps {
	ballcolor: string;
}

const Bubbles: React.FC<BubblesProps> = ({ ballcolor }) => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const ref = useRef<any>(null);
	useFrame((state, delta) => {
		if (ref.current) {
			ref.current.rotation.y = MathUtils.damp(ref.current.rotation.y, (-state.mouse.x * Math.PI) / 6, 0.5, delta);
		}
	});

	return (
		<Instances limit={particles.length} ref={ref} castShadow receiveShadow position={[0, 2.5, 0]}>
			<sphereGeometry args={[0.45, 64, 64]} />
			<meshStandardMaterial roughness={1} color={ballcolor} />
			{particles.map((data, i) => (
				<Bubble key={i} {...data} />
			))}
		</Instances>
	);
};

interface BubbleProps {
	factor: number;
	speed: number;
	xFactor: number;
	yFactor: number;
	zFactor: number;
}

const Bubble: React.FC<BubbleProps> = ({ factor, speed, xFactor, yFactor, zFactor }) => {
	const ref = useRef<THREE.Object3D>();
	useFrame((state) => {
		const t = factor + state.clock.elapsedTime * (speed / 30);

		if (ref.current) {
			ref.current.scale.setScalar(Math.max(1.5, Math.cos(t) * 6));
			ref.current.position.set(
				Math.cos(t) +
					Math.sin(t * 10) / 10 +
					xFactor +
					Math.cos((t / 10) * factor) +
					(Math.sin(t * 1) * factor) / 10,
				Math.sin(t) +
					Math.cos(t * 1) / 10 +
					yFactor +
					Math.sin((t / 10) * factor) +
					(Math.cos(t * 2) * factor) / 10,
				Math.sin(t) +
					Math.cos(t * 2) / 10 +
					zFactor +
					Math.cos((t / 10) * factor) +
					(Math.sin(t * 3) * factor) / 4
			);
		}
	});
	return <Instance ref={ref} />;
};
export default FloatingBubbles;
