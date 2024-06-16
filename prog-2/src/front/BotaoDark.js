import React, { useState } from 'react';

const BotaoDark = () => {

const[theme, setTheme] = useState('dark');
    return (
    <button
        onClick={() => {
            setTheme((theme) => (theme === 'dark' ? 'light' : 'dark'));

            if(theme === 'dark') {
                document.body.style = 'background: #1f1f1f; color: white';
            } else {
                document.body.style = 'background: white; color: black';
            }
        }}
        title="imagem de lua" 
        style={{
            background: 'none',
            border: 'none',
            padding: 0,
            cursor: 'pointer',
        }} 
    >

    <img 
        src="https://cdn-icons-png.flaticon.com/512/6714/6714978.png"
        height="30" 
        style={{ filter: 'invert(1)' }}
    />
    </button>
  );
};
export default BotaoDark;