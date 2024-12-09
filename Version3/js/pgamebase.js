// ___________==========María Belén Martinez Sánchez==============___________
// ___________________=======3° VERSIÓN Final===========_________________
// ___________________=======13 de diciembre del 2024===========_________________

// 1) Variables y funciones comunes a todas las clases
var level = 1;
var multiPlayer = 1;
var player1 = "";
var player2 = "";
var stars = "";
var bombs = "";
var scoreTextPlayer1 = "";
var scoreTextPlayer2 = "";
var musicStart = true;//es para habilitar el audio o bandera
var movLeftP1 = false;
var movLeftP2 = false;
var movRightP1 = false;
var movRightP2 = false;
var movUpP1 = false;
var movUpP2 = false;
var levelName = 'Rookie';
var levelMode = 'oneplayer';
var arrayLevels = ['Rookie','Apprentice','Legend'];
var arrayMode = ['oneplayer','twoplayer'];

// 2) Las clases que componen a nuestro videojuego (lógica del juego)
class MainScene extends Phaser.Scene{
    constructor(){
        super('gameScene');
    }

    preload(){
        this.load.baseURL = './';
        // Elementos para la construcción de niveles
        this.load.image('fondo','./img/background.jpg');
        this.load.image('plarga','./img/plataformal.png');
        this.load.image('pcorta','./img/plataformac.png');
        this.load.image('bomba','./img/bomba.png');

        // Controles para jugadores
        this.load.image('controlPlayer1','./img/keysp01.png');
        this.load.image('controlPlayer2','./img/keysp02.png');

        // Elementos para escenarios
        this.load.image('fondo2', './img/background2.png');
        this.load.image('bomba', './img/bomba.png');
        this.load.image('plata', './img/platform.png');
        this.load.image('vertical', './img/platformverti.png');
        this.load.image('star', './img/star.png');
        this.load.image('danger', './img/puas.png');
        this.load.spritesheet('door', './img/door.png', { frameWidth: 45, frameHeight: 100 });

        // Elementos para los personajes
        this.load.spritesheet('personaje01', './img/personaje01.png', { frameWidth: 32, frameHeight: 48 });
        this.load.spritesheet('personaje02', './img/personaje02.png', { frameWidth: 32, frameHeight: 48 });

        // Elementos de audio
        this.load.audio('musica','./sounds/themesong.mp3');
        this.load.audio('puntos','./sounds/coin.mp3');
        this.load.audio('kaboom','./sounds/kaboom.mp3');
        this.load.audio('musica2','./sounds/themesongori.mp3');

    }

    create(){
        // Música en bucle
        if (musicStart) { // Revisa si la música no ha empezado
            musicStart = false;
            const music = this.sound.add('musica');
            music.play({
                volume: 1.10,
                loop: true, // Cambia a true si quieres que se repita
            });
        }

        
        
        // Elementos para la creación de los niveles
        this.add.image(640, 360, 'fondo');
        // Piso del nivel general
        var platforms = this.physics.add.staticGroup();
        platforms.create(184, 686, 'plata');
        platforms.create(368, 686, 'plata');
        platforms.create(552, 686, 'plata');
        platforms.create(736, 686, 'plata');
        platforms.create(920, 686, 'plata');
        platforms.create(1104, 686, 'plata');

        // Barras flotantes
        if ( level == 1 ){
            platforms.create(700, 100, 'plata');
            platforms.create(80, 500, 'vertical');
            platforms.create(20, 290, 'door').setScale(1.5);

        }else if( level == 2){
            platforms.create(500, 500, 'plata');
            platforms.create(800, 30, 'plata');
            platforms.create(1250, 550, 'door');
// Creas la plataforma
var plataforma = platforms.create(900, 380, 'danger').setScale(0.5);

// Crear un tween para mover la plataforma de izquierda a derecha
this.tweens.add({
    targets: plataforma,
    x: 600, // La posición final en el eje X (puedes ajustar esta posición según lo que necesites)
    duration: 2000, // Duración de 2 segundos
    ease: 'Linear', // Tipo de easing
    repeat: -1, // La animación se repite infinitamente
    yoyo: true // Hace que la plataforma regrese a su posición inicial después de cada ciclo
});
            
        }else if( level == 3){
            platforms.create(700, 100, 'plata');
            platforms.create(80, 500, 'vertical');
            platforms.create(770, 640, 'vertical');
            platforms.create(400, 650, 'vertical');
            platforms.create(500, 520, 'vertical');
        }
        

        // PERSONAJES - JUGADORES

        //_____PERSONAJE 1_________
        player1 = this.physics.add.sprite(100, 50, 'personaje01').setScale(1.8);
        // Obligar al personaje que permanezca en el escenario
        player1.setCollideWorldBounds(true);        
        player1.setBounce(0.2);
        player1.score = 0;
        this.physics.add.collider(player1, platforms);

        //_____PERSONAJE 2_________       
        if ( multiPlayer == 2 ){
            player2 = this.physics.add.sprite(150, 50, 'personaje02').setScale(1.8);
            // Obligar al personaje que permanezca en el escenario
            player2.setCollideWorldBounds(true);        
            player2.setBounce(0.2);
            player2.score = 0;
            this.physics.add.collider(player2, platforms);
            // Iniciar temporizador
            this.gameTime = 50;
            this.timeTXT = this.add.text(600, 10, this.gameTime, {fontFamily:'font1', fontSize:'80px', color:'yellow'});
            this.refreshTime();
        }


        // Estrellas
        stars = this.physics.add.group({
            key : 'star',
            repeat : 9,
            setXY:{ x:350, y:0, stepX:100 }
        });

        this.physics.add.collider(stars, platforms);
        // Hacer el efecto de rebote para cada hijo
        stars.children.iterate(function(child){
            child.setBounce(0.3);
        })

        // Crear traslape de personaje con estrellas
        this.physics.add.overlap(player1, stars, collectStar, null, this)        

        function collectStar (player1, star){
            player1.score += 10;
            colliderStar(star, this);
            scoreTextPlayer1.setText('ScoreP01: ' + player1.score)
            .setStyle({ fill: '#5ce1e6' })
        }
        
        
        function colliderStar(star, context){
            const musicPuntos = context.sound.add('puntos');
            musicPuntos.play({
                volume: 1,
                loop: false,
            });
            star.disableBody(true, true);
            if (stars.countActive(true) === 0){
                var bomb = bombs.create(Phaser.Math.Between(0,800),16,'bomba');  
                bomb.setBounce(1);  
                bomb.setCollideWorldBounds(true);
                bomb.setVelocity(Phaser.Math.Between(-400*level, 400*level),20);            
                stars.children.iterate(function(child){
                    child.enableBody(true, child.x, 0, true, true);
                });
            }
        }

        if (multiPlayer == 2) {
            this.physics.add.overlap(player2, stars, collectStar2, null, this);

            function collectStar2 (player2, star){
                player2.score += 10;
                colliderStar(star, this);
                scoreTextPlayer2.setText('ScoreP02: ' + player2.score)
                .setStyle({ fill: '#ccff00' })
            }
            this.physics.add.collider(player2, bombs, hitBomb2, null, this);

            function hitBomb2 (element, bomb) {  //sonido Kaboom               
                const musicCrash = this.sound.add('kaboom');
                musicCrash.play({
                    volume: 1,
                    loop: false,
                });
                if (player2.score - 50 <= 0){
                    player2.score = 0;
                }else {
                    player2.score -= 50;
                }
                scoreTextPlayer2.setText('ScoreP02: ' + player2.score);
            }       

            scoreTextPlayer2 = this.add.text(996,16, 'ScoreP02: 0',{fontSize:'40px', fill:'#fff'});
        }

        // Bombas
        bombs = this.physics.add.group();
        this.physics.add.collider(bombs, platforms);
        this.physics.add.collider(player1, bombs, hitBomb, null, this);

        function hitBomb (element, bomb) {
            const musicCrash = this.sound.add('kaboom');
            musicCrash.play({
                volume: 1,
                loop: false,
            });

            if (multiPlayer == 1) {                
                this.physics.pause();                
                player1.setTint(0xff0000);                
                player1.anims.play('turnP1');  
                
                this.time.addEvent({
                    delay: 1500,
                    loop: false,
                    callback: () => {
                        this.scene.start("endScene");
                    }
                });
            }else {
                if (player1.score - 50 <= 0){
                    player1.score = 0;
                }else {
                    player1.score -= 50;
                }
                scoreTextPlayer1.setText('ScoreP01: ' + player1.score);
            }
        }
        
        // Crear animación de personaje 01
        this.anims.create({
            key: 'leftP1',
            frames: this.anims.generateFrameNumbers('personaje01', {start: 0, end: 2}),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'turnP1',
            frames: [ {key: 'personaje01', frame: 4}],
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'rightP1',
            frames: this.anims.generateFrameNumbers('personaje01', { start: 6, end: 8}),
            frameRate: 10,
            repeat: -1
        }); 
        scoreTextPlayer1 = this.add.text(16, 16, 'ScoreP01: 0',{fontSize:'40px', fill:'#fff'});

        // Crear animación de personaje 02
        if (multiPlayer == 2) {
            this.anims.create({
                key: 'leftP2',
                frames: this.anims.generateFrameNumbers('personaje02', {start: 0, end: 2}),
                frameRate: 10,
                repeat: -1
            });
            this.anims.create({
                key: 'turnP2',
                frames: [ {key: 'personaje02', frame: 4}],
                frameRate: 10,
                repeat: -1
            });
            this.anims.create({
                key: 'rightP2',
                frames: this.anims.generateFrameNumbers('personaje02', { start: 6, end: 8}),
                frameRate: 10,
                repeat: -1
            });
        } 
        
        // Controles para móviles
        if (screen.width <= 900){
            this.add.image(100, 130, 'controlPlayer1').setScale(1.8);
            const leftOptionP1 = this.add.zone(14, 132, 55, 55);
            // this.add.graphics().lineStyle(2, 0xff0000).strokeRectShape(leftOptionP1);
            leftOptionP1.setOrigin(0);
            leftOptionP1.setInteractive();
            leftOptionP1.on('pointerdown', () => setLeftP1(true));
            leftOptionP1.on('pointerup', () => setLeftP1(false));
            leftOptionP1.on('pointerout', () => setLeftP1(false));
            
            const rightOptionP1 = this.add.zone(130, 132, 55, 55);
            // this.add.graphics().lineStyle(2, 0xff0000).strokeRectShape(rightOptionP1);
            rightOptionP1.setOrigin(0);
            rightOptionP1.setInteractive();
            rightOptionP1.on('pointerdown', () => setRightP1(true));
            rightOptionP1.on('pointerup', () => setRightP1(false));
            rightOptionP1.on('pointerout', () => setRightP1(false));

            const upOptionP1 = this.add.zone(72, 74, 55, 55);
            // this.add.graphics().lineStyle(2, 0xff0000).strokeRectShape(upOptionP1);
            upOptionP1.setOrigin(0);
            upOptionP1.setInteractive();
            upOptionP1.on('pointerdown', () => setUpP1(true));
            upOptionP1.on('pointerup', () => setUpP1(false));
            upOptionP1.on('pointerout', () => setUpP1(false));

            if (multiPlayer == 2){
                this.add.image(1180, 130, 'controlPlayer2').setScale(1.8);
                const leftOptionP2 = this.add.zone(1095, 132, 55, 55);
                // this.add.graphics().lineStyle(2, 0xff0000).strokeRectShape(leftOptionP2);
                leftOptionP2.setOrigin(0);
                leftOptionP2.setInteractive();
                leftOptionP2.on('pointerdown', () => setLeftP2(true));
                leftOptionP2.on('pointerup', () => setLeftP2(false));
                leftOptionP2.on('pointerout', () => setLeftP2(false));
                
                const rightOptionP2 = this.add.zone(1210, 132, 55, 55);
                // this.add.graphics().lineStyle(2, 0xff0000).strokeRectShape(rightOptionP2);
                rightOptionP2.setOrigin(0);
                rightOptionP2.setInteractive();
                rightOptionP2.on('pointerdown', () => setRightP2(true));
                rightOptionP2.on('pointerup', () => setRightP2(false));
                rightOptionP2.on('pointerout', () => setRightP2(false));
    
                const upOptionP2 = this.add.zone(1152, 74, 55, 55);
                // this.add.graphics().lineStyle(2, 0xff0000).strokeRectShape(upOptionP2);
                upOptionP2.setOrigin(0);
                upOptionP2.setInteractive();
                upOptionP2.on('pointerdown', () => setUpP2(true));
                upOptionP2.on('pointerup', () => setUpP2(false));
                upOptionP2.on('pointerout', () => setUpP2(false));
    
                function setLeftP2(status){
                    movLeftP2 = status;
                }    
                function setRightP2(status){
                    movRightP2 = status;
                }    
                function setUpP2(status){
                    movUpP2 = status;
                }
            }
    
        }


        function setLeftP1(status){
            movLeftP1 = status;
        }
        function setRightP1(status){
            movRightP1 = status;
        }
        function setUpP1(status){
            movUpP1 = status;
        }

    }

    refreshTime(){
        this.gameTime--;
        this.timeTXT.setText(this.gameTime);
        if (this.gameTime === 0){
            this.physics.pause();
            player1.setTint(0xff0000);
            player2.setTint(0xff0000);

            this.time.addEvent({
                delay: 1500,
                loop: false,
                callback: () => {
                    this.scene.start("endScene");
                }
            });
        }else{            
            this.time.delayedCall(1000, this.refreshTime,[],this);
        }
    }
    
    update(){
        // Agregar teclas de movimiento
        var cursors = this.input.keyboard.createCursorKeys();

        if (cursors.left.isDown || movLeftP1){
            player1.setVelocityX(-160);
            player1.anims.play('leftP1',true);

        }else if (cursors.right.isDown || movRightP1){
            player1.setVelocityX(160);
            player1.anims.play('rightP1',true);
        }else{
            player1.setVelocityX(0);
            player1.anims.play('turnP1',true);
        }

        // Verificar si está en el suelo P01
        if ((cursors.up.isDown || movUpP1) && player1.body.touching.down) {
            player1.setVelocityY(-350);
        }

        if (multiPlayer == 2) {
            var keyObjUp = this.input.keyboard.addKey('W');
            var player2Up = keyObjUp.isDown;

            var keyObjrightP1 = this.input.keyboard.addKey('D');
            var player2rightP1 = keyObjrightP1.isDown;

            var keyObjLeft = this.input.keyboard.addKey('A');
            var player2Left = keyObjLeft.isDown;

            if (player2Left || movLeftP2 ) {
                player2.setVelocityX(-160);
                player2.anims.play('leftP2',true);
            }else if (player2rightP1 || movRightP2 ) {
                player2.setVelocityX(160);
                player2.anims.play('rightP2',true);
            }else {
                player2.setVelocityX(0);
                player2.anims.play('turnP2',true);
            }
            // Verificar si está en el suelo P02
            if (( player2Up || movUpP2 ) && player2.body.touching.down) {
                player2.setVelocityY(-350);
            }
        }        
    }
}

class Menu extends Phaser.Scene{
    constructor(){
        super('menuScene');
    }

    preload(){        
        // Multimedia
                // Multimedia
                this.load.baseURL = './';
                this.load.image('fondo','../img/background.jpg');
                this.load.image('controlPlayer1','../img/keysp01.png');
                this.load.image('fondofinal','../img/background2.png');
                this.load.image('star','../img/star.png');
                this.load.image('logo','../img/logo.png');
                this.load.image('player01','../img/player01.png');
                this.load.image('player02','../img/player02.png');
                this.load.image('botonesmenu','../img/botones.png');
                this.load.image('botonesnivel','../img/botonesnivelf.png');
                this.load.image('botonesmodo','../img/botonesmodo.png');
                this.load.image('regresar','../img/regresar.png');
                this.load.image('keys01','../img/keysp01.png');
                this.load.image('keys02','../img/keysp02.png');
                        // Elementos de audio

    }

    create() {
        
        // En segundo lugar, se ejecuta una vez
        // Toda la lógica del videojuego
        this.add.image(640, 380, 'fondofinal');
        
        // this.add.image(550, 200, 'logo').setScale(0.5);
        //ANIMACIÓN DE LOGO
        let logo = this.add.image(350, 300, 'logo').setScale(0); // Comienza con escala 0
        this.tweens.add({
            targets: logo,
            scale: 0.7,   // Finaliza con escala 0.5
            duration: 2000, // Duración de la animación
            ease: 'Power2', // Easing para una animación suave
        });

        // this.add.image(550, 470, 'botonesmenu').setScale(2.0);
        let botonesMenu = this.add.image(950, 470, 'botonesmenu').setScale(0); // Comienza con escala 0
        this.tweens.add({
            targets: botonesMenu,
            scale: 2.0,     // Finaliza con escala 2.0
            duration: 2000,  // Duración de la animación
            ease: 'Power2',  // Easing para una animación suave
        });
        
        
        // Función para añadir hover y clics a las zonas
        const addButtonInteraction = (zone, colorDefault, colorHover, redirectScene) => {
            const graphics = this.add.graphics();
            graphics.lineStyle(2, colorDefault).strokeRect(zone.x, zone.y, zone.width, zone.height);
    
            // Hacer interactivo y añadir eventos
            zone.setInteractive();
            zone.on('pointerover', () => {
                graphics.clear();
                graphics.lineStyle(2, colorHover).strokeRect(zone.x, zone.y, zone.width, zone.height);
            });
            zone.on('pointerout', () => {
                graphics.clear();
                graphics.lineStyle(2, colorDefault).strokeRect(zone.x, zone.y, zone.width, zone.height);
            });
            zone.once('pointerdown', () => this.redirectScene(redirectScene));
        };
    
        // Inicio ===> Crear zona
        const startOption = this.add.zone(855, 370, 188, 110).setOrigin(0);
        addButtonInteraction(startOption, 0x0c1b1e, 0xffff, 'gameScene');
    
        // Nivel ===> Crear zona 0x0c1b1e
        const levelOption = this.add.zone(655, 487, 188, 90).setOrigin(0);
        addButtonInteraction(levelOption, 0x0c1b1e, 0xffff, 'levelScene');
    
        // Modo ===> Crear zona
        const modeOption = this.add.zone(855, 487, 188, 90).setOrigin(0);
        addButtonInteraction(modeOption, 0x0c1b1e, 0xffff, 'modeScene');
    
        // Controles ===> Crear zona
        const controlsOption = this.add.zone(1055, 487, 188, 90).setOrigin(0);
        addButtonInteraction(controlsOption, 0x0c1b1e, 0xffff, 'controlsScene');
    }
    
    redirectScene(sceneName){
        this.scene.start(sceneName);
    }

    update(){
        // En tercer lugar, se ejutar una y otra vez
        // Actualización de multimedia
    }

}

class Level extends Phaser.Scene{
    constructor(){
        super('levelScene');
    }

    preload(){
        // En primer lugar, solo se ejecuta una vez
        // Multimedia

    }

    create() {
        // En segundo lugar, se ejecuta una vez
        // Toda la lógica del videojuego
        this.add.image(640, 380, 'fondofinal');
        this.add.image(300, 250, 'logo').setScale(0.6);
        this.add.image(940, 500, 'botonesnivel').setScale(2.2);
    
        // Novato ===> Crear zona
        const rookieOption = this.add.zone(588, 399, 220, 100);
        rookieOption.setOrigin(0);
        rookieOption.setInteractive();
        rookieOption.once('pointerdown', () => this.changeLevel(1));
    
        // Agregar hover para Novato
        rookieOption.on('pointerover', () => rookieGraphic.setAlpha(1));
        rookieOption.on('pointerout', () => rookieGraphic.setAlpha(0));
    
        const rookieGraphic = this.add.graphics();
        rookieGraphic.lineStyle(2, 0xffff).strokeRectShape(rookieOption);
    
        // Aprendiz ===> Crear zona 0x0c1b1e, 0xffff
        const apprenticeOption = this.add.zone(820, 399, 220, 100);
        apprenticeOption.setOrigin(0);
        apprenticeOption.setInteractive();
        apprenticeOption.once('pointerdown', () => this.changeLevel(2));
    
        // Agregar hover para Aprendiz
        apprenticeOption.on('pointerover', () => apprenticeGraphic.setAlpha(1));
        apprenticeOption.on('pointerout', () => apprenticeGraphic.setAlpha(0));
    
        const apprenticeGraphic = this.add.graphics();
        apprenticeGraphic.lineStyle(2, 0xffff).strokeRectShape(apprenticeOption);
    
        // Leyenda ===> Crear zona
        const legendOption = this.add.zone(1050, 399, 220, 100);
        legendOption.setOrigin(0);
        legendOption.setInteractive();
        legendOption.once('pointerdown', () => this.changeLevel(3));
    
        // Agregar hover para Leyenda
        legendOption.on('pointerover', () => legendGraphic.setAlpha(1));
        legendOption.on('pointerout', () => legendGraphic.setAlpha(0));
    
        const legendGraphic = this.add.graphics();
        legendGraphic.lineStyle(2, 0xffff).strokeRectShape(legendOption);
    
        // Regresar ===> Crear zona
        const backOption = this.add.zone(818, 520, 220, 100);
        backOption.setOrigin(0);
        backOption.setInteractive();
        backOption.once('pointerdown', () => this.redirectScene('menuScene'));
    
        // Agregar hover para Regresar
        backOption.on('pointerover', () => backGraphic.setAlpha(1));
        backOption.on('pointerout', () => backGraphic.setAlpha(0));
    
        const backGraphic = this.add.graphics();
        backGraphic.lineStyle(2, 0x7ed957).strokeRectShape(backOption);
    }
    
    redirectScene(sceneName){
        this.scene.start(sceneName);
    }

    changeLevel(newLevel){
        level = newLevel;
        levelName = arrayLevels[level-1];
        this.redirectScene('menuScene');
    }



    update(){
        // En tercer lugar, se ejutar una y otra vez
        // Actualización de multimedia
    }

}

//Cantidad de jgadores
class Mode extends Phaser.Scene{
    constructor(){
        super('modeScene');
    }

    preload(){
        // En primer lugar, solo se ejecuta una vez
        // Multimedia
                // Multimedia        

    }

    create() {
        // En segundo lugar, se ejecuta una vez
        // Toda la lógica del videojuego
        this.add.image(640, 380, 'fondofinal');
        this.add.image(400, 200, 'logo').setScale(0.6);
        this.add.image(950, 400, 'botonesmodo').setScale(2.4);
    
        // 1 jugador ===> Crear zona
        const oneOption = this.add.zone(710, 300, 250, 110);
        oneOption.setOrigin(0);
        oneOption.setInteractive();
        oneOption.once('pointerdown', () => this.changeMode(1));
    
        const oneGraphic = this.add.graphics();
        oneGraphic.lineStyle(2, 0xffff).strokeRect(710, 300, 250, 110);
    
        oneOption.on('pointerover', () => oneGraphic.setAlpha(1));
        oneOption.on('pointerout', () => oneGraphic.setAlpha(0));
    
        // 2 jugadores ===> Crear zona
        const twoOption = this.add.zone(985, 300, 250, 110);
        twoOption.setOrigin(0);
        twoOption.setInteractive();
        twoOption.once('pointerdown', () => this.changeMode(2));
    
        const twoGraphic = this.add.graphics();
        twoGraphic.lineStyle(2, 0xffff).strokeRect(985, 300, 250, 110);
    
        twoOption.on('pointerover', () => twoGraphic.setAlpha(1));
        twoOption.on('pointerout', () => twoGraphic.setAlpha(0));
    
        // Regresar ===> Crear zona
        const backOption = this.add.zone(835, 440, 260, 110);
        backOption.setOrigin(0);
        backOption.setInteractive();
        backOption.once('pointerdown', () => this.redirectScene('menuScene'));
    
        const backGraphic = this.add.graphics();
        backGraphic.lineStyle(2, 0x7ed957).strokeRect(835, 440, 260, 110);
    
        backOption.on('pointerover', () => backGraphic.setAlpha(1));
        backOption.on('pointerout', () => backGraphic.setAlpha(0));
    }
            
    redirectScene(sceneName){
        this.scene.start(sceneName);
    }

    changeMode(newMode){
        multiPlayer = newMode;
        levelMode = arrayMode[multiPlayer-1];
        this.redirectScene('menuScene');
    }

    update(){
        // En tercer lugar, se ejutar una y otra vez
        // Actualización de multimedia
    }

}

class Controls extends Phaser.Scene{
    constructor(){
        super('controlsScene');
    }

    preload(){
        // En primer lugar, solo se ejecuta una vez
        // Multimedia        
    }

    create(){
        // En segundo lugar, se ejecuta una vez
        // Toda la lógica del videojuego
        this.add.image(640, 380, 'fondofinal');
        this.add.image(660, 160, 'logo').setScale(0.4);
        this.add.image(630, 600, 'regresar').setScale(1.0);
        this.add.image(420, 425, 'player01').setScale(3.0);
        this.add.image(1020, 425, 'player02').setScale(3.0);
        this.add.image(350, 500, 'keys01').setScale(2.0);
        this.add.image(950, 500, 'keys02').setScale(2.0);

// Texto asociado a la imagen
const textPlayer01 = this.add.text(400, 350, 'Controles para jugador 1', {
    font: '35px Arial',
    fill: '#5ce1e6',
    align: 'center',
}).setOrigin(0.5);

const textPlayer02 = this.add.text(980, 350, 'Controles para jugador 2', {
    font: '35px Arial',
    fill: '#7ed957',
    align: 'center',
}).setOrigin(0.5);

// Boton Regresar ===> Crear zona
const backOption = this.add.zone(520, 600, 260, 110);
backOption.setOrigin(0);
backOption.setInteractive();
backOption.once('pointerdown', () => this.redirectScene('menuScene'));

const backGraphic = this.add.graphics();
backGraphic.lineStyle(2, 0x7ed957).strokeRect(520, 555, 260, 110);
backGraphic.setAlpha(0); // Inicialmente invisible

backOption.on('pointerover', () => backGraphic.setAlpha(1)); // Mostrar al pasar el cursor
backOption.on('pointerout', () => backGraphic.setAlpha(0));  // Ocultar al salir del cursor

this.add.image(630, 600, 'regresar').setScale(1.0);

    }
    redirectScene(sceneName){
        this.scene.start(sceneName);
    }

    update(){
        // En tercer lugar, se ejutar una y otra vez
        // Actualización de multimedia
    }

}

class EndGame extends Phaser.Scene {
    constructor() {
        super('endScene');
    }

    preload() {
        // Carga de imágenes
    }

    create() {
        // Fondo principal
        this.add.image(640, 360, 'fondofinal');

        // Botón "Regresar"
        let regresarButton = this.add.image(620, 560, 'regresar');
        regresarButton.setInteractive();

        // Animación de "pop" constante
        this.tweens.add({
            targets: regresarButton,
            scale: 1.1,
            duration: 300,
            ease: 'Bounce',
            repeat: -1,
            yoyo: true,
        });

        // Animación para estrellas
        const createRotatingStar = (x, y, scale) => {
            let star = this.add.image(x, y, 'star').setScale(scale);
            this.tweens.add({
                targets: star,
                angle: 360,
                duration: 2000,
                repeat: -1,
                ease: 'Linear',
            });
        };

        createRotatingStar(200, 150, 3.0);
        createRotatingStar(600, 300, 0.8);
        createRotatingStar(1150, 250, 3.0);

        // Jugadores
        this.add.image(300, 550, 'player01').setScale(3.5);
        this.add.text(100, 400, 'Jugador 1: ' + player1.score + ' Puntos', { fontFamily: 'font1', fontSize: '40px', fill: '#7ed957' });

        if (multiPlayer == 2) {
            this.add.image(950, 550, 'player02').setScale(3.5);
            this.add.text(750, 400, 'Jugador 2: ' + player2.score + ' Puntos', { fontFamily: 'font1', fontSize: '40px', fill: '#00ffff' });
        }

        // Logo con animación
        let logo = this.add.image(650, 200, 'logo').setScale(0.1); // Inicialmente pequeño para animar
        this.tweens.add({
            targets: logo,
            scale: 0.5, // Escala final
            duration: 2000,
            ease: 'Power2',
        });

        // Botón de "Regresar" (Zona interactiva adicional)
        const backOption = this.add.zone(495, 509, 280, 125).setOrigin(0);
        backOption.setInteractive();

        // Cambiar color al pasar el puntero sobre el botón
        const graphics = this.add.graphics();
        graphics.lineStyle(2, 0x0c1b1e).strokeRectShape(backOption); // Color inicial

        backOption.on('pointerover', () => {
            graphics.clear().lineStyle(2, 0xffff).strokeRectShape(backOption); // Hover
        });

        backOption.on('pointerout', () => {
            graphics.clear().lineStyle(2, 0x0c1b1e).strokeRectShape(backOption); // Original
        });

        backOption.once('pointerdown', () => this.redirectScene('menuScene'));
    }

    redirectScene(sceneName) {
        this.scene.start(sceneName);
    }

    update() {
        // Lógica que se ejecuta continuamente
    }
}


// 3) Configuración base del videojuego
const config={
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    // Array que indica el orden de visualización del vj
    scene: [Menu,Level, Mode,EndGame,  MainScene, Controls],
    // scene: [ EndGame,MainScene,Controls,Menu,Mode, Level],
    scale: {
        mode: Phaser.Scale.FIT
    },physics:{
        default:'arcade',
        arcade:{
            debug: false,
            gravity:{
                y:300,
            },
        },
    },
}
// 4) Inicialización de Phaser
new Phaser.Game(config);

