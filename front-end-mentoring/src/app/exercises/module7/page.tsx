"use client";

import React, { ChangeEvent, useCallback, useEffect, useState } from "react";


export default function Module7() {

    //#region states

    const [valueA, setValueA] = useState<number | null>(null);
    const [valueB, setValueB] = useState<number | null>(null);
    const [numberTestValue, setNumberTestValue] = useState<number | null>(null);
    const [nameValue, setNameValue] = useState<string | null>(null);
    const [agesValue, setAgesValue] = useState<string | null>(null);
    const [temperatueValue, setTemperatureValue] = useState<number | null>(null);
    const [namesValues, setNamesValues] = useState<string | null>(null);
    const [listNamesValues, setListNamesValues] = useState<string[] | null>(null);
    const [listPricesValue, setListPricesValue] = useState<string | null>(null);
    const [totalPrice, setTotalPrice] = useState<string | null>(null);
    const { valorHookPersonalizado, incrementar } = useContador();

    //#endregion

    //#region handlers

    const onChangeValueAHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setValueA(Number(event.target.value));
    }

    const onChangeValueBHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setValueB(Number(event.target.value));
    }

    const onChangeNumberTestValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setNumberTestValue(Number(event.target.value));
    }

    const onChangeNameValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setNameValue(event.target.value);
    }

    const handleTemperatureChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTemperatureValue(Number(event.target.value));
    }

    const onChangeNameListValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setNamesValues(event.target.value);
    }

    const onChangeListPriceHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setListPricesValue(event.target.value);
    }

    //#endregion

    function onClickSum(a: number, b: number): number {
        let result = a + b;
        alert("A soma é " + result);
        return result;
    }

    function isNumberEven(value: number): boolean {
        let result = value % 2 == 0;
        alert(result ? "O número é par." : "O número é ímpar.");
        return value % 2 == 0;
    }

    function greetFunction(name: string): string {
        if (!name)
            return "Informe o nome a ser saudado!";
        return `Olá, ${name}!`;
    }

    function showAdults() {
        const ages = agesValue?.split(',').map(age =>
            Number(age.trim()));

        const adults = ages?.filter(age => age >= 18) ?? "";

        if (!adults)
            alert("Nenhum adulto informado.");
        else
            alert("Maiores de idade: " + adults.join(', '));
    }

    function mostrarMensagem() {
        alert("Você clicou!");
    }

    function executeFunction() {
        console.log("Primeira execução");
        executeCallBack();
    }

    function executeCallBack() {
        console.log("Callback solicitado");
        callback();
    }

    function callback() {
        console.log("Callback executado");
    }

    function parseFahrenheit() {
        if (temperatueValue == null)
            return "";
        let temperature = (temperatueValue * (9 / 5) + 32)
        return "A temperatura em Fahrenheit é: " + temperature;
    }

    function listNames() {
        if (!namesValues) {
            alert("Nenhum nome informado");
            return "";
        } else {
            const namesArray = namesValues.split(';').map(name => name.trim());
            setListNamesValues(namesArray);
        }
    }

    function calculatePrice() {
        setTotalPrice("");
        if (listPricesValue == null || listPricesValue.length == 0)
            return "";
        else {
            const values = listPricesValue.split(';').map(product => Number(product));
            const total = values.reduce((acc, curr) => acc + curr, 0);
            setTotalPrice(total.toFixed(2));
        }
    }

    function useContador() {
        const [valorHookPersonalizado, setValorHook] = useState(0);

        const incrementar = () => {
            setValorHook(valorHookPersonalizado + 1);
        };

        return { valorHookPersonalizado, incrementar };
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "left", border: "bottom" }}>
            <h1 className="h1Style h1StylePink">Tópico 7 – Funções (if, else, switch)</h1>
            <div className="divStyle" >
                <h2 className="h2Style">✅ Exercício 1 – Criar uma função que soma dois números</h2>
                <h3><b>Objetivo: Declarar função, passar parâmetros e retornar valor</b></h3>
                <p>A função deve retornar a soma de a + b. Chame a função e exiba o resultado no console.</p>
                <label>Valor A: </label>
                <input
                    typeof="number"
                    className="inputStyle"
                    value={valueA ?? ""}
                    onChange={(event) => onChangeValueAHandler(event)}
                />
                <label>Valor B: </label>
                <input
                    typeof="number"
                    className="inputStyle"
                    value={valueB ?? ""}
                    onChange={(event) => onChangeValueBHandler(event)}
                />
                <button
                    className="buttonStyle"
                    onClick={() => onClickSum(valueA ?? 0, valueB ?? 0)}>Calcular</button>

            </div>
            <div className="divStyle">
                <h2 className="h2Style">✅ Exercício 2 – Criar uma função que verifica se um número é par</h2>
                <label>Informe um número: </label>
                <input
                    type="number"
                    className="inputStyle"
                    value={numberTestValue ?? ""}
                    onChange={(event) => onChangeNumberTestValueHandler(event)}
                />
                <button
                    className="buttonStyle"
                    onClick={() => isNumberEven(numberTestValue ?? 0)}>
                    Calcular
                </button>
            </div>
            <div className="divStyle">
                <h2 className="h2Style">✅ Exercício 3 – Arrow function que retorna saudação</h2>
                <p>Objetivo: Entender arrow function e template literals</p>
                <p>Tarefa:Retorne Olá, nome!</p>
                <label>Nome: </label>
                <input
                    type="text"
                    className="inputStyle"
                    value={nameValue ?? ""}
                    onChange={(event) => onChangeNameValueHandler(event)}
                />
                <button
                    className="buttonStyle"
                    onClick={() => alert(greetFunction(nameValue ?? ""))}>
                    Exibir Saudação
                </button>
            </div>
            <div className="divStyle">
                <h2 className="h2Style">✅ Exercício 4 – Criar uma função para filtrar maiores de idade</h2>
                <p>Recebe um array de idades e retorna um novo com idades maior igual a 18.</p>
                <label>Idades (separadas por vírgula): </label>
                <input
                    type="text"
                    value={agesValue ?? ""}
                    className="inputStyle"
                    onChange={(event) => setAgesValue(event.target.value)}
                />
                <button
                    className="buttonStyle"
                    onClick={() => showAdults()}>
                    Exibir adultos
                </button>
            </div>
            <div className="divStyle">
                <h2 className="h2Style">✅ Exercício 5 – Executar função ao clicar em botão (React)</h2>
                <p>Crie um botão com onClick que chama uma função chamada mostrarMensagem().</p>
                <p>Ao clicar, exibe um alert com a mensagem “Você clicou!”.</p>
                <button
                    className="buttonStyle"
                    onClick={() => mostrarMensagem()} >Executar</button>
            </div>
            <div className="divStyle">
                <h2>✅ Exercício 6 – Função que recebe outra função como argumento</h2>
                <p>Objetivo: Funções como parâmetro (callback)</p>
                <p>Execute a função recebida como argumento e mostre no console “Executado!”.</p>
                <button
                    className="buttonStyle"
                    onClick={() => executeFunction()}>Execute função</button>
            </div>
            <div className="divStyle">
                <h2 className="h2Style">✅ Exercício 7 – Criar função que converte Celsius para Fahrenheit</h2>
                <p>Fórmula: F = (C * 9/5) + 32</p>
                <label>Temperatura em °C:
                    <input
                        className="inputStyle"
                        typeof="number"
                        value={temperatueValue ?? ""}
                        onChange={(event) => handleTemperatureChange(event)}
                    />
                </label>
                <div style={{ backgroundColor: "blue" }}>{temperatueValue != null && (
                    <span>{parseFahrenheit()}</span>)
                }
                </div>
            </div>
            <div className="divStyle">
                <h2 className="h2Style">✅ Exercício 8 – Criar componente que usa função para renderizar lista</h2>
                <p>Crie uma função separada que renderiza uma lista de nomes dentro de li.</p>
                <label>Infome os nomes separados por ;</label>
                <input
                    className="inputStyle"
                    typeof="text"
                    value={namesValues ?? ""}
                    onChange={(event => onChangeNameListValueHandler(event))}
                />
                <button className="buttonStyle" onClick={() => listNames()}>Listar nomes</button>
                <div>{listNamesValues !== null && listNamesValues.length > 0 && (
                    <span>{listNamesValues.map(item =>
                        <li style={{ backgroundColor: "grey", paddingBottom: "10px" }} key={item}>{item}</li>
                    )}</span>)
                }</div>
            </div>
            <div className="divStyle">
                <h2 className="h2Style">✅ Exercício 9 – Função que calcula o total de um carrinho</h2>
                <h3>Objetivo: Função + reduce</h3>
                <p>Tarefa: Recebe um array de produtos com preco e retorna o total.</p>
                <label>Informa uma lista de preços separad por ;</label>
                <input
                    className="inputStyle"
                    typeof="text"
                    value={listPricesValue ?? ""}
                    onChange={(event) => onChangeListPriceHandler(event)}
                />
                <button className="buttonStyle" onClick={() => calculatePrice()}>Calcular preço</button>
                <div>{totalPrice !== null && totalPrice != "" && (
                    <div>O valor total é de R$ = {totalPrice} </div>
                )}
                </div>
            </div>
            <div className="divStyle">
                <h2 className="h2Style">✅ Exercício 10 – Hook personalizado com função de lógica isolada</h2>
                <h3>Objetivo: Criar uma função dentro de um hook</h3>
                <p>Use o hook dentro de um componente Counter e mostre o valor.</p>
                <p className="pStyle">Valor atual: {valorHookPersonalizado}</p>
                <button className="buttonStyle" onClick={incrementar}>Use o hook</button>
            </div>
        </div>
    )
}