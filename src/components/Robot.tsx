import React from "react";
import logo from "../assets/images/logo.svg";
import styles from "./Robot.module.css";

interface RobotProps {
    id: number;
    name: string;
    email: string;
}

const Robot: React.FC<RobotProps> = ({ id, name, email }) => {
    return (
        <div className={styles.cardContainer}>
            <img src={`https://robohash.org/${id}`} alt="" />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
};

export default Robot;
