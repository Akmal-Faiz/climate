import './App.css';
import Carousel from './Carousel.js'

function App() {
  return (
    <div className="App">
      <Carousel
        data={[{
          "title": "What's your name?",
          "text": <p>{"Hi there! My name's Akmal."}</p>
        }, {
          "title": "Tell us about yourself!",
          "text": <div>
            <p>{"I'm currently working as a Data Science Engineer at DXC Technology. Despite the title, I've had to work on projects involving web development. I've often had to put on the hat of a full-stack developer."}</p>
            <p>{"My journey with React is still at its beginning, I've only worked with it on 2 projects. However, I've been working with HTML and vanilla Javascript for about 2 years."}</p>
            <p>{" I've also got plenty of experience on the backend. I with Flask to build small applications, but when I need something that scales quickly, I like to set up an API Gateway along with Lambda Functions on AWS. My preferred language is definitely Python, but I'm pretty comfortable with Node.js too."}</p>
            <h3>Why do you want to help?</h3>
            <p>{"I love programming and would like to use my skills for a good cause. I do believe that climate change is an important topic that more should be aware of. And I'll be honest, you guys are offering a pretty good deal."}</p>
          </div>
        }, {
          "title": "How might we contact you?",
          "text": <div>
              {"You can contact me via email at "}
              <a href="mailto: Akmal.Faiz756@gmail.com">Akmal.Faiz756@gmail.com</a>
            </div>
        }, {
          "title": "What's the URL of the API request?",
          "text": <div>
            <p><i>{"https://api.raisely.com/v3/events?startAtGTE=2021-05-24T13%3A21%3A21.829Z&sort=startAt&order=ASC&limit=20&campaign=f2a3bc70-96d8-11e9-8a7b-47401a90ec39"}</i></p>
            <p>{"I found this by inspecting the network tab on the chrome console. I've had plenty of experience with APIs, whether it be debugging the ones I wrote, or trying to figure out someone elses for web scraping."}</p>
          </div>
        }]}
      />
    </div>
  );
}

export default App;
