"use client";

import React, { ChangeEvent, useCallback, useEffect, useState } from "react";

export default function Module6() {

    // estados = useState

    const [checkNumberValue, setCheckNumberValue] = useState<number | null>(null);
    const [ageValue, setAgeValue] = useState<number | null>(null);
    const [passwordValue, setPasswordValue] = useState<string | null>(null);
    const [xValue, setXValue] = useState<number | null>(null);
    const [yValue, setYValue] = useState<number | null>(null);
    const [operationSelcted, setOperationSelcted] = useState<string>("");
    const [weekDayValue, setWeekDayValue] = useState<string | null>(null);
    const [gradeValue, setGradeValue] = useState<number | null>();
    const [darkModeValue, setDarkModeValue] = useState<boolean>(false);
    const [evaluationSelcted, setEvaluationValue] = useState<string>("");
    const [typeInputValue, setTypeInputValue] = useState<string | null>(null);

    //variaveis
    const operations: string[] = ["+", "-", "*", "/"];
    const evaluation: string[] = ["*****", "****", "***", "**", "*"];

    // hooks

    // useEffects
    // quando inicia a pagina, quando o array de dependencia sofrer alteração
    useEffect(() => {
        if (!weekDayValue) {
            return;
        }

        let message = "";

        switch (weekDayValue) {
            case "Segunda":
            case "Terça":
            case "Quarta":
            case "Quinta":
            case "Sexta":
                message = "Dia útil";
                break;
            case "Sábado":
            case "Domingo":
                message = "Fim de semana";
                break;
            default:
                message = "";
        }

        alert(message);

    }, [weekDayValue])

    // não reescreve a função
    const onChangeCheckNumber = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setCheckNumberValue(Number(event.target.value));
    }, [])

    const checkNumber = (number: number): string => {
        if (number > 0)
            return "Positivo";
        else if (number < 0)
            return "Negativo";
        else
            return "Zero";
    }

    const onChangeAgeValue = (event: ChangeEvent<HTMLInputElement>) => {
        setAgeValue(Number(event.target.value));
    }

    const determineAgeGroup = (age: number): string => {
        if (age < 12)
            return "Criança";
        else if (age >= 12 && age <= 17)
            return "Adolescente";
        else if (age >= 18 && age <= 59)
            return "Adulto";
        else
            return "Idoso";
    }

    const onChangePasswordValue = (event: ChangeEvent<HTMLInputElement>) => {
        setPasswordValue(event.target.value);
    }

    const onChangeXValue = (event: ChangeEvent<HTMLInputElement>) => {
        setXValue(Number(event.target.value));
    }

    const onChangeYValue = (event: ChangeEvent<HTMLInputElement>) => {
        setYValue(Number(event.target.value));
    }

    const operationHandleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setOperationSelcted(event.target.value);
    }

    const onChangeWeekDayValue = (event: ChangeEvent<HTMLSelectElement>) => {
        console.log("🚀 ~ onChangeWeekDayValue ~ onChangeWeekDayValue:", onChangeWeekDayValue)
        setWeekDayValue(event.target.value);
    }

    const onChangeGradeValue = (event: ChangeEvent<HTMLInputElement>) => {
        setGradeValue(Number(event.target.value));
    }

    const handleCheckBoxDarkMode = (event: ChangeEvent<HTMLInputElement>) => {
        setDarkModeValue(event.target.checked);
    }

    const handleRadioInputEvaluation = (event: ChangeEvent<HTMLInputElement>) => {
        setEvaluationValue(event.target.value);
    }

    const handleTypeInputValue = (event: ChangeEvent<HTMLInputElement>) => {
        setTypeInputValue(event.target.value);
    }

    function ValidatePassword(password: string): string {
        var length: number = password.length;
        if (length == 0)
            return "";
        else if (length > 0 && length < 6)
            return "Senha fraca";
        else if (length >= 6 && length <= 10)
            return "Senha média";
        else
            return "Senha fote";
    }

    function calculateOperation(x: number, y: number, operationSelected: string) {
        const operator: string = operationSelected;
        var k = x ?? 0;
        var l = y ?? 0;

        switch (operator) {
            case '*':
                return (k * l);
            case '/':
                return (k / l);
            case '+':
                return (k + l);
            case '-':
                return (k - l);
        }
    }

    function showGradeMessage(): string {
        if (gradeValue == undefined)
            return "";
        if (gradeValue >= 7)
            return "Aprovado";
        if (gradeValue >= 5 && gradeValue <= 6.9)
            return "Recuperação";
        return "Reprovado";
    }

    function showEvaluationMessage(): string {

        if (evaluationSelcted == "")
            return "";
        else {
            switch (evaluationSelcted) {
                case "*":
                    return "Ruim";
                case "**":
                    return "Regular";
                case "***":
                    return "Bom";
                case "****":
                    return "Muito bom"
                case "*****":
                    return "Excelente"
                default:
                    return "";
            }
        }
    }

    function showInputType(): string {
        if (typeInputValue == null || typeInputValue == "")
            return "";

        if (typeInputValue >= "A" && typeInputValue <= 'Z')
            return "Letra maiúscula";

        if (typeInputValue >= "-9" && typeInputValue <= "9")
            return "Número";

        if (typeInputValue >= "a" && typeInputValue <= 'z')
            return "Letra mainúscula";

        return "Caractere especial";
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "left", border: "botto" }}>
            <h1 className="h1Style h1StylePink">Tópico 6 - Controle de Fluxo (if, else, switch)</h1>

            <h2 className="h2Style">✅ Exercício 1 – Verificar se número é positivo ou negativo</h2>
            <p>Crie uma função que recebe um número e retorna:</p>
            <li>Positivo: se o número for maior que 0</li>
            <li>Negativo: se for menor que 0 </li>
            <li>Zero: se for igual a 0</li>
            <label>Digite um número: </label>
            <input
                type="number"
                style={{ border: "solid", marginTop: "10px" }}
                value={checkNumberValue ?? ""}
                onChange={(event) => onChangeCheckNumber(event)}
            />
            <div>{checkNumberValue !== null && (
                <span style={{ backgroundColor: "green" }}>{checkNumber(checkNumberValue)}</span>
            )}
            </div>
            <h2 className="h2Style">✅ Exercício 2 – Determinar faixa etária</h2>
            <p>Com base na idade, retorne:</p>
            <span>
                <li>Criança: se menor que 12</li>
                <li>Adolescente: entre 12 e 17</li>
                <li>Adulto: entre 18 e 59</li>
                <li>Idoso: se 60 ou mais</li>
            </span>
            <label>Digite sua idade: </label>
            <input
                value={ageValue ?? ""}
                type="number"
                style={{ border: "solid", marginTop: "10px" }}
                onChange={(event) => onChangeAgeValue(event)}
            />
            <div>{ageValue !== null && (
                <span style={{ backgroundColor: "purple" }}>
                    {determineAgeGroup(ageValue)}
                </span>
            )}
            </div>
            <h2 className="h2Style">✅ Exercício 3 – Verificar se usuário está logado</h2>
            <p>Crie um componente React que exibe:</p>
            <li>Bem-vindo(a)! se isLoggedIn for true</li>
            <li>"Faça login para continuar" se false</li>
            <label>Usuário está logado?
                <input
                    type="checkbox"
                    style={{ border: "solid", margin: "10px" }}
                    onChange={(event) => {
                        const isChecked = event.target.checked;
                        isChecked ? alert("Bem-vindo(a)!") : alert("Faça login para continuar");
                    }}
                />
            </label>

            <h2 className="h2Style">✅ Exercício 4 – Verificar se senha está forte</h2>
            <p>Retorne:</p>
            <li>Senha fraca: se a senha tiver menos de 6 caracteres</li>
            <li>Senha média: entre 6 e 10</li>
            <li>Senha forte: se mais de 10 caracteres</li>
            <label>
                Informe a senha:
                <input
                    type="password"
                    style={{ border: "solid", margin: "10px" }}
                    value={passwordValue ?? ""}
                    onChange={(event) => onChangePasswordValue(event)}
                />
            </label>
            <div style={{ backgroundColor: "yellowgreen" }}>{ValidatePassword(passwordValue ?? "")}</div>

            <h2 className="h2Style">✅ Exercício 5 – Calculadora com switch</h2>
            <p>Receba dois números e um operador (+, -, *, /).</p>
            <p>Use switch para retornar o resultado correto da operação.</p>
            <label>X:
                <input
                    type="number"
                    style={{ border: "solid", margin: "10px" }}
                    value={xValue ?? ""}
                    onChange={(event) => onChangeXValue(event)}
                />
            </label>
            <label>Y:
                <input
                    type="number"
                    style={{ border: "solid", margin: "10px" }}
                    value={yValue ?? ""}
                    onChange={(event) => onChangeYValue(event)}
                />
            </label>
            <label>Operação:
                <select
                    id="operacoes"
                    value={operationSelcted}
                    style={{ border: "solid", margin: "10px" }}
                    onChange={operationHandleChange}
                >
                    <option value="">  Selecione   </option>
                    {operations.map((operation, index) => (
                        <option key={index} value={operation}>{operation}</option>
                    ))}
                </select>
            </label>
            <div>{operationSelcted && (
                <p>Resultado: <strong>{calculateOperation(xValue ?? 0, yValue ?? 0, operationSelcted)}</strong></p>
            )}
            </div>

            <h2 className="h2Style">✅ Exercício 6 – Exibir mensagem com base no dia da semana</h2>
            <p>Crie uma função que retorna uma mensagem:</p>
            <li>Segunda a sexta: Dia útil</li>
            <li>Sábado e domingo: Fim de semana</li>
            <label>
                Dia da semana:
                <select
                    id="diasSemana"
                    style={{ border: "solid", margin: "10px" }}
                    value={weekDayValue ?? ""}
                    onChange={(event) => onChangeWeekDayValue(event)}
                >
                    <option value="">  Selecione   </option>
                    <option value="Segunda">Segunda</option>
                    <option value="Terça">Terça</option>
                    <option value="Quarta">Quarta</option>
                    <option value="Quinta">Quinta</option>
                    <option value="Sexta">Sexta</option>
                    <option value="Sábado">Sábado</option>
                    <option value="Domingo">Domingo</option>
                </select>
            </label>

            <h2 className="h2Style">✅ Exercício 7 – Verificar nota do aluno</h2>
            <span>
                <p>Retorne:</p>
                <li>Aprovado se nota ≥ 7</li>
                <li>Recuperação se entre 5 e 6.9</li>
                <li>Reprovado se menor que 5</li>
            </span>
            <br></br>
            <label>
                Informe a nota:
                <input
                    type="number"
                    value={gradeValue ?? ""}
                    className="inputStyle"
                    onChange={(event) => onChangeGradeValue(event)}
                />
            </label>
            <div>{gradeValue !== null && (
                <span>{showGradeMessage()}</span>
            )}
            </div>

            <h2 className="h2Style">✅ Exercício 8 – Modo escuro/Modo claro</h2>
            <p>Mostre uma div com:</p>
            <li>Fundo preto e texto branco se darkMode for true</li>
            <li>Fundo branco e texto preto se false</li>
            <p>Use ternário para aplicar as classes ou estilos inline.</p>
            <label>Habilitar Modo escuro:
                <input
                    style={{ marginLeft: "30px" }}
                    type="checkbox"
                    checked={darkModeValue}
                    onChange={(event) => handleCheckBoxDarkMode(event)}
                />
            </label>
            <div>{darkModeValue ?
                <div style={{ backgroundColor: "black", color: "white" }}>Sou o modo escuro</div>
                :
                <div style={{ backgroundColor: "white", color: "black" }}>Sou o modo claro</div>}
            </div>

            <h2 className="h2Style">✅ Exercício 9 – Avaliação com estrelas</h2>
            <p>Retorne uma mensagem baseada na avaliação:</p>
            <li>- 5 → Excelente</li>
            <li>- 4 → Muito bom</li>
            <li>- 3 → Bom</li>
            <li>- 2 → Regular</li>
            <li>- 1 → Ruim</li>
            <br></br>

            <p>Avalie esse belo site: </p>
            <div>
                {evaluation.map((stars, index) => (
                    <label key={index} style={{ display: 'block' }}>
                        <input type="radio"
                            value={stars}
                            name={evaluationSelcted}
                            onChange={(event) => handleRadioInputEvaluation(event)} />
                        {stars}
                    </label>
                ))}
            </div>
            <div>{evaluationSelcted.length > 0 &&
                (
                    <div style={{ backgroundColor: "blue" }}>{showEvaluationMessage()}</div>
                )}</div>
            <h2 className="h2Style">✅ Exercício 10 – Determinar o tipo de caractere</h2>
            <p>Retorne: </p>
            <li>Letra maiúscula </li>
            <li>Letra minúscula </li>
            <li>Número </li>
            <li>Caractere especial </li>
            <label>Infome o caractere: </label>
            <input
                style={{ border: "solid", marginTop: "10px" }}
                type="text"
                maxLength={1}
                value={typeInputValue ?? ""}
                onChange={(event) => handleTypeInputValue(event)}
            />
            <div>{typeInputValue != null &&
                (<div style={{ backgroundColor: "green" }}>{showInputType()}</div>)}
            </div>
        </div>
    )
}