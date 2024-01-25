import { ChangeEvent } from 'react';

interface Props {
  email: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const EmailField = ({ email, onChange }: Props) => {
  return (
    <div className="form-group">
      <input
        id="inputUsername"
        type="email"
        className="form-control mt-4"
        placeholder="Email"
        name="email"
        value={email}
        onChange={onChange}
      />
    </div>
  );
};

export default EmailField;