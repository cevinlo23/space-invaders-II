function Alien(x, y) {
  this.x = x;
  this.y = y;
  this.radius = 15;
  this.velocity = 15;
  this.flaggedForDelete = false;
  this.xdir = 1;
  this.points = 25;
  this.friendly = false;
  this.color = '#f230db';
  this.image = '/Users/yjh296/Desktop/sandbox/unit-1-project/space-invaders/space-invaders/images/space-invaders-sprite1.jpg'
  this.bombRate = 0.0035;


  this.show = function() {
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
  }

  this.explode = function() {
    this.radius = 0;
    this.flaggedForDelete = true;
  }

  this.move = function() {
    this.x = this.x + this.xdir;
  }

  this.shiftDown = function() {
    this.xdir *= -1;
    this.y += this.velocity;
  }

  //sets it so points will decrement if you shoot a friendly alien
  this.friendlyAlien = function() {
    this.friendly = true;
    this.points = -50;
    this.color = "#2be51d";
  }
}
