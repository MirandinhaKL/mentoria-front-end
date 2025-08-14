"use client";

import React, { ChangeEvent, useState } from "react";

export default function Module4() {

    //#region styles
    const buttonStyle = {
        marginTop: "20px",
        display: "flex",
        justifyContent: "left",
        alignItems: "center",
        backgroundColor: "orange",
    };

    const h1Style = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "x-large",
        marginTop: "50px",
        marginBottom: "50px"
    };

    const h2Style = {
        marginTop: "20px",
        fontSize: "x-large"
    }

    const inputStyle = {
        border: "1px solid #ccc"
    }

    const formStyle = {
        marginTop: "20px",
        backgroundColor: "grey"
    }

    //#endregion

    const [nameInput, setNameInput] = useState<string>("");
    const [buttonText, setButtonText] = useState<string>("Bem-vindo!");
    const [counterValue, setCounterValue] = useState<number>(0);
    const [nameFormValue, setNameFormValue] = useState<string>("");
    const [emailFormValue, setEmailFormValue] = useState<string>("");
    const [nameAlertFormValue, setNameAlertFormValue] = useState<string>("");
    const [countCharactersValue, setCountCharactersValue] = useState<string>("");
    const [buttonLabelValue, setButtonLabelValue] = useState<string>("");
    const [buttonColor, setButtoColor] = useState<string>("orange");

    const buttonsLabel: string[] = ["A", "B", "C"];

    const onChangeNameInputValue = (event: ChangeEvent<HTMLInputElement>) => {
        setNameInput(event.target.value);
    }

    const welcomeClick = () => {
        setButtonText("Você clicou!");
    }

    const counterClick = () => {
        var counter: number = counterValue;
        setCounterValue(++counter);
    }

    const onChangeNameFormValue = (event: ChangeEvent<HTMLInputElement>) => {
        setNameFormValue(event.target.value);
    }

    const onChangeEmailFormValue = (event: ChangeEvent<HTMLInputElement>) => {
        setEmailFormValue(event.target.value);
    }

    const onChangeNameAlertFormValue = (event: ChangeEvent<HTMLInputElement>) => {
        setNameAlertFormValue(event.target.value);
    }

    const nameAlertClick = () => {
        const nameAlert: string = nameAlertFormValue;
        alert("Nome enviado: " + nameAlert);
        setNameAlertFormValue("");
    }

    const onChangeCountCharacters = (event: ChangeEvent<HTMLInputElement>) => {
        setCountCharactersValue(event.target.value);
    }

    const handleClickButton = (label: string) => {
        setButtonLabelValue(label);
        if(label === "A")
            setButtoColor("green");
        else if(label === "B")
            setButtoColor("blue");
        else if(label === "C")
            setButtoColor( "red");  
        }

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "left", border: "botton" }}>
            <h1 style={h1Style}>Tópico 4 - Manipulação de Formulários e Eventos</h1>

            <h2 style={h2Style}>✅ Exercício 1 – Input de texto controlado</h2>
            <p>**Objetivo:** Trabalhar useState + onChange</p>
            <p>Crie um input de texto que atualiza um estado chamado nome</p>
            <br></br>
            <label>Digite seu nome: </label>
            <input
                style={inputStyle}
                type="text"
                value={nameInput}
                onChange={(event) => onChangeNameInputValue(event)}
            />
            <div style={{ marginTop: "20px", marginBottom: "20px", backgroundColor: "grey" }}>{nameInput.length > 0 &&
                (<p>Olá, {nameInput}</p>)}
            </div>

            <h2 style={h2Style}>✅ Exercício 2 – Clique no botão para alterar texto</h2>
            <p>Objetivo: onClick simples</p>
            <p>Crie um botão que ao ser clicado muda o texto de “Bem-vindo!” para “Você clicou!”.</p>
            <button
                style={buttonStyle}
                onClick={welcomeClick}>{buttonText}
            </button>

            <h2 style={h2Style}>✅ Exercício 3 – Contador com botão de incremento</h2>
            <p>Objetivo: onClick + useState</p>
            <p>Crie um botão que incremente um contador.</p>
            <p>Contador: {counterValue}</p>
            <button
                style={buttonStyle}
                onClick={counterClick}>
                Incremente!
            </button>

            <h2 style={h2Style}>✅ Exercício 4 – Formulário com nome e e-mail</h2>
            <p>Objetivo: Inputs controlados</p>
            <p>Crie um formulário com dois campos: nome e email.</p>
            <p>Ao preencher, os dados devem ser mostrados abaixo em tempo real:</p>
            <div>{nameFormValue.length > 0 &&
                (<span>** Nome: {nameFormValue} **</span>)}
            </div>
            <div>{emailFormValue.length > 0 &&
                (<span>** E-mail: {emailFormValue} **</span>)}
            </div>
            <form style={formStyle}>
                <div>
                    <label>Nome: </label>
                    <input
                        type="text"
                        style={{ border: "solid" }}
                        value={nameFormValue}
                        onChange={(event) => onChangeNameFormValue(event)}
                    />
                </div>
                <div style={{ marginTop: "20px" }}>
                    <label>E-mail: </label>
                    <input
                        type="email"
                        style={{ border: "solid" }}
                        value={emailFormValue}
                        onChange={(event) => onChangeEmailFormValue(event)}
                    />
                </div>
            </form>
            <h2 style={h2Style}>✅ Exercício 5 – Enviar formulário e mostrar alerta</h2>
            <p>Objetivo: onSubmit + prevenção do comportamento padrão</p>
            <p>Crie um formulário com um campo de nome e botão “Enviar”.</p>
            <p>Ao enviar, mostre um alert(Nome enviado: Ana) e limpe o input.</p>
            <form style={formStyle} onSubmit={(event) => event.preventDefault()}>
                <div>
                    <label>Nome: </label>
                    <input
                        type="text"
                        style={{ border: "solid" }}
                        value={nameAlertFormValue}
                        onChange={(event) => onChangeNameAlertFormValue(event)}
                    />
                </div>
            </form>
            <button
                style={buttonStyle}
                onClick={nameAlertClick}>
                Enviar
            </button>
            <h2 style={h2Style}>✅ Exercício 6 – Mostrar número de caracteres digitados</h2>
            <p>Objetivo: onChange</p>
            <p>Crie um input de texto e, abaixo dele, mostre o número de carácteres.</p>
            <label>Contador de caracteres:</label>
            <input
                type="text"
                style={{ border: "solid", marginTop: "10px" }}
                value={countCharactersValue}
                onChange={(event) => onChangeCountCharacters(event)}
            />
            <div>{countCharactersValue.length > 0 &&
                <p style={{ marginBottom: "20px", marginTop: "20px" }}> Caracteres digitados: {countCharactersValue.length}</p>}
            </div>
            <h2 style={h2Style}>✅ Exercício 7 – Marcar item como selecionado com botão</h2>
            <p>Objetivo: Eventos + estado booleano</p>
            <p>Crie 3 botões: “A”, “B” e “C”.</p>
            <p> Ao clicar em um deles, ele muda de cor (ex: fundo verde) e exibe o botão selecionado:</p>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "left", border: "botton"}}>
                {buttonsLabel.map((label) => (
                    <button
                        key={label}
                        onClick={() => handleClickButton(label)}
                        style={{ ...buttonStyle, backgroundColor: buttonLabelValue === label ? buttonColor : "orange"}}
                    >
                        {label}
                    </button>
                ))}
            </div>
            <div>{buttonLabelValue.length > 0 &&
                <p>Você clicou em: {buttonLabelValue}</p>
            }
            </div>
        </div>
    )
}