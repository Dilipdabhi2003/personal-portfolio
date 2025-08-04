import { BiLogoTypescript, BiLogoVisualStudio } from 'react-icons/bi';
import { DiMongodb } from 'react-icons/di';
import { FaBootstrap, FaCss3Alt, FaFigma, FaGitAlt, FaGithub, FaHtml5, FaJava, FaNodeJs, FaReact } from 'react-icons/fa';
import {
	SiExpress,
	SiGreensock,
	SiJavascript,
	SiMysql,
	SiNestjs,
	SiPostman,
	SiTailwindcss
} from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';

import { GlowBox } from '../components/glow-box';
import { SectionTitle } from '../components/section-title.component';

const techs = [
	{
		heading: 'Core Stack I Work With',
		items: [
			{
				title: 'Next JS',
				icon: <TbBrandNextjs color='rgb(255, 255, 255)' />,
				color: 'rgba(255, 255, 255, 0.4)',
			},
			{
				title: 'React JS',
				icon: <FaReact color='rgb(97, 219, 251)' />,
				color: 'rgb(97, 219, 251, 0.6)',
			},
			{
				title: 'Node JS',
				icon: <FaNodeJs color='rgb(104, 160, 99)' />,
				color: 'rgb(104, 160, 99)',
			},
			{
				title: 'TypeScript',
				icon: <BiLogoTypescript color='rgb(0, 122, 204)' />,
				color: 'rgba(0, 122, 204, 0.6)',
			},
			{
				title: 'Express JS',
				icon: <SiExpress color='rgba(255, 255, 255)' />,
				color: 'rgba(255, 255, 255, 0.4)',
			},
			{
				title: 'JavaScript',
				icon: <SiJavascript color='rgb(247, 223, 30)' />,
				color: 'rgba(247, 223, 30, 0.7)',
			},
			{
				title: 'NestJS',
				icon: <SiNestjs color='rgb(219, 40, 40)' />,
				color: 'rgba(219, 40, 40, 0.75)',
			},
			{
				title: 'Java',
				icon: <FaJava color='rgb(255, 87, 34)' />,
				color: 'rgba(255, 87, 34, 0.8)',
			},
			{
				title: 'GSAP',
				icon: <SiGreensock color='rgb(102, 255, 102)' />,
				color: 'rgba(102, 255, 102, 0.6)',
			},
		],
	},
	{
		heading: 'UI & Styling',
		items: [
			{
				title: 'Tailwind CSS',
				icon: <SiTailwindcss color='rgb(6, 182, 212)' />,
				color: 'rgb(6, 182, 212, 0.7)',
			},
			{
				title: 'Bootstrap',
				icon: <FaBootstrap color='rgb(125, 17, 248)' />,
				color: 'rgb(125, 17, 248, 0.75)',
			},
			{
				title: 'HTML',
				icon: <FaHtml5 color='rgb(255, 87, 34)' />,
				color: 'rgba(255, 87, 34, 0.8)',
			},
			{
				title: 'CSS',
				icon: <FaCss3Alt color='rgb(33, 150, 243)' />,
				color: 'rgba(33, 150, 243, 0.8)',
			},
			{
				title: 'Figma',
				icon: <FaFigma color='rgb(255, 0, 122)' />,
				color: 'rgba(255, 0, 122, 0.75)',
			},
		],
	}
	,
	{
		heading: 'Databases I Use',
		items: [
			{
				title: 'MongoDB',
				icon: <DiMongodb color='rgb(0, 237, 100)' />,
				color: 'rgb(0, 237, 100, 0.7)',
			},
			{
				title: 'MySQL',
				icon: <SiMysql color='rgb(0, 122, 158)' />,
				color: 'rgb(0, 122, 158, 0.75)',
			},
		],
	},
	{
		heading: 'Tools I Use',
		items: [
			{
				title: 'VS Code',
				icon: <BiLogoVisualStudio color='rgb(0, 122, 204)' />,
				color: 'rgba(0, 122, 204, 0.7)',
			},
			{
				title: 'GitHub',
				icon: <FaGithub color='rgb(255, 255, 255)' />,
				color: 'rgba(255, 255, 255, 0.6)',
			},
			{
				title: 'Postman',
				icon: <SiPostman color='rgb(255, 89, 0)' />,
				color: 'rgba(255, 89, 0, 0.75)',
			},
			{
				title: 'Git',
				icon: <FaGitAlt color='rgb(240, 80, 51)' />,
				color: 'rgba(240, 80, 51, 0.8)',
			},
		],
	},

];

export const TechStack = () => {
	return (
		<section
			className='tech-stack'
			id='tech-stack'
		>
			<div className='tech-grid'>
				{techs.map((tech, index) => (
					<div key={index}>
						<p style={{
							color: "#1fc3ff",
							textTransform: "uppercase",
						}}>{tech.heading}</p>
						<div className='tech-row'>
							{tech.items.map((item, index) => (
								<GlowBox
									key={index}
									icon={item.icon}
									color={item.color}
									title={item.title}
								/>
							))}
						</div>
					</div>
				))}
			</div>
			<div>
				<SectionTitle
					title='Tech'
					subTitle='SET'
				/>
			</div>
		</section>
	);
};
