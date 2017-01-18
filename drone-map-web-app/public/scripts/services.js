droneMapApp.factory('headerFooterService', function() {
   
    var headerAndFooter = true;
    return{
      headerAndFooter: function(){
          return headerAndFooter;
      },
      setHeaderAndFooter: function(newHeaderAndFooter){
          headerAndFooter = newHeaderAndFooter;
      }
    } 
    
});