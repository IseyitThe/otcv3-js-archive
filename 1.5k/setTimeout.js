var _timeouts = [];

function setTimeout(cb, wait) {
    var cur_time = new Date().getTime();

    _timeouts.push({
        date: cur_time,
        wait: wait,
        call: cb,
        type: "timeout"
    });

    return _timeouts.length - 1;
}

function setInterval(cb, wait) {
    var cur_time = new Date().getTime();

    _timeouts.push({
        date: cur_time,
        wait: wait,
        call: cb,
        type: "interval"
    });

    return _timeouts.length - 1;
}

function clearTimeout(timeout) {
    _timeouts.splice(timeout, 1);
}

function clearInterval(timeout) {
    clearTimeout(timeout);
}

function _setTimeoutOnFrame() {
    var cur_time = new Date().getTime();

    for (var i = 0; i < _timeouts.length; i++) {
        var a = _timeouts[i];
    
        if (cur_time > a.date + a.wait) {
            a.call(cur_time + a.wait, i);
        
            if (a.type == "timeout")
                _timeouts.splice(i, 1);
            else if (a.type == "interval")
                _timeouts[i].date = cur_time;
        }
    }
}

Global.RegisterCallback("FrameStageNotify", "_setTimeoutOnFrame");