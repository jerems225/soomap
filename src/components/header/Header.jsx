import SearchBar from '../searchzone/SearchBar';
import Tab from '../searchzone/tab/Tab';
import './Header.css';

const Header = () => {
    return (
            <header className="header">
                <SearchBar />
                <Tab />
            </header>);
}

export default Header;