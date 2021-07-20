# API

## Rotas

### /check-string [POST]
Recebe um texto e retorna a primeira vogal após uma consoante a qual não se repete e é antecessora a outra vogal:

Exemplo de requisição:
``` json
{
    "text": "eAbBABacafie"
}
```
Exemplo de resposta:

```json
{
  "string": "eAbBABacafie",
  "vogal": "i",
  "tempoTotal": "0ms",
  "requisitos": "O primeiro caractere Vogal, após uma consoante, onde a mesma é antecessora a uma vogal e que não se repita na string."
}
```

### /product [GET]
Recebe um nome e retorna esse nome

Exemplo de requisição:
``` json
{
    "name": "produto"
}
```
Exemplo de resposta:

```json
{
  "produto": "produto",
}
```
<!-- 
# Instalação

> npm i -->