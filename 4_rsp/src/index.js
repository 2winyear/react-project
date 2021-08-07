//0.1�ʸ��� background�ٲ��ֱ�
let imagelocation = '0';
let rockScissorPaper = {
    rock: '0',
    scissor: '-120px',
    paper: '-250px'
};

function computer(imagelocation) {
    return Object.entries(rockScissorPaper).find(function(v) {
        return v[1] === imagelocation;
    })[0];
}

//�񵿱� ���� �ڵ尡 �־�� �ȴٰ� ����.
let Interval = setInterval(() => {
    if (imagelocation === rockScissorPaper.rock){
        imagelocation = rockScissorPaper.scissor;
    }
    else if (imagelocation === rockScissorPaper.scissor){
        imagelocation = rockScissorPaper.paper;
    }
    else {
        imagelocation = rockScissorPaper.rock;
    }
    document.querySelector('#computer').style.background = 
    'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIbBC60XZM-pF3yv6WipAwIesPBXM5sJMMFg&usqp=CAU) ' + imagelocation + ' 0';
}, 100);

document.querySelectorAll('.btn').forEach(function(btn){
    btn.addEventListener('click', function(){
        clearInterval(Interval);
        setTimeout(function() {
            Interval = setInterval(function () {
                if (imagelocation === rockScissorPaper.rock){
                    imagelocation = rockScissorPaper.scissor;
                }
                else if (imagelocation === rockScissorPaper.scissor){
                    imagelocation = rockScissorPaper.paper;
                }
                else {
                    imagelocation = rockScissorPaper.rock;
                }
                document.querySelector('#computer').style.background = 
                'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIbBC60XZM-pF3yv6WipAwIesPBXM5sJMMFg&usqp=CAU) ' + imagelocation + ' 0';
            }, 100);  
        }, 1000);
        let myselect = this.textContent;
        console.log(myselect, computer(imagelocation));
        if (myselect === 'rock'){
            if (computer(imagelocation) === 'scissor') {
                alert('�̰���ϴ�.');
            } else if (computer(imagelocation) === 'rock'){
                alert('�����ϴ�.');
            } else{
                alert('�����ϴ�.');
            }
        } else if (myselect == 'scissor') {
            if (computer(imagelocation) === 'scissor') {
                alert('�����ϴ�.');
            } else if (computer(imagelocation) === 'rock'){
                alert('�����ϴ�.');
            } else{
                alert('�̰���ϴ�.');
            }
        } else if (myselect == 'paper') {
            if (computer(imagelocation) === 'scissor') {
                alert('�����ϴ�.');
            } else if (computer(imagelocation) === 'rock'){
                alert('�̰���ϴ�.');
            } else{
                alert('�����ϴ�.');
            }
        }
    });
});