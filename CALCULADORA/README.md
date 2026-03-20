# ⚡ Calculadora de Consumo de Energia Elétrica

Uma ferramenta simples e eficiente desenvolvida em **JavaScript** para calcular o consumo diário de eletrodomésticos e o custo estimado na conta de luz mensal.

---

## 🚀 Como funciona?

O script solicita ao usuário informações básicas sobre o uso de um aparelho e realiza a conversão automática de unidades, se necessário.

### 📥 Entradas de Dados:
1. **Nome do Eletrodoméstico:** (ex: Geladeira, Ar condicionado).
2. **Unidade de Potência:** Opção entre **Watts (W)** ou **Kilowatts (kW)**.
3. **Potência do Produto:** O valor numérico da potência.
4. **Tempo de Uso:** Quantidade de horas que o aparelho fica ligado por dia.
5. **Taxa da Concessionária:** O valor cobrado por cada kWh na sua região.

---

## ⚙️ A Lógica de Cálculo

O sistema utiliza as seguintes fórmulas matemáticas para chegar ao resultado:

> [!TIP]
> **Se a potência for em Watts:**
> $$KWh = \frac{Potência \times Tempo}{1000}$$
>
> **Cálculo Mensal:**
> $$Custo = (KWh \times 30 \text{ dias}) \times Taxa$$

---

## 💻 Exemplo de Saída no Console

Ao executar o script e preencher os dados, você verá um resumo detalhado no console do navegador:

```text
O eletrodoméstico é: Ar Condicionado
O consumo por dia é: 12.00 kilowatts
O valor mensal a ser pago por ele é: R$ 288.00