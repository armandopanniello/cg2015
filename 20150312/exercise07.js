//Non funziona

(function () {
  function PhotoAlbum(){
    return {
      pictures : [],
      addPicture : function(p){
        this.pictures.push(p);
      },
      showPictures : function(name){
        var s = "";
        for(var i = 0; i < this.pictures.length; ++i)
          if(this.pictures[i].checkTag(name))
            s += this.pictures[i].title + ", ";
        console.log(s);
      }
    };
  }

  function Photo(s){
    return {
      title : s,
      tags : [],
      tag : function(n){
        this.tags.push(n);
      },
      showTags : function(){
        for(var i = 0; i < this.tags.length; ++i)
          console.log(this.tags[i]);
      }
      checkTag : function(name){
        for(var i = 0; i < this.tags.length; ++i)
          if(name === this.tags[i])
            return true;
        return false;
      }
    };
  }

  var album = PhotoAlbum();
  var p;

  p = Photo("Paris Trip 1");
  p.tag("Jimmy");
  p.tag("Jane");
  p.tag("Jeff");

  album.addPicture(p);

  p = Photo("Look the Eiffel");
  p.tag("Jimmy");
  p.tag("Max");
  album.addPicture(p);

  p = Photo("OMG it's so high");
  p.tag("Jimmy");
  p.tag("Jane");

  // prints "Jimmy, Jane"
  p.showTags();

  album.addPicture(p);

  // prints "Paris Trip 1, Look the Eiffel, OMG it's so high"
  album.showPictures("Jimmy");

  // prints "Paris Trip 1, OMG it's so high"
  album.showPictures("Jane");    
}());