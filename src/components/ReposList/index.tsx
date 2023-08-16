import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeBranch, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { faHtml5, faVuejs, faJs, faCss3, faReact,  } from "@fortawesome/free-brands-svg-icons";
import styles from './ReposList.module.css'


interface ReposListProps {
    nomeUsuario: string;
}

const ReposList: React.FC<ReposListProps> = ({ nomeUsuario }) => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

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

    const getLanguageIcon = (language: string) => {
        switch (language) {
            case "HTML":
                return faHtml5;
            case "Vue":
                return faVuejs;
            case "JavaScript":
                return faJs;
            case "CSS":
                return faCss3;
            case "React":
                return faReact;
            default:
                return faQuestionCircle;
        }
    };

    return (
        <div className={styles.container}>
            {loading ? (
                <div className={styles.loadingContainer}>
                    <FontAwesomeIcon icon={faCodeBranch} spin size="2x" />
                    <p>Loading repositories...</p>
                </div>
            ) : error ? (
                <p className={styles.error}>ERROR: Usuário "{nomeUsuario}" não encontrado.</p>
            ) : (
                <>
                    <ul className={styles.list}>
                        {repos.map(({ id, name, language, html_url }) => (
                            <li className={styles.listItem} key={id}>
                                <div className={styles.itemName}>
                                    <b>Title:</b>
                                    {name}
                                </div>
                                <div className={styles.itemLanguage}>
                                    <b>Language:</b>{" "}
                                    {language ? (
                                        <>
                                            <FontAwesomeIcon icon={getLanguageIcon(language)} className={styles.languageIcon} />
                                            {language}
                                        </>
                                    ) : (
                                        "Not specified"
                                    )}
                                </div>
                                <a className={styles.itemLink} target="_blank" rel="noopener noreferrer" href={html_url}>
                                    <FontAwesomeIcon icon={faCodeBranch} /> Visit on GitHub
                                </a>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
}

export default ReposList;