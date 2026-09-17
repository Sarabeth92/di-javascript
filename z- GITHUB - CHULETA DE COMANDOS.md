# 🐙 GIT + GITHUB — CHULETA DE COMANDOS

## 1. Comprobar que Git está instalado

```bash
git --version
```

Muestra la versión instalada de Git.

---

# 🔗 PRIMERA VEZ — CONECTAR UN PROYECTO CON GITHUB

## 2. Inicializar Git en el proyecto

Abre la terminal de VS Code dentro de la carpeta del proyecto:

```bash
git init
```

Convierte la carpeta actual en un repositorio Git.

> ⚠️ Esto solo se hace una vez.

---

## 3. Conectar el proyecto con el repositorio de GitHub

```bash
git remote add origin URL_DEL_REPOSITORIO
```

Ejemplo:

```bash
git remote add origin https://github.com/usuario/mi-proyecto.git
```

`origin` es el nombre que normalmente se utiliza para referirse al repositorio remoto de GitHub.

---

## 4. Comprobar que está conectado

```bash
git remote -v
```

Deberías ver algo parecido a:

```text
origin  https://github.com/usuario/mi-proyecto.git (fetch)
origin  https://github.com/usuario/mi-proyecto.git (push)
```

---

# 📤 PRIMER COMMIT

## 5. Comprobar los archivos modificados

```bash
git status
```

Te permite ver:

* archivos modificados
* archivos nuevos
* archivos eliminados
* archivos preparados para commit

Es uno de los comandos más útiles de Git.

---

## 6. Preparar los archivos

Para añadir TODOS los cambios:

```bash
git add .
```

Para añadir solamente un archivo:

```bash
git add nombreArchivo.java
```

Por ejemplo:

```bash
git add README.md
```

---

## 7. Crear el commit

```bash
git commit -m "Descripción del cambio"
```

Ejemplo:

```bash
git commit -m "Añadido formulario de animales"
```

Un **commit** es como guardar una versión/punto de control del proyecto.

Conviene usar mensajes que expliquen qué has hecho:

```bash
git commit -m "Añadido login de usuarios"
```

mejor que:

```bash
git commit -m "cambios"
```

---

## 8. Establecer `main` como rama principal

Si es la primera vez:

```bash
git branch -M main
```

---

## 9. Subir el proyecto a GitHub por primera vez

```bash
git push -u origin main
```

El `-u` hace que Git recuerde que tu rama `main` local corresponde con `origin/main`.

Por eso normalmente solo necesitas escribirlo la primera vez.

---

# 🔄 TRABAJO DIARIO

Cuando el proyecto YA está conectado con GitHub, normalmente solo necesitarás estos comandos.

## 1. Descargar cambios de GitHub

Antes de empezar:

```bash
git pull
```

Descarga los cambios que haya en GitHub y los integra en tu proyecto local.

Especialmente importante si trabajas desde varios ordenadores o hay más personas modificando el repositorio.

---

## 2. Trabajar normalmente

Modifica tus archivos desde VS Code.

Cuando termines una parte del trabajo:

```bash
git status
```

Comprueba qué has cambiado.

---

## 3. Preparar los cambios

```bash
git add .
```

---

## 4. Crear el commit

```bash
git commit -m "Descripción de lo que he hecho"
```

Por ejemplo:

```bash
git commit -m "Añadida gestión de incidencias"
```

---

## 5. Subirlo a GitHub

```bash
git push
```

---

# ⭐ FLUJO QUE USARÁS CASI SIEMPRE

Antes de trabajar:

```bash
git pull
```

Después haces tus cambios.

Cuando quieras guardarlos en GitHub:

```bash
git status
git add .
git commit -m "Descripción de los cambios"
git push
```

Por tanto, la secuencia que merece la pena memorizar es:

```bash
git pull

# TRABAJAR EN EL PROYECTO

git status
git add .
git commit -m "Mi cambio"
git push
```

---

# 📥 DESCARGAR UN PROYECTO DE GITHUB POR PRIMERA VEZ

Si el proyecto YA existe en GitHub y quieres descargarlo a tu ordenador, no necesitas hacer `git init`.

Utiliza:

```bash
git clone URL_DEL_REPOSITORIO
```

Ejemplo:

```bash
git clone https://github.com/usuario/mi-proyecto.git
```

Git creará automáticamente la carpeta, descargará el proyecto y configurará `origin`.

Después:

```bash
cd mi-proyecto
```

Y puedes abrirlo en VS Code.

---

# 🌿 RAMAS

Ver las ramas:

```bash
git branch
```

Crear una rama:

```bash
git branch nombre-rama
```

Cambiar a ella:

```bash
git switch nombre-rama
```

Crear una rama y entrar directamente:

```bash
git switch -c nombre-rama
```

Ejemplo:

```bash
git switch -c formulario-animales
```

Volver a `main`:

```bash
git switch main
```

---

# 🕘 VER HISTORIAL DE COMMITS

```bash
git log
```

Versión resumida:

```bash
git log --oneline
```

Ejemplo:

```text
8af31c2 Añadido formulario animales
713f211 Corregido login
201ab45 Creada estructura inicial
```

---

# ↩️ DESCARTAR CAMBIOS

Si has modificado un archivo pero TODAVÍA NO has hecho `git add`:

```bash
git restore archivo
```

Por ejemplo:

```bash
git restore README.md
```

⚠️ Esto elimina tus modificaciones locales de ese archivo y recupera la última versión guardada en Git.

---

# 📦 RESUMEN ULTRARRÁPIDO

### Proyecto nuevo → GitHub

```bash
git init
git remote add origin URL
git add .
git commit -m "Commit inicial"
git branch -M main
git push -u origin main
```

### Proyecto existente en GitHub → ordenador

```bash
git clone URL
```

### Día a día

```bash
git pull
git status
git add .
git commit -m "Descripción"
git push
```

### Comprobar conexión

```bash
git remote -v
```

### Ver historial

```bash
git log --oneline
```

### Ver ramas

```bash
git branch
```

### Crear y entrar en una rama

```bash
git switch -c nombre-rama
```

---

## 🧠 QUÉ SIGNIFICA CADA COMANDO

| Comando               | Para qué sirve               |
| --------------------- | ---------------------------- |
| `git init`            | Inicializar Git              |
| `git clone`           | Descargar un repositorio     |
| `git status`          | Ver qué has cambiado         |
| `git add .`           | Preparar todos los cambios   |
| `git commit -m "..."` | Crear un punto de guardado   |
| `git pull`            | Descargar e integrar cambios |
| `git push`            | Subir tus commits            |
| `git remote -v`       | Ver el repositorio conectado |
| `git branch`          | Ver ramas                    |
| `git switch`          | Cambiar de rama              |
| `git log --oneline`   | Ver historial resumido       |
| `git restore`         | Descartar cambios locales    |

### Regla mental

**PULL → TRABAJO → ADD → COMMIT → PUSH**

⬇️ `pull` = traigo lo de GitHub
➕ `add` = preparo mis cambios
📸 `commit` = guardo una versión
⬆️ `push` = la envío a GitHub
