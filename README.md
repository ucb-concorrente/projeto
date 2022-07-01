<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://imgur.com/oPD8MPh"><img src="https://i.imgur.com/oPD8MPh.png" width='40%' title="source: imgur.com" /></a>

  <h3 align="center">TIKETZ STARS</h3>

  
  <p align="center">
    Sistema de venda de ingressos de eventos de MPB.<br /> Feito por 
    Arthur Carneiro,
    Douglas Nadim, 
    Guilherme Paes,
    Mateus Colares.
    <br />
</div>

<!-- CONTEÚDOS -->
<details>
  <summary>Conteúdos</summary>
  <ol>
    <li>
      <a href="#sobre-o-projeto">Sobre o projeto</a>
      <ul>
        <li><a href="#construido-com">Construído com</a></li>
      </ul>
    </li>
    <li>
      <a href="#começando">Começando</a>
      <ul>
        <li><a href="#pre-requisitos">Pre-requisitos</a></li>
        <li><a href="#instalação">Instalação</a></li>
      </ul>
    </li>
    <li><a href="#uso">Uso</a></li>
    <li><a href="#licensa">Licensa</a></li>
    <li><a href="#contato">Contato</a></li>
  </ol>
</details>

<!-- Sobre o projeto -->

## Sobre o projeto

Existem ótimos modelos de sistema de vendas de ingressos disponíveis na Internet, no entanto, eu não encontrei um que realmente se adequava às necessidades de amantes de um genero específico, como o MPB, então nós criamos uma versao para atender a essa necessidade. Nós queremos criar um modelo tão incrível que será o favorito dos amantes do MPB.

Eis o porque:

- Tempo de busca por eventos de MPB otimizado, onde eles vão estar todos reúnidos em um só lugar.
- Sistema autenticado e seguro.
- Sistema objetivo e minimalista, a fim de trazer maior acessibilidade a todos os usuários.


### Construido com

Principais frameworks/bibliotecas usadas para inicializar seu projeto

- [Java](https://www.java.com/pt-BR/download/)
- [Docker](https://www.docker.com/products/docker-desktop/)
- [Springboot](https://spring.io/projects/spring-boot)
- [Meaven](https://maven.apache.org/download.cgi/)
- [ReactJS](https://pt-br.reactjs.org/)
- [Figma](https://www.figma.com/)


<!-- GETTING STARTED -->

## Começando
Para podermos rodar o projeto, é necessário seguir os passos abaixo<br/>
### INSTALANDO O GIT E O DOCKER <br/>
Docker tutorial para windows : https://docs.docker.com/desktop/windows/install/<br/>
Docker tutorial para unix : https://docs.docker.com/engine/install/ubuntu/ <br/>
### Comandos : <br/>
 ```sh
 git clone https://github.com/ucb-concorrente/projeto.git npm install npm@latest -g
  ```

Caso esteja em uma distribuição baseada em Unix/Linux. Verifique se o git ja veio instalado com :
 ```sh
 git --version.
  ``` 

Caso nao esteja instalado, rode o comando a seguir:
```sh
Ubuntu Based - sudo apt install git
  ``` 
```sh
Arch - install git
  ``` 


Para outras versoes, siga o guia oficial : https://git-scm.com/book/en/v2/Getting-Started-Installing-Git <br/><br/>
Agora com o docker e o git instalado, chegou a hora de instalar o setup do projeto
```sh
./deploy.sh
  ```

Após rodar o arquivo de setup do projeto, verifique se a instancia do docker esta rodando, utilizando:
```sh
docker ps
  ```

Caso retorne algo parecido com a imagem acima, significa que o projeto teve seu setup concluido com sucesso <br/>

![terminal](https://i.imgur.com/ej7Qwcu.png)




## Pre-requisitos

### Docker

Devido a otima documentacao encontrada no site oficial do [Docker](https://docs.docker.com/), seguiremos o guia informado por eles.

<b>Linux Based: </b>
[Docker for Linux](https://docs.docker.com/engine/install/ubuntu/)
</br>
<b>Windows Based:</b>
[Docker for Windows](https://docs.docker.com/desktop/windows/install/)

---

### Git

#### Caso esteja em uma distribuição baseada em Windows.

Siga o guia oficial do Git For Windows: [Git Windows](https://gitforwindows.org/)

#### Caso esteja em uma distribuição baseada em Unix/Linux

Verifique se o git ja veio instalado com: `git --version`.

Caso nao esteja instalado, rode o comando a seguir: </br>
<b>Ubuntu Based - </b>`sudo apt install git` </br>

<b>Arch Linux Based - </b>`install git` </br>

Para outras versoes, siga o guia oficial:
[Git Linux](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

---
### Node
Baixar e instalar NodeJS.
- [Download NodeJS](https://nodejs.org/en/download/)

### Yarn
Abra o terminal e rode os seguintes comandos : 
```sh
npm install --global yarn
  ```

### Instalação

Apos garantir que o Git e o Docker estao instalados.

1. Abra um terminal do git (git bash).
2. Clone o repositorio
   `git clone https://github.com/ucb-concorrente/projeto.git && cd projeto`
3. Instalar o setup de desenvolvimento `./deploy.sh`
4. Verifique se o docker foi iniciado com sucesso: `docker ps`.


<!-- USAGE EXAMPLES -->

## Uso
### Protótipo de alta fidelidade
![prototipo](https://media.giphy.com/media/wumybaf3r4FWdSmNCc/giphy.gif)


As experiências acumuladas demonstram que a preocupação com a TI facilita a criação da confidencialidade imposta pelo sistema. A implantação, na prática, prova que o desenvolvimento contínuo de distintas formas de codificação conduz a um melhor balancemanto de carga dos requisitos mínimos de hardware exigidos. Assim mesmo, a utilização de recursos de hardware dedicados demonstrou convincentemente que está estável o suficiente dos paradigmas de desenvolvimento de software.

---

### Diagramas 
#### fluxograma 
![diagramaSequencia](https://i.imgur.com/7akaIqt.png)
#### MER
![MER](https://i.imgur.com/aCMkDMd.png)

#### Diagrama de classes 
![DiagramaClasses](https://i.imgur.com/U0rwILm.jpg)

Nunca é demais lembrar o impacto destas possíveis vulnerabilidades, uma vez que a adoção de políticas de segurança da informação nos obriga à migração dos requisitos mínimos de hardware exigidos. Percebemos, cada vez mais, que a lógica proposicional exige o upgrade e a atualização de todos os recursos funcionais envolvidos. Assim mesmo, a criticidade dos dados em questão pode nos levar a considerar a reestruturação do sistema.



## Licensa

Distributed under the MIT License. See `LICENSE.txt` for more information.


<!-- CONTACT -->

## Contato

Grupo 3 - Programação concorrente e distribuida  

- [GIT](https://github.com/ucb-concorrente/projeto)

- [JIRA](https://concorrenteucb.atlassian.net/jira/software/c/projects/PPC/boards/2)



[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
