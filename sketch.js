function setup() { // 初始值設定
  createCanvas(windowWidth, windowHeight); //建立畫布
  colorMode(HSB, 360, 100, 100); // 設定顏色模式為 HSB
  noStroke(); // 不要邊框
}

function draw() {
  // 計算色相，根據滑鼠的 X 座標，範圍從 0 到 360
  let hue = map(mouseX, 0, windowWidth, 0, 360);
  // 計算亮度，根據滑鼠的 Y 座標，範圍從 0 到 100
  let brightness = map(mouseY, 0, windowHeight, 0, 100);
  
  // 設定填充色 (HSB 格式)
  fill(hue, 100, brightness);
  
  // 畫圓形，寬高為 200px
  ellipse(mouseX, mouseY, 200, 200);
}
