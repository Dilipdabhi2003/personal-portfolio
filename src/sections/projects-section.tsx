import { FaExternalLinkAlt } from 'react-icons/fa';
import { SectionTitle } from '../components/section-title.component';

const projects = [
  {
    title: 'IssuStack',
    items: [
      {
        title: 'IssuStack – PDF Manager & Downloader (Chrome Extension)',
        role: 'Frontend Developer',
        techStack: 'HTML, CSS, Tailwind CSS, JavaScript',
        timePeriod: '2025',
        link: 'https://chromewebstore.google.com/detail/issustack-pdf-manager-and/gbmlcokalnlmnacbkfcoeekoaaoobjcm?utm_source=item-share-cb',
        description: (
          <ul>
            <li>Helps users download, manage, and backup Issuu magazine PDFs offline.</li>
            <li>Ideal for creators, publishers, and readers to access content anytime.</li>
            <li className="no-bullet"><strong>Features include:</strong></li>
            <li>Sync and archive Issuu magazine data</li>
            <li>One-click bulk PDF downloads</li>
            <li>Efficient handling of subscription limits</li>
            <li>Visual manage of saved publications</li>
            <li>Secure local storage with privacy protection</li>
          </ul>
        ),
      },
    ],
  },
  {
    title: 'Ads-Tracking System',
    items: [
      {
        title: 'Ads-Tracking System',
        role: 'Full Stack Developer',
        techStack: 'JavaScript, Next.js, React.js, Nest.js, PostgreSQL',
        timePeriod: '9 Months (Under Development)',
        link: 'https://ads-track.salesmagnet.io/',
        description: (
          <ul>
            <li>A comprehensive tool for managing advertisements across Facebook, TikTok, and Google.</li>
            <li>This project includes AI integration and full customization capabilities for end-to-end campaigns.</li>
            <li className="no-bullet"><strong>Features Implemented:</strong></li>
            <li>Developed frontend & backend for Google and TikTok ad management</li>
            <li>Integrated role-based permissions and user access modules</li>
            <li>Led the implementation of Google and TikTok Ads Manager</li>
            <li>Facebook Ads Manager is under development</li>
            <li>AI module integration is planned in the next phase</li>
          </ul>
        ),
      },
    ],
  },
  {
    title: 'Evarobo Chrome Extension',
    items: [
      {
        title: 'Evarobo Chrome Extension Documentation (React - LinkedIn Only)',
        role: 'Full Stack Developer',
        techStack: 'HTML5, CSS3, Tailwind CSS, React, NestJS, SQL',
        timePeriod: '2025',
        link: '', // Add link if available
        description: (
          <ul>
            <li>Built a Chrome extension dashboard for interacting with LinkedIn using React.</li>
            <li className="no-bullet"><strong>Core Features:</strong></li>
            <li><strong>Comment:</strong> Displays LinkedIn post comments with scroll and pagination.</li>
            <li><strong>Post Comment:</strong> Enables submitting new comments via intuitive UI.</li>
            <li><strong>Save Profile:</strong> Users can edit and store LinkedIn profile details securely.</li>
            <li><strong>Send to CRM:</strong> Transfers LinkedIn data to CRMs like HubSpot, Salesforce, Zoho with field mapping.</li>
            <li className="no-bullet"><strong>Technical Implementation:</strong></li>
            <li>Used Chrome Storage API (`chrome.storage.sync`) for persistence.</li>
            <li>Used background and content scripts to extract and send LinkedIn data.</li>
            <li>Permissions: storage, activeTab, scripting.</li>
            <li>Components: CommentList, CommentForm, Profile, Dashboard</li>
            <li>Manifest configured with necessary permissions and content scripts.</li>
            <li className="no-bullet"><strong>Planned Enhancements:</strong></li>
            <li>AI-powered comment suggestions</li>
            <li>Image uploads for profile</li>
            <li>Moderation features for comments</li>
            <li>Firebase integration for real-time updates</li>
          </ul>
        ),
      },
    ],
  },
];


export const ProjectsSection = () => {
  return (
    <section className='about-me container' id='projects'>
      <div>
        <SectionTitle title='My' subTitle='PROJECTS' />
      </div>
      <div>
        {projects.map(({ items, title }, idx) => (
          <div className='timeline' key={idx}>
            <h1>{title}</h1>
            {items.map(({ title, role, techStack, timePeriod, description, link }, idx) => (
              <div className='timeline-list' key={idx}>
                <div className='timeline-item'>
                  <p className='designation'>{title}</p>
                  <p className='place'>Role: {role}</p>
                  <p className='place'>Tech: {techStack}</p>
                  <p className='place'>- {timePeriod}</p>
                  {link && (
                    <p className='place'>
                      <a
                        href={link}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='live-link'
                      >
                        <FaExternalLinkAlt />
                        <span>Live Project</span>
                      </a>
                    </p>
                  )}

                  <div className='timeline-description'>{description}</div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};
