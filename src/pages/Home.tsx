import FloatingBubbles from "../components/Bubbles";
import Menu from "../components/Menu";
import Skills from "../components/Skills";
import IntroInformation from "../components/IntroInformation";
import IntroProjects from "../components/IntroProjects";
import Footer from "../components/Footer";
import GoldenTorus from "../components/GoldenTorus";
import { Canvas } from "@react-three/fiber";

const Home = (): React.ReactElement => {
	return (
		<div className="h-screen text-white">
			<div className="absolute w-full h-[70rem] z-10">
				<FloatingBubbles />
			</div>

			<Menu />

			<main className="flex flex-wrap justify-center">
				<IntroInformation />

				<Skills />

				<div className="absolute top-[74rem] z-10 h-[110rem] sm:h-[45rem] md:h-[32.2rem] xl:h-[85rem] w-full">
					<Canvas>
						<GoldenTorus />
					</Canvas>
				</div>

				<IntroProjects />
			</main>
			<Footer />
		</div>
	);
};

export default Home;
