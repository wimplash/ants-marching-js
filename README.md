# ants-marching-js #

`ants-marching-js` is a JavaScript library for producing marching letters similar to the effect
created by the antiquated html `<marquee>` tag. Who really wants to replicate the `<marquee>`
tag? I do, but mostly for an exercise in producing a JavaScript library, driven by BDD.

## Dependencies ##
This list should be exhaustive, but when in doubt, check out the `configuration` section for
`jasmine-maven-plugin` in [`pom.xml`](https://github.com/wimplash/ants-marching-js/blob/master/pom.xml).
* [`jQuery`](http://jquery.com) - mostly for base utility functions such as element selection
                                   and css manipulation.
* [`jQuery UI`](http://jqueryui.com) - mostly for positioning, but my examples do use the UI
                                        CSS framework.

## Planned Functionality ##
* externally-controlled animation *(optional)*
    * `step(n)` - execute one or more steps of animation
    * `start(speed)` - start the animation at the given speed
    * `stop()` - stop the animation
* `march()`
    * Various march styles
        * `inside` - letters march around the inside edge of the container.
        * `outside` - letters march around the outside edge of the container.
        * `spiral-in` - letters start at the inside edge of the container and move to the
                        center.
        * `spiral-out` - letters start at the center of the container and move to the inside
                         edge.
        * `to-left`, `to-right` - letters start at one edge of the container and move to the
                                  other.
            * Respects containing element's `vertical-align`. That is, if a container's
              `vertical-align` is `bottom`, the letters will march along the bottom of the
              container.
        * `to-top`, `to-bottom` - letters start at one edge of the container and move to the
                                  other.
            * Respects containing element's `text-align`. That is, if a container's
              `text-align` is `center`, the letters will march along the bottom of the
              container.
* `progress()` - a shorthand method for a specific set of `march()` options which can be
                 used to create a progress-bar element.