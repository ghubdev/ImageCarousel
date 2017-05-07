# ImageCarousel
Image carousel displaying photo objects from API

###Problem Case

Your task is to translate the business requirement from a "hypothetical" customer of ours, and create a working version of the experience that the customer is requesting.

Here is a business requirement from the customer:

I want to create a simple front-end experience that would showcase latest photos from my Olapic account. I want the photos to be in a scrollable carousel like so: http://www.maurices.com/home/index.jsp

Your goal is to create a simple front-end display of UGC pulled from Olapic API, and incorporate a carousel feature to make the content scrollable.

###Conditions

See below for the conditions of the working example:
1.	Create a scrollable image carousel with the following specs:

    •	Left and right navigation buttons
    
    •	6 photos showing at a given time
    
    •	Make it look awesome!

2.	Implement the photo objects from the Olapic API response into an image carousel

3.	Bonus Points for incorporating an image lightbox modal. For instance, a modal would pop up when you click on a specific photo.

See the following live UX examples:
http://www.maurices.com/home/index.jsp  (scroll down to the photo carousel component powered by Olapic

###Solution

I used jQuery to call the Olapic API.

I used the photorank media and call the ‘original’ image for the lightbox and the ‘normal’ image for the carousel. I’ve included the caption as a tooltip for the carousel and the original source as the caption for the lightbox image.

The carousel was built using the slick jQuery plugin.

The carousel images have been resized – max-height: 180px, max-width: 180px

As requested, provided there is enough space, there are 6 photos showing at a given time with 2 scrolling at a time. I have made the carousel responsive and therefore, should the width of the page be reduced the number of slides displayed will be reduced.

I used Lightbox jQuery plugin to implement the lightbox.

I decided to allow users to scroll through images when using the lightbox so applied the same data-lightbox field to all images.
