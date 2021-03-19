import React, { useState } from 'react';
import './Pagination.scss';

export default function Pagination({allPage,getPage}) {
    const [page, setpage] = useState(1);

    const changePage = (page)=>{
        setpage(page);
        getPage(page);
    }
    const content = (allPage)=>{
        if(allPage){
            let data = [];
            for(let i = 1; i<=allPage;i++){
                let item;
                if(i === page){
                    item = <li className="pagination__item active" onClick={()=>changePage(i)} key={i}>{i}</li>
                }else{
                    item = <li className="pagination__item" onClick={()=>changePage(i)} key={i}>{i}</li>
                }
                data.push(item)
            }
            data.push(<li className="arrow" key="arrow">→</li>)
            return data;
        }
        return " ";
    }
    return (
        <ul className="pagination">
            {
                content(allPage)
            }
        </ul>
    )
}
