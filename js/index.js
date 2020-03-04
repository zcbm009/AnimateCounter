import main from '/css/main.scss'

const counters = document.querySelectorAll('.counter')

counters.forEach((counter) => {
    const countSpeed = 300
    let updateCounter = () => {
        // 字符串前加+号确认target是一个数字
        const target = +counter.getAttribute('data-target')
        const speed = target/countSpeed
        const count = +counter.innerText

        /* 注意这里关于数字增长的实现，这里并没有使用setInterval，而是
        使用setTimeout来实现，如果未增长到需要的数字则继续使用setTimeout */
        if(count < target){
            counter.innerText = Math.ceil(count + speed )
            setTimeout(updateCounter, 1);
        }else{
            counter.innerText = target
        }

    }
    updateCounter()
})

export {
    main
}