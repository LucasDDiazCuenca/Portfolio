const IntroInformation = (): React.ReactElement => {
	return (
		<article className="w-full mt-10 xl:my-60 px-8 sm:px-36 relative z-10 text-center sm:text-left text-md sm:text-2xl pointer-events-none">
			<div className="pointer-events-none">
				<p className="py-3">
					Hi there 👋🏻, My name is <b className="text-yellow-500">Lucas Diaz</b> and I&apos;m a Fullstack
					Developer with a Frontend specialization. In 2021, I began my journey in digital interaction and web
					programming degree, in UOC (Universitat Oberta de Catalunya), followed by an intensive Fullstack Web
					Design bootcamp last year (2023) in ISDI Coders. I excel in clean code, best practices, and 3D
					design, particularly using Three.js & R3F.
				</p>

				<p className="py-3">
					I thrive on challenges, love teamwork, and am dedicated to continuous improvement. I&apos;m
					currently seeking a role that fosters both personal and professional growth.
				</p>
			</div>
			<p className="py-3">
				Let&apos;s connect to explore how I can contribute to your team&apos;s success 👉🏻
				<a href="mailto:lucasdamian30@gmail.com" className="text-yellow-500 animate-pulse">
					lucasdmaian30@gmail.com
				</a>
			</p>
		</article>
	);
};

export default IntroInformation;
