Page({
    data:{
        info:[],
        status_name:{
            Running:"运行",
            Starting:"启动中",
            Stopping:"关机中",
            Stopped:"关机"
        },
        internet_type_name:{
            PayByTraffic:"按流量计费",
            PayByBandwidth:"按带宽计费"
        }
    },
    onLoad:function(){
        var app = getApp();
        console.log(app.globalData.ecs_list[app.globalData.selected_ecs_id]);
        this.setData({
            info:app.globalData.ecs_list[app.globalData.selected_ecs_id]
        });
    }
});