import React from "react";
import "./styles.css";
import { useState } from "react";

var hello = {
  Program: [
    {
      Title: "Getting started with 'GO'",
      Description:
        "you'll get a brief introduction to Go programming. Along the way, you will",
      Link: "https://www.youtube.com/watch?v=YS4e4q9oBaU"
    },
    {
      Title: "Let’s Begin with Python",
      Description:
        "Here you'll find step-by-step instructions for getting started with the Python programming language.",
      Link: "https://www.youtube.com/watch?v=WGJJIrtnfpk"
    },
    {
      Title: "Node.js",
      Description:
        "This video on JavaScript Tutorial will provide you with a detailed and comprehensive knowledge about JavaScript. In this JS Tutorial for Beginners you will learn Js concepts from scratch and also how to create your first Web Page. ",
      Link:
        "https://www.youtube.com/watch?v=Ezk2AwqgS9Q&list=PLzvhQUIpvvuj5KPnyPyWsvgyzNkX_ACPA"
    }
  ],
  OS: [
    {
      Title: "Understand Different OS Concepts:",
      Description:
        "DevOps engineer often has to do system-level OS optimizations to increase performance and/or do other optimizations as per application needs, knowledge of Process Management, Threads and Concurrency, Sockets, I/O Management, Virtualization, Memory storage, and File systems would be very much useful in this process..",
      Link: "https://www.youtube.com/watch?v=mXw9ruZaxzQ"
    }
  ],
  ServerManagement: [
    {
      Title: "Learn about managing servers",
      Description:
        "As a DevOps Engineer, We should have the knowledge of dynamically scaled up/down the servers, without rewriting the configuration files and make necessary recommendation to developers so that the application itself comply with scalability approach..",
      Link: "https://www.youtube.com/watch?v=v_1zB2WNN14"
    }
  ],
  Tools: [
    {
      Title: "Learn Some CI/CD Tools",
      Description:
        "A really good youtube playlist for learning tools like Jenkins",
      Link:
        "https://www.youtube.com/watch?v=89yWXXIOisk&list=PLhW3qG5bs-L_ZCOA4zNPSoGbnVQ-rp_dG"
    }
  ],
  Containerization: [
    {
      Title: "Learn about containerization",
      Description:
        "Containerization is the process of packaging an application along with its required libraries, frameworks, and configuration files together so that it can be run in various computing environments efficiently.",
      Link:
        "https://www.youtube.com/watch?v=jPdIRX6q4jA&list=PLy7NrYWoggjwPggqtFsI_zMAwvG0SqYCb"
    }
  ],
  Cloud: [
    {
      Title: "There is NO DevOps Without Cloud",
      Description:
        "Currently, there are multiple cloud service provider out there out which 3 are holing top market share, they are AWS, Azure, and GCP.",
      Link:
        "https://www.youtube.com/watch?v=3XFODda6YXo&list=PLEiEAq2VkUULlNtIFhEQHo8gacvme35"
    }
  ]
};

var topicList = Object.keys(hello);

export default function App() {
  const [topic, setTopic] = useState("Program");
  function skillClickHandler(event) {
    setTopic(event);
  }

  return (
    <div className="App">
      <h1>DevOps Roadmap</h1>
      <p style={{ maxWidth: "600px", margin: "auto", padding: "1rem" }}>
        DevOps is the combination of cultural philosophies, practices, and tools
        that increases an organization’s ability to deliver applications and
        services at high velocity: evolving and improving products at a faster
        pace than organizations using traditional software development and
        infrastructure management processes.
      </p>
      <div>
        <ul>
          {topicList.map((topic) => {
            return (
              <li className="list-item-inline">
                <button
                  className="primary-button"
                  onClick={() => skillClickHandler(topic)}
                >
                  {topic}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <section className="section">
        <div className="container">
          <ul>
            {hello[topic].map((item) => {
              return (
                <li>
                  <div className="container-skill">
                    <h2>{item.Title}</h2>
                    <p>{item.Description}</p>
                    <a
                      className="secondary-button"
                      href={item.Link}
                      target="blank"
                    >
                      Know More
                    </a>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <footer>
        <p></p>
      </footer>
    </div>
  );
}
