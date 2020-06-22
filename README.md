# Sileno - Proteja sua integridade
> É mais fácil conviver com uma má consciência do que com uma má reputação.​

![enter image description here](https://img.shields.io/github/stars/ThiagoLeaoDev/Sileno)  ![enter image description here](https://img.shields.io/github/issues/ThiagoLeaoDev/Sileno?style=flat-square)

O projeto Sileno define-se por um aplicativo de proteção de integridade social para dispositivos mobile. Sua principal característica é garantir a sua imagem e integridade em eventos sociais ou quaisquer outro tipo de confraternização. 
Para tal, contamos com funções que consistem desde alertar os membros da sessão do nosso usuário até prevenir acesso a redes sociais pelo período de tempo definido anteriormente pelo usuário.
O projeto encontra-se em desenvolvimento e sobre a licença LGPL. O progresso pode ser acompanhado a seguir.
# Requerimentos
Aplicativos desenvolvidos em react-native geralmente necessitam de um Android 4.1 ou superior. você pode usar Windows, Linux ou macOS para buildar esse projeto, entretanto caso seu foco seja iOS, você está limitado ao macOS. Por sorte, utilizamos o Expo, tal qual você pode baixar em seu iOS para contornar esse problema.
# Instalação & Desenvolvimento
1. Para começar, todos os desenvolvedores utilizam o Node na versão 12.17. Para checar sua versão utilize o comando abaixo no terminal:
```bash
$ node -v
```
Caso não esteja de acordo com nossa versão, você pode baixa-lá [clicando aqui.](https://nodejs.org/download/release/v12.17.0/) Isso pode evitar alguns problemas de sintaxe que possa surgir.

2. Após a instalação do Node, clone nosso repositório pelo [GitHub Desktop](https://desktop.github.com/) ou use o comando: 
```bash
$ git clone https://github.com/ThiagoLeaoDev/Sileno.git
```
3. Utilize o comando `yarn install` dentro da raiz da pasta do projeto para a instalação das dependencias.
4. Com o terminal na raíz do projeto, utilize `expo start`. Caso não tenha o Expo instalado na sua máquina, utilize o seguinte comando:
```bash
npm install expo-cli --global
```
5. Se você está usando um emulador:
5.1 Baixe o aplicativo do Expo através da Play Store
5.2 Copie o link dado pelo Expo, geralmente `exp://<seuip>/19000`
6. Se você está usando um celular:
6.1 Baixe o aplicativo do Expo através da Play Store
6.2 Escaneie o código QR disponibilizado pelo Expo


# Progresso

#### Front-end
- Registro
    - [x]  Consumir api de códigos de área
    - [ ]  Máscara para o input de telefone
    - [ ]  Enviar SMS para o telefone
    - [ ]  Verificar se o código inserido está correto
    - [ ]  Reenviar o código novamente caso requisitado (1:30 delay)
    - [x]  Inserção de imagem da galeria
    - [x]  Inserção de imagem da câmera (tirar foto)
    - [ ]  Verificações no Input de Nome do usuário
-  Perfil
    - [ ]  Importar Lista de amigos
    - [ ]  Adicionar nova foto (galeria/câmera)
    - [ ]  Menu lateral
- Mapa
    - [x]  Pegar a localização do usuário
    - [x]  Retornar câmera a localização do usuário
    - [x]  Mostrar a localização do usuário
    - [ ]  Importar a localização dos sátiros
    - [x]  Mostrar a localização dos sátiros
    - [ ]  Pesquisar localização sátiro/estabelecimento
    - [ ]  Traçar rota noite anterior
    - [ ]  Mostrar localização do estabelecimento
    - [x]  Criar cards de estabelecimento
    - [x]  Encaminhar do card para a localização
- Configurações
    - [ ]  Alterar o tema do aplicativo
    - [ ]  Termos de uso
- Noite
    - [ ]  Timer
    - [ ]  Input para duração da noite
    - [ ]  Cálculos da noite
    - [ ]  Notificações da noite
	- [ ]  Lista de amigos
    - [ ]  mini bar para navegação
    - [x]  Listar amigos
    - [ ]  Opção de adicionar como sátiro
    - [ ]  Opção de Bloquear
    - [ ]  Adicionar novo contato
	- [ ]  Lista de sátiros
    - [x]  Localização do sátiro ao arrastar
	- [x]  Lista de contatos
    - [x]  Listar contatos
    - [x]  Bloquear contato
	- [x]  Leitor Qr code
    - [x]  Ler Qr code
    - [ ]  Ao ler encaminhar a adicionar aos contatos (nativo)
    - [x]  Gerar Qr code
	- [ ]  Edição do perfil
    - [ ]  Editar imagem de perfil/wallpaper
    - [ ]  Editar Nome/Desc
	- [ ]  Adicionar contatos
    - [ ]  Abrir adicionar aos contatos (nativo)
	- [ ]  Bloqueados
    - [ ]  Listar contatos bloqueados
    - [ ]  Desbloquear contatos
	- [ ]  Configurações do perfil
	- [ ]  Alerta de assédio
    - [ ]  Gesture para ativar a função
    - [ ]  Enviar Notificação para os sátiros
	- [ ]  Noite Bloqueada
    - [ ]  GIF noite bloqueada
	- [ ]  Desbloquear noite
    - [ ]  Desafios para desbloquear noite
- Carregamento do app
    - [ ]  Mostrar frases enquanto carrega
    - [ ]  Animação do logo ao carregar

#### Extra Página
- [x]  Adicionar SVGs
- [x]  Tabbar



## Contato
Caso você deseje entrar em contato com um desenvolvedor, você pode utilzar qualquer um dos seguintes e-mails:

- Bruno - bruno.trigueiro@outlook.com
- Thiago - thiagoleao.dev@gmail.com
- Vitor - vitorberto.dev@gmail.com
- Henrique - devhenrique7@gmail.com
