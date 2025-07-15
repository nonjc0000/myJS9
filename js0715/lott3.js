
// 排序前
let sortBefore = document.getElementById("sortBefore");
// 排序後
let sortAfter = document.getElementById("sortAfter");
// 第二區號碼
let secNoResult = document.getElementById("secNoResult");

function getLott(tp, firstMax, firstNo, secMax) {
    console.log(secMax);

    // 建立存放號碼的空陣列
    let lott = [];

    // while

    if (tp === 2) { // 不可以寫在迴圈裡，不然tp always=2會無限迴圈
        firstNo += 1;
    }
    while (1) {
        // 第一區
        // 是否為大樂透，若是則總數+1，最後一個給特別號
        // 檢查是已經有N個號碼
        if (lott.length === firstNo) {
            break;
        }

        // 亂數取號碼
        let lottNo = Math.floor(Math.random() * firstMax) + 1;
        // 檢查是否重覆
        if (!lott.includes(lottNo)) {   // 沒有重覆（不是真的）
            lott.push(lottNo);  // 增加號碼到陣列中            
        }
    }

    
    
    // 第二區
    
    secNoResult.textContent = ''; // 預設今彩是空的就不用寫else if (tp===3)

    if (tp === 1) {
        // 威力彩
        secNoResult.textContent = "第二區號碼：" + (Math.floor(Math.random() * secMax) + 1);
    } else if (tp === 2) {
        // 大樂透
        secNoResult.textContent = "特別號：" + lott.pop(); // 把最後一個數字拔出來
    }
    
    // 未排序
    sortBefore.textContent = "排序前號碼：" + lott;
    // 排序
    lott.sort((a, b) => {
        return a - b;
    })
    sortAfter.textContent = "排序後號碼：" + lott;
}