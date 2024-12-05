import styles from "./Header.module.scss"

const Header = () => {
    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.content}>
                    Hedare
                </div>
            </div>
        </header>
    );
};

export default Header;