
// 排序前
let sortBefore = document.getElementById("sortBefore");
// 排序後
let sortAfter = document.getElementById("sortAfter");
// 第二區號碼
let secNoResult = document.getElementById("secNoResult");

function getLott(tp, firstMax, firstNo, secMax, secNo) {

    // 建立存放號碼的空陣列
    let lott = [];

    // while

    while (1) {
        // 第一區
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

    // 未排序
    sortBefore.textContent = "排序前號碼:" + lott;
    // 排序
    lott.sort((a, b) => {
        return a - b;
    })
    sortAfter.textContent = "排序後號碼:" + lott;


    // 第二區：1-8取1個

    if (secNo !== 0) {
        secNoResult.textContent = "第二區號碼:" + (Math.floor(Math.random() * secMax) + 1);
    } else {
        secNoResult.textContent = ''
    }

    // 這樣寫第二區會重複！！
}