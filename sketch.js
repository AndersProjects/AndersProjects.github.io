var result;
var cm_radiusStep= 10;
var dd_timeStep = 10;

function setup()
{
    createCanvas(800, 800);
    textAlign(CENTER);
    textSize(18);
    //rectMode(CENTER);
}

function draw()
{
    textSize(20);
    background(200);
    fill(0);

    text("radius = "+calcGrafRadi(cm_radiusStep)+" tid(dage) = " + calcGrafTime(dd_timeStep), 100, 80, 200, 80);
    text(calcResult(calcGrafRadi(cm_radiusStep), calcGrafTime(dd_timeStep)), 400, 50);
    text("radius step = " + cm_radiusStep + " tids step = " + dd_timeStep, 500, 80, 200, 80);

    line(mouseX, 0, mouseX, height);
    line(0, mouseY, width, mouseY);

    textSize(11);
    n = 0;
    while(n < width)
    {
        n = n + 40;

        text(Math.round(n / cm_radiusStep), n, height - 15);
        rect(n, height - 10, 3, 10);

        text(Math.round((height - n ) / dd_timeStep), 15, n - 10);
        rect(0 , n - 3, 10, 3);
    }
}

function calcGrafRadi( step )
{
    return mouseX / step;
}

function calcGrafTime(step)
{
    return (height - mouseY) / step;
}

function calcResult(radi, time)
{
    return time * (radi * 1.7571428);
}

function keyTyped()
{
    if(key === 'w')
    {
        dd_timeStep = dd_timeStep +1;
    }
    if(key === 's')
    {
        dd_timeStep = dd_timeStep - 1;
    }
    if(key === 'd')
    {
        cm_radiusStep = cm_radiusStep + 1;
    }
    if(key === 'a')
    {
        cm_radiusStep = cm_radiusStep -1;
    }
}