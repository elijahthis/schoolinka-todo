import { useState } from "react";

const usePaginate = (itemsPerPage: number, itemList: any[]) => {
	const [itemOffset, setItemOffset] = useState(0);

	const endOffset = itemOffset + itemsPerPage;
	const currentItems = itemList.slice(itemOffset, endOffset);
	const pageCount = Math.ceil(itemList.length / itemsPerPage);

	// Invoke when user click to request another page.
	const handlePageClick = (event: any) => {
		const newOffset = (event.selected * itemsPerPage) % itemList.length;
		console.log(
			`User requested page number ${event.selected}, which is offset ${newOffset}`
		);
		setItemOffset(newOffset);
	};

	return { itemOffset, endOffset, currentItems, pageCount, handlePageClick };
};

export default usePaginate;
