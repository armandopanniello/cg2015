(function() {

  function Album(artist, title){
    return {
      artist : artist,
      tilte : title,
      play : function(){
        console.log("Playing " + this.artist + " - " + this.title);
      }
    };
  }

  function MusicBox(){
    return {
      album : [],
      addAlbum : function(a){
        this.album.push(a);
      },
      favorite : "The Who - Tommy",
      favoriteAlbum : function(){
        return this.favorite;
      }
    };
  } 

  var box = MusicBox();
  var a1 = Album("The Who", "Tommy");
  var a2 = Album("Tom Waits", "Closing Time");
  var a3 = Album("John Cale", "Paris 1919");
  var favorite;

  box.addAlbum(a1);
  box.addAlbum(a2);
  box.addAlbum(a3);

  a1.play() ; // prints "Playing The Who - Tommy"
  a2.play(); // prints "Playing Tom Waits - Closing Time"  
  a1.play(); // prints "Playing The Who - Tommy"

  favorite = box.favoriteAlbum(); 

  // prints "favorite album is The Who - Tommy"
  console.log("favorite album is " + favorite); 
}());