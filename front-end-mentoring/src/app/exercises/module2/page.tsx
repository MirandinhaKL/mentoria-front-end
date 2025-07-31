"use client";

import { ChangeEvent, use, useState } from "react";

export default function Module2()
{
    const buttonStyle = {
        marginTop: "20px",
        display: "flex",
        justifyContent: "left",
        alignItems: "center",
        backgroundColor: "purple",
    };

    const [numbersText, setNumbersText] = useState<string[]>([]);
    const [number1, setNumber1] = useState<number>(0);
    const [number2, setNumber2] = useState<number>(0);
    const [number3, setNumber3] = useState<number>(0);
    const [sumHtml, setSumHmtl] = useState<string>();
    const [mapResult, setMapResult] = useState<string>();
    const [print20, setPrint20] = useState<string[]>([]);
    const [printLoop, setPrintLoop] = useState<string[]>([]);
    const [printRegressive, setPrintRegressive] = useState<string[]>([]);
    const [printBigger10, setPrintBigger10] = useState<string[]>([]);
    const [printTable5, setPrintTable5] = useState<string[]>([]);
    const [character4, setCharacter4] = useState<string>("");

    const onChangeNumber1 = (event: ChangeEvent<HTMLInputElement>) => {
        setNumber1(Number(event.target.value));
    }

    const onChangeNumber2 = (event: ChangeEvent<HTMLInputElement>) => {
        setNumber2(Number(event.target.value));
    }
    
    const onChangeNumber3 = (event: ChangeEvent<HTMLInputElement>) => {
        setNumber3(Number(event.target.value));
    }

    //#region functions
    function printNumbers()
    {
        const items:string[] = [];
        for (var i = 1; i<= 10; i++){
            items.push(`${i} ${i === 10 ? " " : ", "}`);
        }
        setNumbersText(items);
        return <div>{items}</div>
    }

    function sumNumbers(){
        const numbers: number[] = []
        numbers.push(number1);
        numbers.push(number2);
        numbers.push(number3);
        
        var sum = 0;

        numbers.forEach(item =>{
            sum += item;
        });
        console.log(sum);
        setSumHmtl(`=> A soma dos números é: ${sum}`);
    }

    function recreateMap(){
        const names:string[] = ["Ana", "Pedro", "Maria"];
        var nameString = "";
        
        for(var i=0; i < names.length; i++){
            nameString = nameString += `${names[i].toUpperCase()}${i === names.length - 1 ? "" : ", "}`;
            console.log(nameString);
        }
        setMapResult(`Array usando for => ${nameString}`)
    }

    function printUntil20(){
        var i = 1;
        const numbersString:string[] = [];
        
        numbersString.push("=> ");
        while(i <= 20){
            numbersString.push(i.toString() + `${i === 20 ? "" : ", "}`);
            i++;
        }
        setPrint20(numbersString);
    } 

    function loopWithBreak(){
        var cont = 1;
        const numbersString:string[] = [];
        numbersString.push("=> ");

        while(true){
            numbersString.push(cont.toString() + `${cont == 10 ? "" : ", "}`);
            cont++;
            if (cont >= 11){
                setPrintLoop(numbersString);
                break;
            }
        }
    }

    function doWhileQuestion()
    {
        var resposta: string | null;
        do{
            resposta = prompt("Quer continuar?")
        }
        while(resposta?.toLowerCase() == "sim");
    }

    function doCountRegressive(){
        const numbersString:string[] = [];
        numbersString.push("=> ");

        for(var i = 10; i > 0; i--){
            numbersString.push(i.toString() + `${i == 1 ? "" : ", "}`);
        }
        setPrintRegressive(numbersString);
    }

    function countBigger10()
    {
        const valores = [5, 12, 18, 7, 3, 25];
        const numbersString:string[] = [];
        var sum = 0;

        valores.forEach((item, index) => {
            if (item > 10) {
                sum += item;
                numbersString.push(item.toString() + `${index === valores.length - 1 ? "" : ", "}`);
            }
        });

       setPrintBigger10([`=> Números maiores que 10: ${numbersString.join("")} => Soma: ${sum}`]);
    }

    function table5(){
       const tableString:string[] = [];

       for (let i = 1; i <= 5; i++) {
            for (let j = 1; j <= 10; j++) {
                tableString.push(i.toString() + " x " + j.toString() + " = " + (i * j).toString());
            }        
       }
       setPrintTable5(tableString);
    }

    function printFilteredArray(){
        const palavras = ['sol', 'lua', 'estrela', 'planeta', 'cometa'];
        const wordsFiltered:string[] = [];

        palavras.forEach(element => {
            if (element.length >= 4){
                wordsFiltered.push(element);
            }
        });

        setCharacter4(wordsFiltered.join(", "));
    }

    //#endregion

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "left", border: "botton"}}>
            <h1 style={{display: "flex", 
                alignItems:"center", 
                justifyContent:"center",
                fontSize:"x-large",
                marginTop:"50px",
                marginBottom:"50px"
                }}>
                    Module 2: Advanced Concepts
            </h1>
            <h2>Exercício 1 – Imprimir números de 1 a 10 com for</h2>
            <button style={buttonStyle} onClick={printNumbers}>Executar 1</button>
            <div>
                {numbersText.length > 0 && (<span>{"=> "}</span>)}
                {numbersText.map(item => {
                return <span key={item}>{item}</span>
            })}
            </div>
          
            <h2 style={{marginTop:"50px"}}>Exercício 2 – Somar todos os números de um array com for</h2>
            <div style={{display: "flex", justifyContent:"normal", alignItems:"center"}}>
                <label>X: </label>
                <input
                    style={{border: "2px red solid"}}
                    type="number"
                    value={number1}
                    onChange={(event) => onChangeNumber1(event)}
                />
                <label>Y: </label>
                <input
                    style={{border: "2px green solid"}}
                    type="number"
                    value={number2}
                    onChange={(event) => onChangeNumber2(event)}
                />
                 <label>Z: </label>
                <input
                    style={{border: "2px yellow solid"}}
                    type="number"
                    value={number3}
                    onChange={(event) => onChangeNumber3(event)}
                />
            </div>
            <button style={buttonStyle} onClick={sumNumbers}>Executar 2</button>
            <div>{sumHtml}</div>
           
            <h2 style={{marginTop:"50px", display: "flex", justifyContent:"normal", alignItems:"center"}}>
                Exercício 3 – Recriar o map usando for;
            </h2>
            <p>Sem usar .map(), crie uma função que recebe um array e retorna um novo array com todas as strings em maiúsculas</p>
            <button style={buttonStyle} onClick={recreateMap}>Executar 3</button>
            <div>{mapResult}</div>
          
            <h2 style={{marginTop:"50px"}}>Exercício 4 – Imprimir números pares de 0 a 20 usando while.</h2>
            <button style={buttonStyle} onClick={printUntil20}>Executar 4</button>
            <div>{print20}</div>
           
            <h2 style={{marginTop:"50px"}}>Exercício 5 – Loop infinito controlado com break</h2>
            <p>Crie um loop while(true) que incrementa um contador e imprime ele. Quando o contador chegar a 10, o loop deve ser interrompido com break.</p>
            <button style={buttonStyle} onClick={loopWithBreak}>Executar 5</button>
            <div>{printLoop}</div>

            <h2 style={{marginTop:"50px"}}>Exercício 6 – Usar do...while para pedir confirmação</h2>
            <p>Crie um loop do...while que pergunta ao usuário se ele quer continuar. Se o usuário responder "sim", o loop continua. Se responder "não", o loop termina.</p>
            <button style={buttonStyle} onClick={doWhileQuestion}>Executar 6</button>

            <h2 style={{marginTop:"50px"}}>Exercício 7 – Imprimir os números de 10 a 1 (contagem regressiva)</h2>
            <p>Usando for ou while, imprima os números de 10 até 1.</p>
            <button style={buttonStyle} onClick={doCountRegressive}>Executar 7</button>
            <div>{printRegressive}</div>

            <h2 style={{marginTop:"50px"}}> Exercício 8 – Somar somente números maiores que 10 de um array</h2>
            <p>const valores = [5, 12, 18, 7, 3, 25];</p>
            <button style={buttonStyle} onClick={countBigger10}>Executar 8</button>
            <div>{printBigger10}</div>

            <h2 style={{marginTop:"50px"}}>Exercício 9 – Loop aninhado para tabuada</h2>
            <p>Usando dois loops for aninhados, imprima a tabuada de 1 a 5.</p>
            <button style={buttonStyle} onClick={table5}>Executar 9</button>
            <div>{printTable5.map((linha, index) => (
                <span key={index}>{linha}<br/></span>)
                )
            }</div>
            <h2 style={{marginTop:"50px"}}>Exercício 10 – Filtrar array com loop e criar novo array</h2>
            <p>const palavras = ['sol', 'lua', 'estrela', 'planeta', 'cometa'];</p>
            <br></br>
            <p>Use um loop para criar um novo array contendo apenas palavras que têm 4 letras ou mais.</p>
            <button style={buttonStyle} onClick={printFilteredArray}>Executar 10</button>
            <div>{character4.length > 0 && (<span>Palavras filtradas: </span>)}{character4}</div>
        </div>
    );
}