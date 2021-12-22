import React from 'react'
import { Button, Menu, Popover } from 'antd';
import './_headerMenuTheme.scss';
import { useTranslation } from 'react-i18next';

const colors = ['red', 'green', 'blue', 'yellow']

const handleChangeTheme = (e) => {
    const color = e.target.dataset.theme;
    document.documentElement.style.setProperty('--primary-color',color);
    localStorage.setItem('--primary-color',JSON.stringify(color));
}

const menuTheme = (
    <Menu
        className="menu__color"
    >
        {colors.map(color => (
            <button 
                data-theme={color}
                className="color"
                style={{backgroundColor: color, margin: '10px', display: 'inline-block'}}
                onClick={handleChangeTheme} 
            >
            </button>
        ))}
    </Menu>
)

const HeaderMenuTheme = () => {

    const { t } = useTranslation()
    
    return (
        <div className="changeTheme">
            <Popover placement="leftTop" content={menuTheme} trigger="click">
                <Button
                    className="btn-changeTheme"
                >
                    <div className="action__icon color" style={{backgroundColor: 'var(--primary-color)'}}></div>
                    <span className="action__dropdown">{t('header.changeTheme')}</span>
                </Button>
            </Popover>
        </div>
    )
}

export default HeaderMenuTheme
