# Documentation

The task was to create a form for company and employee data. The project was made with React, Typescript, and Tailwind.<br />
The user can add employees up to a hundred, and the form will dynamically render the employee sections. <br />
After the data passes all validations, it gets sent to a fictional endpoint, and the sent data is shown on the screen in JSON format.<br />
The project is hosted with Firebase: https://job-interview-exercise.web.app/

## Components

- Form components in the components folder handle the UI of the app, and process the incoming data.
- Contexts hold the employee and company data itself, so all of the form components can access them.
- There are two utils: ValidationUtil for form validation, and submitDataUtil for the POST API request.

## Installation

1. Clone this repository

```
git clone https://github.com/SLorant/ReactInterviewTask.git
```

2. Navigate to project directory and install dependencies using npm:

```
cd ReactInterviewTask
npm install
```

3. Start the development server:

```
npm run dev
```

Made by Lorant Sutus.
