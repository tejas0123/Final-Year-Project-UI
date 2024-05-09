import styled from 'styled-components'

export const StyledHome = styled.div`
    .heading{
        margin-top : 15px;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        text-align: center;
        font-size: 33px;
        color: #00796b;
    }
    .formDiv{
        color: #009688;
        background-color: #b2dfdb;
        padding: 80px;
        width: 600px;
        margin-top: 10%;
        margin-left: 30%;
        border-radius: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        input{
            margin-left: 20px;
            background-color: #80cbc4;
            padding: 15px;
            border: none;
            border-radius: 25px;
            color: #fefefe;
            font-weight: 600;
        }

        label{
            font-size: 20px;
            font-weight: 600;
        }
        
        .submitButton{
            margin-top: 15px;
            padding: 15px;
            text-transform: uppercase;
            color: #fefefe;
            width: 100px;
        }
        
        .submitButton:hover{
            cursor: pointer;
            background-color:#26a69a;
            transition: 0.4s;
        }
    }
    .innerDiv{
        display: flex;
        align-items: center;
        justify-content: center;
    }
`