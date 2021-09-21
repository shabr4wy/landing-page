# Landing Page Project

## Table of Contents

* description
* Used languages and version control
* Instructions
* used API
* Javscript functionalities

## description

building a multi-section landing page with a dynamically updating navigational menu based on the amount of content that is added to the page.


## Used languages and version control

### languages
* HTML
* CSS
* Javascript

### version control
* git

## Instructions

### Interface and Architecture
* All features must be usable across modern desktop, tablet, and phone browsers.
* add specifec style for section bieng viewed.
* There must be at least 4 sections that have been added to the page.

## Landing Page Behavior
* Navigation must be built dynamically as an unordered list.
* It must be clear which section is being viewed while scrolling through the page.
* When clicking an item from the navigation menu, the link must scroll smoothly to the
  appropriate section.


## Used API

* intersection observer API.

to specify which section is being viewed while scrolling through the page,
so we add specific style to it.


## Javscript functionalities
there are 2 main block of codes :

### Biuld navigation menu
in this block i added the functionality to creat navigation items based on
sections number.
and i used event listener with click event type to creat link between the item and its section.
also i used scrollIntoView method to creat not only the scroll but makeing it smooth.

### Set as active
in this block i added the functionality to specify the viewd section to add
the 'activeSection' class to it using intersection observer API. 
if the the section being viewed is scrolled away, the added class will be removed.