# responsive-image-slider
An image slider that is responsive and independent of any frameworks or libraries.

## Design Decisions
* Elastic container width, with min-width and max-width set.

* When the slider reaches the last slide, the right-side navigation targets the first slide with an animation of right-to-left, and the opposite for the first slide, where the left-navigation will target the last slide.

## Development Notes
At first I wasn't sure if it would be best to have the images slide left to right or do a fade-swap, which can be more visually appealing, but to make swiping more intuitive I decided to give it the traditional left/right sliding transition.

Each slide takes up the width of ```.slider-container``` by having the proportionate ratio of width expressed by the flex-basis property on ```.slide```. Accordingly, the width of ```.slider``` must be the number of slides multiplied by 100% (eg, 900% for 9 slides).

The slider functions by rearranging the order of the slides in the DOM. When the slider is advanced to the right, the current ```.slide``` (first child) is translated out of view and is put at the end of the order after the translation completes, such that the next ```.slide``` becomes the first child of ```.slider```.

## Areas of Improvement
* Add/fix swipe capability and pagination (the dots under the slider).
* Fix overlapping backgrounds for navigation buttons and caption area. One idea is to make the button's arrow background a circle.
* The number of slides factors into the width of ```.slider```, and the flex-basis of each ```.slide```, which currently is hardcoded into the CSS but could be automated by parsing the DOM and adjusting to however many slides (direct children) are within the slider, thereby requiring less maintenance.
* So that embedded videos are easier to interact with, it might be best to move the navigation buttons off of the slider so they're just outside.

## Known Issues
* There's a bug where, after clicking the left nav button, clicking the right nav button causes the slider to move forward by 2 slides instead of 1.
* Images appear to have whitespace under them because of their dimension proportions. If an image doesn't have enough height, at small slider/container widths the whitespace shows.
* Pagination not working.

## Things Worth Mentioning
Pagination and swipe capability are not currently functioning.
