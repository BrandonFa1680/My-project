## Diagrama de aplicación de una sola página

```mermaid
sequenceDiagram
    participant Navegador
    participant Server

    Navegador->>Server: Solicita el archivo HTML para la SPA
    Server-->>Navegador: Responde con el archivo HTML
    Navegador->>Server: Solicita el archivo spa.js
    Server-->>Navegador: Responde con spa.js
    Navegador->>Server: Solicita los datos JSON de las notas
    Server-->>Navegador: Responde con los datos JSON
    Navegador->>Server: Renderiza la SPA con las notas
 ```