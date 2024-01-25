import { useContext } from 'react';
import { AuthContext } from '../../context/auth';
import { ModalProps } from '../../interfaces/app-interfaces';
import '../Navbar/styles.css';

const Navbar = ({ setOpen }: ModalProps) => {
  const { logOut } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="nav-wrapper container">
        <span className="logo">Notes</span>
        <div className="nav-options">
          <div className="nav-icon" onClick={() => setOpen(true)}>
            <i className="fa-solid fa-plus" />
          </div>
          <div className="nav-icon" onClick={logOut}>
            <i className="fa-solid fa-right-from-bracket"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;