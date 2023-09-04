import ReactPaginate from "react-paginate";
import { ArrowLeftIcon, ArrowRightIcon } from "../svgs";

interface PaginationComponentProps {
	handlePageClick: (selectedItem: { selected: number }) => void;
	pageCount: number;
}

const PaginationComponent = ({
	handlePageClick,
	pageCount,
}: PaginationComponentProps) => {
	return (
		<ReactPaginate
			breakLabel="..."
			nextLabel={
				<button className="flex flex-row items-center gap-2 text-sm font-semibold">
					<span>Next</span>
					<ArrowRightIcon />
				</button>
			}
			onPageChange={handlePageClick}
			pageRangeDisplayed={3}
			pageCount={pageCount}
			previousLabel={
				<button className="flex flex-row items-center gap-2 text-sm font-semibold">
					<ArrowLeftIcon />
					<span>Previous</span>
				</button>
			}
			renderOnZeroPageCount={null}
			containerClassName="PaginationComponent"
			pageClassName="PaginationComponent__page"
			breakClassName="PaginationComponent__break"
			activeClassName="PaginationComponent__active"
		/>
	);
};

export default PaginationComponent;
