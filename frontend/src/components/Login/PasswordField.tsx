import { ChangeEvent } from 'react';

interface Props {
  password: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const PasswordField = ({ password, onChange }: Props) => {
  return (
    <div className="form-group">
      <input
        id="inputPassword"
        type="password"
        className="form-control mt-4"
        placeholder="Password"
        name="password"
        value={password}
        onChange={onChange}
      />
    </div>
  );
};

export default PasswordField;