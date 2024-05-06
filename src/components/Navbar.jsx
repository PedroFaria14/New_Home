import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import style from './NavBar.module.css';
import { useAuthentication } from '../hooks/useAuthentication';
import { useAuthValue } from '../context/AuthContext';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const { user } = useAuthValue();
  const { logout } = useAuthentication();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className={style.navbar}>
      <NavLink to="/" className={style.brand}>
        New <span> Home</span>
      </NavLink>
      <FaBars className={style.hamburger} onClick={() => setShowMenu(!showMenu)} />
      <ul className={`${style.links_list} ${showMenu ? style.show : ''}`}>
        <li>
          <NavLink to="/" className={style.link}>
            Home
          </NavLink>
        </li>
        {!user && (
          <>
            <li>
              <NavLink to="/login" className={style.link}>
                Logar
              </NavLink>
            </li>
            <li>
              <NavLink to="/register" className={style.link}>
                Registrar
              </NavLink>
            </li>
          </>
        )}
        {user && (
          <>
            <li>
              <NavLink to="/posts/create" className={style.link}>
                Adicionar 
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard" className={style.link}>
                Editar
              </NavLink>
            </li>
          </>
        )}
        <li>
          <NavLink to="/about" className={style.link}>
            Sobre
          </NavLink>
        </li>
        {user && (
          <li>
            <button onClick={logout} className={style.logoutButton}>
              Sair
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
