# pruebaSt
Como usar el proyecto en modo locar

## Backend

Entramos a la carpeta backend, creamos un entorno vitual en esta carpete

```bash
python3 -m venv venv
source venv/bin/activate
```

Instalamos los requiermientos para usar el proyecto y corremos el proyecto, importante dejarlo en el puerto por defecto de Django (http://127.0.0.1:8000/) ya que las llamadas estan con ese link

```bash
pip3 install -r requirements.txt

```

Iniciamos el servidor

```bash
python3 manage.py runserver
```

## Frontend

Entramos a la carpeta frontend, instalamos las dependencias, hacemos el build del proyecto y lo iniciamos

```bash
npm install
npm run build
npm start
```



