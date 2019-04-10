import Component from '@ember/component';
import { get } from '@ember/object';
import { run } from '@ember/runloop';
import $ from 'jquery';

export default Component.extend({
  options: ["menu", "anchors", "navigationTooltips", "lockAnchors", "navigation", "navigationPosition", "showActiveTooltip", "slidesNavigation", "slidesNavPosition", "css3", "scrollingSpeed", "autoScrolling", "fitToSection",
    "fitToSectionDelay", "scrollBar", "easing", "easingcss3", "loopBottom", "loopTop", "loopHorizontal", "continuousVertical", "continuousHorizontal", "scrollHorizontally", "interlockedSlides", "dragAndMove",
    "offsetSections", "resetSliders", "fadingEffect", "normalScrollElements", "sectionsColor", "scrollOverflow", "scrollOverflowReset", "scrollOverflowOptions", "touchSensitivity", "normalScrollElementTouchThreshold",
    "bigSectionsDestination", "keyboardScrolling", "animateAnchor", "recordHistory", "controlArrows", "verticalCentered", "paddingTop", "paddingBottom", "fixedElements", "responsiveWidth", "responsiveHeight",
    "responsiveSlides", "parallax", "sectionSelector", "slideSelector", "lazyLoading", "onLeave", "afterLoad", "afterRender", "afterResize", "afterResponsive", "parallaxOptions", "afterSlideLoad", "onSlideLeave", "licenseKey"],

  didRender() {
    this._super(...arguments);
    run.scheduleOnce('afterRender', this, function () {
      let options = this.buildOptions(this);
      this.$().fullpage(options);
    });
  },

  willDestroyElement() {
    $.fn.fullpage.destroy('all');
    this._super(...arguments);
  },

  buildOptions(component) {
    let fields = get(component, "options");
    let options = {};

    fields.forEach(function(field) {
      if (get(component, field) !== undefined) {
        options[field] = get(component, field);
      }
    });

    return options;
  }
});