import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import styles from './ReposList.module.css'

const ReposList = ({ nomeUsuario }) => {
    const [repos, setRepos] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        setLoading(true);
        setError(false);

        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
        .then(res => {
            if (!res.ok) {
                throw new Error('Error fetching repositories');
            }
            return res.json();
        })
        .then(resJson => {
            setTimeout(() => {
                setLoading(false);
                setRepos(resJson);
            }, 3000);
        })
        .catch(() => {
            setError(true);
            setLoading(false);
            setRepos([]);
        });
    }, [nomeUsuario]);

    return (
        <div className={styles.container}>
            {loading ? (
                <div className={styles.loadingContainer}>
                    <FontAwesomeIcon icon={faCodeBranch} spin size="3x" />
                    <p>Loading repositories...</p>
                </div>
            ) : error ? (
                <p className={styles.error}>ERROR: Usuário "{nomeUsuario}" não encontrado.</p>
            ) : (
                <>
                    {repos.length === 0 ? (
                        <p className={styles.error}>Error: No repositories found for the user "{nomeUsuario}".</p>
                    ) : (
                        <ul className={styles.list}>
                            {repos.map(({ id, name, language, html_url })=> (
                                <li className={styles.listItem} key={id}>
                                    <div className={styles.itemName}>
                                        <b>Title:</b>
                                        {name}
                                    </div>
                                    <div className={styles.itemLanguage}>
                                        <b>Language:</b>
                                        {language || 'Not specified'}
                                    </div>
                                    <a className={styles.itemLink} target="_blank" rel="noopener noreferrer" href={html_url}>
                                        <FontAwesomeIcon icon={faCodeBranch} /> Visit on GitHub
                                    </a>
                                </li>
                            ))}
                        </ul>
                    )}
                </>
            )}
        </div>
    )
}

export default ReposList;