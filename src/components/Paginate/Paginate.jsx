
import { useEffect } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { selectFilteredProducts } from "redux/products/selectors";
import { addCurrentItems, addItemOffset, addPageCount } from "redux/pagination/paginationSlice";
import { selectCurrentItems, selectItemOffset, selectPageCount } from "redux/pagination/selectors";
import { PageNumber, PaginationContainer } from "./Pagination.styled";
import { RightArrow } from "assets/icon/right-arrow";
import { LeftArrow } from "assets/icon/left-arrow";

export const Paginate = () => {
        const filter = useSelector(selectFilteredProducts);
 const itemOffset = useSelector(selectItemOffset);
 const currentItems = useSelector(selectCurrentItems);
 const pageCount = useSelector(selectPageCount);
 const dispatch = useDispatch()
 const itemsPerPage = 15
 useEffect(() => {
   const endOffset = itemOffset + itemsPerPage;
   dispatch(addCurrentItems(filter.slice(itemOffset, endOffset)));
   dispatch(addPageCount(Math.ceil(filter.length / itemsPerPage)));
 }, [itemOffset, itemsPerPage, filter, dispatch]);


 const handlePageClick = event => {
   const newOffset = (event.selected * itemsPerPage) % filter.length;
   console.log(currentItems)
   dispatch(addItemOffset(newOffset))
 };

 return (
   <>
     <PaginationContainer>
       <ReactPaginate
         breakLabel={<PageNumber>...</PageNumber>}
         nextLabel={
           <PageNumber>
             <LeftArrow />
           </PageNumber>
         }
         onPageChange={handlePageClick}
         pageRangeDisplayed={3}
         pageCount={pageCount}
         previousLabel={
           <PageNumber>
             <RightArrow />
           </PageNumber>
         }
         renderOnZeroPageCount={null}
         activeClassName="active"
         pageClassName="page-item" // Додаємо клас "page-item" для чисел-сторінок
       />
     </PaginationContainer>
   </>
 );
}

