# front-end-challenge
Amin Amat - FE Challenge Files

I had a blast doing this challenge!

The first challenge of this challenge was in first figuring out that the json data does have a delay and does not always load properly. Now I tried a few variations of loading it via jQuery as well as contmeplating using PHP but in the end (and to save time) I opted to increase the timeout so that the data would have enough time to retrive, compile and display.

Using the blue color indicated for use with links, I set the color as a base color to then use to help accentuate other items such as the 'X' close button and the bottom border of the overlay. Keeping the colors within the same family helped with the uniformity and overlook aesthetic.

Font wise, I opted to use Open Sans instead of Arial for 2 reasons:
1- Open Sans has a more distinct look for a sans-serif font.
2- It helps to accentuate the high end quality of Touch of Modern.

For responsiveness, I set up a basic dual setup. I had one set of media query for mobile and tablet and another for desktop. Being that the images need to really sell on mobile, the hierarchy of if the overlay displays or not is bypassed on mobile yet functional on tablet. Tablet will show the overlay when the 'X' button is tapped on. A second tap removes the product box. Mobile ignores the function in its entirety. One tap = main product page.

In regards to functionailty, I wrote three simple javascript functions for the close button, overlay and loader. Keeping the code as simple and reusable as possible.

Across the board I worked to make sure that all items were as optimized and reusable as possible keeping in mind that future functionalities could be implemented.

## What things would you optimize? If you could use libraries, what libraries would you use?

If I had more time I would have rewritten how the JSON data gets retrieved, parsed and displayed. Perhaps a combination of jQuery and PHP for speed and cache. Its likely that I would have used a supplememntary library such as Flexbox to help setup product container hierarchy during responsive modes. Again if time was not a factor, I would have used a combination of PHP, jQuery, Javascript and HTML/CSS tightly integrated for speed and ease of use.




