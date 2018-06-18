"use strict";
var Car = (function () {
    function Car() {
        this.speed = 0;
        this.div = document.createElement("meteor");
        var level = document.getElementsByTagName("level")[0];
        level.appendChild(this.div);
        this.x = (Math.random() * window.innerWidth) - (Math.random());
        this.y = Math.ceil(Math.random() * 2) * 2;
        this.speed = Math.random() * 2 + 2;
    }
    Car.prototype.getRectangle = function () {
        return this.div.getBoundingClientRect();
    };
    Car.prototype.update = function () {
        this.y += this.speed;
        if (this.y > window.innerWidth) {
            this.y = -80;
        }
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    return Car;
}());
var Player = (function () {
    function Player(xp, up, down) {
        var _this = this;
        this.downSpeed = 0;
        this.upSpeed = 0;
        this.div = document.createElement("player");
        var level = document.getElementsByTagName("level")[0];
        level.appendChild(this.div);
        this.upkey = up;
        this.downkey = down;
        this.x = xp;
        this.y = 500;
        window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); });
        window.addEventListener("keyup", function (e) { return _this.onKeyUp(e); });
    }
    Player.prototype.getRectangle = function () {
        return this.div.getBoundingClientRect();
    };
    Player.prototype.onKeyDown = function (e) {
        switch (e.keyCode) {
            case this.upkey:
                this.upSpeed = 10;
                break;
            case this.downkey:
                this.downSpeed = 10;
                break;
        }
    };
    Player.prototype.onKeyUp = function (e) {
        switch (e.keyCode) {
            case this.upkey:
                this.upSpeed = 0;
                break;
            case this.downkey:
                this.downSpeed = 0;
                break;
        }
    };
    Player.prototype.update = function () {
        var newX = this.x - this.upSpeed + this.downSpeed;
        if (newX > 0 && newX + 100 < window.innerWidth)
            this.x = newX;
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    return Player;
}());
var Level = (function () {
    function Level(g) {
        this.cars = [];
        this.score = 0;
        this.game = g;
        this.div = document.createElement("level");
        document.body.appendChild(this.div);
        this.scoreElement = document.createElement("score");
        document.body.appendChild(this.scoreElement);
        this.cars.push(new Car(), new Car(), new Car(), new Car(), new Car());
        this.player = new Player((innerWidth / 2), 37, 39);
    }
    Level.prototype.update = function () {
        this.scoreElement.innerHTML = "Score: " + this.score;
        for (var _i = 0, _a = this.cars; _i < _a.length; _i++) {
            var c = _a[_i];
            c.update();
            if (this.checkCollision(c.getRectangle(), this.player.getRectangle())) {
                this.game.showGameoverScreen();
            }
            if (c.getRectangle().left < 0) {
                this.game.showGameoverScreen();
            }
            c.update();
        }
        this.player.update();
    };
    Level.prototype.checkCollision = function (a, b) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom);
    };
    return Level;
}());
var GameOver = (function () {
    function GameOver(g) {
        var _this = this;
        this.game = g;
        this.div = document.createElement("splash");
        document.body.appendChild(this.div);
        this.div.addEventListener("click", function () { return _this.splashClicked(); });
        this.div.innerHTML = "GAME OVER";
    }
    GameOver.prototype.update = function () {
    };
    GameOver.prototype.splashClicked = function () {
        this.game.showLevel();
    };
    return GameOver;
}());
var Game = (function () {
    function Game() {
        this.currentscreen = new StartScreen(this);
    }
    Game.prototype.gameLoop = function () {
        this.currentscreen.update();
        requestAnimationFrame(this.gameLoop.bind(this));
    };
    Game.prototype.showLevel = function () {
        document.body.innerHTML = "";
        this.currentscreen = new Level(this);
        requestAnimationFrame(this.gameLoop.bind(this));
    };
    Game.prototype.showGameoverScreen = function () {
        console.log("Game over!!!!!!");
        document.body.innerHTML = "";
        this.currentscreen = new GameOver(this);
    };
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
var Grave = (function () {
    function Grave(x, y) {
        this.div = document.createElement("grave");
        var level = document.getElementsByTagName("level")[0];
        level.appendChild(this.div);
        this.x = x;
        this.y = y;
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    }
    return Grave;
}());
var StartScreen = (function () {
    function StartScreen(g) {
        var _this = this;
        this.game = g;
        this.div = document.createElement("splash");
        document.body.appendChild(this.div);
        this.div.addEventListener("click", function () { return _this.splashClicked(); });
        this.div.innerHTML = "START THE GAME";
    }
    StartScreen.prototype.update = function () {
    };
    StartScreen.prototype.splashClicked = function () {
        console.log("de game wordt wel gestart");
        this.game.showLevel();
    };
    return StartScreen;
}());
//# sourceMappingURL=main.js.map