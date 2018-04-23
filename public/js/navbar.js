/**
       * This object controls the nav bar. Implement the add and remove
       * action over the elements of the nav bar that we want to change.
       *
       * @type {{flagAdd: boolean, elements: string[], add: Function, remove: Function}}
       */
      var myAnimation = {
      
          flagAdd: true,
      
          elements: [],
      
          init: function (elements) {
              this.elements = elements;
          },
      
          add : function() {
              if(this.flagAdd) {
                  for(var i=0; i < this.elements.length; i++) {
                      document.getElementById(this.elements[i]).className += " animation";
                  }
                  this.flagAdd = false;
              }
          },
      
          remove: function() {
              for(var i=0; i < this.elements.length; i++) {
                  document.getElementById(this.elements[i]).className =
                          document.getElementById(this.elements[i]).className.replace( /(?:^|\s)animation(?!\S)/g , '' );
              }
              this.flagAdd = true;
          }
      
      };
      
      /**
       * Init the object. Pass the object the array of elements
       * that we want to change when the scroll goes down
       */
      myAnimation.init(  [
          "navbar-groovy",
          "navbar-brand-white",
          "navbar-brand-grad",
      ]);
      
      /**
       * Function that manage the direction
       * of the scroll
       */
      function offSetManager(){
      
          var yOffset = 0;
          var currYOffSet = window.pageYOffset;
      
          if(yOffset < currYOffSet) {
              myAnimation.add();
          }
          else if(currYOffSet == yOffset){
              myAnimation.remove();
          }
      
      }
      
      /**
       * bind to the document scroll detection
       */
      window.onscroll = function(e) {
          offSetManager();
      }
      
      /**
       * We have to do a first detectation of offset because the page
       * could be load with scroll down set.
       */
      offSetManager();