import styled from 'styled-components';
export const SearchMovieList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 30px;
  margin-top: 20px;
  overflow-y: auto;
  max-height: calc(100vh - 64px - 60px);
`;

export const SearchMovieItem = styled.li`
  width: calc(33.33% - 8px);
  margin-bottom: 16px;
  margin-left: 5px;

  padding: 0;
  box-sizing: border-box;

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
export const SearchPoster = styled.img`
  width: 100px;
`;

export const SearchPageContainer = styled.main`
  padding-top: 64px;
`;

export const SearchPageTitle = styled.h1`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
