"use client";

import React, { ChangeEvent, useState } from "react";


export default function Module3() {

    //#region styles
    const buttonStyle = {
        marginTop: "20px",
        display: "flex",
        justifyContent: "left",
        alignItems: "center",
        backgroundColor: "green",
    };

    const h1Style = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "x-large",
        marginTop: "50px",
        marginBottom: "50px"
    }

    const h2Style = {
        marginTop: "20px"
    }
    //#endregion
    type Produto = {
        id: number,
        nome: string,
        preco: number
    }


    const [peopleNames, setPeopleNames] = useState<string[]>([]);
    const [peopleActive, setPeopleActive] = useState<string[]>([]);
    const [productById, setPeopleById] = useState<string[]>([]);
    const [totalValue, setTotalValue] = useState<number>(0);
    const [languages, setLanguages] = useState<string[]>([]);
    const [biggerThan18, setBiggerThan18] = useState<string[]>([]);
    const [selectedProduct, setSelectedProduct] = useState<Produto | null>(null);

    const handleProductSelector = (event: ChangeEvent<HTMLSelectElement>) => {
        const id = Number(event.target.value);
        const product = GetProducts().find(p => p.id === id) ?? null;
        setSelectedProduct(product);
    }

    function changeToUpper() {
        const names: string[] = ['ana', 'joão', 'maria', 'carlos'];
        const namesToUpper = names.map(item => item.toUpperCase());
        setPeopleNames(namesToUpper);
    }

    function useFilter() {
        const users = [
            { nome: 'Ana', ativo: true },
            { nome: 'Carlos', ativo: false },
            { nome: 'Maria', ativo: true },
            { nome: 'João', ativo: false }];
        const usersFiltered = users.filter(item => item.ativo == true);
        const usersName = usersFiltered.map(item => item.nome);
        setPeopleActive(usersName);
    }

    function filterById() {
        const produtos = [
            { id: 1, nome: 'Camiseta' },
            { id: 2, nome: 'Calça' },
            { id: 3, nome: 'Tênis' }
        ]

        const filterProducts = produtos.filter(item => item.id === 2);
        const productsName = filterProducts.map(item => item.nome);
        setPeopleById(productsName);
    }

    function totalCalculate() {
        const carrinho = [
            { nome: 'Teclado', preco: 120 },
            { nome: 'Mouse', preco: 80 },
            { nome: 'Monitor', preco: 1000 }
        ];

        const prices = carrinho.map(item => item.preco);
        const total = prices.reduce((sum, item) => sum + item, 0);
        setTotalValue(total);
    }

    function renderListReact() {
        const nomes = ['React', 'Vue', 'Angular'];
        setLanguages(nomes);
    }

    function filterByAge() {
        const pessoas = [
            { nome: 'Pedro', idade: 17 },
            { nome: 'Lucas', idade: 22 },
            { nome: 'Amanda', idade: 19 },
            { nome: 'Bia', idade: 16 }
        ];

        const adults = pessoas.filter(i => i.idade >= 18);
        const adultsName = adults.map(k => {
            return k.nome;
        });
        setBiggerThan18(adultsName);
    }

    function GetProducts() {
        const produtos: Produto[] = [
            { id: 1, nome: 'Notebook', preco: 3000 },
            { id: 2, nome: 'Tablet', preco: 1500 },
            { id: 3, nome: 'Celular', preco: 2000 },
        ];
        return produtos;
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "left", border: "botton" }}>
            <h1 style={h1Style}>Tópico 3 - Manipulação de Array</h1>

            <h2>Exercício 1 – Nomes em letras maiúsculas</h2>
            <p>Objetivo: Praticar .map()</p>
            <p>Crie um novo array com os nomes em letras maiúsculas.</p>
            <button style={buttonStyle} onClick={changeToUpper}>Resolução 1</button>
            <div>{peopleNames.join(", ")}</div>

            <h2 style={{ marginTop: "20px" }}>Exercício 2 – Filtrar usuários ativos</h2>
            <p>Objetivo: Praticar .filter()</p>
            <p>Crie um novo array apenas com os usuários ativos.</p>
            <button style={buttonStyle} onClick={useFilter}>Resolução 2</button>
            <div style={{ marginBottom: "20px" }}>{peopleActive.join(", ")}</div>

            <h2 style={h2Style}> Exercício 3 – Encontrar um produto pelo ID</h2>
            <p>**Tarefa:** Encontre o produto com id `2`.</p>
            <button style={buttonStyle} onClick={filterById}>Resolução 3</button>
            <div>{productById.length > 0 ? `=> Produto de Id - 2: ${productById}` : productById}</div>

            <h2 style={h2Style}>Exercício 4 – Somar os preços dos produtos</h2>
            <p>Objetivo: Praticar map + reduce (extra)</p>
            <p>**Tarefa:** Calcule o valor total do carrinho.</p>
            <button style={buttonStyle} onClick={totalCalculate}>Resolução 4</button>
            <div>{totalValue != 0 ? `=> O somatório é: ${totalValue}` : ""}</div>

            <h2 style={h2Style}>Exercício 5 – Renderizar lista com React + map</h2>
            <p>**Tarefa:** Renderize os nomes abaixo de uma ul, com um li para cada item.</p>
            <button style={buttonStyle} onClick={renderListReact}>Resolução 5</button>
            <div>{languages.length > 0 &&
                <ul>
                    {languages.map((name, index) => (
                        <li key={index}>{name}</li>
                    ))}
                </ul>}
            </div>

            <h2 style={h2Style}>Exercício 6 – Mostrar apenas maiores de idade</h2>
            <p>Mostre uma lista de nomes apenas das pessoas com idade maior ou igual a 18.</p>
            <button style={buttonStyle} onClick={filterByAge}>Resolução 6</button>
            <div>{biggerThan18.join(", ")}</div>

            <h2 style={h2Style}>Exercício 7 – Exibir produto selecionado</h2>
            <p>Objetivo: .find() em evento</p>
            <p>Crie uma select com produtos. Ao selecionar um, mostre os detalhes dele abaixo.</p>
            <br></br>
            <select onChange={handleProductSelector} defaultValue={""}>
                <option value="">-- Selecione produto --</option>
                {GetProducts().map(p => (
                    <option key={p.id} value={p.id}>{p.nome}</option>
                ))}
            </select>
            <div>{selectedProduct && (
                <div style={{marginTop:"20px"}}>
                    <h3>Produto Selecionado:</h3>
                    <p><strong>Nome: </strong>{selectedProduct.nome}</p>
                    <p><strong>Preço: </strong>{selectedProduct.preco}</p>
                </div>
            )}
            </div>
        </div>
    )
}