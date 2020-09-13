//import images here
import profile_picture from "../assets/images/profile_picture.JPG";
import avengers from "../assets/images/projects_image/avengers.PNG";

const data = {
  intro: {
    profile_picture_url: profile_picture,
    greeting_text: "Hi there ...",
    name_heading: "I'm Rohit Anand 🙋‍♂️",
    text_corousal: [
      "a software developer...",2000,
      "a sport lover...",1000,
      "a proud Indian...",1000,
    ],
  },
  projects: {
    dataArray:[
      {
        id : 1,
        project_name : "The Avengers",
        project_url : "https://rohitanand11.github.io/avengers/",
        image_path : avengers,
        project_description :"A webpage which consists of image carousel, Records of the all the movies of the Avengers and their individual statistics. UI is the main focus of this project.",
      },
      {
        id : 2,
        project_name : "SpaceX",
        project_url : "https://rohitanand11.github.io/avengers/",
        image_path : avengers,
        project_description : "This project makes use of SpaceX api and renders all the space missions that they had and have. There are also options to filter according to launch year, successful launch and landing",
      },
      {
        id : 3,
        project_name : "Covid-pidea",
        project_url : "https://rohitanand11.github.io/avengers/",
        image_path : avengers,
        project_description : "Covid-pidea is a live COVID tracker and shows statistics of COVID cases in India and other 186 countries. The data is updated daily and is fetched from the official covid19 API.", 

      },
      {
        id : 4,
        project_name : "The Avengers",
        project_url : "https://rohitanand11.github.io/avengers/",
        image_path : avengers,
        project_description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, ",
      },
      {
        id : 5,
        project_name : "Food-builder",
        project_url : "https://rohitanand11.github.io/avengers/",
        image_path : avengers,
        project_description : "Food Ingredient Builder is a large scale responsive web-app developed by using React JS framework. It help the user to add and remove ingredients which will in-turn effectively change the graphical view of the food. For building this , I have used states, props, CSS ,components, google fonts, backdrops, Modals ,dynamic rendering of the styles based on the logic.",
      },
      {
        id : 6,
        project_name : "Cricket-card Game",
        project_url : "https://rohitanand11.github.io/avengers/",
        image_path : avengers,
        project_description : "React Js project built mainly focusing on styling the web app.Used google fonts and CSS (also flex) for styling the cards.Wrote logic for randomly aligning the card and assigning a player as winner or looser according to total experience he got.",
      },
      {
        id : 7,
        project_name : "Petrichor",
        project_url : "https://rohitanand11.github.io/avengers/",
        image_path : avengers,
        project_description : "Petrichor is a weather app website which has a search bar which takes in input from the user and dynamically renders the weather data of that area after making an api call.",
      },
      {
        id : 8,
        project_name : "Food App",
        project_url : "https://rohitanand11.github.io/avengers/",
        image_path : avengers,
        project_description : "This is a react-native app built to run both on android and ios and it makes use of 3rd party API (zomato API). I made use of react- navigations ,states,props,components,hooks,react native styling,2 way-binding and axios for this project. Data is fetched making a query with the help of axios.The fetched data is rendered on the app screen with a filtering logic of price category using JS logic. ",
      },
      {
        id : 9,
        project_name : "Guess my number",
        project_url : "https://rohitanand11.github.io/avengers/",
        image_path : avengers,
        project_description : "It is a mobile app built in react-native. It is a number game and uses of functional components and hooks along with navigation with the help of states. Build a game logic along with touchable inputs ,styling. Made the navigation only with the help of managing states.",
      },


    ]
    

  }
};

export default data;
