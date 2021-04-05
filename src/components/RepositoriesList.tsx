import { useState } from 'react';
import { useSelector } from '../hooks/useTypedSelectors';
import { useActions } from '../hooks/useActions';

const RepositoriesList: React.FC = () => {
    const [term, setTerm] = useState('');
    const { searchRepositories } = useActions();
    const { data, error, loading } = useSelector((state) => state.repositories);

    const onSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault()
        searchRepositories(term)
    }
    return <div>
        <form onSubmit={onSubmit}>
            <input value={term} onChange={(ev) => setTerm(ev.target.value)} />
            <button>Button</button>
        </form>
        {error && <h3>{error}</h3>}
        {loading && <h3>Loading...</h3>}
        {!error && !loading &&
            data.map(name => <div className='results' key={name}>{name}</div>)
        }
    </div>
}

export default RepositoriesList