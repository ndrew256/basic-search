import { useHistory } from 'react-router-dom';
import styled from 'styled-components'
import Button from '../Styled/Button';
import Input from '../Styled/Input';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
    const history = useHistory();
    const onSubmit = e => {
        history.push(`?s=${searchQuery}`)
        e.preventDefault()
    };

    return <form action="/" method="get" autoComplete="off" onSubmit={onSubmit}>
         <label htmlFor="header-search">
            <span className="visually-hidden">Search blog posts</span>
        </label>
        <Input
            value={searchQuery}
            onInput={e => setSearchQuery(e.target.value)}
            type="text"
            id="header-search"
            placeholder="Search names"
            name="s"
        />
        <Button type="submit" primary>Search</Button>
    </form>
}
export default SearchBar;