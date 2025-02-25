import { useNavigate } from 'react-router-dom';

interface LogoutButtonProps {
    className: string;
}
const LogoutButton = ({ className }: LogoutButtonProps) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        sessionStorage.removeItem('user');
        localStorage.removeItem('user');
        navigate('/auth');
    }

    return (
        <button onClick={handleLogout} className={className}>
            Logout
        </button>
    );
}


export default LogoutButton;