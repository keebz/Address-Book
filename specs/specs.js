describe ('contact', function(){
  it ("when a first and last name is entered, the page returns the first and last name", function(){
  contact("Robert", "Downey").should.eql("Robert Downey");
  });
});
