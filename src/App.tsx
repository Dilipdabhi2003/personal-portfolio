import { MouseTrail } from './components/mouse-trail';
import { ScrollBar } from './components/scroll-bar';
import { AboutMe } from './sections/about-me.section';
import { ContactFooter } from './sections/contact-footer';
import { InfoSection } from './sections/info.section';
import { ProjectsSection } from './sections/projects-section';
import { TechStack } from './sections/tech-stack.section';
import './styles/about-me.css';
import './styles/floating-button.css';
import './styles/glow-box.css';
import './styles/info-section.css';
import './styles/mouse-trail.css';
import './styles/tech-stack.css';
import './styles/text-hover.css';
import './styles/title.css';

function App() {
	return (
		<>
			<ScrollBar />
			<MouseTrail />
			<InfoSection />
			<AboutMe />
			<TechStack />
			<ProjectsSection />
			<ContactFooter />
		</>
	);
}

export default App;
