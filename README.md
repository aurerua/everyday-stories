# everyday-stories
Everyday Stories is a Meteor web site which enables people to post stories online
anonymously, without them having to log in.

In terms of functionalities (and thus the name) I built it as a loose clone of [everydaysexism.com](http://www.everydaysexism.com). 
There is a demo at [http://meteorstories.meteor.com](http://meteorstories.meteor.com).

The main functionalities have been implemented using the following Meteor packages:

- for Forms [https://github.com/aldeed/meteor-autoform](aldeed:autoform),
- for Pagination [https://github.com/alethes/meteor-pages](alethes:pages),
- for the reCAPTCHA [https://github.com/appshore/Meteor-reCAPTCHA](appshore:recaptcha),
- and to pass data from autoform to the server (necessary for the reCAPTCHA), Server Session [https://github.com/matteodem/meteor-server-session](matteodem:server-session).
