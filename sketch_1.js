function setup() { // 初始值設定
    createCanvas(windowWidth, windowHeight); //建立畫布
  }
  
  function draw() {
    background(501,100,50); // 背景色
    
    // 圓形邊框寬度5 邊框顏色#256412 填滿顏色#ff0000 
    strokeWeight(5);
    stroke("#256412");
    fill("#ff0000");
    ellipse(windowWidth/2,windowHeight/2,200,200);
  // 從最左邊視窗產生連續的圓形到右邊視窗
    for (let i=0; i<windowWidth; i+=50) {
      ellipse(i,windowHeight/2,50,50);
  
  
    }
    
  
    
  }
  