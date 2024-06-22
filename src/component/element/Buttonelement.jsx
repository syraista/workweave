import React from 'react';
import Button from 'react-bootstrap/Button';

export default function Buttonelement({id, type, fw, br, width, height, content, arrow, fs, onClick, classname}) {
    return (
        <Button 
            onClick={onClick}
            type={type}
            id={id} 
            className={`buttonelement ${classname}`}
            variant="primary" 
            style={{ 
                backgroundColor: '#1F79E5', // Warna latar belakang tombol
                borderColor: '#1F79E5',     // Warna border tombol
                color: 'white',             // Warna teks tombol
                fontWeight: fw,
                borderRadius: br ? br : '4px',
                fontFamily: 'Roboto',
                fontSize: fs,
                width: width ? width : 'auto',
                height: height ? height : 'auto'
            }}>
            {content}
            {arrow && 
                <span style={{color:'white', marginLeft:'5px'}} className="material-symbols-outlined">
                    arrow_forward
                </span>
            }
        </Button>
    );
}
