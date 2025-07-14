import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState('');
    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length <= 1) return;
        setInputValue('');
        onNewCategory(inputValue.trim());
    }

    return (
        <>
            <form action="" onSubmit={onSubmit}>
                <input type="text" value={inputValue} placeholder='Buscar Gif' onChange={onInputChange} />
            </form>
        </>
    )
}
