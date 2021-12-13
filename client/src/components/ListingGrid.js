import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ListingGrid = ({ data }) => {

    return (
    <Grid>
        {/*mapping through passed data to render items in grid*/}
        {data.map((item) => {
            if (item.id > 0) {
            return (
                <ItemBox to={`/recipes/${item.id}`} key={item.id}>
                <Image src={item.image} alt={item.name} />
                <TextDiv>
                    <ItemName>{item.title}</ItemName>
                </TextDiv>
                </ItemBox>
            );
            } 
        })}
    </Grid>
    );
};

const TextDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ItemBox = styled(Link)`
    display: flex;
    flex-direction: column;
    width: 80%;
    justify-content: center;
    align-content: space-between;
    margin-bottom: 30px;
    text-decoration: none;
    color: black;
    padding: 20px;
    border-radius: 10px;
    font-family: "roboto", sans-serif;
    height: 100%;
`;

const Image = styled.img`
    margin-bottom: 20px;
    border-radius: 10px;
    width: 200px;
    height: 200px;
`;

const ItemName = styled.span`
    text-align: center;
    margin-bottom: 20px;
    color: #383838;
    font-weight: bold;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    margin-top: 30px;

    font-family: "roboto", sans-serif;
`;

export default ListingGrid;

