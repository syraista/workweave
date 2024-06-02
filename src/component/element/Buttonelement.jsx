import React from 'react';
import Button from 'react-bootstrap/Button';

export default function Buttonelement({id,fw,br,width,height,content,arrow,fs}) {
    return (
        <Button 
            id={id} 
            className="buttonelement" 
            variant="primary" 
            style={{ 
                fontWeight: fw,
                borderRadius: br ? br : '4px',
                fontFamily: 'Roboto',
                fontSize: fs,
                width: width ? width : 'auto',
                height: height ? height : 'auto',
                backgroundColor: '#1F79E5',
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


//usage example <Buttonelement fw={400} br={"10px"} arrow={"True"} content={"Selengkapnya"}/>
