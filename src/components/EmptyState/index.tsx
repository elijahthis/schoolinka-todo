const EmptyState = ({
	message = "Nothing to see here",
}: {
	message?: string;
}) => {
	return (
		<div>
			<p>{message}</p>
		</div>
	);
};

export default EmptyState;
