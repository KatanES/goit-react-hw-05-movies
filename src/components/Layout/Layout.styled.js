import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const Container = styled.div`
  max-width: 960px;

  margin: 0 auto 30px; /* Додайте відступ знизу і центруйте контейнер по горизонталі */
  padding: 30px 15px; /* Зменшили відступи зліва і праворуч, щоб зміст поміщався */

  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0px 2px 15px 2px rgba(120, 120, 120, 1);
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(5px);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  max-height: calc(100vh - 64px); /* Обмеження висоти контейнера */
  margin-top: 64px; /* Відступ зверху для хедера */
  position: relative; /* Додано позицію relative */
`;

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(5px);
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 30px;
  border-bottom: 1px solid black;

  > nav {
    display: flex;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: rgba(0, 0, 255, 0.5);
  }
`;
