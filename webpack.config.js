/**
 * Created by z673820 on 2016/9/7.
 */

const path=require('path');

const webpack = require('webpack');
const merge=require('webpack-merge');
const TARGET=process.env.npm_lifecycle_event;

const NpmInstallPlugin=require('npm-install-webpack-plugin');

const PATH={
    app:path.join(__dirname,'app'),
    build:path.join(__dirname,'build')
};

process.env.BABEL_ENV=TARGET;

const common={
    entry:{
        app:PATH.app
    },
    resolve:{
        extensions:['','.js','.jsx']
    },
    output:{
        path:PATH.build,
        filename:'bundle.js'
    },
    module:{
        loaders:[{
            test:/\.css$/,
            loaders:['style','css'],
            include:PATH.app
        },
        {
            test:/\.jsx?$/,
            loaders:['babel?cacheDirectory'],
            include:PATH.app
        },
        {
            test:/\.jsx?$/,
            loader:'babel',
            query:{
                cacheDirectory:true,
                presets:['react','es2015','survivejs-kanban']
            },
            include:PATH.app
        }]
    }
};

if(TARGET=='start'||!TARGET){
    module.exports=merge(common,{
        devtool:'eval-source-map',
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
            new webpack.HotModuleReplacementPlugin(),
            new NpmInstallPlugin({
                save:true  //--save
            })
        ]
    });
}

if(TARGET=='build'||!TARGET){
    module.exports=merge(common,{});
}