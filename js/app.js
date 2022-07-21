// countdown.innerHTML = "<span>" + days + "</span><span>" + hours + "</span><span>" + minutes + "</span><span>" + seconds + "</span>";

//get elements
const counterSub = document.querySelector('#counters');
const countdown = document.querySelector('#countdown');




//submit order form 
counterSub.onsubmit = (e) => {
    e.preventDefault();

    const form_value = new FormData(e.target);
    const { date, time } = Object.fromEntries(form_value.entries());
    
    if (!time || !date) {
        alert('Those Field must not be empty!');
    } else {
        e.target.reset();
        const timeKeeper = setInterval(() => {
            //timestamps
        const start_time = Date.now();
        const end_time = new Date(date + ' ' + time);
        const order_time = Math.floor(Math.abs(end_time.getTime() - start_time));
        
        //get val form time
        const total_sec     = Math.floor(order_time / 1000);
        const total_min     = Math.floor(total_sec / 60);
        const total_hour    = Math.floor(total_min / 60);
        const total_day     = Math.floor(total_hour / 24);
        
        const hour  = total_hour - (total_day * 24);
        const min   = total_min - (total_day * 24 * 60) - (hour * 60);
        const sec   = total_sec - (total_day * 24 * 60 * 60) - (hour * 60 * 60) - (min * 60);
        
        if (total_sec <= 0) {
            clearInterval(timeKeeper);
        }
            
            
        countdown.innerHTML = ` <div id="tiles">
                                    <span>${total_day}</span>
                                    <span>${hour}</span>
                                    <span>${min}</span>
                                    <span>${sec}</span>
                                </div>
                                <div class="labels">
                                    <li>Days</li>
                                    <li>Hours</li>
                                    <li>Mins</li>
                                    <li>Secs</li>
                                </div>`;
            
           
       },1000);
    }

}
