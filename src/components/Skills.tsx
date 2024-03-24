const Skills = (): React.ReactElement => {
	return (
		<article className="w-10/12 mt-20 relative z-10 text-center sm:text-left text-md sm:text-lg flex flex-col sm:flex-row gap-8 sm:gap-10 justify-around xl:justify-center pointer-events-none xl:my-44">
			<h2 className="text-yellow-500 text-center sm:text-right font-black text-2xl  sm:w-2/12">SKILLS</h2>
			<div className="flex flex-col sm:flex-row w-full sm:w-10/12 xl:w-8/12 gap-5 xl:justify-center">
				<ul className="">
					<li className="font-bold text-yellow-200 sm:text-xl">LANGUAGES</li>
					<li className="font-extralight sm:text-xl">JavaScript</li>
					<li className="font-extralight sm:text-xl">Typescript</li>
					<li className="font-extralight sm:text-xl">HTML</li>
					<li className="font-extralight sm:text-xl">CSS/Sass</li>
					<li className="font-extralight sm:text-xl">PHP</li>
					<li className="font-extralight sm:text-xl">SQL</li>
				</ul>
				<ul>
					<li className="font-bold text-yellow-200 sm:text-xl">LIBRARIES</li>
					<li className="font-extralight sm:text-xl">React</li>
					<li className="font-extralight sm:text-xl">Redux</li>
					<li className="font-extralight sm:text-xl">Angular</li>
					<li className="font-extralight sm:text-xl">Node.js</li>
					<li className="font-extralight sm:text-xl">MongoDB</li>
					<li className="font-extralight sm:text-xl">Mongoose</li>
					<li className="font-extralight sm:text-xl">Laravel</li>
					<li className="font-extralight sm:text-xl">Three.js</li>
					<li className="font-extralight sm:text-xl">React Three Fiber</li>
				</ul>
				<ul>
					<li className="font-bold text-yellow-200 sm:text-xl">TOOLS</li>
					<li className="font-extralight sm:text-xl">Bootstrap</li>
					<li className="font-extralight sm:text-xl">Tailwind</li>
					<li className="font-extralight ">Bash</li>
					<li className="font-extralight ">Git</li>
					<li className="font-extralight sm:text-xl">GitLab & GitHub</li>
					<li className="font-extralight sm:text-xl">R3F DREI</li>
					<li className="font-extralight sm:text-xl">Leva</li>
					<li className="font-extralight sm:text-xl">Imsomnia</li>
					<li className="font-extralight sm:text-xl">Postman</li>
					<li className="font-extralight sm:text-xl">Vite</li>
					<li className="font-extralight sm:text-xl">Mocha & Chai</li>
				</ul>
				<ul>
					<li className="font-bold text-yellow-200 sm:text-xl">DESIGN</li>
					<li className="font-extralight sm:text-xl">Figma</li>
					<li className="font-extralight sm:text-xl">Blender</li>
					<li className="font-extralight sm:text-xl">InDesign</li>
					<li className="font-extralight sm:text-xl">Illustrator</li>
					<li className="font-extralight sm:text-xl">Photoshop</li>
					<li className="font-extralight sm:text-xl">PremierePro</li>
					<li className="font-extralight sm:text-xl">Procreate</li>
					<li className="font-extralight sm:text-xl">Notion</li>
				</ul>
			</div>
		</article>
	);
};

export default Skills;
