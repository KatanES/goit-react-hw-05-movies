import styled from 'styled-components';
export const ReviewsList = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  margin-top: 10px;
  overflow-y: auto;
  max-height: calc(100vh - 64px - 30px);
  padding: 0;

  p {
    text-decoration: none;
    color: black;
    text-align: left;
    padding-left: 10px;
    margin-bottom: 25px;

    img {
      width: 50%;
    }
  }
`;

export const ReviewsPageContainer = styled.main`
  padding-top: 64px;
`;

export const ReviewsPageTitle = styled.h1`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    .no-reviews {
      display: block;
    }
  }
`;
