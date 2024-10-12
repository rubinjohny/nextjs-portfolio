export type Project = {
  title: string;
  description: string;
  cardImage: string;
  gif: string | undefined;
  carouselImages: string[];
  tags: string;
};

export const projects = [
  {
    title: "Taeble",
    description:
      "Even midnight cravings can be digitized now. Taeble is a one-stop solution for restaurants and customers to digitize all their food needs. Food ordering, in-restaurant dining and delivery are some of the main features of this exciting app. The app was created using React Native and supports both iOS and Android. ",
    tags: "React Native, Redux, Google maps API, Xcode, Android Studio and Amazon AWS",
    cardImage: "/projects/taeble/taeble.png",
    gif: "/projects/taeble/taeble-gif.gif",
    carouselImages: [],
  },
  {
    title: "Movie Predictor",
    description:
      "Combining Convolution Neural network with creativity this is a visual analysis tool that predicts a movie using user sketches. We took into consideration all the keywords which the user can relate to a specific movie. For eg, the system can predict Titanic by drawing a ship and an iceberg or the movie Spider-man with sketches of a spider and a man. Think of this as an innovative new twist to Pictionary. The project was based on Google draw.io project with which they are training their models to identify doodle sketches. We also came up with a sketch pad with which users can input doodle sketches and train our model to be more accurate and support more movies. The project was voted one of the best ML projects of Spring ‘20 the model boasts a user sketches 81.55% accuracy.",
    tags: "Python Tensorflow and Google Colab",

    cardImage: "/projects/guessTheMovie/ML_Movie.png",
    gif: "/projects/guessTheMovie/batman-giphy.gif",

    carouselImages: [
      "/projects/guessTheMovie/1.png",
      "/projects/guessTheMovie/2.png",
      "/projects/guessTheMovie/3.png",
      "/projects/guessTheMovie/4.png",
      "/projects/guessTheMovie/5.png",
    ],
  },
  {
    title: "Route Suggestor",
    description:
      'Through the park or the hills? An innovative application that suggests jogging circuits using a custom algorithm. The application takes in the user’s distance preferences and suggests jogging circuits that matches the total distance. The two "Generate Route" buttons are used to generate routes with the farthest point at an angle of ±45 degrees. For example, if you start pointed towards the north, the left button generates a route with the farthest end in the west direction and the right button generates a route in the east direction. This allows the users to essentially generate different circuits without changing their total distance.  Since this application was targeted for San Francisco (famouse for its steep roads which most joggers like myself find annoying 😅 ), the resultant route also shows four coloured markers at equal intervals. The blue marker is the starting point, red marker shows a point that\'s elevated from the start position and a green marker indicates a lower elevation. The total distance, elevation and duration for the jog is shown to the user too.',
    tags: "React Native, Google maps API, Xcode and Android",
    cardImage: "/projects/jogger/jogger.png",
    gif: "/projects/jogger/jogger.gif",
    carouselImages: [
      "/projects/jogger/1.png",
      "/projects/jogger/2.png",
      "/projects/jogger/3.png",
      "/projects/jogger/4.png",
    ],
  },
  {
    title: "Json Mapper",
    description:
      "This is a reusable react component that helps map one dataset to another. For example, If you have a source excel file with fields first name and last name, but your destination has a schema where the key is name. Using this component one can map each of the names in destination as first name followed by last name from the source. So what about numbers? in case of multiple numbers being mapped to a single field, by default its sum is taken. The component lets us do this with simple drag and drop functionality. And yes, it does allow you to reorder the items too.",
    tags: "React",
    cardImage: "/projects/json-mapper/json-mapper.png",
    gif: "/projects/json-mapper/json-mapper.gif",
    carouselImages: [
      "/projects/json-mapper/1.png",
      "/projects/json-mapper/2.png",
      "/projects/json-mapper/3.png",
      "/projects/json-mapper/4.png",
      "/projects/json-mapper/5.png",
      "/projects/json-mapper/6.png",
      "/projects/json-mapper/7.png",
      "/projects/json-mapper/8.png",
      "/projects/json-mapper/9.png",
    ],
  },
  {
    title: "Metrofish",
    description:
      "An ERP system created for the South Indian small business’s fish trade. With functionalities such as inventory management, billing, dynamic updates regarding low inventory and restocking inventory, stock requests inorder to move inventory from one to store to another to balance out customer demands and other features this system fully supports all the activities necessary to support small businesses with daily sales. The system also had 6 different logins for each type of user including Admins, Purchase managers, Human Resource Managers, Store Managers etc. The idea was to help small businessess scale up their business and essentially lower the inventory waste or expiration. Additionally, I intend to collect sales data and Predict how much inventory is to be kept at each store for each day in order to maximise profits. This system was successfully deployed in 3 stores and is actively growing.",
    tags: "React, Redux, LoopBackJS, NodeJS and MongoDB",
    cardImage: "/projects/metrofish-img.jpeg",
    gif: undefined,
    carouselImages: [],
  },
  {
    title: "Self-Sanitization",
    description:
      'Self Sanitization of Images using Steganography - Steganography is the practice of concealing messages or information within other nonsecret text or data. Took this to a next level by hiding the data inside the image itself 😂. The motive was to stop hackers from gaining access to sensitive images by concealing the sensitive portion. This was acheived by extracting the Most Significant Bits from the sensitive region and embedding them to Least Significant Bits of the cutout portion. The system was immune to Steganalysis attacks which meant that the hackers didn\'t know where exactly to look in the first place. "The closer you look the lesser you see."',
    tags: "Matlab - Image Processing",
    cardImage: "/projects/sanitization/digital-sanitization.png",
    gif: "/projects/sanitization/sani-gif.gif",
    carouselImages: [
      "/projects/sanitization/1.png",
      "/projects/sanitization/2.png",
      "/projects/sanitization/3.png",
      "/projects/sanitization/4.png",
    ],
  },
];
