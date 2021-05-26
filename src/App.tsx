import React, { useState, useEffect } from "react";
import logo from "./assets/images/logo.svg";
import robots from "./mockdata/robots.json";
import styles from "./App.module.css";
import Robot from "./components/Robot";
import ShoppingCart from "./components/ShoppingCart";

interface Props {}
interface State {
    count: number;
    // robotGallery: any[];
}

const App: React.FC = (props) => {
    const [count, setCount] = useState(0);
    const [robotGallery, setRobotGallery] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>();

    useEffect(() => {
        setLoading(true);
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then(
                (res) => {
                    setRobotGallery(res);
                    setLoading(false);
                },
                (rej) => {
                    setLoading(false);
                    setError(rej["message"]);
                }
            );
    }, []);

    return (
        <div className={styles.app}>
            <div className={styles.appHeader}>
                <img src={logo} className={styles.appLogo} alt="" />
                <h1>罗伯特机器人online购物平台</h1>
            </div>
            <button
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                Click
            </button>
            <span>count: {count}</span>
            <ShoppingCart />
            {error && <div>{error}</div>}
            {!loading ? (
                <div className={styles.robotList}>
                    {robotGallery.map((r) => (
                        <Robot id={r.id} name={r.name} email={r.email} />
                    ))}
                </div>
            ) : (
                <h2>loading...</h2>
            )}
        </div>
    );
};

export default App;
