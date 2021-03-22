

export interface Repository {
    name: string;
    description: string;
    link: string;
}
interface RepositoryItemProps {
    repository: Repository;
}



const RepositoryItem: React.FC<RepositoryItemProps> = ({ repository }) => {

    return (


        <li>
            <strong>{repository.name ?? 'Default'} </strong>
            <p> {repository.description}</p>
            <a href={repository.link}>
                Acessar repository
        </a>
        </li>

    )



}

export default RepositoryItem;