import {useContext} from 'react';
import Switch from 'react-switch';
import {ThemeContext} from 'styled-components';
import {shade} from 'polished';

import {Container} from './styles';

type IHeaderProps = {
  toggleTheme: () => void;
}

export function Header ({toggleTheme}: IHeaderProps) {
  const {colors, title} = useContext(ThemeContext);

  return(
    <Container>
      <h2>Header</h2>

      <Switch 
        onChange={toggleTheme}
        checked={title === "dark"}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={shade(0.3, colors.primary)}
        onColor={colors.secundary}
      />
    </Container>
  );
}