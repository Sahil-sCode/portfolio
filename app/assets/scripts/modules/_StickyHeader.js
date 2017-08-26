import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class StickyHeader {
    constructor(){
        this.headerLinks = $('.primary-nav a');
        this.pageSections = $('.page-section');
        this.createWaypoints();
    }
    
    createWaypoints(){
        var that = this;
        this.pageSections.each(function(){
            var currentPage = this;
           new Waypoint({
                element: currentPage,
                handler: function(direction){
                    if (direction === 'down'){
                        var matchingPageLink = currentPage.getAttribute('data-matching-link');
                        that.headerLinks.removeClass('is-current-link');
                        $(matchingPageLink).addClass('is-current-link');
                    }   
                },
               offset: '40%'
            }) 
            
            new Waypoint({
                element: currentPage,
                handler: function(direction){
                    if (direction === 'up'){
                        var matchingPageLink = currentPage.getAttribute('data-matching-link');
                        that.headerLinks.removeClass('is-current-link');
                        $(matchingPageLink).addClass('is-current-link');
                    }   
                },
               offset: '-30%'
            }) 
        });
    }
}

export default StickyHeader;