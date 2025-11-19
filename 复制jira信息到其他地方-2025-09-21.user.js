// ==UserScript==
// @name             复制jira信息到其他地方
// @version           2025-09-21
// @description    复制jira到飞书表格，Excel等地方，简化工作
// @author           云南省肿瘤医院项目组 丁波，何顺能
// @license           MIT
// @match            http://10.100.77.22:8888/browse/*
// @icon               data:image/png;base64,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
// @grant             GM_setClipboard
// @downloadURL https://raw.githubusercontent.com/用户名/仓库名/分支名/脚本名.user.js
// @updateURL https://openuserjs.org/meta/heshunnengsina.com/复制jira信息到其他地方.meta.js
// ==/UserScript==
/* global $ */

(function() {
    'use strict';

    const projectName='云南省肿瘤医院';
    const projectNO='L1ZB2204005A';
    const PM='史艳琴';
    const jiraKey=document.getElementById('key-val').innerText;//jira编码
    const username = JSON.parse(document.getElementById('assignee-val').querySelector('.user-hover').getAttribute('data-user')).displayName;//经办人
    const itemName=document.getElementById('summary-val').innerText;//jira标题
    const jiraType=document.getElementById('type-val').innerText.trim();//jira类型
    const jiraProduct=($('#customfield_10126-val').text().indexOf('-')>0?$('#customfield_10126-val').text().replaceAll(' ', '').replaceAll('\n', '').replaceAll('-', '\t'):$('#customfield_10126-val').text().replaceAll(' ', '').replaceAll('\n', '')+'\t');
    const guid=$.trim($('td.activity-name:contains("GUID"):last').next().next().text());
    const dll=$.trim($('td.activity-name:contains("下发DLL"):last').next().next().text());

    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    let datestr=year+'年'+month+'月'+day+'日';

    // 获取容器
    const container = document.getElementById('opsbar-jira.issue.tools');

    // 创建复制svn信息a标签
    const link = document.createElement('a');
    link.href = '#';
    link.textContent = '复制svn信息';
    link.className = 'aui-button toolbar-trigger';

    // 添加事件监听器
    link.addEventListener('click', function(event) {
        event.preventDefault(); // 阻止默认行为

        let info=jiraKey+' '+itemName+' '+username+' '+datestr+' '+guid;
        GM_setClipboard(info, "text", () => showAutoHideMessage('复制成功，请手动粘贴', 3000));
    });

    // 添加到容器
    container.appendChild(link);

    // 创建复制版本发布记录信息a标签
    const link1 = document.createElement('a');
    link1.href = '#';
    link1.textContent = '复制版本发布记录';
    link1.className = 'aui-button toolbar-trigger';

    // 添加事件监听器
    link1.addEventListener('click', function(event) {
        event.preventDefault(); // 阻止默认行为

        let info=datestr+'\t'+username+'\t'+jiraKey+'\t '+jiraType+'\t'+jiraProduct+'\t'+itemName+"\t"+guid+"\t"+dll;
        GM_setClipboard(info, "text", () => showAutoHideMessage('复制成功，请手动粘贴到Excel', 3000));
    });

    // 添加到容器
    container.appendChild(link1);

    // 创建复制到飞书表格a标签
    const link2 = document.createElement('a');
    link2.href = '#';
    link2.textContent = '复制到飞书表格';
    link2.className = 'aui-button toolbar-trigger';

    // 添加事件监听器
    link2.addEventListener('click', function(event) {
        event.preventDefault(); // 阻止默认行为

        let info='\t'
        +($.trim(jiraType).replace('子', '')=='缺陷'?'运维阶段\t开发-缺陷\t\t\t信息中心\t':'设计开发\t开发-需求\t\t\t信息中心\t')	//项目阶段, 任务类型, 评级-评价类别, 评级-项目代码, 需求提出科室
        +$('#created-val>time').attr('datetime').substr(0, 10).replaceAll('-','/')	//提出时间
        +'\t\t\t'	//提出人, 联系方式
        +$.trim($('#priority-val').text())+'\t'	//优先级
        +jiraProduct+'\t\t'	//产品线, 一级模块, 二级模块
        +itemName	//任务内容
        +'\t\t\t'+username+'\t'	//任务补充说明, 解决方案, 责任人
        +$('#tt_single_text_orig').attr('title').replace('初始预估 - ', '').replace('小时', '')/8+'\t'	//预估工作量
        +($('#tt_single_text_spent').attr('title')=='耗费时间 - 尚未指定'?'0\t进行中\t':'100\t开发完成\t')	//进度, 任务状态
        +$.trim($('#due-date').text())+'\t'+$.trim($('#due-date').text())+'\t' //计划开始时间, 计划结束时间
        +$('#issue_actions_container>div.issue-data-block[id^="worklog-"] .subText').text().replace('已编辑', '')+'\t'+$('#issue_actions_container>div.issue-data-block[id^="worklog-"] .subText').text().replace('已编辑', '')+'\t'	//实际开始时间, 实际结束时间
        +'\t'+guid+'\t\t'	//接口地址, GUID, 变更文件
        +dll+'\t\t'	//下发文件, DB变更
        +projectName+'\t'+projectNO+'\t\t'+PM+'\t'	//客户名称, 项目编号, 项目名称, 项目经理
        +'\t'+jiraKey+'\t'+username+'\t'	//进度按期完成情况, JIRA ID, 东软责任人

        GM_setClipboard(info, "text", () => showAutoHideMessage('复制成功，请手动粘贴到飞书表格', 3000));
    });

    // 添加到容器
    container.appendChild(link2);

    function showAutoHideMessage(message, duration = 3000) {
        // 创建提示元素
        const toast = document.createElement('div');
        toast.textContent = message;
        toast.style.cssText = `
        position: fixed;
        top: 40px;
        right: 40px;
        background-color: #333;
        color: white;
        padding: 12px 20px;
        border-radius: 4px;
        z-index: 1000;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;

        document.body.appendChild(toast);

        // 显示提示
        setTimeout(() => {
            toast.style.opacity = '1';
        }, 100);

        // 自动隐藏
        setTimeout(() => {
            toast.style.opacity = '0';
            setTimeout(() => {
                document.body.removeChild(toast);
            }, 300);
        }, duration);
    }

})();