import styled from 'styled-components';

export const DetailsPageContainer = styled.main`
  padding-top: 64px;
`;

export const DetailsMovieList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 30px;
  margin-top: 20px;
  overflow-y: auto;
  max-height: calc(100vh - 64px - 60px);
`;

export const DetailsMovieItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  box-sizing: border-box;
  width: 100%; /* Зберігаємо повну ширину блоку */

  @media (min-width: 768px) {
    flex-direction: row; /* Вирівнюємо текст та картинку горизонтально на планшетах та більших екранах */
  }
`;

export const DetailsPoster = styled.img`
  width: 220px; /* Фіксована ширина для картинки */
  height: 280px;
  object-fit: cover; /* Зберігаємо пропорції картинки без її обрізання */
  margin-right: 20px; /* Додаємо відступ між картинкою та текстом */

  @media (min-width: 768px) {
    width: auto; /* Зберігаємо розмір картинки для планшетів та більших екранів */
  }
`;

export const MovieDetailsText = styled.div`
  flex-grow: 1; /* Зберігаємо текст розтягнутим на залишок доступного простору */
  padding: 15px;

  h2 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 18px;
    margin-top: 10px;
  }

  p {
    font-size: 16px;
  }

  ul {
    list-style: none;
    padding-left: 0;
  }

  @media (min-width: 768px) {
    padding: 0; /* Знімаємо відступи для тексту на планшетах та більших екранах */
  }
`;

export const DetailsBtn = styled.button`
  margin-bottom: 20px;
  width: auto;
  height: 30px;

  background-color: transparent;
  border: 1px solid transparent;

  &:hover {
    color: white;
    cursor: pointer;
  }

  &:focus {
    outline: none;
    color: white;
  }
`;
