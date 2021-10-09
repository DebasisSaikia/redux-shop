import styled from "styled-components";

export const ProductContainer = styled.div`
  width: 95%;
  height: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4,1fr);
  gap: 2rem;
`;

export const ProductCard=styled.div`
width: 330px;
/* height: 280%; */
border: 1px solid #111;
display: flex;
flex-direction: column;
justify-content: space-between;
img{
    height: 150px;
    width: 150px;
    object-fit: contain;
}
.img_container{
    text-align: center;
}

h2{
    font-size: 15px;
    text-align: center;
    margin-bottom: 0.5rem;
    color: rgba(0,0,0,0.6);
}
p{
    font-size: 10px;
    text-align: center;
    color: rgba(0,0,0,0.7);
    text-overflow: ellipsis;
}

.bottom_section{
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 0.7rem;
    height: 30px;

    .price{
        background-color: yellow;
        font-weight: 500;
        text-align: center;
        font-size: 14px;
        padding-top: 0.3rem;
    }
    .rating{
        background-color: green;
        color: #fff;
        font-weight: 500;
        text-align: center;
        font-size: 14px;
        padding-top: 0.3rem;
    }
}
`
