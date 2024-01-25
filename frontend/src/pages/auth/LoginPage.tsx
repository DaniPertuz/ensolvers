import { useContext, useEffect } from 'react';
import { AuthContext } from '../../context/auth';
import { useForm } from '../../hooks';
import EmailField from '../../components/Login/EmailField';
import './styles.css';
import PasswordField from '../../components/Login/PasswordField';

export const LoginPage = () => {
  const { errorMessage, removeError, login } = useContext(AuthContext);

  const { email, password, onChange } = useForm({
    email: '',
    password: ''
  });

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    login({ email, password });
  };

  useEffect(() => {
    if (errorMessage.length === 0) return;

    alert(errorMessage);
    removeError();
  }, [errorMessage]);

  return (
    <div className="container-fluid app-background">
      <div className="row">
        <div className="container text-center col-xs-12 col-sm-12 col-md-9 col-lg-4 mt-5">
          <form className="container border border-primary rounded w-75" onSubmit={onSubmit}>
            <h3 className="text-center mt-4">NotesApp</h3>
            <div className="px-5">
              <EmailField email={email} onChange={onChange} />
              <PasswordField password={password} onChange={onChange} />
              <div className="form-group text-center">
                <button type="submit" className="btn btn-primary bg-gradient rounded-pill my-4 px-5">
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};