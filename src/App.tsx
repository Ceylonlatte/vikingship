import React from 'react';
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";
import SubMenu from "./components/Menu/subMenu";
import { library } from '@fortawesome/fontawesome-svg-core'
import Icon from "./components/Icon/icon";
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

const App: React.FC = () => {
    return (
        <div className="App">
            <Icon icon="arrow-down" theme="primary" size="10x" />
            <header className="App-header">
                <Menu defaultIndex='0' onSelect={(index) => {alert(index)}}>
                    <MenuItem index='0'>
                        cool link
                    </MenuItem>
                    <MenuItem disabled index='1'>
                        cool link2
                    </MenuItem>
                    <SubMenu title="dropdown" index='2'>
                        <MenuItem index='2-0'>
                            dropdown 1
                        </MenuItem>
                        <MenuItem index='2-1'>
                            dropdown 2
                        </MenuItem>
                    </SubMenu>
                    <MenuItem index='3'>
                        cool link3
                    </MenuItem>
                </Menu>
            </header>
        </div>
    );
}

export default App;
