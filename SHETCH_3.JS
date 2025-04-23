function setup() { // 初始值設定
    createCanvas(windowWidth, windowHeight); //建立畫布
    colorMode(HSB,360,100,100); // 設定顏色模式為 HSB
  }
  
  function draw() {
    background(200, 100, 50); // 背景色 (HSB 格式)
    
    // 計算大小，根據滑鼠的 X 座標，範圍從 100 到 500
    let size = map(mouseX, 0, windowWidth, 100, 500);
    
    // 在視窗中從左到右劃出連續的方框和圓形
    for (let x = 0; x <= windowWidth; x += size + 10) {
      // 方框
      rectMode(CENTER);
      fill(30, 100, 50); // 填充色 (HSB 格式)
      strokeWeight(5);
      stroke(60, 100, 50); // 邊框色 (HSB 格式)
      rect(x, windowHeight/2, size, size);
      
      // 圓形
      strokeWeight(5);
      stroke(120, 100, 50); // 邊框色 (HSB 格式)
      fill(0, 100, 100); // 填充色 (HSB 格式)
      ellipse(x, windowHeight/2, size, size);
    }
  }
  