// BEGIN
function Point(x, y){
    this.x = x;
    this.y = y;
}
    Point.prototype.getX = function (){
        return this.x;
    }
    Point.prototype.getY = function (){
        return this.y;
    }
    function Segment(begin, end){
        this.beginPoint = begin
        this.endPoint = end;
    }
    Segment.prototype.getBeginPoint = function (){
        return this.beginPoint
    }
    Segment.prototype.getEndPoint = function () {
        return this.endPoint
    }

const reverse = (segment) => {
    const beginPoint = segment.getBeginPoint();
    const endPoint = segment.getEndPoint()
    const newBeginPoint = new Point(endPoint.getX(), endPoint.getY())
    const newEndPoint = new Point(beginPoint.getX(), beginPoint.getY())

    return new Segment(newBeginPoint, newEndPoint);
}
export  {Point, Segment, reverse};
// END
