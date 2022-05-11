# Group 4 - Spotify Database

### Description
When looking for songs on Spotify, it can be difficult for users to see if a song is being hosted by any music station.  To address our issue, our webpage has a searchbar where a song name can be typed in; the webpage will react to the input if it is currently being hosted by a music station on Spotify.  The data our website specifically works with are song names and station outlet names.  Our data is retrieved from a Spotify database made in INST327 and it was provided by one of our former team members.

### Heroku Link
Link to Heroku instance where the application is live and running:  https://group4-final-inst377sp2022.herokuapp.com/

### Target Browser
Google Chrome

### Developer Manual Link
Link to Developer Manual: https://github.com/GeraldReyes00/Group4-Final-INST377SP2022#developer-manual

# Developer Manual

### How to Install This Application and All Dependencies
1. Clone this repository through Github Desktop.
2. Open the repository in Visual Studio Code.
3. Open a terminal window in Visual Studio Code.
4. Type "npm install" into the window and run it.
5. The application should be good for use.

### How to Run Your Application on a Server
1. Open the repository in Visual Studio Code.
2. Open a terminal window in Visual Studio Code.
3. Type "npm start" into the window and run it.
4. Open a web browser and go to the following url:  http://localhost:3000/

### How to Run Any Tests Written for the Software
This software has no tests written for it.

### Server application APIs
/songDisplay - API route for retrieving songs that are currently being hosted by a music station.
* GET - Returns all songs names that are currently being hosted by a music station; song names are also accompanied by playlist ledger names and station outlet names.
* POST - Obtains a song name from the user.  The key that corresponds with this song name value is "tname". If the song name is currently hosted by a music station (meaning it can be found in the GET for this route) then the song name will be returned to the user.  Otherwise, nothing is returned.

/outletPath - API route for retriving the outlet table and adding records to it.
* GET - Returns the entire outlet table from the dataset and returns it to the user.
* POST - Takes in six inputs from the user: Outlet ID, Outlet Name, Outlet Address, Outlet City, Outlet State, and Outlet Zipcode. The corresponding keys to these inputs are: "outID", "outName", "outAddress", "outCity", "outState", and "outZip". With these six inputs, a new record is created in the outlet table.  The Outlet ID needs to be unique, the Outlet State can only be two characters long, and the Outlet Zipcode can only take in integers.
* DELETE - Takes in one input from the user: Outlet ID.  The corresponding key to this input is "outID".  With this single input, a record with an outlet ID that matches the input will be deleted from the outlet table.

/songList - API route for retrieving artist name based on the name of the song that is currently being hosted by a music station.
* GET - Returns all the artist names and song names of the songs that are currently being hosted by a music station; song names are also accompanied by artist names.
* POST - Obtains a song name from the user. The key that corresponds with this song name value is "tname". If the song name is currently hosted by a music station (meaning it can be found in the GET for this route) then the artist name and song name will be returned to the user.  Otherwise, nothing is returned.

/tracks - API route for retrieving tracks that are in the spotify.
* GET - Returns all tracks that are in the spotify; track names are also accompanied by popularity.
* POST - Takes track name from the user to find whether it is in the spotify. If there is the track, it will show the track.
If not, it will be not returned.