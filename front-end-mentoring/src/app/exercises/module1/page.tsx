"use client";
import { ChangeEvent, useState } from "react";

export default function Module1() 
{
    const [valueA, setValue] = useState("");
    const [valueB, setValueB] = useState("");
    const [personName, setName] = useState("");
    const [personAge, setAge] = useState("");
    const [isUserLogedIn, setLogin] = useState(false);
    const [convertedValue, setConvert] = useState("");
    const [typeOfInput, setTypeOfInput] = useState("");
    const [number1, setNumber1] = useState("");
    const [number2, setNumber2] = useState("");

    const onChangeInputValue = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    const onChangeInputValueB = (event: ChangeEvent<HTMLInputElement>) => {
        setValueB(event.target.value);
    };

    const onChangeInputValueName = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const onChangeInputValueAge = (event: ChangeEvent<HTMLInputElement>) => {
        setAge(event.target.value)
    };

    const onChangeInputLogin = (event: ChangeEvent<HTMLInputElement>) => {
        setLogin(Boolean(event.target.checked))
    };

    const onChangeConvertedValue = (event: ChangeEvent<HTMLInputElement>) =>{
        setConvert(event.target.value);
    }

    const onChangeTypeOfInput = (event: ChangeEvent<HTMLInputElement>) => {
        setTypeOfInput(event.target.value);
    }

    const onChangeInputNumber1 = (event: ChangeEvent<HTMLInputElement>) => {
        setNumber1(event.target.value);
    }
    
    const onChangeInputNumber2 = (event: ChangeEvent<HTMLInputElement>) => {
        setNumber2(event.target.value);
    }

    function showTypeOfVariable()
    {
        console.clear();
        const nome = "Ana";
        const idade = 25;
        const ativo = true;
        const endereco = null;
        let telefone;

        const array = [nome, idade, ativo, endereco, telefone];

        console.log("*** Exercício 1 ***")
        array.forEach(item => 
            console.log( item + ' => ' + typeof(item))
        )
    }

    function opertaorComparison(){
        console.clear();
        console.log("*** Exercício 2 ***")
        const number = 5;
        const text = "5";
        // console.log(number == text);
        // console.log(number === text);
        // console.log(5 == "5");
        console.log("Revisar com o Paulo")
    }

    function implicitCoersion(){
        console.clear();
        console.log("*** Exercício 3 ***");
        console.log("10" + 1); 
        console.log("=> Concantena o valor de 10 com o número 1, resultando em '101'");
        // console.log("10" - 1); 
        console.log("=>Ver erro com o Paulo. Subtrai o número 1 de 10, resultando em 9");
        //console.log(true + 1);
        console.log("=> Ver erro com o Paulo. ");
        
        console.log(null == undefined);
        console.log("=> null == undefined são verdadeiros pois ambos significam ausência de valor.")

         
        console.log(null === undefined);
        console.log("=> null === undefined é falso, pois os tipos são diferentes.");
    }

    function mathematicalOperators(var1: number, var2: number)
    {
        console.clear();
        console.log("*** Exercício 4 ***");
        console.log("Valores informados: " + var1 + " e " + var2);
        console.log("+ => " + (var1 + var2));
        console.log("- => " + (var1 - var2));
        console.log("* => " + (var1 * var2));
        console.log("/ => " + (var1 / var2));
        console.log("% => " + (var1 % var2));
        console.log("^ => " + (var1 ** var2));
    }

    function literalsTemplate(namePersson: string, age: number){
        console.clear();
        console.log("*** Exercício 5 ***");
        console.log(`Olá, meu nome é ${namePersson} e tenho ${age} anos.`);
    }

    function verificarValor(){
        console.clear();
        console.log("*** Exercício 6 ***");
        const values = [false, 0, "", null, undefined, NaN, "abc", 1, [], {}];
        
        values.forEach(item =>{
            console.log(item + `=> ${item == true ? 'truthy' : 'false'}`)
        })
    }

    function ternaryOperator(logado: boolean){
        return logado ? console.log("Bem-vindo") : console.log("Faça login")
    }

    function convertValue(input: any){
        console.clear();
        console.log("*** Exercício 8 ***");
        console.log("number => " + Number(input));
        console.log("text => " + input.toString());
        console.log("boolean => " + Boolean(input));
        console.log("object => " + Object(input));
        console.log("array => " + Array(input));
    }

    function evaluateTypeOfInput(input: any){
        console.clear();
        console.log("*** Exercício 9 ***");
        console.log(`Conteúdo digitado: ${input}`);
        const number = Number(input);
        if(!isNaN(number)){
            console.log("tipo do dado => " + typeof number);
        }else{
          console.log("tipo do dado => " + typeof input);
        }
    }

    function logicalOperators(num1: number, num2: number){
        console.clear();
        console.log("*** Exercício 10 ***");
        const num1IsEven = num1 % 2 == 0;
        const num2IsEven = num2 % 2 == 0;
        if(num1IsEven && num2IsEven){
            console.log("Ambos pares - verdadeiros")
        }else if(num1IsEven || num2IsEven){
            console.log("Algum é par - algum é verdadeiros")
        }else{
            console.log("Nenhum é par - nenhum é verdadeiro" )
        }
    }
    
    return(
        <div style={{ display: "flex", flexDirection: "column", alignItems: "left", border: "botton"}}>
        <h1>Modulo 1</h1>
        <p>Exercício 1 – Identificar tipos de variáveis </p>
        <p> - Abra o console para ver a resposta.</p>
        <button onClick={showTypeOfVariable}>Clique aqui 1!</button>
        <br></br>

        <p>Exercício 2 – Comparações com == e ===</p>
        <p> - Abra o console para ver a resposta.</p>
        <button onClick={opertaorComparison}>Clique aqui 2!</button>
        <br></br>

        <p>Exercício 3 – Coerção implícita de tipos</p>
        <p> - Abra o console para ver a resposta.</p>
        <button onClick={implicitCoersion}>Clique aqui 3!</button>
        <br></br>

        <p>Exercício 4 – Operadores matemáticos</p>
        <p> - Abra o console para ver a resposta.</p>
        <br></br>
        <label>Informe o valor de x</label>     
        <input
            style={{ border: "1px pink solid" }}
            type="number"
            value={valueA}
            onChange={(event) => onChangeInputValue(event)}
        />
        <br></br>
        <label>Informe o valor de y</label>
        <input
            style={{ border: "1px pink solid"}}
            type="number"
            value={valueB}
            onChange={(event) => onChangeInputValueB(event)}
        />
        <button onClick={() => mathematicalOperators(Number(valueA),Number(valueB))}>Clique aqui 4!</button>
        
        <p>Exercício 5 – Template literals</p>
        <p> - Abra o console para ver a resposta.</p>
        <br></br>
        <label>Informe o seu nome:</label>
        <input 
            style={{border: "1px green solid" }}
            type="text"
            value={personName}
            onChange={(event) => onChangeInputValueName(event)}
        />
        <br></br>
        <label>Informe a sua idade</label>
        <input 
            style={{border: "1px green solid"}}
            type="number"
            value={personAge} 
            onChange={(event) => onChangeInputValueAge(event)}
        />
        <button onClick={() => literalsTemplate(personName, Number(personAge))}>Clique aqui 5!</button>
        <br></br>

        <p>Exercício 6 – Valores truthy e falsy</p>
        <p> - Abra o console para ver a resposta.</p>
        <button onClick={verificarValor}>Clique aqui 6!</button>
        <br></br>

        <p>Exercício 7 – Operador ternário</p>
        <p>Crie uma variável `logado = true`
        Mostre: `"Bem-vindo"` se logado for `true`, ou `"Faça login"` se `false`.
        Use operador ternário: `condição ? valor1 : valor2`</p>
        <p> - Abra o console para ver a resposta.</p>
        <label>
            <input 
              type="checkbox"
              checked={isUserLogedIn}
              onChange={onChangeInputLogin}
            />
            Usuário está logado?
        </label>
        <button onClick={() => ternaryOperator(Boolean(isUserLogedIn))}>Clique aqui 7!</button>
        <br></br>

        <p>Exercício 8 – Conversão manual de tipos</p>
        <label>Informe um valor para uma variável</label>
        <p> - Abra o console para ver a resposta.</p>
        <input 
            style={{border: "1px purple solid"}}
            type="text"
            value={convertedValue}
            onChange={(event => onChangeConvertedValue(event))}
        />
        <button onClick={() => convertValue(convertedValue)}>Clique aqui 8!</button>
        <br></br>

        <p>**Exercício 9 – Detectar tipo de dado em input**
        Crie um input controlado. Ao digitar algo, mostre abaixo o conteúdo digitado e o tipo dele (`typeof valor`).
        Dica: `typeof` de inputs sempre retorna `string`, mesmo que o conteúdo pareça número.</p>
        <p> - Abra o console para ver a resposta.</p>
        <label>Input</label>
        <input 
            style={{border: "1px pink solid"}}
            type="text"
            value={typeOfInput}
            onChange={event => onChangeTypeOfInput(event)}
        />
        <button onClick={() => evaluateTypeOfInput(typeOfInput)}>Clique aqui 9!</button>
        <br></br>

        <p>### **Exercício 10 – Operadores lógicos (`&&`, `||`, `!`)**
        <p>Crie uma função que recebe dois valores e retorna:</p>   
        <p>- Se ambos são verdadeiros → `"Ambos verdadeiros"</p>
        <p>- Se pelo menos um é verdadeiro → `"Algum é verdadeiro"`</p>
        <p>- Se nenhum for verdadeiro → `"Nenhum é verdadeiro"`</p></p>
        <label>Testa se os valores são pares!</label>
        <label>Número 1</label>
        <input
          style={{border: "1px red solid"}}
          type="number"
          value={number1}
          onChange={event => onChangeInputNumber1(event)}
        />
        <br></br>
        <label>Número 2</label>
        <input
          style={{border: "1px red solid"}}
          type="number"
          value={number2}
          onChange={event => onChangeInputNumber2(event)}
        />
        <button onClick={() => logicalOperators(Number(number1), Number(number2))}>Clique aqui 10!</button>
    </div>
    );
}