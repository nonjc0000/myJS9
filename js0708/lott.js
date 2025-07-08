// 排序前
let sortBefore = document.getElementById("sortBefore");
// 排序後
let sortAfter = document.getElementById("sortAfter");
// 第二區號碼
let secNo = document.getElementById("secNo");


// 威力彩
function lott1() {
    // 建立存放號碼的空陣列
    let lott = [];

    // while
    let count = 1;

    // while (lott.length < 6) {

    //     // 亂數取號碼
    //     lottNo = Math.floor(Math.random() * 38) + 1;

    //     // 檢查是否重複
    //     if (lott.includes(lottNo) == false) { /* 沒有重複 */
    //         lott.push(lottNo); /* 增加號碼到陣列中 */
    //         // count++;
    //     } 

    // }

    while (1) {
        // 檢查是否已經有6個號碼
        if (lott.length == 6) {
            break;
        }

        // 亂數取號碼
        let lottNo = Math.floor(Math.random() * 38) + 1;

        // 檢查是否重複，先檢查是否重複再加入陣列
        if (lott.includes(lottNo) == false) { /* 沒有重複 */
            lott.push(lottNo); /* 增加號碼到陣列中 */
            // count++;
        }

    }


    // // for
    // // 第一個號碼
    // let lottNo = Math.floor(Math.random() * 38) + 1;
    // lott.push(lottNo);

    // // 第二個號碼之後，每個號碼都要檢查是否重複
    // // 因為還要跑五個號碼
    // for (let i = 1; i <= 5; i++) {
    //     // 亂數取號碼
    //     lottNo = Math.floor(Math.random() * 38) + 1;
    //     // 檢查是否重複
    //     if (lott.includes(lottNo) == false) { /* 沒有重複 */
    //         lott.push(lottNo); /* 增加號碼到陣列中 */
    //     } else {
    //         i--; /* 當號碼重複時，這次的執行不算數 */
    //     }
    // }
    // console.log(lott);

    // 未排序
    sortBefore.textContent = `排序前號碼：${lott}`

    // 排序
    lott.sort((a, b) => {
        return (a - b);
    })
    sortAfter.textContent = `排序後號碼：${lott}`

    // 第二區號碼：1-8取一個
    secNo.textContent = `第二區號碼：${Math.floor(Math.random() * 38) + 1}`

    secNo.style.display = "block"


}

// 大樂透
function lott2() {
    // 建立存放號碼的空陣列
    let lott = [];

    while (1) {
        // 檢查是否已經有6個號碼
        if (lott.length == 6) {
            break;
        }

        // 亂數取號碼
        let lottNo = Math.floor(Math.random() * 49) + 1;

        // 檢查是否重複，先檢查是否重複再加入陣列
        if (lott.includes(lottNo) == false) { /* 沒有重複 */
            lott.push(lottNo); /* 增加號碼到陣列中 */
            // count++;
        }

    }

    // or：找7個號碼，取出陣列最後一個值後，並移除
    // secNo.textContent=`特別號：${lott.pop()}`

    // 未排序
    sortBefore.textContent = `排序前號碼：${lott}`

    // 排序
    lott.sort((a, b) => {
        return (a - b);
    })
    sortAfter.textContent = `排序後號碼：${lott}`

    // 第二區號碼：1-49取一個（不能跟第一區重複）
    while (1) {
        let lottNo2 = Math.floor(Math.random() * 49) + 1
        //    檢查是否重複
        if (lott.includes(lottNo2) == false) {
            secNo.textContent = `特別號：${lottNo2}`
            break;
        }

    }

    secNo.style.display = "block"
}

// 今彩539
function lott3() {
    // 建立存放號碼的空陣列
    let lott = [];

    // while

    while (1) {
        // 檢查是否已經有6個號碼
        if (lott.length == 5) {
            break;
        }

        // 亂數取號碼
        let lottNo = Math.floor(Math.random() * 39) + 1;

        // 檢查是否重複，先檢查是否重複再加入陣列
        if (lott.includes(lottNo) == false) { /* 沒有重複 */
            lott.push(lottNo); /* 增加號碼到陣列中 */
        }

    }


    // 未排序
    sortBefore.textContent = `排序前號碼：${lott}`

    // 排序
    lott.sort((a, b) => {
        return (a - b);
    })
    sortAfter.textContent = `排序後號碼：${lott}`

    // 今彩539沒有第二區號碼

    secNo.style.display = "none"

}