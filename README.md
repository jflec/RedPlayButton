![rpb-github](https://user-images.githubusercontent.com/59325246/133792985-d1f55bcb-d794-4ca7-98bb-745eb65a6611.png)

## Summary

RedPlayButton is a YouTube clone where users can upload, watch, share, and comment on videos.  
[Checkout the demo](https://red-play-button.herokuapp.com/#/)

## Contents

+ [MVP List](mvp-list)
+ [Schema](schema)
+ [Backend Routes](backend-routes)
+ [Sample State](sample-state)
+ [Frontend Routes](frontend-routes)

## Technologies

* Hosting: Heroku & AWS
* Backend: PostgreSQL & Ruby on Rails API
* Frontend: React, Redux, JS & JSX, HTML, SCSS

```javascript

  onDrop(e) {
    e.preventDefault();
    const mFile = e.dataTransfer.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({
        videoURL: fileReader.reseult,
        videofile: mFile,
        title: mFile.name.split('.')[0],
      });
    };
    if (mFile) {
      fileReader.readAsDataURL(mFile);
    }
  }
```
A portion of code taken from the upload functionality.

In my experience, whenever I upload something I always use drag and drop and so I saw it as a must have. When starting work on the upload feature I made sure to include some sort of drag and drop functionality. I had never used FileReader before or anything like that so it took me some time to read the documentation on it but after figuring it out and testing the finished feature it was very rewarding.

## Project Challenges

The first step was to create the user authentication page, RedPlayButton being a YouTube clone, I decided to copy the Google sign in.

![signup](https://user-images.githubusercontent.com/59325246/133798374-63639b05-bbf4-4b75-8168-2fc29196e605.gif)

My main challenge when tackling this project was successfuly linking AWS to the code, I hadn't touched the technology prior and the idea was daunting. After a brief period of trial and error I was finally able to upload/playback videos, using this same technology I will implement functionality that will allow users to upload a channel picture and banner.

![Animation](https://user-images.githubusercontent.com/59325246/133797018-b07774fe-1404-4c0c-b6eb-9a5149b9cfb2.gif)

I was also able to implement search functionality which would allow users to look for any video on the database via a keyword.

![search](https://user-images.githubusercontent.com/59325246/133797786-a88932f8-53e0-45c8-a487-711d7afb2424.gif)

## Upcoming Features

* Ability to like/dislike videos/comments
* Upload channel picture and banner
