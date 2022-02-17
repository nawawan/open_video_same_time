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
    vid = createVideo('asset/firenew2.mp4', vidLoad);
    vid.size(320, 180);
    vid2 = createVideo('asset/firenew2.mp4', vid2Load);
    vid2.size(320, 180);
    vid3 = createVideo('asset/firenew2.mp4', vid3Load);
    vid3.size(320, 180);
    vid4 = createVideo('asset/firenew2.mp4', vid4Load);
    vid4.size(320, 180);
}

function controlkeyboard(keyboard){

}
function vidLoad() {
  vid.elt.muted = true;
  vid.time(5);
  vid.loop();
}
function vid2Load() {
  vid2.elt.muted = true;
  vid2.time(9.5);
  vid2.loop();
}
function vid3Load() {
  vid3.elt.muted = true;
  vid3.time(13.5);
  vid3.loop();
}
function vid4Load() {
  vid4.elt.muted = true;
  vid4.loop();
}
let r = 100;
function draw() {
  background(0);
  /*if(mouseIsPressed){
    fill('green');
  }else{
    fill('white');
  }
  ellipse(mouseX, mouseY, r, r);*/
}