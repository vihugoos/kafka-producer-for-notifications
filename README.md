<div id="top"> </div>


<!---- PROJECT LOGO ----> 
<div align="center">
  <h2 align="center"> 
    Kafka Producer for Notifications API 
  </h2>
  
  <p align="center">
    A Kafka Producer to create a new notification in the Notifications API (consumer), developed with Node.js <br/>
    Explore <a href="https://nodejs.org/en/docs/">Node.js</a> docs &#187; <br/> <br/>
    <a href="https://github.com/vihugoos/kafka-producer-for-notifications/issues"> Report Bug </a> &nbsp;•&nbsp;
    <a href="https://github.com/vihugoos/kafka-producer-for-notifications/issues"> Request Feature </a>
  </p>
</div>


<!---- TABLE OF CONTENTS ----> 
<details>
  <summary> Table of Contents </summary>
  <ol>
    <li>
      <a href="#about-the-project"> About The Project </a>
      <ul>
        <li><a href="#built-with"> Built With </a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started"> Getting Started </a>
      <ul>
        <li><a href="#prerequisites"> Prerequisites </a></li>
        <li><a href="#installation"> Installation </a></li>
        <li><a href="#usage"> Usage </a></li>
        <li><a href="#tests"> Tests </a></li>
      </ul>
    </li>
    <li><a href="#contributing"> Contributing </a></li>
    <li><a href="#contact"> Contact </a></li>
  </ol>
</details>


<!---- THE PROJECT ---->
## About The Project 

<img src="" align="center" alt="Project Home Page">
A Kafka Producer to create a notification in the Notifications Microservice API, which will be the consumer of the sent notification and save in the database. It is possible to send several notifications, they will be queued to be processed by the consumer.


### Built With 

<div style="display: inline_block">
    <!-- Icon Node.js --> 
    <a href="https://nodejs.org/en/"> 
      <img align="center" alt="Icon-Node.js" height="33" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"> 
    </a> &nbsp;
    <!-- Icon JavaScript --> 
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"> 
      <img align="center" alt="Icon-JavaScript" height="32" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"> 
    </a> &nbsp;
    <!-- Icon Kafka --> 
    <a href="https://kafka.apache.org/"> 
      <img align="center" alt="Icon-Kafka" height="38" src="https://user-images.githubusercontent.com/44311634/209395332-4a1e1025-608f-4c1d-b9b9-87bae2f2cb96.png"> 
    </a> 
</div>

<br/>
<br/>


<!---- GETTING STARTED ----> 
## Getting Started

To get started, you need to have <strong>Node.js 18+</strong> installed on your machine, for more information visit <a href="https://nodejs.org/en/download/"> Node.js Downloads</a>.  


### Prerequisites 

First of all, we need to ensure that the server is running, to do so, visit my <a href="https://github.com/vihugoos/notifications-microservice">@notifications-microservice</a> repository and follow the install and run guide.


### Installation 

1. Clone the repo 
   ```bash
   git clone https://github.com/vihugoos/kafka-producer-for-notifications.git
   ```
2. Inside the project root directory install all project dependencies 
   ```cmd
   npm install
   ```
3. Change the settings in `producer.mjs` with your server credentials from <a href="https://console.upstash.com/kafka">Upstash - Kafka</a> 
   <div align="center">
     <img align="center" alt="server-credentials" src="https://user-images.githubusercontent.com/44311634/210437877-be8404ec-571c-425b-a2ee-865c1b838acf.jpg"> 
   </div>
   <br/>
   
   ```js
    const kafka = new Kafka({
        clientId: 'test-producer',
        brokers: ['yourEndpoint'],
        sasl: {
            mechanism: 'scram-sha-256',
            username: 'yourUsername',
            password: 'yourPassword',
        },
        ssl: true,
    });
   ```
4. Fill in the notification (only <b>content</b> and <b>category</b>) 
   ```js
    await producer.send({
        topic: 'notifications.send-notification',
        messages: [
            {
                value: JSON.stringify({
                    content: 'content-example',
                    category: 'category-example',
                    recipientId: randomUUID(),
                })
            }
        ],
    }); 
   ```
   
<!---- USAGE EXAMPLES ----> 
## Usage

With the installation complete, we can send a notification to the consumer queue.

* Send notification
   ```bash
   node producer.mjs
   ```

<br/> <br/>


<!---- CONTRIBUTING ---->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<br/> 


<!---- CONTACT ---->
## Contact

Developer @vihugoos - victorhugoos@live.com  

<p align="right"><a href="#top"> &#129045; back to top </a></p> 
