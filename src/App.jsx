import AccordionItem from './Component/Accrodian/AccordionItem';
import './App.css';

const faqs = [
  {
    title: 'What is HTML?',
    text: 'HTML is the 🌐 language of the web! It uses tags like <p> and <h1> to structure content on a webpage. 🏗️ These tags are enclosed in angle brackets, and elements can have attributes like "class" or "id" to add extra info. HTML makes websites 📄 look and feel the way they do in your web browser! 🚀',
  },
  {
    title: 'What is CSS',
    text: "CSS is like the 🎨 artist's palette for web design! It adds style and beauty to plain HTML 📄, letting you control colors, fonts, and layout. 🖌️ With CSS, your web pages can look as stunning as a work of art! 🌟",
  },
  {
    title: 'What is JavaScript',
    text: "JavaScript is like the 🎮 game-changer of web development! 🌐 It's a scripting language that brings your web pages to life with interactivity and dynamic features. With JS, you can make things move, respond to user actions, and create awesome web apps! 🚀✨",
  },
];

function App() {
  return (
    <div>
      <AccordionItem faqList={faqs} />
    </div>
  );
}

export default App;
