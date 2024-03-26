import { NavigateFunction, useNavigate } from "react-router-dom";

const IntroProjects = (): React.ReactElement => {
	const navigate: NavigateFunction = useNavigate();

	const handleNavigateUnderWork = (): void => {
		navigate("/under-work");
	};

	return (
		<section className="w-10/12 mt-20 relative z-10 text-center sm:text-left text-md sm:text-lg flex flex-col sm:flex-row justify-around xl:justify-center gap-10 xl:mb-44">
			<h2 className="text-yellow-500 text-center sm:text-right font-black text-2xl w-full sm:w-2/12">PROJECTS</h2>

			<div className="w-full sm:w-10/12 xl:w-8/12">
				<div className="mb-10">
					<div className="flex flex-col sm:flex-row gap-10 xl:justify-center">
						<div className="aspect-auto w-full sm:w-6/12">
							<img
								src="./isolink.png"
								alt="image of the app called isolink"
								className="rounded-xl w-full"
							/>
						</div>

						<div className="w-full sm:w-6/12 xl:w-5/12">
							<h3 className="text-xl text-yellow-400">Iso Link</h3>
							<p>
								A social app enabling users to send messages while navigating a customizable avatar
								within a 3D isometric room. This immersive experience serves as a unique communication
								platform and a potential tool for workspaces.
							</p>
							<a
								className="text-yellow-200"
								href="https://lucas-isolink.netlify.app"
								target="_blank"
								rel="noreferrer"
							>
								Go to project
							</a>
							<br />
							<a
								className="text-yellow-100"
								href="https://github.com/LucasDDiazCuenca/isolink"
								target="_blank"
								rel="noreferrer"
							>
								how to use ...
							</a>
						</div>
					</div>
				</div>

				<div className="mb-10 ">
					<div className="flex flex-col sm:flex-row gap-10 xl:justify-center">
						<div className="aspect-auto w-full sm:w-6/12">
							<img
								src="./socialPortal.png"
								alt="image of the app called isolink"
								className="rounded-xl w-full"
							/>
						</div>

						<div className="w-full sm:w-6/12 xl:w-5/12">
							<h3 className="text-xl text-yellow-400">Social Portal</h3>
							<p>
								Social app that allows to upload a picture, like another ones, save them, see all the
								posts by using custom filters, to delete, to create & update an own picture. It&apos;s
								more like a clone of an Instagram.
							</p>
							<a
								className="text-yellow-200"
								href="https://lucas-social-app.netlify.app"
								target="_blank"
								rel="noreferrer"
							>
								Go to project
							</a>
							<br />
							<a
								className="text-yellow-100"
								href="https://github.com/LucasDDiazCuenca/socialportal"
								target="_blank"
								rel="noreferrer"
							>
								how to use ...
							</a>
						</div>
					</div>
				</div>
				<div className="flex justify-center">
					<button
						className="text-center text-xl text-yellow-300 hover:text-yellow-500"
						onClick={handleNavigateUnderWork}
					>
						See more ...
					</button>
				</div>
			</div>
		</section>
	);
};

export default IntroProjects;
