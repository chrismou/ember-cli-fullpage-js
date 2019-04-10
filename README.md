# ember-cli-fullpage-js

[![npm version](https://badge.fury.io/js/ember-cli-fullpage-js.svg)](https://badge.fury.io/js/ember-cli-fullpage-js)
[![Build Status](https://api.travis-ci.org/chrismou/ember-cli-fullpage-js.svg?branch=master)](https://travis-ci.org/chrismou/ember-cli-fullpage-js)
[![License](http://img.shields.io/badge/License-MIT-blue.svg)](http://opensource.org/licenses/MIT)

This plugin provides an ember.js template wrapper for the [fullPage.js](https://alvarotrigo.com/fullPage/) plugin, which provides "a simple and easy to use library to create fullscreen 
scrolling websites". 

## Installation

```
ember install @chrismou/ember-cli-fullpage-js
```

## Usage

Use the tag `{{#full-page}}{{/full-page}}` in your template files to create the fullPage container. The content itself should be structured as per the [fullPage.js docs](https://github.com/alvarotrigo/fullPage.js#required-html-structure).

### Example HTML structure for vertical fullPage scrolling site

```
{{#full-page}}
    <div class="section">Section content</div>
    <div class="section">Section content</div>
    <div class="section">Section content</div>
    <div class="section">Section content</div>
{{/full-page}}
```

To use a horizontal slider within a section, each slide will be defined by default with an element containing the slide class:

```
<div class="section">
    <div class="slide"> Slide 1 </div>
    <div class="slide"> Slide 2 </div>
    <div class="slide"> Slide 3 </div>
    <div class="slide"> Slide 4 </div>
</div>
```

### Options

All fullPage.js options can be specified on the tag.  For example:

```html
{{#full-page autoScrolling='true' navigation='true' anchors='["firstPage", "secondPage"]' }}
  ...
{{/full-page}}
```

**Note**: The value of the option has to be wrapped by Single quotation mark `'` instead of Double quotation marks `"`.

For more info on the options availabl, [click here](https://github.com/alvarotrigo/fullPage.js#vanilla-js-example-with-all-options) or use the list below as a reference.

```
//Navigation
  menu: '#menu',
  lockAnchors: false,
  navigation: false,
  navigationPosition: 'right',
  showActiveTooltip: false,
  slidesNavigation: false,
  slidesNavPosition: 'bottom',

  //Scrolling
  css3: true,
  scrollingSpeed: 700,
  autoScrolling: true,
  fitToSection: true,
  fitToSectionDelay: 1000,
  scrollBar: false,
  easing: 'easeInOutCubic',
  easingcss3: 'ease',
  loopBottom: false,
  loopTop: false,
  loopHorizontal: true,
  continuousVertical: false,
  continuousHorizontal: false,
  scrollHorizontally: false,
  interlockedSlides: false,
  dragAndMove: false,
  offsetSections: false,
  resetSliders: false,
  fadingEffect: false,
  normalScrollElements: '#element1, .element2',
  scrollOverflow: false,
  scrollOverflowReset: false,
  scrollOverflowOptions: null,
  touchSensitivity: 15,
  normalScrollElementTouchThreshold: 5,
  bigSectionsDestination: null,

  //Accessibility
  keyboardScrolling: true,
  animateAnchor: true,
  recordHistory: true,

  //Design
  controlArrows: true,
  verticalCentered: true,
  paddingTop: '3em',
  paddingBottom: '10px',
  fixedElements: '#header, .footer',
  responsiveWidth: 0,
  responsiveHeight: 0,
  responsiveSlides: false,
  parallax: false,

  //Custom selectors
  sectionSelector: '.section',
  slideSelector: '.slide',

  lazyLoading: true,

  //events
  onLeave: function(origin, destination, direction){},
  afterLoad: function(origin, destination, direction){},
  afterRender: function(){},
  afterResize: function(width, height){},
  afterResponsive: function(isResponsive){},
  afterSlideLoad: function(section, origin, destination, direction){},
  onSlideLeave: function(section, origin, destination, direction){},
```

## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.


## License

This project is licensed under the [MIT License](LICENSE.md).
