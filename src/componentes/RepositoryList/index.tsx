import { useState, useEffect } from 'react';
import { RepositoryItem, Repository } from "../RepositoryItem";

import './style.css';



export function RepositoryList() {

    const [repositories, setRepositories] = useState<Repository[]>([]);

    useEffect(() => {
        fetch('https://api.github.com/users/cicerogb/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))
    }, [])


    return (

        <section className="repository-list">
            <h1>Lista de Repositorios</h1>

            <ul>
                {repositories.map((repository: Repository) => (
                    <RepositoryItem key={repository.name} repository={repository} />
                ))}
            </ul>

        </section>
    )

}