import React from 'react';
import _ from 'lodash'

const Pagination = (props) => {
    const {itemsCount,pageSize,currentPage,onPageChange}=props;
    const pageCount=Math.ceil(itemsCount/pageSize);
    const pages=_.range(1,pageCount+1)
    return <nav>
        <ul className="pagination">
            {pages.map(page=> 
            <li key={page} className="page-tune"><a href="ii" 
            onClick={onPageChange(page)} className="page link"></a>{page}</li>
                )} 
        </ul>
    </nav> ;
}
 
export default Pagination;