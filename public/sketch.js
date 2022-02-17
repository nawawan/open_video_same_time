let vid, vid2, vid3, vid4;
function setup() {
    // IPアドレスに接続
    // localhostでもいいが、自分のPC内でしかやりとりできない
    // 他のPCと接続する際には、自分か相手か、どちらかのIPアドレスに合わせる必要がある
    // また、この時server.jsで設定したポート番号に合わせる
    //socket = io.connect('http://192.168.0.20:3001');
    //socket.on('pads', newOperated);
    //socket.on('match', result);
    createCanvas(1000, 500);
    noStroke();
    vid = createVideo('asset/tranp5.mov', vidLoad);
    vid.size(900, 450);
    vid.position(275, 145);
    vid.pause();
    let img = createImg(
      'asset/tranp_black.png',
    );
    img.position(200, 200);
    img.size(400, 380);
}

function controlkeyboard(keyboard){

}
function vidLoad() {
  vid.elt.muted = true;
}
let r = 100;
let cnt = 0;
function draw() {
  background(0);
  if(keyIsPressed){
    vid.play();
  }
  else{
    vid.pause();
  }
  /*if(mouseIsPressed){
    fill('green');
  }else{
    fill('white');
  }
  ellipse(mouseX, mouseY, r, r);*/
}