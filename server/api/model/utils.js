function success(msg,data) {
    const result = {
        "msg": msg,
        "code": 200,
        data
    }
    return result;
}


function err(msg){
    console.log(msg);
    return{
        "code": 201,
        "msg": msg,
    }
}

async function relation(Products,Mainpic,Detail,mainIds,detailIds,msg){
    if(mainIds && mainIds.length && detailIds && detailIds.length){
        //查找和产品关联的主图
        const mainImg = await Mainpic.findAll({ where: { id: mainIds } });
        //查找和产品关联的详情图
        const detailImg = await Detail.findAll({ where: { id: detailIds } });
        //关联产品和主图
        await Products.setMainpics(mainImg);
        //关联产品和详情图
        await Products.setDetails(detailImg);
        console.log(msg);
        return success(msg)
        console.log("我执行了3");
    }else {
        return err("没有可关联的主图或详情图。");
    }
}

function sum(max,min){
    return Math.ceil((Math.random()*(max-min)) + min);
 }

module.exports= {
    success,
    err,
    relation,
    sum
}