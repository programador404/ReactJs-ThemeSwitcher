import styled from 'styled-components';

export const Container = styled.header`
  height: 4rem;
  background: ${props => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
`;