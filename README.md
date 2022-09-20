# poster-canvas
小程序组件-小程序海报组件
   <a href="https://www.npmjs.com/package/poster-canvas"><img src="https://img.shields.io/badge/1.0.3-poster--canvas-blue?style=flat" alt="npm"></a>
   <!-- <a href="https://www.npmjs.com/package/poster-canvas"><img src="https://img.shields.io/npm/dm/wxa-plugin-canvas.svg?style=flat" alt="npm"></a> -->

## 概述
poster-canvas是一个通过配置就可以生成二维码海报的组件


## 安装

#### 方式一.通过 npm 安装 (推荐)

```
# npm
npm i poster-canvas -S --production

# yarn
yarn add poster-canvas --production
```

#### 方式二.下载代码

直接通过 git 下载 poster-canvas 源代码，并将`miniprogram_dist`目录拷贝到自己的项目组件目录中

## 使用组件

```json
{
  "usingComponents": {
	"poster-canvas": "poster-canvas/poster/index",
  }
}
```

接着就可以在 wxml 中直接使用组件


```html
<poster-canvas id="poster" config="{{config}}" bind:success="onPosterSuccess" bind:fail="onPosterFail">
    <button>点击生成海报</button>
</poster-canvas>


<view class="canvas_code_view" style="left: {{imgURL?'0':'-1000rpx'}};">
    <view class="canvas_mask">
        <view class="canvas_box">
            <view class="canvas_box_img">
                <image class="pic" show-menu-by-longpress src="{{imgURL}}"></image>
            </view>
        </view>
    </view>
</view>
```


```css
.pic {
  width: 100%;
  height: 100%;
  /* height: 1160rpx; */
}

 /* erweima */
 .canvas_code_view {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 9999;
}

.canvas_code_view .canvas_mask {
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, .6);
  position: relative;
}

.canvas_box {
  width: 680rpx;
  height: 928rpx;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 99;
}

.canvas_box_img{
  width: 100%;
  height: 100%;
}

.canvas_close{
  height: 60rpx;
  width: 60rpx;
  position: absolute;
  top: -96rpx;
  right: 0;
  z-index: 9999;
}


```

## 使用注意事项

1. 图片的域名**务必**添加到downloadFile合法域名中（开发设置-服务器域名-downloadFile合法域名）

## 组件参数解释

### config字段

| 字段            | 类型                     | 必填 | 描述                                       |
| --------------- | ------------------------ | ---- | ------------------------------------------ |
| width           | Number(单位:rpx)         | 是   | 画布宽度                                   |
| height          | Number(单位:rpx)         | 是   | 画布高度                                   |
| backgroundColor | String                   | 否   | 画布颜色                                   |
| borderRadius    | Number(单位:rpx)         | 否   | 画布圆角                                   |
| debug           | Boolean                  | 否   | false隐藏canvas，true显示canvas，默认false |
| pixelRatio      | Number                   | 否   | 1为一般，值越大越清晰 |
| hide-loading    | Boolean                  | 否   | true：隐藏loading 默认false                |
| blocks          | Object Array（对象数组） | 否   | 看下文                                     |
| texts           | Object Array（对象数组） | 否   | 看下文                                     |
| images          | Object Array（对象数组） | 否   | 看下文                                     |
| lines           | Object Array（对象数组） | 否   | 看下文                                     |



### blocks字段

| 字段名          | 类型             | 必填 | 描述                                   |
| --------------- | ---------------- | ---- | -------------------------------------- |
| x               | Number(单位:rpx) | 是   | 块的坐标                               |
| y               | Number(单位:rpx) | 是   | 块的坐标                               |
| width           | Number(单位:rpx) | 否   | 如果内部有文字，由文字宽度和内边距决定 |
| height          | Number(单位:rpx) | 是   |                                        |
| paddingLeft     | Number(单位:rpx) | 否   | 内左边距                               |
| paddingRight    | Number(单位:rpx) | 否   | 内右边距                               |
| borderWidth     | Number(单位:rpx) | 否   | 边框宽度                               |
| borderColor     | String           | 否   | 边框颜色                               |
| backgroundColor | String           | 否   | 背景颜色                               |
| borderRadius    | Number(单位:rpx) | 否   | 圆角                                   |
| text            | Object           | 否   | 块里面可以填充文字，参考texts字段解释  |
| zIndex          | Int              | 否   | 层级，越大越高                         |

### texts字段

| 字段名         | 类型             | 必填 | 描述                                                         |
| -------------- | ----------------| ---- | ------------------------------------------------------------ |
| x              | Number(单位:rpx) | 是   | 坐标                                                         |
| y              | Number(单位:rpx) | 是   | 坐标                                                         |
| text           | String\|Object   | 是   | 当Object类型时，参数为text字段的参数，marginLeft、marginRight这两个字段可用（示例请看下文） |
| fontSize       | Number(单位:rpx) | 是   | 文字大小                                                     |
| color          | String           | 否   | 颜色                                                         |
| opacity        | Int              | 否   | 1为不透明，0为透明                                           |
| lineHeight     | Number(单位:rpx) | 否   | 行高                                                         |
| lineNum        | Int              | 否   | 根据宽度换行，最多的行数                                     |
| width          | Number(单位:rpx) | 否   | 没有指定为画布宽度                                           |
| marginLeft     | Number(单位:rpx) | 否   | 当text字段为Object可以使用，用来控制多行文字间距             |
| marginRight    | Number(单位:rpx) | 否   | 当text字段为Object可以使用，用来控制多行文字间距             |
| textDecoration | String           | 否   | 目前只支持 line-through（贯穿线），默认为none                |
| baseLine       | String           | 否   | top, hanging, middle, alphabetic, ideographic, bottom基线对齐方式                            |
| textAlign      | String           | 否   | left\|center\|right对齐方式                                  |
| zIndex         | Int              | 否   | 层级，越大越高                                               |
| fontFamily     | String           | 否   | 小程序默认字体为'sans-serif', 请输入小程序支持的字体，例如：'STSong' |
| fontWeight     | String           | 否   | 'bold'加粗字体，目前小程序不支持 100 - 900 加粗            |
| fontStyle      | String           | 否   | 'italic'倾斜字体                                          |

### images字段

| 字段         | 类型             | 必填 | 描述                                      |
| ------------ | ---------------- | ---- | ----------------------------------------- |
| x            | Number(单位:rpx) | 是   | 右上角的坐标                              |
| y            | Number(单位:rpx) | 是   | 右上角的坐标                              |
| url          | String           | 是   | 图片url（**需要添加到下载白名单域名中**）仅支持网络图片 |
| width        | Number(单位:rpx) | 是   | 宽度（**会根据图片的尺寸同比例缩放**）    |
| height       | Number(单位:rpx) | 是   | 高度（**会根据图片的尺寸同比例缩放**）    |
| borderRadius | Number(单位:rpx) | 否   | 圆角，跟css一样                           |
| borderWidth  | Number(单位:rpx) | 否   | 边框宽度                                  |
| borderColor  | String           | 否   | 边框颜色                                  |
| zIndex       | Int              | 否   | 层级，越大越高                            |

### lines字段

| 字段   | 类型             | 必填 | 描述           |
| ------ | ---------------- | ---- | -------------- |
| startX | Number(单位:rpx) | 是   | 起始坐标       |
| startY | Number(单位:rpx) | 是   | 起始坐标       |
| endX   | Number(单位:rpx) | 是   | 终结坐标       |
| endY   | Number(单位:rpx) | 是   | 终结坐标       |
| width  | Number(单位:rpx) | 是   | 线的宽度       |
| color  | String           | 否   | 线的颜色       |
| zIndex | Int              | 否   | 层级，越大越高 |

## 事件

### success

返回生成海报图片的本地url，如下

```javascript
 onPosterSuccess(e) {
        const {
            detail
        } = e;
        this.setData({
            imgURL: detail
        })
    },
```


### fail

返回错误信息

```
