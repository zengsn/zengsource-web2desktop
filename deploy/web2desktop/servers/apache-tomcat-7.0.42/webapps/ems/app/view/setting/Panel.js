/*
 * File: app/view/setting/Panel.js
 *
 * This file was generated by Sencha Architect version 3.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 5.0.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 5.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('DMSApp.view.setting.Panel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.settingpanel',

    requires: [
        'DMSApp.view.setting.PanelViewModel',
        'DMSApp.view.home.LogoPanel',
        'Ext.tab.Panel',
        'Ext.grid.Panel',
        'Ext.grid.column.RowNumberer',
        'Ext.grid.column.Action',
        'Ext.grid.View',
        'Ext.tab.Tab',
        'Ext.form.Panel',
        'Ext.form.FieldSet',
        'Ext.form.field.File'
    ],

    viewModel: {
        type: 'settingpanel'
    },
    itemId: 'card-setting',
    layout: 'border',
    defaultListenerScope: true,

    items: [
        {
            xtype: 'homelogopanel',
            itemId: 'logopanel',
            region: 'north'
        },
        {
            xtype: 'tabpanel',
            region: 'center',
            itemId: 'settingtabs',
            activeTab: 0,
            items: [
                {
                    xtype: 'gridpanel',
                    itemId: 'usergrid',
                    title: '用户设置',
                    store: 'Users',
                    columns: [
                        {
                            xtype: 'rownumberer'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'username',
                            text: '用户名'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'sex',
                            text: '性别'
                        },
                        {
                            xtype: 'actioncolumn',
                            dataIndex: 'id',
                            text: '操作',
                            items: [
                                {
                                    handler: function(view, rowIndex, colIndex, item, e, record, row) {
                                        var grid = view;
                                        var record = grid.getStore().getAt(rowIndex);
                                        Ext.Msg.confirm('操作确认', '确定要重置该用户的密码吗？', function(btnId, text, opt) {
                                            if ('yes'==btnId) {
                                                Ext.Ajax.request({
                                                    url: './resources/data/success.json',
                                                    params: { id: record.data.id },
                                                    success: function(response){
                                                        var text = response.responseText;
                                                        var obj = Ext.decode(text);
                                                        Ext.Msg.alert('操作成功', '密码已经重置为 123456 ！');
                                                    }
                                                });
                                            }
                                        });
                                    },
                                    icon: './resources/icons/reset16.png',
                                    tooltip: '重置密码'
                                }
                            ]
                        }
                    ],
                    listeners: {
                        activate: 'onUsergridActivate'
                    }
                },
                {
                    xtype: 'form',
                    submitDataImportForm: function() {
                        var fp = this;console.dir(fp);
                        fp.getForm().submit({
                            //clientValidation: true,
                            url: './resources/data/success.json',
                            //params: {},
                            success: function(form, action) {
                                Ext.Msg.alert('成功', action.result.msg);
                            },
                            failure: function(form, action) {
                                switch (action.failureType) {
                                    case Ext.form.action.Action.CLIENT_INVALID:
                                    Ext.Msg.alert('失败', '请正确填写表单内容！');
                                    break;
                                    case Ext.form.action.Action.CONNECT_FAILURE:
                                    Ext.Msg.alert('失败', '通信错误！');
                                    break;
                                    case Ext.form.action.Action.SERVER_INVALID:
                                    Ext.Msg.alert('失败', action.result.msg);
                                }
                            }
                        });
                    },
                    itemId: 'dataimportform',
                    bodyPadding: 10,
                    title: '数据导入',
                    items: [
                        {
                            xtype: 'fieldset',
                            title: '导入存放地',
                            layout: {
                                type: 'hbox',
                                align: 'stretch',
                                padding: '0 0 5 0'
                            },
                            items: [
                                {
                                    xtype: 'filefield',
                                    flex: 1,
                                    fieldLabel: '选择数据文件',
                                    name: 'locationFile'
                                },
                                {
                                    xtype: 'button',
                                    handler: function(button, e) {
                                        var fp = button.up('form');
                                        fp.submitDataImportForm();
                                    },
                                    margin: '0 0 0 8',
                                    width: 100,
                                    text: '导入'
                                }
                            ]
                        },
                        {
                            xtype: 'fieldset',
                            title: '导入房间号',
                            layout: {
                                type: 'hbox',
                                align: 'stretch',
                                padding: '0 0 5 0'
                            },
                            items: [
                                {
                                    xtype: 'filefield',
                                    flex: 1,
                                    fieldLabel: '选择数据文件',
                                    name: 'roomFile'
                                },
                                {
                                    xtype: 'button',
                                    handler: function(button, e) {
                                        var fp = button.up('form');
                                        fp.submitDataImportForm();
                                    },
                                    margin: '0 0 0 8',
                                    width: 100,
                                    text: '导入'
                                }
                            ]
                        },
                        {
                            xtype: 'fieldset',
                            title: '导入科室',
                            layout: {
                                type: 'hbox',
                                align: 'stretch',
                                padding: '0 0 5 0'
                            },
                            items: [
                                {
                                    xtype: 'filefield',
                                    flex: 1,
                                    fieldLabel: '选择数据文件',
                                    name: 'divisionFile'
                                },
                                {
                                    xtype: 'button',
                                    handler: function(button, e) {
                                        var fp = button.up('form');
                                        fp.submitDataImportForm();
                                    },
                                    margin: '0 0 0 8',
                                    width: 100,
                                    text: '导入'
                                }
                            ]
                        },
                        {
                            xtype: 'fieldset',
                            title: '导入设备',
                            layout: {
                                type: 'hbox',
                                align: 'stretch',
                                padding: '0 0 5 0'
                            },
                            items: [
                                {
                                    xtype: 'filefield',
                                    flex: 1,
                                    fieldLabel: '选择数据文件',
                                    name: 'deviceFile'
                                },
                                {
                                    xtype: 'button',
                                    handler: function(button, e) {
                                        var fp = button.up('form');
                                        fp.submitDataImportForm();
                                    },
                                    margin: '0 0 0 8',
                                    width: 100,
                                    text: '导入'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ],

    onUsergridActivate: function(component, eOpts) {
        component.getStore().load();
    }

});