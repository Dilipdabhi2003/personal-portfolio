import { FloatingButton } from '../components/floating-button';
import { TextHover } from '../components/text-hover.component';

export const InfoSection = () => {
	return (
		<div className='hero-section'>
			<FloatingButton
				label='About Me'
				className='first'
				href='/#about-me'
			/>
			<p>Hi, I am</p>
			<div style={{ display: "flex", gap: "5px" }}>
				<TextHover
					text='DILIP'
					className='name'
				/>
				<TextHover
					text='DABHI'
					className='name'
				/>
			</div>
			<p>Full Stack Developer</p>
			<FloatingButton
				label='Tech-Skills'
				className='sec'
				href='/#tech-stack'
			/>
			<FloatingButton
				label='Projects'
				className='third'
				href='/#projects'
			/>
			<FloatingButton
				label='Contact Me'
				className='fourth'
				href='/#contact'
			/>

			<div className='blur'></div>
		</div>
	);
};
