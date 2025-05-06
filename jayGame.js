class Vector2 {
	constructor(_x,_y) {
		this.x = _x;
		this.y = _y;
	}
}

class Rectangle {
	constructor(_x,_y,_width,_height) {
		this.x = _x;
		this.y = _y;
		this.width = _width;
		this.height = _height;
	}
}

function CheckCollisionRecs(_rec1, _rec2) {
	let ret = false;
	if (_rec1.x < _rec2.x + _rec2.width &&
		 _rec1.x + _rec1.width > _rec2.x &&
		 _rec1.y < _rec2.y + _rec2.height &&
		 _rec1.y + _rec1.height > _rec2.y)
	{ret = true;}
	return(ret);
}

export { Vector2, Rectangle, CheckCollisionRecs };