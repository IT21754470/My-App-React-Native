# My React Native App
Welcome to My React Native App! This project showcases a variety of features built with React Native, including Firebase authentication, Redux state management, a character listing feature using the Thrones API, and a profile management screen. Additionally, a simple Next.js landing page is provided for the app.

# Features

1. Firebase Authentication and Database

Feature Description: Users can sign up, sign in, and persist their login state across the application.
How to Use:
Sign Up: Navigate to the Sign Up screen and enter your email and password to create a new account.
Sign In: Enter your credentials on the Sign In screen to access the application.
Persistent Login: Upon successful sign-in, users remain logged in across sessions.
Technical Details: Integrated Firebase Authentication for user sign-up and sign-in. Firebase Realtime Database is used to manage user data.
2. Character Listing from Thrones API
Feature Description: Fetch and display a list of characters from the Thrones API.
How to Use: After signing in, navigate to the Characters screen to view a list of Game of Thrones characters.
Technical Details: Fetch data from https://thronesapi.com/api/v2/Characters and display character information including images and names.
3. User Profile Screen
Feature Description: Display user information on the Profile screen and provide a logout option.
How to Use: Navigate to the Profile screen to view your email and name. Use the logout button to sign out and be redirected to the Sign In screen.
Technical Details: Displays user details from Firebase Authentication and includes a logout functionality.
4. Redux for State Management
Feature Description: Manages application state using Redux.
How to Use: Redux is used to manage and persist user authentication state and any other global states.
Technical Details: Implemented redux and react-redux to handle state management.
5.Install dependencies
npm install

6.Run the App
npm start
