/*!
 * UPDATES AND DOCS AT: https://github.com/Harold-666
 * https://www.cnblogs.com/Harold-popo/
 * @author: Harold, 2417525822@qq.com
 **/

if (initCheck()) {

    var sidebarHtml =
        '<div class="container">' +
        '    <div class="menu-wrap optiscroll" id="menuWrap" style="display:none">' +
        '        <nav class="menu">' +
        '            <!-- 个人简介 -->' +
        '            <div class="introduce-box">' +
        '                <div class="introduce-head">' +
        '                    <div class="introduce-via" id="menuBlogAvatar"></div>' +
        '                </div>' +
        '                <div id="introduce"></div>' +
        '            </div>' +
        '            <!-- 导航 -->' +
        '            <div class="nav-title"></div>' +
        '            <div class="icon-list">' +
        '                <ul id="m-nav-list">' +
        '                </ul>' +
        '            </div>' +
        '            <!-- 日历 -->' +
        '            <span id="calendar-box"></span>' +
        '            <!-- 找找看 -->' +
        '            <div class="m-list-title"><span>找找看</span></div>' +
        '            <div class="m-icon-list" id="sb-sidebarSearchBox"></div>' +
        '            <!-- 积分与排名 -->' +
        '            <div class="m-list-title"><span>积分排名<span class="iconfont icon-select m-list-title-select"></span></span></div>' +
        '            <div class="m-icon-list" id="sb-sidebarScorerank"></div>' +
        '            <!-- 最新随笔 -->' +
        '            <div class="m-list-title"><span>最新随笔<span class="iconfont icon-select m-list-title-select"></span></span></div>' +
        '            <div class="m-icon-list" id="sb-sidebarRecentposts"></div>' +
        '            <!-- 我的标签 -->' +
        '            <div class="m-list-title"><span>我的标签<span class="iconfont icon-select m-list-title-select"></span></span></div>' +
        '            <div class="m-icon-list" id="sb-toptags"></div>' +
        '            <!-- 随笔分类 -->' +
        '            <div class="m-list-title"><span>随笔分类<span class="iconfont icon-select m-list-title-select"></span></span></div>' +
        '            <div class="m-icon-list" id="sb-classify"></div>' +
        '            <!-- 文章分类 -->' +
        '            <div class="m-list-title"><span>文章分类<span class="iconfont icon-select m-list-title-select"></span></span></div>' +
        '            <div class="m-icon-list" id="sb-ArticleCategory"></div>' +
        '            <!-- 阅读排行 -->' +
        '            <div class="m-list-title"><span>阅读排行<span class="iconfont icon-select m-list-title-select"></span></span></div>' +
        '            <div class="m-icon-list" id="sb-topview"></div>' +
        '            <!-- 推荐排行 -->' +
        '            <div class="m-list-title"><span>推荐排行<span class="iconfont icon-select m-list-title-select"></span></span></div>' +
        '            <div class="m-icon-list" id="sb-topDiggPosts"></div>' +
        '            <!-- 最新评论 -->' +
        '            <div class="m-list-title"><span>最新评论<span class="iconfont icon-select m-list-title-select"></span></span></div>' +
        '            <div class="m-icon-list" id="sb-recentComments"></div>' +
        '            <!-- 文章档案 -->' +
        '            <div class="m-list-title"><span>文章档案<span class="iconfont icon-select m-list-title-select"></span></span></div>' +
        '            <div class="m-icon-list" id="sb-articlearchive"></div>' +
        '            <!-- 随笔档案 -->' +
        '            <div class="m-list-title"><span>随笔档案<span class="iconfont icon-select m-list-title-select"></span></span></div>' +
        '            <div class="m-icon-list" id="sb-record"></div>' +
        '            <!-- 自定义列表 -->' +
        '            <span id="menuCustomList"></span>' +
        '        </nav>' +
        '        <button class="close-button" id="close-button">Close Menu</button>' +
        '        <div class="morph-shape" id="morph-shape" data-morph-open="M-7.312,0H15c0,0,66,113.339,66,399.5C81,664.006,15,800,15,800H-7.312V0z;M-7.312,0H100c0,0,0,113.839,0,400c0,264.506,0,400,0,400H-7.312V0z">' +
        '            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 800" preserveAspectRatio="none">' +
        '                <path d="M-7.312,0H0c0,0,0,113.839,0,400c0,264.506,0,400,0,400h-7.312V0z"/>' +
        '            </svg>' +
        '        </div>' +
        '    </div>' +
        '    <button class="menu-button" id="open-button">MENU</button>' +
        '    <div class="content-wrap" id="content-wrap"></div><!-- /content-wrap -->' +
        '</div>' +
        '<div class="main-header">' +
        '    <canvas id="notHomeTopCanvas"></canvas>' +
        '    <div class="vertical">' +
        '        <div class="main-header-content inner">' +
        '            <h1 class="page-title" id="homeTopTitle"></h1>' +
        '            <h2 class="page-description" id="hitokoto"></h2>' +
        '            <h3 class="page-author" id="hitokotoAuthor"></h3>' +
        '            <h1 class="sb-title" id="sbTitle"></h1>' +
        '            <p class="article-info" id="articleInfo"></p>' +
        '        </div>' +
        '    </div>' +
        '    <a class="scroll-down" href="javascript:void(0);" data-offset="-45">' +
        '        <span class="hidden">Scroll Down</span>' +
        '        <i class="scroll-down-icon iconfont icon-fanhui"></i>' +
        '    </a>' +
        '</div>' +
        '<div id="loading"></div>'  +
        '<div id="bottomProgressBar"></div>' +
        '<div id="rightMenu"></div>';

    window.cnblogsConfigDefault = {
        GhUserName: 'Harold-666',	// GitHub用户名(不是昵称)，注意大小写
        GhRepositories: 'Harold-Cnblogs-Theme-SimpleMemory',	// GitHub主题仓库名称
        GhVersions: 'v1.0.1',	// GitHub发布版本或提交哈希值，根据版本加载代码
        CnVersions: "",
        blogUser: "Harold-popo",	// 用户名
        blogAvatar: "https://pic.cnblogs.com/avatar/1958541/20200303113219.png",	// 用户头像
        blogStartDate: "2020-03-03",	// 入园时间，年-月-日。入园时间查看方法：鼠标停留园龄时间上，会显示入园时间
        menuCustomList: {
	        "个人档案": {	// 标题
	            "data": [	// 列表数据 ['列表', '链接']
	                ['Github', 'https://github.com/Harold-666/'],
	                ['Gitee', 'https://gitee.com/Harold_popo/'],
	                ['吾爱破解', 'https://www.52pojie.cn/'],
	            ],
	            "icon": "icon-shandian2"	// 配置图标，参考文档：定制化/字体图标库
	        },
        },
        menuNavList: [	// 列表数据 ['导航名称', '链接']
			['联系博主', 'https://msg.cnblogs.com/send/'],
			['UFO_Harold', 'https://blog.csdn.net/UFO_Harold'],
        ],
        menuUserInfoBgImg: 'https://files.cnblogs.com/files/Harold-popo/menu_bg.gif',	// 菜单个人信息背景图
        webpageTitleOnblur: "(oﾟvﾟ)ノ Hi!",	// 当页面失去焦点，页面title显示的文字。
        webpageTitleOnblurTimeOut: 500,	// 当页面失去焦点，页面title变化的延时时间，单位毫秒。
        webpageTitleFocus: "(*´∇｀*) 欢迎回来！",	//当页面重新获取焦点，页面title显示的文字；显示后，延时恢复原title
        webpageTitleFocusTimeOut: 1000,	// 当页面获取焦点，页面title变化的延时时间，单位毫秒
        webpageIcon: "https://cdn.jsdelivr.net/gh/Harold-666/Harold-Cnblogs-Theme-SimpleMemory@master/img/webp/blog_logo.webp",	// 网站图标图片Url
        fontIconExtend: "",	// 字体图标库扩展Css的Url
        progressBar: {	// 进度条配置，显示在页面顶部
            id: 'top-progress-bar',	// 请勿修改该值
            color: '#77b6ff',
            height: '2px',
            duration: 0.2
        },
        loading: {	// 页面加载loading
            rebound: {
                tension: 16,
                friction: 5
            },
            spinner: {
                id: 'spinner',
                radius: 90,
                sides: 3,
                depth: 4,
                colors: {
                    background: '#f0f0f0',
                    stroke: '#272633',
                    base: null,
                    child: '#272633'
                },
                alwaysForward: true,
                restAt: 0.5,
                renderBase: false
            }
        },
        homeTopAnimationRendered: true,	// 是否渲染主页banner动效
        homeTopAnimation: {	// 主页banner动效配置
            radius: 15,
            density: 0.2,
            color: 'rgba(255,255,255, .2)',
            clearOffset: 0.3
        },
        essayTopAnimationRendered: true,	// 是否渲染文章页banner动效
        essayTopAnimation: {	// 文章页banner动效配置
            triW: 14,
            triH: 20,
            neighbours: ["side", "top", "bottom"],
            speedTrailAppear: .1,
            speedTrailDisappear: .1,
            speedTriOpen: 1,
            trailMaxLength: 30,
            trailIntervalCreation: 100,
            delayBeforeDisappear: 2,
            colorsRandom: false,	// 是否自动生成颜色
            colors: [
                '#96EDA6', '#5BC6A9',
                '#38668C', '#374D84',
                '#BED5CB', '#62ADC6',
                '#8EE5DE', '#304E7B'
            ]
        },
        bgAnimationRendered: true,	// 是否渲染页面背景动效
        backgroundAnimation: {	// 页面背景动效配置
            colorSaturation: "60%",
            colorBrightness: "50%",
            colorAlpha: 0.5,
            colorCycleSpeed: 5,
            verticalPosition: "random",
            horizontalSpeed: 200,
            ribbonCount: 3,
            strokeSize: 0,
            parallaxAmount: -0.2,
            animateSections: true
        },
        homeTopImg: [	// 主页banner图片Url，推荐尺寸>= 1920*1080，支持多张，每次刷新随机设置一张
            "https://cdn.jsdelivr.net/gh/Harold-666/Harold-Cnblogs-Theme-SimpleMemory@master/img/webp/home_top_bg.webp",
			"https://cdn.jsdelivr.net/gh/Harold-666/Harold-Cnblogs-Theme-SimpleMemory@master/img/bmp/homeTopImg_1.bmp",
			"https://cdn.jsdelivr.net/gh/Harold-666/Harold-Cnblogs-Theme-SimpleMemory@master/img/bmp/homeTopImg_2.bmp",
			"https://cdn.jsdelivr.net/gh/Harold-666/Harold-Cnblogs-Theme-SimpleMemory@master/img/bmp/homeTopImg_3.bmp",
			"https://cdn.jsdelivr.net/gh/Harold-666/Harold-Cnblogs-Theme-SimpleMemory@master/img/bmp/homeTopImg_4.bmp",
			"https://cdn.jsdelivr.net/gh/Harold-666/Harold-Cnblogs-Theme-SimpleMemory@master/img/bmp/homeTopImg_5.bmp",
			"https://cdn.jsdelivr.net/gh/Harold-666/Harold-Cnblogs-Theme-SimpleMemory@master/img/bmp/homeTopImg_鬼刀-冰公主.bmp",
			"https://cdn.jsdelivr.net/gh/Harold-666/Harold-Cnblogs-Theme-SimpleMemory@master/img/bmp/homeTopImg_鬼刀1.bmp",
			"https://cdn.jsdelivr.net/gh/Harold-666/Harold-Cnblogs-Theme-SimpleMemory@master/img/bmp/homeTopImg_鬼刀2.bmp",
			"https://cdn.jsdelivr.net/gh/Harold-666/Harold-Cnblogs-Theme-SimpleMemory@master/img/bmp/homeTopImg_兽耳娘.bmp",
			"https://cdn.jsdelivr.net/gh/Harold-666/Harold-Cnblogs-Theme-SimpleMemory@master/img/wallpaper/wallhaven-oxvkxp.webp",
			"https://cdn.jsdelivr.net/gh/Harold-666/Harold-Cnblogs-Theme-SimpleMemory@master/img/wallpaper/wallhaven-ne7lr8.webp",
			"https://cdn.jsdelivr.net/gh/Harold-666/Harold-Cnblogs-Theme-SimpleMemory@master/img/wallpaper/wallhaven-47ldq9.webp"
        ],
        homeBannerText: "",	// 主页banner上的标语，设置此选项会固定显示文字，默认为空，自动获取一句
        homeBannerTextType: "jinrishici",	// 主页 banner 上的标语获取源，默认为 jinrishici 每次刷新随机获取一句古诗词
        essayTopImg: [	// 文章页banner图片Url，推荐尺寸>= 1920*1080，支持多张，每次刷新随机设置一张
            "https://cdn.jsdelivr.net/gh/Harold-666/Harold-Cnblogs-Theme-SimpleMemory@master/img/webp/nothome_top_bg.bmp",
			"https://cdn.jsdelivr.net/gh/Harold-666/Harold-Cnblogs-Theme-SimpleMemory@master/img/bmp/essayTopImg_1.bmp",
			"https://cdn.jsdelivr.net/gh/Harold-666/Harold-Cnblogs-Theme-SimpleMemory@master/img/bmp/essayTopImg_鬼刀1.bmp",
			"https://cdn.jsdelivr.net/gh/Harold-666/Harold-Cnblogs-Theme-SimpleMemory@master/img/bmp/essayTopImg_鬼刀2.bmp",
			"https://cdn.jsdelivr.net/gh/Harold-666/Harold-Cnblogs-Theme-SimpleMemory@master/img/bmp/essayTopImg_海蓝星.bmp",
			"https://cdn.jsdelivr.net/gh/Harold-666/Harold-Cnblogs-Theme-SimpleMemory@master/img/bmp/essayTopImg_迷梦亭.bmp",
			"https://cdn.jsdelivr.net/gh/Harold-666/Harold-Cnblogs-Theme-SimpleMemory@master/img/bmp/essayTopImg_元泱境.bmp",
			"https://cdn.jsdelivr.net/gh/Harold-666/Harold-Cnblogs-Theme-SimpleMemory@master/img/bmp/essayTopImg_月光亲吻.bmp",
			"https://cdn.jsdelivr.net/gh/Harold-666/Harold-Cnblogs-Theme-SimpleMemory@master/img/bmp/essayTopImg_Love.bmp"
        ],
        essayCodeHighlightingType: 'highlightjs',
        essayCodeHighlighting: '',	// 当使用博客园代码高亮样式时，此配置不会对渲染产生影响，highlightjs 代码高亮主题：demo
        codeMaxHeight: true,	// 代码最高限制，超过长度的70%scroll
        essaySuffix: {	// 文章后缀配置，不配置使用默认
            codeImgUrl: '',	// >= v1.1.5 左侧图片设置，不配置使用 window.cnblogsConfig.blogAvatar
            aboutHtml: '',	// 关于博主，不配置使用默认
            copyrightHtml: '',	// 版权声明，不配置使用默认
            supportHtml: ''	// 声援博主，不配置使用默认
        },
        bottomBlogroll: [	// 友情链接，[[链接名,链接]....]
			[ "申请坑位", 'https://msg.cnblogs.com/send/Harold-popo' ],
			[ "申请坑位", 'https://msg.cnblogs.com/send/Harold-popo' ],
			[ "申请坑位", 'https://msg.cnblogs.com/send/Harold-popo' ],
			[ "申请坑位", 'https://msg.cnblogs.com/send/Harold-popo' ],
        ],
        bottomText: {	// 页脚标语
            icon: "❤️",	// 图标
            left: "事实并非理所当然",	// 图标左侧文字
            right: "世界总是欲盖弥彰"	// 图标右侧文字
        },
        footerStyle: 1,	// 页脚样式
        consoleList: [],	// 控制台输出
        bookList: [],
        themeAuthor: false,	// 是否显示主题作者
        isVersionMapping: false,	// 是否启用版本映射
    };

    window.cnblogsConfig = $.extend( true, window.cnblogsConfigDefault, window.cnblogsConfig );
    getVersionConfig();

} else {

    $('a[name="top"]').text("SimpleMemory：基础配置有误，请阅读文档，检查配置！").css({
        'display': 'block', 'text-align': 'center', 'padding-top': '45vh', 'font-size': '20px', 'color': '#333'
    });
}

// init check
function initCheck() {

    // check base theme
    var baseStyle = $('#mobile-style').attr('href');
    if (typeof baseStyle != 'undefined') {
        var bt = baseStyle.split('/');
        if($.inArray('SimpleMemory', bt) !== -1) {
            return true;
        }
    }
    return false;
}

// get version config
function getVersionConfig() {

    window.cnblogsConfig.CnVersions = window.cnblogsConfig.GhVersions;

    if (window.cnblogsConfig.isVersionMapping) {
        var url = 'https://raw.githubusercontent.com/' + window.cnblogsConfig.GhUserName + '/' + window.cnblogsConfig.GhRepositories + '/master/version.conf';

        $.ajax({
            type: "get",
            url: url,
            dataType: "text",
            async: false,
            success: function(conf)
            {
                window.themeVersion = conf ? JSON.parse(conf) : false;
                window.themeVersion && setConfVersion();
            }
        });

    } else if(window.cnblogsConfig.GhUserName === 'Harold-666') {
        window.themeVersion = [
            [
                "v1.0.0",
                "345f8dc1ceba54d5890e8c683c53e05058439ff8"
            ]
            /* ,
            [
                "v1.0.1",
                ""
            ] */
        ];
        setConfVersion();
    } else {
        init();
    }

    function setConfVersion() {
        var confVersion = getEndConfVal(window.cnblogsConfig.GhVersions);

        if (confVersion) {
            window.cnblogsConfig.GhVersions = confVersion;
        }

        init();
    }

    function getEndConfVal(thisGhVersion) {
        var endVal = '';
        window.themeVersion && $.each(window.themeVersion, function (i) {
            if (window.themeVersion[i][0] === thisGhVersion) {
                endVal = window.themeVersion[i][1]; return false;
            }
        });
        if (endVal === '') {
            return thisGhVersion;
        } else {
            return getEndConfVal(endVal);
        }
    }
}

// init
function init() {

    // set sidebar html
    var url = window.location.href,tmp = [];
    tmp = url.split("/");
    var user = tmp[3];
    var navListHtml = '<li><a href="https://www.cnblogs.com/'+user+'/" target="_self">首页</a></li>' +
        '<li><a href="https://i.cnblogs.com/" target="_blank">管理</a></li>' +
        '<li><a href="https://www.cnblogs.com/" target="_blank">博客园</a></li>';

    var menuNavList = window.cnblogsConfig.menuNavList;
    if (menuNavList.length > 0) {
        $.each(menuNavList, function (i) {
            navListHtml += '<li><a href="'+(menuNavList[i][1])+'" target="_blank">'+(menuNavList[i][0])+'</a></li>';
        });
    }

    $('#blog-news').prepend(sidebarHtml);
    $('#m-nav-list').append(navListHtml);

    // set userName
    if (window.cnblogsConfig.blogUser === "") window.cnblogsConfig.blogUser = user;

    // start cache
    $.ajaxSetup({cache: true});

    // load loadingJs
    $.getScript(getJsDelivrUrl('loading.js'), function () {

        // Loading start
        pageLoading.initRebound();
        pageLoading.initSpinner();
        pageLoading.spinner.init(pageLoading.spring, true);

        $.getScript(getJsDelivrUrl('jquery.mCustomScrollbar.min.js'), function () {
            $.getScript(getJsDelivrUrl('require.min.js'), function () {
                $.getScript(getJsDelivrUrl('config.js'), function () {
                    var staticResource = [
                        // 'optiscroll', 'ToProgress', 'rotate',
                        'optiscroll_ToProgress_rotate',
                        'snapSvg', 'classie', 'main4', 'tools'];
                    require(staticResource, function() {
                        require(['base'], function() {
                            (new Base).init();
                        });
                    });
                });
            });
        });
    });
}

// get file url
function getJsDelivrUrl(file, directory) {
    file = setFileNameMin(file, directory);
    return 'https://cdn.jsdelivr.net/gh/'+(window.cnblogsConfig.GhUserName)+'/'+(window.cnblogsConfig.GhRepositories)+'@'+(window.cnblogsConfig.GhVersions)+'/' + (file ? file : '');
}

// optimization file name
function setFileNameMin(file, directory) {
    if (typeof file == 'undefined') return '';
    var suffix  = null,fileArr = file.split('.');
    if (fileArr.length > 0 && $.inArray(fileArr[(fileArr.length -1)], ['js', 'css']) !== -1) {
        suffix = fileArr.pop();
        switch (suffix) {
            case 'js':directory = 'script';break;
            case 'css':directory = 'style';break;
        }
    } else {
        if (typeof directory == 'undefined') return '';
        switch (directory) {
            case 'js':directory = 'script';break;
            case 'css':directory = 'style';break;
        }
    }
    file.search('.min') === -1 && fileArr.push('min');
    suffix != null && fileArr.push(suffix);
    return (typeof directory !== 'undefined' ? ('src/' + directory + '/' + fileArr.join('.')) : (fileArr.join('.')));
}