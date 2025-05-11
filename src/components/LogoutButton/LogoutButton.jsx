import { useAuth } from '../../context/AuthContext';
import './LogoutButton.css';
import { useNavigate } from 'react-router-dom';

function LogoutButton() {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout();
        navigate('/login'); // Redireciona para a página de login após o logout
    };

    return (
        <button className="logout-button" onClick={handleLogout}>
            Logout
        </button>
    );
}

export default LogoutButton;