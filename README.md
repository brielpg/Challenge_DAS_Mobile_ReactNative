
# Dental Analytics Safe

## 1. Integrantes:
- RM554012 Gabriel Pescarolli Galiza  
- RM554258 Guilherme Gambarão Baptista
- RM553640 Marcelo Vieira Junior

## 2. Tecnologias Utilizadas:
- **React Native**
- **Expo**
- **Axios**
- **Async Storage**
- **Typescript**
- **NativeWind**

## 3. Estrutura de Pastas:
```bash
📂 DAS App Challenge/
  ├── 📁 app/
  │   ├── 📄 _layout.tsx
  │   ├── 📄 cadastro.tsx
  │   ├── 📄 cadastroendereco.tsx
  │   ├── 📄 index.tsx
  │   ├── 📄 paginainicial.tsx
  │   └── 📄 perfil.tsx
  ├── 📂 assets/
  │   └── 📂 images/
  │       ├── 🖼️ back.png
  │       ├── 🖼️ home.png
  │       ├── 🖼️ logout.png
  │       ├── 🖼️ mail.png
  │       ├── 🖼️ noprofilepicture.png
  │       ├── 🖼️ password.png
  │       ├── 🖼️ person.png
  │       └── 🖼️ phone.png
  ├── 📂 components/
  │   ├── 📄 footer.tsx
  │   └── 📄 header.tsx
```

## 4. Projeto

O projeto é um app software de triagem de dados da consulta antes de realizar a marcação, onde é feito um relatório através da descrição do usuário e de uma imagem de seus dentes, e então uma análise que indica a porcentagem de necessidade de uma consulta odontológica, dessa forma auxiliariamos as clínicas na priorização dos atendimentos. Vale ressaltar que essa porcentagem não substitui a análise de um profissional da OdontoPrev, a ideia é que os profissionais da OdontoPrev irão priorizar e analisar os casos com maior porcentagem de "veracidade" do problema.

## 5. Telas

**Link do Figma** - https://www.figma.com/design/ZiuZU4Ud4FvXuC7NcJNURu/DAS?m=auto&t=772ZN822UedR828Z-1  

1. Cadastro – Primeira tela de cadastro que o usuário preenche com as informações principais da sua clínica.  

2. Cadastro Endereço (API) – Tela de cadastro do endereço, para chegar nela o usuário tem que ter preenchido todas as informações da primeira tela de cadastro, nesta tela há comunicação com a API, ao clicar no botão de “ENVIAR” o app envia uma requisição POST para criar a entidade clínica.  

3. Login (API) – Primeira tela que o usuário irá ver se for sua primeira vez no app, aqui é onde o usuário irá informar seu cadastro e senha para entrar na sua conta, ao clicar no botão de “ENTRAR” o app envia uma requisição para a api verificar se existe o usuário informado, se existir o usuário tem acesso a outra parte do app e é salvo seu usuário no sistema.  

4. Página Inicial – Ao estar logado essa tela é liberada para o usuário, a partir dela na parte inferior, o usuário pode alterar para a tela de perfil clicando no imageButton com formato de pessoa.  

5. Perfil (API) – Tela de perfil onde o usuário pode verificar alguma de suas informações, nesta tela é feita uma requisição GET para obter informações extras que antes não foram salvas para exibi-las caso o usuário queira verificar, informações essas que aparecem ao pressionar algumas vez o imageButton com formato de pessoa; Pressionando o imageButton com formato de uma casa o usuário volta para a Página Inicial; Pressionando o imageButton com formato de porta (logout) o usuário desconecta da sua conta e volta para a tela de login.

6. Editar Perfil (API) - Tela onde o usuário pode alterar as suas informações cadastradas, nesta tela é feita uma requisição PUT enviando os dados que o usuário deseja alterar, pressionando o botão de salvar, a comunicação é feita com a api.
