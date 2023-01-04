/* 
Git
Es un sistema de control de versiones 
nos permite revertir cambios, comparar, conocer quién los editó entre otras cosas.
*/

/* 
Github
Es una plataforma para alojar tus repositorios Git de forma remota
*/

/* 
Instalación
https://git-scm.com/downloads
*/

/* 
Checkear la versión
git -v 
git --version
*/

/* 
Configurar git por primera vez
git config user.name "josemiranda989"
git config user.email "josemiranda989@gmail.com"
*/

/* 
Registrarse en github
https://github.com/signup
*/

/*
Crear un nuevo repositorio en github
- Mostrar los pasos
*/

/*
--Conocer el estado del repositorio
git status 
--Crear un repo local
git init 
--agregar archivos
git add .
--añadir un commit  o punto de control
git commit -m "detalle de los cambios"
--vincular a repositorio remoto
git remote add origin https://github.com/josemiranda989/repositorionuevo
--chequear si estamos vinculados a correctamente
git remote -v 
--subir cambios
git push origin master
--Sincronizar repo remoto con local
git pull origin master
--Clonar repositorio
git clone https://github.com/josemiranda989/repositorionuevo
--Resolver conflictos cuando no nos deja pushear
git pull (descargar los cambios )
comparar cambios con conflictos para confirmar cúal es el correcto
Current == cambios actuales
incoming == cambios entrantes
Una vez corregidos hacemos un nuevo commit
git add .
git commit -m "conflicto solucionado"
git push origin master
*/



