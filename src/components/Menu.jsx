import { useNavigate, useLocation } from 'react-router-dom';
import homeButton from '/assets/img/Menu/Buttons/home-button.png';
import inviteButton from '/assets/img/Menu/Buttons/invite-button.png';
import tasksButton from '/assets/img/Menu/Buttons/tasks-button.png';
import leaderboardButton from '/assets/img/Menu/Buttons/leaderboard-button.png';
import homeButtonClicked from '/assets/img/Menu/ButtonsClicked/home-button.png';
import inviteButtonClicked from '/assets/img/Menu/ButtonsClicked/invite-button.png';
import tasksButtonClicked from '/assets/img/Menu/ButtonsClicked/tasks-button.png';
import leaderboardButtonClicked from '/assets/img/Menu/ButtonsClicked/leaderboard-button.png';

const Menu = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <div className="fixed bottom-5 flex justify-around items-center w-full z-20">
            <img
                src={location.pathname === '/' ? homeButtonClicked : homeButton}
                alt="Home"
                className="menu-button cursor-pointer"
                onClick={() => handleNavigation('/')}
            />
            <img
                src={location.pathname === '/invite' ? inviteButtonClicked : inviteButton}
                alt="Invite"
                className="menu-button cursor-pointer"
                onClick={() => handleNavigation('/invite')}
            />
            <img
                src={location.pathname === '/tasks' ? tasksButtonClicked : tasksButton}
                alt="Tasks"
                className="menu-button cursor-pointer"
                onClick={() => handleNavigation('/tasks')}
            />
            <img
                src={location.pathname === '/leaderboard' ? leaderboardButtonClicked : leaderboardButton}
                alt="Leaderboard"
                className="menu-button cursor-pointer"
                onClick={() => handleNavigation('/leaderboard')}
            />
        </div>
    );
};

export default Menu;
