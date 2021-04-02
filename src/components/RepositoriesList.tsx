import { useState } from 'react';
import { useActions } from '../hooks/useActions';

const RepositoriesList: React.FC = () => {
    const [term, setTerm] = useState('');
    const { searchRepositories } = useActions();
    const onSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault()
        searchRepositories(term)
    }
    return <div>
        <form onSubmit={onSubmit}>
            <input value={term} onChange={(ev) => setTerm(ev.target.value)} />
            <button>Button</button>
        </form>
    </div>
}

export default RepositoriesList