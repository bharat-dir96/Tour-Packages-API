### Cloning the Repository

--> Clone the repository using the command below:
```bash
git clone https://github.com/bharat-dir96/Tour-Packages-API.git
```

--> Move into the directory where we have the project files:
```bash
cd Tour-Packages-API
```

--> Create a virtual environment:
```bash
python -m venv envname
```

--> Activate the virtual environemnt:
```bash
envname\scripts\activate
```

--> Install the requirements:
```bash
pip install -r requirements.txt
```

#
### Running the App

# To run the backend  

--> First, move to the backend folder:
```bash
cd backend
```

--> Then, run following command to run django server:
```bash
python manage.py runserver
```

> ⚠ Then, the development server will be started at http://127.0.0.1:8000/

API ENDPOINTS:
"{root_url}/api"
"{root_url}/api/packages"
"{root_url}/api/packages/:code"


# To run the Frontend 
--> Move to the irctc-clone folder:
```bash
cd irctc-clone
```

--> Make sure to install npm with:
```bash
npm install
```

--> Then, run following command to start vite server:
```bash
npm run dev
```

> ⚠ Then, the development server will be started at http://localhost:5173/
