import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import styles from './Perfil.module.css'

interface PerfilProps {
    nomeUsuario: string;
}

const Perfil: React.FC<PerfilProps> = ({ nomeUsuario }) => {
    const [avatarErro, setAvatarErro] = useState(false);
    const [carregadoComSucesso, setCarregadoComSucesso] = useState(false);

    useEffect(() => {
        setAvatarErro(false);
        setCarregadoComSucesso(false);

        const img = new Image();
        img.src = `https://github.com/${nomeUsuario}.png`;

        img.onload = () => {
            setTimeout(() => {
                setCarregadoComSucesso(true);
            }, 3000);
        };

        img.onerror = () => {
            setAvatarErro(true);
        };
    }, [nomeUsuario]);

    return (
        <header className={styles.header}>
            {avatarErro ? (
                <a className={styles.signupButton} href={`https://github.com/signup`} target="_blank" rel="noopener noreferrer">GitHub sign up</a>
            ) : (
                <>
                    {carregadoComSucesso ? (
                        <>
                            <img
                                className={styles.avatar}
                                src={`https://github.com/${nomeUsuario}.png`}
                                alt={`${nomeUsuario}'s avatar`}
                            />
                            <h1 className={styles.name}>{nomeUsuario}</h1>
                        </>
                    ) : (
                        <div className={styles.loading}>
                            <FontAwesomeIcon icon={faSpinner} spin size="2x" />
                        </div>
                    )}
                </>
            )}
        </header>
    );
}

export default Perfil;