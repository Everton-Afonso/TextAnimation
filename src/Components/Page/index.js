import React from 'react'
import { Container } from './style';
import { TextAnimation } from '../TextAnimation/TextAnimation';
import { FaGrinHearts } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

const Index = () => {
    return (
        <IconContext.Provider value={{color: '#d90429'}}>
            <Container>
                <TextAnimation>Minha namorada e loca, mais eu amo dela assim <FaGrinHearts />.</TextAnimation>
            </Container>
        </IconContext.Provider>
    )
}

export default Index;
