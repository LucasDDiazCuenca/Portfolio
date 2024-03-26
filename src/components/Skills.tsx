const Skills = (): React.ReactElement => {
	return (
		<article className="w-11/12 mt-20 relative z-10 text-center sm:text-left text-md sm:text-lg flex flex-col sm:flex-row gap-8 sm:gap-10 justify-around xl:justify-center pointer-events-none xl:my-44 ">
			<h2 className="text-yellow-500 text-center sm:text-right font-black text-2xl sm:w-2/12  ">SKILLS</h2>
			<div className="flex flex-col sm:flex-row w-full sm:w-10/12 xl:w-8/12 gap-10 md:gap-12 xl:justify-center">
				<ul className=" px-3">
					<li className="font-bold text-yellow-200 sm:text-xl">FRONTEND</li>
					<li className="font-extralight sm:text-xl">HTML/CSS-Sass </li>
					<li className="font-extralight sm:text-xl">Bootstrap/Tailwind</li>
					<li className="font-extralight sm:text-xl">Javascript</li>
					<li className="font-extralight sm:text-xl">Typescript</li>
					<li className="font-extralight sm:text-xl">Three.js / R3F</li>
					<li className="font-extralight sm:text-xl">React / Redux</li>
					<li className="font-extralight sm:text-xl">Angular</li>
					<li className="font-extralight sm:text-xl">Vue</li>
					<li className="font-extralight sm:text-xl">Jest</li>
				</ul>
				<ul className=" px-3">
					<li className="font-bold text-yellow-200 sm:text-xl">BACKEND</li>
					<li className="font-extralight sm:text-xl">Node.js</li>
					<li className="font-extralight sm:text-xl">Express.js</li>
					<li className="font-extralight sm:text-xl">MongoDB</li>
					<li className="font-extralight sm:text-xl">Mongoose</li>
					<li className="font-extralight sm:text-xl">PHP</li>
					<li className="font-extralight sm:text-xl">Laravel</li>
					<li className="font-extralight sm:text-xl">SQL</li>
					<li className="font-extralight sm:text-xl">Postman / Insomnia</li>
				</ul>
				<ul className=" px-3">
					<li className="font-bold text-yellow-200 sm:text-xl">DESIGN</li>
					<li className="font-extralight sm:text-xl">Figma</li>
					<li className="font-extralight sm:text-xl">Blender</li>
					<li className="font-extralight sm:text-xl">InDesign</li>
					<li className="font-extralight sm:text-xl">Illustrator</li>
					<li className="font-extralight sm:text-xl">Photoshop</li>
					<li className="font-extralight sm:text-xl">PremierePro</li>
					<li className="font-extralight sm:text-xl">Procreate</li>
				</ul>
				<ul className=" px-3">
					<li className="font-bold text-yellow-200 sm:text-xl">MISCELLANEOUS</li>
					<li className="font-extralight sm:text-xl">macOS</li>
					<li className="font-extralight ">Git</li>
					<li className="font-extralight sm:text-xl">GitLab & GitHub</li>
					<li className="font-extralight sm:text-xl">VSC</li>
					<li className="font-extralight sm:text-xl">Vite</li>
					<li className="font-extralight sm:text-xl">Notion</li>
					<li className="font-extralight sm:text-xl">Bash</li>
				</ul>
			</div>
		</article>
	);
};

export default Skills;
