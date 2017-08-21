function Rocket(x, y) {
  this.x = x;
  this.y = y;
  this.radius = 5;
  this.flaggedForDelete = false;

  this.show = function() {
    //noStroke();
    fill(50, 0, 200);
    ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
  }

  this.shoot = function() {
    this.y -= 3;
  }

  this.hits = function(alien) {
    var distance = dist(this.x, this.y, alien.x, alien.y);
    if (distance < this.radius + alien.radius) {
      return true;
    } else {
      return false;
    }
  }

  this.boom = function() {
    this.flaggedForDelete = true;
  }
}
