import React from 'react';
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line no-unused-vars
const NavCard = ({ title, description, Icon: IconComponent, color, path }) => {
    const navigate = useNavigate();

    return (
        <div className={`nav-card ${color}`} onClick={() => navigate(path)}>
            <div className="card-bg-glow"></div>
            <div className="icon-wrapper">
                <IconComponent size={48} strokeWidth={1} />
            </div>
            <div className="nav-content">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default NavCard;
