import React from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.scss';
import images from '~/asset/images';
const cx = classNames.bind(styles);

const Header = () => {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                   <img src={images.logo} alt="tiktok" />
                </div>
                <div className={cx('search')}>
                    <input spellCheck={false} type="text" placeholder='Search account and video' />
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                    <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faSearch} ></FontAwesomeIcon>
                    </button>
                </div>
                <div className={cx('action')}>
                    
                </div>
            </div>
        </header>
    );
};

export default Header;
