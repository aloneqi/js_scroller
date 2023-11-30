# 简易的模拟页面滚动器

## 代码片段

```js
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    .scroller {
        width: 500px;
        height: 1000px;
        overflow: hidden;
    }

    .scroller .content {
        display: flex;
        flex-direction: column;
        width: 500px;
        height: 2000px;
    }
</style>

<body>
    <script src="./index.js"></script>
    <div class="scroller">
        <div class="content">
            <div>顶部内容</div>
            <div style="flex: 1; background: linear-gradient(
                217deg,
                rgba(255, 0, 0, 0.8),
                rgba(255, 0, 0, 0) 70.71%
              ), linear-gradient(127deg, rgba(0, 255, 0, 0.8), rgba(0, 255, 0, 0) 70.71%),
              linear-gradient(336deg, rgba(0, 0, 255, 0.8), rgba(0, 0, 255, 0) 70.71%); "></div>
            <div>底部内容</div>
        </div>
    </div>
    <script>
        const contentDOM = document.querySelector('.content')
        const scroller = new Scroller((x, y) => {
            contentDOM.style = `transform: translate(-${x}px, -${y}px);`
        })
        scroller.contentSize(
            document.querySelector('.scroller').clientWidth,
            document.querySelector('.scroller').clientHeight,
            contentDOM.clientWidth,
            contentDOM.clientHeight,
        )
        contentDOM.onmousedown = (e) => {
            scroller.doTouchStart(e.x, e.y)
            contentDOM.onmousemove = (e) => {
                scroller.doTouchMove(e.x, e.y, e.timeStamp)
            }
        }
        contentDOM.onmouseup = (e) => {
            contentDOM.onmousemove = void 0;
            scroller.doTouchEnd(e.timeStamp)
        }

    </script>
</body>

</html>
```