import React from 'react';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles)

const AccountItem = () => {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/2db04776fcdd6e1e5b527fda8a0a1c29~c5_300x300.webp?lk3s=a5d48078&x-expires=1711522800&x-signature=mF0X6D5vXNLFbDzC10q3Q77zWrU%3D" alt="Hoa" />
            <div className={cx('infor')}>
                <h4 className={cx('name')}>
                 <span>Nguyễn Văn A</span>
                 <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} ></FontAwesomeIcon> 
                </h4>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
    );
};

export default AccountItem;