/**
 * Created by z673820 on 2016/9/7.
 */

const path=require('path');

const webpack = require('webpack');
const merge=require('webpack-merge');
const TARGET=process.env.npm_lifecycle_event;

const PATH={
    app:path.join(__dirname,'app'),
    build:path.join(__dirname,'build')
};
const common={
    entry:{
        app:PATH.app
    },
    output:{
        path:PATH.build,
        filename:'bundle.js'
    }
};

if(TARGET=='start'||!TARGET){
    module.exports=merge(common,{
        devServer:{
            contentBase:PATH.build,
            historyApiFallback:true,
            hot:true,
            inline:true,
            progress:true,
            stats:'error-only',
            host:process.env.HOST,
            port:process.env.PORT
        },
        plugins:[
            new webpack.HotModuleReplacementPlugin()
        ]
    });
}

if(TARGET=='build'||!TARGET){
    module.exports=merge(common,{});
}