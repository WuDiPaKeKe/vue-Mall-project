<template>
   <header class="header">
            <!-- 头部的第一行 -->
            <div class="top">
                <div class="container">
                    <div class="loginList">
                        <p> <a href="###">首页</a></p>
                        <p>
                            <span>请</span>
                            <a href="###">登录</a>
                            <a href="###" class="register">免费注册</a>
                        </p>
                       
                    </div>
                    <div class="typeList">
                        <a href="###">我的订单</a>
                        <a href="###">我的购物车</a>
                        
                        <a href="###">会员中心</a>
                        <a href="###">企业采购</a>
                        <a href="###">关注我们</a>
                        <a href="###">合作招商</a>
                        <a href="###">商家后台</a>
                    </div>
                </div>
            </div>
            <!--头部第二行 搜索区域-->
            <div class="bottom">
                <h1 class="logoArea">
                    <a class="logo" title="商城" href="###" target="_blank">
                        <img src="./images/logo.png" alt="">
                    </a>
                </h1>
                <div class="searchArea">
                    <form action="###" class="searchForm">
                        <input type="text" id="autocomplete" class="input-error input-xxlarge" />
                        <button class="sui-btn btn-xlarge btn-danger" type="button">搜 索</button>
                    </form>
                </div>
            </div>
    </header>
</template>

<script>
export default {
name:'mall-header'
}
</script>

<style scoped lang="less">
.header {

        &>.top {
            background-color: #333;
            height: 50px;
            line-height: 50px;
            margin-bottom: 30px;

            .container {
                width: 1200px;
                margin: 0 auto;
                overflow: hidden;

                .loginList {
                    float: left;
                
                    p {
                        float: left;
                        margin-right: 10px;

                        .register {
                            border-left: 1px solid #b3aeae;
                            padding: 0 5px;
                            margin-left: 5px;
                        }
                    }
                }

                .typeList {
                    float: right;
                    
                    a {
                        padding: 0 10px;
                        color: #ccc;
                        &+a {
                            border-left: 1px solid #b3aeae;
                        }
                    }

                }

            }
        }

        &>.bottom {
            width: 1200px;
            height: 130px;
            margin: 0 auto;
            overflow: hidden;

            .logoArea {
                float: left;

                .logo {
                    img {
                        width: 175px;
                        margin: 25px 45px;
                    }
                }
            }

            .searchArea {
                float: right;
                margin-top: 35px;

                .searchForm {
                    overflow: hidden;

                    input {
                        box-sizing: border-box;
                        width: 490px;
                        height: 32px;
                        padding: 0px 4px;
                        border: 2px solid #666;
                        float: left;

                        &:focus {
                            outline: none;
                        }
                    }

                    button {
                        height: 32px;
                        width: 68px;
                        background-color: #666;
                        border: none;
                        color: #fafafa;
                        float: left;
                        cursor: pointer;

                        &:focus {
                            outline: none;
                        }
                    }
                }
            }
        }
    }
</style>