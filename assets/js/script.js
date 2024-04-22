function isMobile() {
    const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    return regex.test(navigator.userAgent);
}

document.addEventListener('DOMContentLoaded', function () {

    if (isMobile()) {
        console.log("Initializing mobile only fullscreen listener")
        document.getElementById("fullpage").addEventListener('click', (event) => {
            event.stopPropagation();
            if (event.target.classList.contains('fp-controlArrow') || event.target.classList.contains('contribution')) {
                return;
            }
            toggleFullScreen();
        });
    }


    var myFullpage = new fullpage('#fullpage', {
        licenseKey: 'gplv3-license',
        sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],

        menu: '#menu',
        lockAnchors: false,
        anchors: [],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: [],
        showActiveTooltip: true,
        slidesNavigation: false,
        slidesNavPosition: 'bottom',

        // Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 600,
        scrollBar: true,
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
        scrollOverflowMacStyle: false,
        scrollOverflowReset: false,
        touchSensitivity: 15,
        bigSectionsDestination: null,

        // Accessibility
        keyboardScrolling: true,
        animateAnchor: false,
        recordHistory: false,

        // Design
        controlArrows: true,
        controlArrowsHTML: [
            '<div class="fp-arrow"></div>',
            '<div class="fp-arrow"></div>'
        ],
        verticalCentered: true,
        paddingTop: '0em',
        paddingBottom: '0px',
        fixedElements: '#header, .footer',
        responsiveWidth: 0,
        responsiveHeight: 0,
        responsiveSlides: true,
        parallax: false,
        parallaxOptions: { type: 'reveal', percentage: 62, property: 'translate' },
        dropEffect: false,
        dropEffectOptions: { speed: 2300, color: '#F82F4D', zIndex: 9999 },
        waterEffect: false,
        waterEffectOptions: { animateContent: true, animateOnMouseMove: true },
        cards: false,
        cardsOptions: { perspective: 100, fadeContent: true, fadeBackground: true },

        // Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        lazyLoading: true,
        observer: true,
        credits: { enabled: false, label: 'Made with fullPage.js', position: 'right' },

        // Events
        beforeLeave: function (origin, destination, direction, trigger) { },
        onLeave: function (origin, destination, direction, trigger) { },
        afterLoad: function (origin, destination, direction, trigger) { },
        afterRender: function () {
        },
        afterResize: function (width, height) { },
        afterReBuild: function () { },
        afterResponsive: function (isResponsive) { },
        afterSlideLoad: function (section, origin, destination, direction, trigger) { },
        onSlideLeave: function (section, origin, destination, direction, trigger) { },
        onScrollOverflow: function (section, slide, position, direction) { }

    });
});