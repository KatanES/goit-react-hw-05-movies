import styled from 'styled-components';
export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 30px;
  margin-top: 20px;
  overflow-y: auto;
  max-height: calc(100vh - 64px - 60px);
  padding: 0;
  list-style: none;
`;

export const CastItem = styled.li`
  width: calc(33.33% - 8px);
  margin-right: 16px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  padding: 0;
  box-sizing: border-box;

  p {
    text-decoration: none;
    color: black;
    text-align: left;
    padding-left: 10px;

    img {
      width: 50%;
    }
  }
`;
export const CastPoster = styled.img`
  width: 100px;
`;

export const CastPageContainer = styled.main`
  padding-top: 64px;
`;

export const CastPageTitle = styled.h1`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CastDescription = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;
