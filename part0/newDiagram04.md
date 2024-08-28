# Diagrama de creación de una nueva nota

```mermaid
graph TD
    A[Usuario ingresa texto en el campo de entrada] --> B[Usuario hace clic en el botón Save]
    B --> C[Navegador envía solicitud POST a /new_note con el contenido de la nota]
    C --> D[Servidor recibe la solicitud y guarda la nueva nota]
    D --> E[Servidor responde con la nueva nota y un código de estado]
    E --> F[Navegador actualiza la lista de notas en la página]
    F --> G[Usuario ve la nueva nota en la lista] 
```