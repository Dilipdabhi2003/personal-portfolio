type TSectionTitleProps = {
	title: string;
	subTitle?: string;
};
export const SectionTitle = ({ title, subTitle }: TSectionTitleProps) => {
	return (
		<div className='title'>
			<p className='primary-text'>{title}</p>
			{subTitle && <p className={subTitle === "PROJECTS" ? 'text-third' : 'secondary-text'}>{subTitle}</p>}
		</div>
	);
};
