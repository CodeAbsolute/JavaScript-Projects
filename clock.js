setInterval(() => {
    d = new Date();
    // getting current time 
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();

    // 60min -> 360 deg
    // 1min  -> 360/60 -> 6 deg/min

    // 60sec -> 360 deg
    // 1sec  -> 360/60 -> 6 deg/sec

    // 12hr -> 360 deg
    // 1hr  -> 360/12 -> 30deg/hr + 6deg/min

    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;

    hours.style.transform = `rotate(${hrotation}deg)`;
    minutes.style.transform = `rotate(${mrotation}deg)`;
    seconds.style.transform = `rotate(${srotation}deg)`;
}, 1000);