import './Sidebar.css';

const SideBar = () => {
    return (
        <aside className="sidebar">
            <div className="menu_aside">
                <div className="dropdown_icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" baseProfile="tiny" version="1.2" viewBox="0 0 24 24" id="th"><path d="M19 17H5c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2zm0-7H5c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2zm0-7H5c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2z"></path></svg>                </div>
                <div className="onglet">

                </div>
            </div>
        </aside>
    )
}

export default SideBar;