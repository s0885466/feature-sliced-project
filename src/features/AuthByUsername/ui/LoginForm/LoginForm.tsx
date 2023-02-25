import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/ui/Input';
import cls from './LoginForm.module.scss';

type LoginFormProps = {
  className?: string;
}

export const LoginForm = (props: LoginFormProps) => {
    const { className } = props;
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input
                className={cls.input}
                type="text"
                placeholder={t('Введите username')}
                autofocus
            />
            <Input
                className={cls.input}
                type="password"
                placeholder={t('Введите password')}
            />
            <Button className={cls.loginBtn}>{t('Войти')}</Button>
        </div>
    );
};
