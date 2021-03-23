## navicat序列码
- NAVD-X7LV-JKCV-P7KR 

## 引用路径
- 在您的 vue 模板中, 如果你需要引入 assets 或者 static 目录, 使用 ~/assets/your_image.png 和 ~/static/your_image.png方式。

## 网站主图颜色
- 主题颜色 #2489EB

## 请求逻辑

- 页面请求通过```/api``` ==>```server/index.js```==>```server/api/index.js```
==>```controller/interface.js```



```interface.js```根据请求方法及路径使用对应的方法

## 待完成

- 主图模型添加品牌和型号    如：美国杜邦  ABS
- 详情模型添加品牌和型号    如：美国杜邦  ABS

## 添加产品
``` js
ProductMain.create( 
        {
            kind: "工程塑料",
            title: `16荷兰帝斯曼`,
            model: "ABS",
            pattern: "34234",
            brand: "荷兰帝斯曼",
            stock: `${sum(10000,5000)}`,
            price: `${sum(1000,200)}`,
            feature: "防火 耐候 防静电",
            detailText: "撒旦解放和卡斯放缓士大夫撒货到付款是",
            mainIds: [1, 2, 3, 4],
            detailIds: [4,5,6],
        }
    )
```

## 删除产品
```js
ProductMain.delete("日本东丽sss ABSsssss");
```

## 修改产品

```js
ProductMain.update(28,
        {
            kind: "通用塑料",
            title: "1石日本东丽sss ABSsssss",
            model: "ABS",
            pattern: "34234",
            brand: "日本东丽",
            stock: "88800",
            price: "11.6",
            feature: "防火 耐候",
            detailText: "撒旦解放和卡斯放缓士大夫撒货到付款是",
            mainIds: [5,6,7],
            detailIds: [4,5,6],
        }
    )
```

## 查询产品
```js
ProductMain.queryPagingProd(1,3).then(r => {
        console.log(r);
})
```

## 请求参数

req.headers 请求头  req.path 请求路径  req.query 请求参数

## API请求接口

- /api/products get 获取产品
- /api/products post 添加产品
- /api/products put 修改产品
- /api/products delete 删除产品

























