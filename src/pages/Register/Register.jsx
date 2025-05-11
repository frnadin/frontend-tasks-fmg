import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);

        try {
            const response = await axios.post('http://localhost:3131/register', {
                name,
                email,
                password
            });

            if (response.status === 201 || response.status === 200) {
                setSuccess('Usuário cadastrado com sucesso!');
                setTimeout(() => navigate('/login'), 2000);
            }
        } catch (err) {
            setError(err.response?.data?.mensagem || 'Erro ao cadastrar usuário.');
        }
    }

    return (
        <div className="register-page">
            <div className="register-box">
                <h2>Register your account</h2>
                <div className="form-group">

                <form onSubmit={handleRegister}>
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit">Register</button>
                    <div className="space-erro">
                        {error && <p className="register-error">{error}</p>}
                        {success && <p className="register-success">{success}</p>}
                        {!error && !success && <p className="error">&nbsp;</p>}
                    </div>

                </form>
                </div>
            </div>
        </div>
    );
};
export default Register;