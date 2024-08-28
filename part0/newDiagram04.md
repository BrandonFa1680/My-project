# Diagrama de creación de una nueva nota

```mermaid
graph TD
    sequenceDiagram
    participant User
    participant Navegador
    participant Server

    User->>Navegador: Ingresa texto en el campo de entrada
    User->>Navegador: Hace clic en el botón Save
    Navegador->>Server: Envía solicitud POST a /new_note con la nota
    Server-->>Navegador: Responde con la nueva nota y un código de estado
    Navegador->>User: Actualiza la lista de notas
    User->>User: Ve la nueva nota en la lista
```