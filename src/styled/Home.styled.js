import styled from 'styled-components'

export const StyledHome = styled.div`
    .heading{
        margin-top : 15px;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        text-align: center;
        font-size: 38px;
        color: #00796b;
    }
    .mainDiv{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 50px;
        
        .mainImageDiv{
            background-color: #b2dfdb;
            padding: 80px;
            width: 35%;
            margin-top: 10%;
            border-radius: 50px;
            .imageDiv{
                margin-top: 20px;
            }
        
            img{
                margin-top: 20px;
                width: 70%;
                border-radius: 50%;
            }
            .headingsDiv{
                color: #00796b;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 60px;
            }

            .imageInputDiv{
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            .result{
                margin-top: 20px;
                color: green;
                font-size: 25px;
                
                p{
                    margin-top: 10px;
                }
            }
        }
    }
    
    .formDiv{
        color: #009688;
        background-color: #b2dfdb;
        padding: 80px;
        width: 40%;
        margin-top: 10%;
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
            color: #00796b;
            font-weight: 600;
        }

        label{
            font-size: 20px;
            font-weight: 600;
        }
        
        .submitButton{
            padding: 15px;
            text-transform: uppercase;
            width: 100px;
        }
        
        .submitButton:hover{
            cursor: pointer;
            background-color:#26a69a;
            transition: 0.4s;
            color: white;
        }
    }
    
    .innerDiv{
        display: flex;
        align-items: center;
        justify-content: center;
    }

`