import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

import { memo } from 'react';
import cls from './ArticlesPage.module.scss';

type ArticlesPageProps = {
  className?: string;
}

const ArticlesPage = (props: ArticlesPageProps) => {
    const { className } = props;
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.ArticlesPage, {}, [className])} />
    );
};

export default memo(ArticlesPage);
