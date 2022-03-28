import styled from 'styled-components';

export const selected = '#4188F2';

export const Article = styled.article`
  transform: scale(0.5);
  opacity: 0%;
  display: flex;
  flex-direction: column;
  padding: 1em;
  border: 1px solid #000;
  border-radius: 1em;
  background-color: #fff;
`;

export const Section = styled.section`
  margin-top: .5em;
`;

export const TitleSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.h2`
  margin-bottom: 1em;
  text-decoration: underline;
  text-decoration-color: ${selected};
`;

export const CloseIcon = styled.i`
  cursor: pointer;
  font-size: 2em;
  transition-duration: .25s;

  :hover {
    color: ${selected};
  }
`;

export const SectionTitle = styled.h3`
  text-align: center;
  font-weight: normal;
`;

export const Options = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: fit-content;
  margin: auto;
  list-style-type: none;
  justify-content: space-evenly;
`;

export const Option = styled.li`
  margin: .5em;
`;

export const OptionButton = styled.button`
  padding: .5em;
  font-size: 1em;
  border: none;
  border-radius: .5em;
  transition-duration: 0.10s;

  :hover {
    color: #fff;
    background-color: ${selected};
    cursor: pointer;
  }
`;