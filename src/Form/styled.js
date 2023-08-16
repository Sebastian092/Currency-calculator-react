import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

export const Legend = styled.legend`
    text-align: center;
    font-size: 2rem;
    padding: 10px 30px 20px;
`

export const Label = styled.label`
    display: flex;
    gap: 62px;

    @media (max-width: 410px) {
    gap: 12px;
    }
`

export const Select = styled.select`
    min-width: 298px;
    text-align: center;
    padding: 5px;
    border-radius: 5px;

    @media (max-width: 767px) {
    min-width: 175px;
    }

    @media (max-width: 410px) {
        width: 100px;
    }
`

export const Input = styled.input`
    min-width: 298px;
    text-align: center;
    padding: 5px;
    border-radius: 5px;
`

export const Fieldset = styled.fieldset`
    border: none;
`

export const Span = styled.span`
    text-align: center;
`

export const Pharagraph = styled.p`
    text-align: center;
    font-family: monospace;
`

export const Button = styled.button`
    border: none;
    border-radius: 5px;
    text-align: center;
    width: 100%;
    margin: 20px 5px 0px 0px;
    padding: 10px 10px 10px 10px;
    background: black;
    color: white;
`

export const InputLabel = styled.label`
    display: flex;
    gap: 70px;

    @media (max-width: 410px) {
    gap: 20px;
    }
`

export const FormBody = styled.form`
    background: rgb(234, 236, 235);
    border-radius: 25px;
    box-shadow: 1px -1px 7px 2px #BDBBBF;
    padding: 20px 20px 20px 20px;
    margin: 20px;
    min-width: 600px;
    min-height: 420px;

    @media (max-width:767px) {
        min-width: 200px;
        min-height: 420px;
    }

    @media (max-width:446px) {
        min-width: 200px;
        min-height: 430px;
        padding: 0;
    }
`

export const Loading = styled.p`
    text-align: center;
    font-size: 1.5rem;
    padding: 30px;
`

export const Error = styled.p`
  text-align: center;
    font-size: 1.5rem;
    padding: 30px;
`