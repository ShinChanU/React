import React from 'react';
import classNames from 'classnames/bind';
import styles from './CSSModule.module.scss';

const cx = classNames.bind(styles);

const CSSModule = () => {
  console.log(styles);
  return (
    <div className={cx('wrapper', 'inverted')}>
      안녕하세요, 저는 <span className="something">CSS Module!</span>
    </div>
  );
};

// 템플릿 리터럴 문법 말고 표현
//className={[styles.wrapper, styles.inverted].join(‘ ‘)}
export default CSSModule;