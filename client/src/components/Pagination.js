import React, { useState } from 'react'
import styled from 'styled-components';

const Pagination = ({data, RenderComponent, dataLimit}) => {
    console.log(data);
    const [currentPage, setCurrentPage] = useState(0);
    const pages = Math.round(data.length / dataLimit);

  //function to go to next page//
    function goToNextPage() {
        setCurrentPage((page) => page + 1);
    }

    //function to go to previous page//
    function goToPreviousPage() {
        setCurrentPage((page) => page - 1);
    }

    //function to slice data (25 per page)//
    const getPaginatedData = () => {
        const startIndex = currentPage * dataLimit - dataLimit;
        const endIndex = startIndex + dataLimit;
        const newItems = data.slice(startIndex, endIndex);
        return newItems;
    };
    console.log(data);
    console.log(dataLimit);
    return (
        <div>
            {/* show the items, 25 items at a time */}
            <GridWrapper>{<RenderComponent data={data} />}</GridWrapper>
        </div>
    );
}
const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    border: 3px solid #383838;
    color: #383838;
    font-size: 18px;
    font-family: "roboto", sans-serif;
    font-weight: bold;
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 30px;
`;

const GridWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 25px;
    padding: 10px 10px;
    background: #383838;
    border: none;
    color: white;
    font-size: 15px;
    cursor: pointer;
    width: 225px;

    &:disabled {
        opacity: 0.5;
        background-color: grey;
        cursor: default;
    }
`;
export default Pagination
