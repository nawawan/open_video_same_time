function setup() {
    // IPアドレスに接続
    // localhostでもいいが、自分のPC内でしかやりとりできない
    // 他のPCと接続する際には、自分か相手か、どちらかのIPアドレスに合わせる必要がある
    // また、この時server.jsで設定したポート番号に合わせる
    socket = io.connect('http://192.168.0.20:3000');
    //socket.on('pads', newOperated);
    //socket.on('match', result);
    createCanvas(400, 400);
    noStroke();
}

function controlkeyboard(keyboard){

}
let r = 100;
function draw() {
  background(0);
  if(mouseIsPressed){
    fill('green');
  }else{
    fill('white');
  }
  ellipse(mouseX, mouseY, r, r);
}