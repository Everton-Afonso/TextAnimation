import styled from 'styled-components';

export const TextAnimation = styled.p`
    color: #fff;
    font-size: 25px;
    border-right: 2px solid #fff;
    white-space: nowrap;
    overflow: hidden;

    animation: blinkCursor 700ms steps(40) infinite normal, 
        typing 3s steps(40) 1s normal both;

    @media screen and (max-width: 780px){
        font-size: 20px;
    }
    
    @keyframes typing {
        from {
            width: 0;
        } to{
            width: 24em;
        }
    }

    @keyframes blinkCursor{
        from {    
            border-right-color: 2px solid #fff; 
        } to{
            border-right-color: transparent;
        }
    }
`;