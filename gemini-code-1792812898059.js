// 假設使用者拍了 4 張照片，存成圖片物件陣列 images
function mergePhotos(images) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    // 設定合成後的大圖尺寸 (例如 1080x1080 正方形)
    canvas.width = 1080;
    canvas.height = 1080;
    
    // 背景填白色或主題色
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // 計算 2x2 格子的每張圖大小 (扣掉邊距)
    const size = 500;
    const gap = 26;
    
    // 依序把 4 張圖畫到畫布上指定座標
    const positions = [
        { x: gap, y: gap },                  // 左上
        { x: size + gap*2, y: gap },         // 右上
        { x: gap, y: size + gap*2 },         // 左下
        { x: size + gap*2, y: size + gap*2 } // 右下
    ];

    images.forEach((img, index) => {
        const pos = positions[index];
        ctx.drawImage(img, pos.x, pos.y, size, size);
    });

    // 加上最底部的浮水印或日期
    ctx.fillStyle = '#333333';
    ctx.font = '24px sans-serif';
    ctx.fillText('Color Hunter Travel Challenge', 30, 1050);

    // 轉成圖片 URL 讓使用者下載或長按儲存
    const dataUrl = canvas.toDataURL('image/jpeg');
    return dataUrl;
}