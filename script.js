import { Vector2, Rectangle, CheckCollisionRecs } from "./jayGame.js";

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let keyDetector = {};
window.addEventListener("keydown", function(event)
	keyDetector[event.key] = true;
});
window.addEventListener("keyup", function (event)
	keyDetector[event.key] = false;
});

class Player {
	constructor(_x,_y) {
		this.pos = new Vector2(_x,_y);
		this.vel = new Vector2(0,0);
		this.hit = new Rectangle(0,0,32,32);
		this.checrec = this.hit;
		this.hit.x = this.pos.x-16;
		this.hit.y = this.pos.y-16;
	}
	SpawnAt(_pos) {
		this.pos = _pos;
		this.vel.x = 0;
		this.vel.y = 0;
	}
	control() {
		if (keyDetector["d"]) {
			this.vel.x += 4;
		}
		if (keyDetector["a"]) {
			this.vel.x += -4;
		}
	}
	update() {
		this.pos.x += this.vel.x;
		this.pos.y += this.vel.y;
		this.vel.x += this.vel.x/-4;
		this.hit.x = this.pos.x-16;
		this.hit.y = this.pos.y-16;
	}
	checkCollision(_col) {
		this.checrec = this.hit;
		this.checrec.x += vel.x;
		if (CheckCollisionRecs(this.hit,_col)) {
			this.vel.x = 0;
		}
		this.checrec = this.hit;
		this.checrec.y += vel.y;
		if (CheckCollisionRecs(this.hit,_col)) {
			this.vel.y = 0;
		}
	}
	draw(_ctx) {
		_ctx.beginPath();
		_ctx.rect(this.hit.x,this.hit.y,this.hit.width,this.hit.height);
		_ctx.stroke();
	}
}


let player = new Player(48,48);
const ground = new Rectangle(0,600,800,64);

function(animate) {
	player.control();
	player.checkCollision(ground);
	player.update();

	player.draw(ctx);
	
	requestAnimationFrame(animate);
}

requestAnimationFrame(animate);