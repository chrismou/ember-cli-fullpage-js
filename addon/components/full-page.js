import Component from '@ember/component';
import run from '@ember/run';
import $ from 'jquery';

export default Component.extend({
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

  init() {
    this._super(...arguments);

    // Navigation
    this.anchors = ['firstPage', 'secondPage'];
    this.navigationTooltips = ['firstSlide', 'secondSlide'];

    //Design
    this.sectionsColor = ['#ccc', '#fff'];
    this.parallaxOptions = { type: 'reveal', percentage: 62, property: 'translate' };
  },

  didRender() {
    run.scheduleOnce('afterRender', this, function () {
      var options = this.clone(this, this.options);
      this.$().fullpage(options);
    });
  },

  willDestroyElement() {
    $.fn.fullpage.destroy('all');
  },

  clone(from, to) {
    for (var key in to) {
      if (from.hasOwnProperty(key)) {
        to[key] = $.parseJSON(from[key]);
      }
    }

    return to;
  }
});