var vid = [];
function setup() {
    // IPアドレスに接続
    // localhostでもいいが、自分のPC内でしかやりとりできない
    // 他のPCと接続する際には、自分か相手か、どちらかのIPアドレスに合わせる必要がある
    // また、この時server.jsで設定したポート番号に合わせる
    //socket = io.connect('http://192.168.0.20:3001');
    //socket.on('pads', newOperated);
    //socket.on('match', result);
    createCanvas(1000, 1500);
    noStroke();
    let l = 200, r = 200;
    let ofs0 = 0, ofs1 = 0;
    for(let i = 1; i <= 12; i++){
      let v = createVideo('asset/tranp' + i + '.mov');
      v.elt.muted = true;
      v.size(100, 100);
      v.position(l + ofs0, r + ofs1);
      v.pause();
      vid.push(v);
      if(i % 3 == 0){
        ofs0 = 0;
        ofs1 += 300;
      }
      else{
        ofs0 += 70;
      }
    }
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
  if(key == 'q'){
    vid[0].play();
    vid[3].play();
  }
  else if(key == 'w'){
    vid[1].play();
    vid[4].play();
  }
  else if(key == 'e'){
    vid[2].play();
    vid[5].play();
  }
  else if(key == 'a'){
    vid[6].play();
    vid[9].play();
  }
  else if(key == 's'){
    vid[7].play();
    vid[10].play();
  }
  else if(key == 'd'){
    vid[8].play();
    vid[11].play();
  }
  else{
    for(let i = 0; i < 12; i++) vid[i].pause();
  }
  /*if(mouseIsPressed){
    fill('green');
  }else{
    fill('white');
  }
  ellipse(mouseX, mouseY, r, r);*/
}