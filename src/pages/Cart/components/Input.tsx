import React, { forwardRef, useState } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholderRight?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ placeholderRight, ...rest }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const [rightPlaceholder, setRightPlaceholder] = useState(placeholderRight || '');

    const handleInputFocus = (event: React.FocusEvent<HTMLInputElement>) => {
        setIsFocused(true);
        event.currentTarget.placeholder = '';
        setRightPlaceholder('');
    };

    const handleInputBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        setIsFocused(false);
        event.currentTarget.placeholder = rest.placeholder || '';
        setRightPlaceholder(placeholderRight || '');
    };
    
    return (
        <label htmlFor="complement">
        
        
        <div className='relative justify-center overflow-hidden'>
            <input
                type="text"
                ref={ref}
                {...rest}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                id='complement'
            />

            {rightPlaceholder && !isFocused && (
                <div className='absolute right-0 p-3 text-sm text-base-label' >
                    {rightPlaceholder}
                </div>
            )}
        </div>
    </label>
    );

});

export default Input;