import styled from 'styled-components';
export const MovieList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-between; */
  margin-bottom: 30px;
  margin-top: 20px;
  overflow-y: auto;
  max-height: calc(100vh - 64px - 60px);
`;

export const MovieItem = styled.li`
  width: calc(33.33% - 8px);
  margin-bottom: 16px;
  margin-left: 5px;

  padding: 0; /* Змініть відступи для кожного елемента */
  box-sizing: border-box; /* Забезпечте правильний розмір включаючи відступи */

  /* &:nth-child(odd) {
    padding-right: 8px; 
  } */

  a {
    text-decoration: none;
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    img {
      width: 50%;
    }

    h3 {
      margin-top: 8px;
    }
  }
`;
export const Poster = styled.img`
  width: 100px;
`;
