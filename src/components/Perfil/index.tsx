import styles from './Perfil.module.css'

interface PerfilProps {
    nomeUsuario: string;
}

const Perfil: React.FC<PerfilProps> = ({ nomeUsuario }) => {
    return (
        <header className={styles.header}>
            <img className={styles.avatar} src={`https://github.com/${nomeUsuario}.png`} alt={`${nomeUsuario}'s avatar`} />
            <h1 className={styles.name}>{nomeUsuario}</h1>
        </header>

        
    );
}

export default Perfil;