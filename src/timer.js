export function timer() {
    let Interval = null;
    const startBtn = document.getElementById("start");
    const resetBtn = document.getElementById("reset");
    const min = document.getElementById("min")
    const suc = document.getElementById("suc")
    let minu = 25;
    let sucn = 60;
    resetBtn.addEventListener("click", function () {

        clearInterval(Interval);
        Interval = null
        min.innerText = 0;
        suc.innerText = 0;
        sucn = 60;
        minu = 25
    })

    startBtn.addEventListener("click", function () {
        console.log("vrai");

        if (Interval === null) {
            Interval = setInterval(() => {
                sucn--
                if (sucn === 0) {
                    minu--
                    sucn = 60
                } else if (minu === 0) {
                    clearInterval(Interval);
                    Interval = null
                }
                
                console.log("sucn");
                min.innerText = minu;
                suc.innerText = sucn;
            }, 1000)
        }


    });
}