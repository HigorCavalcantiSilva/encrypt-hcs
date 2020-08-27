# Encriptador de Senhas

## Como funciona?
- Esse encriptador é apenas um algoritmo matemático que calcula os caracteres da STRING digitada, baseada em suas respectivas posições na tabela ASCII.

### Para deixar um pouco mais complicada a leitura e mais seguro, foi adicionada sequencialmente:
- **Cifra de César**;
- **Conversão para binário**;
- **Conversão para hexadecimal**.

----------------------

## Como adicioná-la em meu projeto?
Usando Node.js e NPM, você pode executar o seguinte comando no seu terminal dentro da pasta do seu projeto:
> ***npm install encrypt-hcs***

Este módulo será instalado dentro da pasta ***node_modules***.

--------------------------
## Como usá-lo em meu projeto?

Em seu arquivo **JS**, basta apenas você chamar o módulo baixado.

Exemplo:
> ***const Encrypt = require("encrypt-hcs");***

Agora basta apenas você instanciar a classe *Encrypt* e colocar um parametro para o método construtor (Tal parâmetro deve ser a STRING que será encriptada, ou a váriavel que contenha esta palavra)

Exemplo:
>***let e = Encrypt("MinhaPalavraQueSeraEncriptada")***
----------------
## Como eu pego a STRING já encriptada?

Para obter o retorno dela encriptada, basta apenas chamar o método ***getEncrypt()*** a partir da instância que foi criada.

Exemplo:
> ***e.getEncrypt()***
------------------------
## E caso eu queira desemcriptar um STRING que veio do banco de dados ou que já tenha sido gerada?

Após o instânciamento, já citado acima, você deverá chamar o método ***setUncrypt()*** com algum parametro STRING codificado anteriormente pelo ***encrypt-hcs***, dentro dos parenteses.

Exemplo:
> ***e.setUncrypt("agrr34v_34df_fwuhiud")***

Após isso, você deverá chamar o método ***getUncrypt()*** para obter a STRING desencriptada, tornando-se assim, a senha verdadeira digitada inicialmente.

Exemplo:
> ***e.getUncrypt()***

------------

## E se eu quiser mudar a STRING a ser encriptada após o instânciamento da classe ***Encrypt***?

Caso você queira mudar a palavra que será encriptada após o instânciamento da classe **Encrypt**, você deverá chamar o método ***setEncrypt()***, passando uma STRING como parâmetro, que será a senha posteriormente encriptada.

Exemplo:
> ***e.setEncrypt("NovaSenha")***

E se você chamar o método ***getEncrypt()*** após este comando, vai perceber que você receberá a nova senha encriptada.