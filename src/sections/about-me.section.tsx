import { SectionTitle } from '../components/section-title.component';

const timeline = [
	{
		title: 'Experience',
		items: [
			{
				title: 'Junior Software Developer',
				place: '@EliteSigma Infotech LLP, Ahmedabad',
				timePeriod: 'June 2024 – Present',
				description: (
					<ul>
						<li>Working as a frontend developer using HTML, CSS, Tailwind CSS, and JavaScript.</li>
						<li>Hands-on experience in React and Express.js.</li>
						<li>
							Built real-world solutions using modern JavaScript frameworks, with a focus on performance, usability, and scalability.
						</li>
					</ul>
				),
			},
		],
	},
	{
		title: 'Certification',
		items: [
			{
				title: 'Java Programming',
				place: 'TOPS Technologies',
				timePeriod: '2024',
				description: (
					<ul>
						<li>Completed a certified Core Java course covering OOP principles, data structures, and basic algorithms.</li>
						<li>Worked on small-scale Java projects and gained foundational programming experience.</li>
					</ul>
				),
			},
		],
	},
	{
		title: 'Education',
		items: [
			{
				title: 'Bachelor of Commerce (B.Com)',
				place: 'Maharaja Krishnakumarsinhji Bhavnagar University',
				timePeriod: 'Graduated: May 2023',
				description: '',
			},
			{
				title: 'Master of Computer Applications (MCA)',
				place: 'Gujarat Technological University (GTU), Ahmedabad',
				timePeriod: 'Admitted: 2025 (Semester Yet to Start)',
				description: '',
			},
		],
	},
];


export const AboutMe = () => {
	return (
		<section
			className='about-me container'
			id='about-me'
		>
			<div>
				<SectionTitle
					title='About'
					subTitle='ME'
				/>
			</div>
			<div>
				<div className='intro'>
					<p style={{ marginTop: '20px' }}>
						👋 Hey, I'm Dilip Dabhi, a Frontend Developer.
					</p>
					<p>
						I’ve been working with <strong>HTML</strong>, <strong>CSS</strong>, <strong>Tailwind CSS</strong>, <strong>JavaScript</strong>, and <strong>React</strong> for the past <strong>1 year</strong>, building responsive and user-friendly web applications.
					</p>
					<p>
						I enjoy solving real-world problems through clean UI and code. I'm always curious to learn new technologies and improve my skills. When I’m not coding, you’ll find me exploring new tools or working on side projects.
					</p>
				</div>
				<div>
					{timeline.map(({ items, title }, idx) => (
						<div
							className='timeline'
							key={idx}
						>
							<h1>{title}</h1>
							{items.map(({ title, place, timePeriod, description }, idx) => (
								<div
									className='timeline-list'
									key={idx}
								>
									<div className='timeline-item'>
										<p className='designation'>{title}</p>
										<p className='place'>
											{place} | {timePeriod}
										</p>
										<div className='timeline-description'>{description}</div>
									</div>
								</div>
							))}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
