var chico = [{description:"Big Chico Creek",
            picture:"https://s-media-cache-ak0.pinimg.com/736x/28/20/6f/28206f05a4ff23ec4e35c33bb93ab42b.jpg",
            from:"www.pintrest.com"},
            {description:"Bidwell Mansion",
            picture:"https://www.parks.ca.gov/pages/460/images/BidwellMansion%20002.jpg",
            from:"www.parks.ca.gov"},
            {description:"George Peterson Rose Garden",
            picture:"http://www.csuchico.edu/inside/2017-04-03/images/main/PetersenRoseGarden_main1.jpg",
            from:"www.csuchico.edu"},
            {description:"Kendall Hall",
            picture:"http://www.bestvalueschools.com/wp-content/uploads/2015/02/California-State-University-Chico-Green-Colleges.jpg",
            from:"www.bestvalueschools.com"},
            {description:"Chico City Plaza",
            picture:"http://nmrdesign.com/wp-content/uploads/2013/09/04-6271-Chico-Park-Plaza-at-Christmas-960x540.jpg",
            from:"www.nmrdesign.com"}];

var current;

function shuffleGallery()
{
  var index = Math.floor(Math.random() * chico.length);
  while(index == current) {
    index = Math.floor(Math.random() * chico.length);
  }
  console.log(chico[index]);
  current = index;
}
