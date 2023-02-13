import { Button } from 'shared/ui/Button/Button';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const BugButton = () => {
    const [error, setError] = useState(false);
    const { t } = useTranslation();
    const toggle = () => {
        setError((prev) => !prev);
    };

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <Button onClick={toggle}>
            {t('Вызвать тестовую ошибку')}
        </Button>
    );
};
