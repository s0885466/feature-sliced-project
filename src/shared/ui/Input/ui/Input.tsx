import { classNames } from 'shared/lib/classNames/classNames';

import {
    ChangeEventHandler, FocusEventHandler, InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps{
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  autofocus?: boolean;
}

export const Input = memo((props: InputProps) => {
    const {
        className, value, onChange, type = 'text', placeholder, autofocus, ...otherProps
    } = props;

    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (autofocus) {
            inputRef?.current?.focus();
        }
    }, [autofocus]);

    const onChangeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
        onChange?.(e.target.value);
    };

    const onFocus: FocusEventHandler<HTMLInputElement> = (e) => {
        setIsFocused(true);
        setCaretPosition(e.target.value.length);
    };

    const onBlur: FocusEventHandler<HTMLInputElement> = () => {
        setIsFocused(false);
    };

    const onSelect = (e: any) => {
        setCaretPosition(e?.target?.selectionStart || 0);
    };

    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            {placeholder && (
                <div className={cls.placeholder}>
                    {`${placeholder} >`}
                </div>
            )}
            <div className={classNames('', { [cls.caretWrapper]: isFocused })}>
                <input
                    ref={inputRef}
                    value={value}
                    type={type}
                    onChange={onChangeHandler}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSelect={onSelect}
                    className={cls.input}
                    {...otherProps}
                />
                {isFocused && (
                    <span
                        className={cls.caret}
                        style={{ left: `${caretPosition * 9.60}px` }}
                    />
                )}
            </div>

        </div>
    );
});
