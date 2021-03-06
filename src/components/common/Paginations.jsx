import React from 'react';
import _ from 'lodash'

const Pagination = (props) => {
    const {itemsCount,pageSize,currentPage,onPageChange}=props;
    const pageCount=Math.ceil(itemsCount/pageSize);
    const pages=_.range(1,pageCount+1)
     console.log(itemsCount,pageSize,currentPage)
    return (<nav>
        <ul className="pagination">
            {pages.map(page=> (
            <li key={page} 
            className= {page===currentPage ? "page-item active" : "page-item"} ><a href=" " 
            onClick={()=>onPageChange(page)} className="page-link">{page}</a></li>
                ))} 
         </ul>
    </nav> );
}
 
export default Pagination;