# 🌳 Task Tree

Looking to add a bit of spice to your boring, everyday TODO apps? Task Tree serves to cheer you up by tracking your progress in the form of a little Bonsai tree which grows the more tasks you accomplish.

## ✨ Features

- Intuitive design for adding, editing and deleting tasks
- Calming visuals to ease the mind from the horrors of everyday reality
- Simplistic and timeless design

## 🫂 Coconspiritors

- [Joel Beilis](https://github.com/JoelBeilis) - Full stack dev & Design
- [Vanessa Tan](https://github.com/vanessatan2007) - Full stack dev
- [Xinyang Wang](https://github.com/mrkingseasheep) - Backend & Design

## 🗻 Challenges faced

Initially our project was designed for TUI, but, we ran into various issues with the python module framework we were using. The framework allowed capabilities such as animations, mouse support, and open widgets all from inside the terminal. Now the issues experienced with this method was primarily due to unclear documentation as when incorporating two separate widgets they would consistently overwrite one another. Other UI printing errors continued arising the more we added to the project. Consequently we changed our approach to this project to a web app using HTML, JS, and CSS that we present to you today.

## 🤖 Deployment

See if it's for you at https://mrkingseasheep.github.io/starterhacks/

### Docker

Make sure you have [Docker](https://docs.docker.com/engine/install/) installed.

`docker pull mrkingseasheep/task-tree`

Check to see if the container downloaded. You should see `mrkingseasheep/task-tree` listed.

`docker images`

Run the Docker container. If you are not part of the docker group, run with sudo.

`docker run -dp 80:80 mrkingseasheep/task-tree`

Open your favorite web browser and type in http://localhost

### git

First, clone the repository at https://github.com/mrkingseasheep/starterhacks/

`git clone https://github.com/mrkingseasheep/starterhacks.git`

Then open `index.html` with your favorite web browser.
