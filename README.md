# responsive-image-slider
An image slider that is responsive and independent of any frameworks or libraries.

## Design Decisions
Elastic container width, with min-width and max-width set.

Should container height be proportional to width?

Navigation buttons scale with container width.

Pagination indicators within a certain smaller width need horizontal scroll arrows/nav (via breakpoints).

## Development Decisions
At first I wasn't sure if it would be best to have the images slide left to right or do a fade-swap, which can be more visually appealing. I figured that since swiping is required, it is better to use the traditional left/right slide.

Each slide goes into an array. The current image being viewed has a CSS class for the display property to it is shown. When a navigation button pressed, the next image in that direction is given a negative left or right property (which ever direction it's coming from) and is animated into view by transitioning the left or right value to zero. This is calculated based on the width of the ```.slider-container``` element. The current state of the slider is kept in a variable which is updated every time the slider changes slide. So if the pagination buttons are used, it will get updated accordingly. 

When the slider reaches the last slide, the right-side navigation will target the first slide with an animation of right-to-left, and the opposite for the first slide, where the left-navigation will target the last slide.

## Areas of Improvement

## Things Worth Mentioning
