#### Users Register

#### Getting started

```
- clone  the repo/ download zip file
- cd into directory
- npm install
- npm start
```

### App description

- This app is build with Angular  
- I am using an JSON API from which I fetch the data ('https://jsonplaceholder.typicode.com/users')
- Angular Router is implemented to navigate between different pages of the app
- User has the possibility to post data back to the API
- I implemented a search functionality using the pipe concept.User has the possibility to search the person desired from a wide range of names
- Form validation using Angular Flash Messages service
- For styling I used bootstrap and css

### Steps

##### Wireframe

  ![wireframe](/images/wireframe.png)

##### 1.
- Implement the home and users components
- Implement routing between the pages
- Style the Home component

  ![home](/images/home.png)

#### 2.
- Implement the form in users component

  ![form](/images/form.png)

#### 3.
- Fetch the data from the JSON API
- We have GOLD here ;)

  ![fetch_data](/images/fetch_users_console.png)

- Post the data back to the JSON API

  ![post_data](/images/post_users_console.png)

  #### 4.
- Let's add some form validation, is gonna be like magic :D :D. Angular FlashMessages Service is awesome

![errors](/images/errors.png)

- If user is added to the JSON API you get a confirmation message

![confirm](/images/confirm.png)

- Looks great !! I told you !

#### 5.
- Search functionality
- User can found anyone now, very fast by: name, email or phone
- Another magic feature :D

![search](/images/search.png)

#### 6.
- Have more fun styling the app , funniest part ever

![final](/images/final.png)

- Looks amazing! Good job ! :D :D

### Feature implementations:

- add a user authentication system, the persons details can be seen by all users but only a registered user can add another person
- implement more animations
- all of these components will have their own route, when the user adds a person is gonna be automatically redirected to the list of persons page
- a very great UI interface
