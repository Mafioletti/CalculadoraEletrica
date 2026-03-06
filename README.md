# ⚡ Calculadora de Consumo Elétrico

Um script interativo em **JavaScript** desenvolvido para calcular o consumo de energia de eletrodomésticos e estimar o custo mensal na conta de luz.

## 🚀 Como usar

Este script foi criado para ser executado diretamente no **Console do Navegador**.

1. Copie todo o código do arquivo `.js`.
2. Abra seu navegador (Chrome, Edge ou Firefox).
3. Pressione `F12` e clique na aba **Console**.
4. Cole o código e pressione `Enter`.
5. Digite `eletrodomestico();` e siga as instruções nos pop-ups.

## 🛠️ Funcionalidades

O programa guia o usuário através de `prompts` para coletar:
- Nome do aparelho.
- Unidade de medida da potência (**Watt** ou **Kilowatt**).
- Valor da potência.
- Tempo de uso diário (em horas).

## 📊 Fórmulas Utilizadas

O cálculo baseia-se na conversão de potência para Kilowatt-hora (kWh) e na projeção mensal:

1. **Conversão para kWh:**
   $$KWh = \frac{\text{Potência (W)} \times \text{Tempo (h)}}{1000}$$

2. **Custo Mensal (Base 30 dias):**
   $$\text{Custo Total} = (KWh \times 30) \times 0.90$$
   *(Considerando uma tarifa média de R$ 0,90 por kWh)*

## 💻 Exemplo de Saída no Console

Ao finalizar o preenchimento, o script retorna os dados formatados:

```text
O eletrodoméstico é: Geladeira
O consumo por dia é: 2.40 kilowatts
O valor a ser pago por ele é: 64.80