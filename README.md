# Book Store Project

Welcome to the Book Store Project! This full-stack MERN (MongoDB, Express.js, React, Node.js) project allows users to display, add, edit, and delete books. The user interface is styled using Tailwind CSS and supports both card and tabular formats for displaying books.

## Project Structure

The project is organized into backend and frontend components:

**Root**: Contains `frontend` folder, `backend` folder,  `.gitignore` and `README.md`.
### Backend
- **Backend Folder**:
  - `package.json`: Defines backend dependencies and scripts.
  - `models`: Directory containing MongoDB schema definitions.
  - `routes`: Directory containing Express.js route handlers.
  - `index.js`: Main server code for handling HTTP requests and database connections.
  - `config.js`: Configuration file containing MongoDB URL and port number.

### Frontend
- **Frontend Folder**:
  - `public`: Directory containing static assets.
  - `src`: Directory containing React components and application logic.
    - `assets`: Directory containing images and icons.
    - `components`: Directory containing reusable React components.
    - `pages`: Directory containing page-level components for routing.
    - `App.jsx`: Main component for rendering the application.
    - `index.css`: Global CSS styles for the application.
    - `main.jsx`: Entry point for rendering the React application.
  - `index.html`: HTML template for the React application.
  - `package.json`: Defines frontend dependencies and scripts.

## Installation

Make sure that you have nodejs installed in your system by going to the terminal and writing `node -v`.

To run the project locally, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/sushruta19/book-store.git 
   ```

2. Navigate to the `backend` folder and write down your mongdb cloud URL in config.js. This is how it will look. Write down your password in the `<password>` place. 
    ```
    export const mongoDBUrl = 'mongodb+srv://root:<password>@book-store.bkd4vlm.mongodb.net/books-collection?retryWrites=true&w=majority&appName=book-store';
    ```
3. Install backend dependencies:
   ```
   cd backend
   npm install
   ```

3. Navigate to the `frontend` folder and install frontend dependencies:
   ```
   cd ../frontend
   npm install
   ```


## Running the Project

To run the project locally:
1. Start the backend server:
   ```
   cd backend
   npm start
   ```

2. Start the frontend development server:
   ```
   cd ../frontend
   npm run dev
   ```
    Your Book Store application is now running locally. The backend server is running at [http://localhost:7000](http://localhost:7000) and the frontend development server is running at [http://localhost:5173](http://localhost:5173).

3. Open a web browser and visit [http://localhost:5173](http://localhost:5173) to access the Book Store application. You will see the home page displaying books in the selected format (either card or table).


## Features

- Display books in card or tabular format.
- Add new books to the database.
- Edit existing book details.
- Delete books from the database.
- Performs validations on the data inserted or edited.

## Technologies Used

- **Backend**: Node.js, Express.js, MongoDB (with Mongoose).
- **Frontend**: React, React Router DOM, Tailwind CSS.
- **Other**: Axios (HTTP client), Notistack (for notifications), Vite (for React development).

## Usage

Upon running the project locally, access the Book Store website in your browser. Use the navigation buttons to browse through different pages, add, edit, or delete books as needed.

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or improvements for the Blog-Application, please do the following steps : 
- **Fork** the repository. <br>![Fork Icon](https://i.imgur.com/an7hXVR.png)
- **Clone** the repository: Clone the forked repository to your local machine using the following command:
```bash
git clone <forked-repo-url>
```
This will create a local copy of the project that you can work on.
- **Create a new branch**: Before making any changes, create a new branch to work on your changes. Naming the branch based on the feature or bug fix you're working on is a good practice. For example:
```bash
git checkout -b improvement/ui-refactoring  #for improvements
git checkout -b bugfix/login-issue          #for bugfix
git checkout -b feature/user-registration   #for new features
git checkout -b hotfix/security-vulnerable  #for hotfix
```
Here the slash(/) doesn't denote any address but its a part of the new branch name "bugfix/anything", etc.
- **Make your changes**: Make the necessary changes or additions to the project
- Stage, commit and push your changes to **your** remote forked repo at the new branch(not the master branch of your remote forked repo)
```bash
git add .
git commit -m "Add a concise commit message describing the changes"
git push origin <new-branch-you-worked-on>
```
- **Create a pull request**: Then, from your forked repository's page on GitHub, click on the "New pull request" button to create a pull request (PR) to the original repository. Provide a clear description of the changes you've made and why they are valuable. It's also helpful to reference any relevant issues or feature requests.
- The project maintainers or other contributors may provide feedback or request changes on your pull request. Be responsive and address the feedback accordingly. This may involve making additional commits to your branch based on the feedback.
- Once your pull request is approved, the project maintainers will merge your changes into the main branch. At this point, your contributions are part of the project.

Please make sure to follow these guidelines to ensure a smooth and collaborative contribution process. If you have any questions or need further assistance, feel free to reach out to us.

Thank you for your contribution!

#### ! Please put `node_modules/` in your `.gitignore` file. ! Do not push them in remote repo!
## License
This project is licensed under the [MIT License](LICENSE)
