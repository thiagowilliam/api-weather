import React from 'react';
import { Link } from 'react-router-dom';

import * as S from './styles';
import logo from '../../assets/images/logo.svg';

export default function Header() {
  return (
    <S.Container>
      <Link to="/">
        <img src={logo} alt="Example logo" />
      </Link>

      <S.List>
        <S.ItemList>
          <Link to="example">Page Example</Link>
        </S.ItemList>
      </S.List>
    </S.Container>
  );
}
