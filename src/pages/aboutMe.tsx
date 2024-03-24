import Menu from "../components/Menu";
import Footer from "../components/Footer";

const AboutMe = (): React.ReactElement => {
	return (
		<>
			<img
				src="images/cube-background.webp"
				alt="background of the page"
				className="absolute opacity-10 inset-0 m-auto pointer-events-none"
				width="60%"
			/>
			<div className="z-50">
				<Menu />
				<h2 className="text-white text-2xl flex p-10 mt-32">
					Hi, mi name is <b className="text-yellow-500">&nbsp;Lucas</b>...
				</h2>
				<section className="text-white flex flex-col gap-5 p-10 text-lg">
					<p>
						Born in Argentina and raised in Spain, specifically in the Canary Islands, I moved to Madrid to
						pursue my first <b className="text-yellow-500">degree in Biology</b> at Complutense University.
					</p>
					<p>
						After a few years, <b className="text-yellow-500">my interest shifted towards programming</b>. I
						started with Java and R.
					</p>
					<p>
						Given the vastness and diversity of the programming world, I decided to focus all my attention
						on
						<b className="text-yellow-500"> web development</b>. Among all its branches, I found it the most
						enjoyable as it seamlessly blended design and code.
					</p>
					<p>
						In 2021, i embarked on my
						<b className="text-yellow-500">
							{" "}
							second career in &quot;Digital Interaction and Multimedia Techniques&quot;{" "}
						</b>
						at UOC (Universitat Oberta de Catalunya). It perfectly aligned with my aspirations: a balanced
						mix of 50% frontend development and 50% design.
					</p>
					<p>
						The more I studied, the more I fell in love with the world of web development. That&apos;s why I
						decided to complement and enhance my studies by attending a
						<b className="text-yellow-500"> coding bootcamp at ISDI Coders</b> in 2023.
					</p>
					<p>
						During my time there, I delved deep into Full Stack development, specializing in the{" "}
						<b className="text-yellow-500">MERN </b>
						technological stack. As I progressed through my studies,{" "}
						<b className="text-yellow-500">
							my interest began to shift towards combining 3D with software development
						</b>
						. It was during this time that I discovered <b className="text-yellow-500">Three.js</b> and{" "}
						<b className="text-yellow-500">React Three Fiber</b>, and I instantly fell in love with them.
					</p>
					<p>
						I pursued further learning through the Bruno Simon course at
						<a
							href="https://threejs-journey.com/"
							target="_blank"
							rel="noreferrer"
							className="text-yellow-400 hover:text-yellow-600 animate-pulse"
						>
							{" "}
							https://threejs-journey.com{" "}
						</a>
						while concurrently attending the bootcamp.
					</p>
					<p>
						Once I completed all of my studies,{" "}
						<b className="text-yellow-500">
							I got a position at &quot;Artek Soluciones Informáticas&quot; as a full-stack developer
						</b>
						. This opportunity provided me with an incredible experience that broadened my vision and
						equipped me with the tools necessary to solve complex problems. Now i&apos;ve finshed this
						chapter and i&apos;m involved in a{" "}
						<b className="text-yellow-500">new project that soon will be revealed</b> ...
					</p>
					<p>
						In my <b className="text-yellow-500">spare time</b>, I enjoy studying new languages such as
						Japanese and Swedish, playing the piano, practicing pottery, and studying Blender. These
						activities allow me to explore different aspects of creativity and continue learning outside of
						my professional endeavors.
					</p>
				</section>
			</div>
			<Footer />
		</>
	);
};

export default AboutMe;
