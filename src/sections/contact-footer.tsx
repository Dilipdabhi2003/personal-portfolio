import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { IoMailOutline } from 'react-icons/io5';

import { GlowBox } from '../components/glow-box';
import { SectionTitle } from '../components/section-title.component';

const contacts = [
	{
		title: 'GitHub',
		icon: <FaGithub color='rgb(255, 255, 255)' />,
		color: 'rgba(253, 120, 255, 0.6)',
		link: 'https://github.com/Dilipdabhi2003',
	},
	{
		title: 'LinkedIn',
		icon: <FaLinkedinIn color='rgb(0, 160, 220)' />,
		color: 'rgba(0, 160, 220, 0.6)',
		link: 'https://www.linkedin.com/in/dilipdabhi/',
	},
	{
		title: 'Email',
		icon: <IoMailOutline color='rgba(255, 151, 151, 1)' />,
		color: 'rgba(209, 18, 18, 0.7)',
		link: 'mailto:dilipdabhi0017@gmail.com',
	},
];

export const ContactFooter: React.FC = () => {
	return (
		<section className='tech-stack' id='contact'>
			<div className='tech-grid'>
				<div>
					<div className='timeline' style={{
						color: "#ffffff",
						textTransform: "uppercase",
						textAlign: 'center',
						marginBottom: '1rem',
						fontSize:'2rem',
					}}>
						<h2>Reach Out</h2>
					</div>
					<p style={{
						color: "#1fc3ff",
						textAlign: 'center',
						marginBottom: '2rem',
						fontSize: '1rem',
						justifyContent: 'center',
						paddingLeft: '96px',
						paddingRight: '95px',
			
					}}>
						I'd love to hear from you! Connect with me on any of the platforms below.
					</p>
					<div className='tech-row' style={{ width: "530px", justifyContent: 'center' }}>
						{contacts.map((item, index) => (
							<a
								key={index}
								href={item.link}
								target='_blank'
								rel='noopener noreferrer'
								style={{ textDecoration: 'none' }}
							>
								<GlowBox
									icon={item.icon}
									color={item.color}
									title={item.title}
								/>
							</a>
						))}
					</div>
				</div>
			</div>
			<div>
				<SectionTitle
					title='Contact'
					subTitle='Me'
				/>
			</div>
		</section>
	);
};
