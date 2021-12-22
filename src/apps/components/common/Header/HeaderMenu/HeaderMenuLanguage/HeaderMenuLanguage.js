import React from 'react'
import { Button, Dropdown, Menu, Popover ,Select} from 'antd';
import './_headerMenuLanguage.scss';
import i18n from '../../../Translation/i18n'
import { useTranslation } from 'react-i18next';

function changeLanguage(e) {
    i18n.changeLanguage(e.target.value);
}

// const iconsOptions = [
//     {label: "en", icon: <img src="../../../../../common/assets/icons/multi-language/gbr.png" /> },
//     { label: "vi", icon: <img src="../../../../../common/assets/icons/multi-language/vgb.png" /> }
// ];

const menuLanguage = (
    <select onChange={changeLanguage} className="menu__language-select">

        <option value="vi">
            Vietnamese
        </option>

        <option value="en">
            English
        </option>
    </select>
)

const HeaderMenuLanguage = () => {

    const { t } = useTranslation()

    return (
        <div className="changeLanguage">
            <Popover placement="leftTop" content={menuLanguage} trigger="click">
                <Button
                    className="btn-changeLanguage"
                >
                    <span className={`flag-icon flag-icon-${menuLanguage} mx-2`}></span>
                    {/* <span className="action__icon">Vi</span> */}
                    {/* <Select
                        options={iconsOptions}
                        className="action__icon"
                    /> */}
                    <span className="action__dropdown">{t('header.changeLanguage')}</span>
                </Button>
            </Popover>
        </div>
    )
}

export default HeaderMenuLanguage