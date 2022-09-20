//index.js

const posterConfig = {
    config: {
        width: 680,
        height: 960,
        backgroundColor: '#f4f4f4',
        debug: false,
        pixelRatio: 1,
        borderRadius: 24,
        texts: [
            {
                x: 242,
                y: 66,
                text: '郝飞',
                fontSize: 40,
                color: '#333333',
                opacity: 1,
                baseLine: 'top',
                lineHeight:56
            },
            {
                x: 342,
                y: 82,
                text: '主任医师',
                fontSize: 28,
                color: '#333333',
                opacity: 1,
                baseLine: 'top',
                lineHeight:40
            },
            {
                x: 242,
                y: 134,
                text: '重庆医科大学附属第三医院',
                fontSize: 28,
                color: '#5A5A5A',
                opacity: 1,
                baseLine: 'top',
                lineHeight: 40
            },
            {
                x: 270,
                y: 860,
                text: '长按保存图片',
                fontSize: 28,
                color: '#999999',
                opacity: 1,
                baseLine: 'top',
                lineHeight: 34
            },
            {
                x: 204,
                y: 740,
                text: '微信扫一扫 在线联系医生',
                fontSize: 24,
                color: '#333333',
                opacity: 1,
                baseLine: 'top',
                lineHeight: 40
            },
        ],
        blocks: [{
            x: 100,
            y: 220,
            width: 480,
            height: 480,
            backgroundColor: '#FFFFFF',
            borderRadius: 24
        }],
        images: [{
                url: 'https://huifuaiobs1.obs.cn-east-3.myhuaweicloud.com/medical-im/125addad-1127-422c-a375-bf79503b4962.png',
                width: 380,
                height: 380,
                y: 270,
                x: 150,
            },
            {
                url: 'https://huifuaiobs1.obs.cn-east-3.myhuaweicloud.com/huyi/huyi/d5fce8ca94d44cd2acfb389facfef769.jpg',
                width: 124,
                height: 124,
                y: 58,
                x: 100,
                borderRadius: 62,
                borderWidth: 6,
                borderColor: '#ffffff'
            }


        ],
    }
}
Page({
    data: {
        config: posterConfig.config,
    },
    onPosterSuccess(e) {
        const {
            detail
        } = e;
        this.setData({
            imgURL: detail
        })
        wx.previewImage({
            current: detail,
            urls: [detail]
        })
    },
})