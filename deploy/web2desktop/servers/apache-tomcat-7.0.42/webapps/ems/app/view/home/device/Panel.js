/*
 * File: app/view/home/device/Panel.js
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

Ext.define('DMSApp.view.home.device.Panel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.homedevicepanel',

    requires: [
        'DMSApp.view.home.device.PanelViewModel',
        'Ext.toolbar.Toolbar',
        'Ext.form.RadioGroup',
        'Ext.form.field.Radio',
        'Ext.tree.Panel',
        'Ext.tree.View',
        'Ext.button.Button',
        'Ext.toolbar.Separator',
        'Ext.toolbar.Fill'
    ],

    viewModel: {
        type: 'homedevicepanel'
    },
    itemId: 'devicepanel',
    layout: 'fit',
    title: '设备',
    defaultListenerScope: true,

    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            border: 1,
            items: [
                {
                    xtype: 'radiogroup',
                    width: 200,
                    items: [
                        {
                            xtype: 'radiofield',
                            name: 'category',
                            boxLabel: '特殊设备',
                            checked: true,
                            listeners: {
                                change: 'onSpecialCatRadiofieldChange'
                            }
                        },
                        {
                            xtype: 'radiofield',
                            name: 'category',
                            boxLabel: '固定设备',
                            listeners: {
                                change: 'onFixCatRadiofieldChange'
                            }
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'toolbar',
            dock: 'bottom',
            border: 1,
            items: [
                {
                    xtype: 'button',
                    handler: function(button, e) {
                        var panel = button.up('homedevicepanel');
                        panel.edit('add', button);
                    },
                    itemId: 'addBtn',
                    icon: './resources/icons/add16.png',
                    tooltip: '新建'
                },
                {
                    xtype: 'button',
                    handler: function(button, e) {
                        var panel = button.up('homedevicepanel');
                        panel.edit('edit', button);
                    },
                    disabled: true,
                    itemId: 'editBtn',
                    icon: './resources/icons/edit16.png',
                    tooltip: '修改'
                },
                {
                    xtype: 'button',
                    handler: function(button, e) {
                        var panel = button.up('homedevicepanel');
                        panel.copyOrDelete('copy');
                    },
                    disabled: true,
                    itemId: 'copyBtn',
                    icon: './resources/icons/copy16.png',
                    tooltip: '复制'
                },
                {
                    xtype: 'tbseparator'
                },
                {
                    xtype: 'button',
                    handler: function(button, e) {
                        var panel = button.up('homedevicepanel');
                        var tree = panel.down('treepanel');
                        var selMod = tree.getSelectionModel();
                        if (selMod.getCount()==1) {
                            var node = selMod.getSelection()[0];
                            var grid = panel.up('homepanel').down('#repairgrid');
                            var record = Ext.create('Ext.data.Model', {
                                deviceId: node.data.id.replace('device-',''),
                                deviceName: node.data.text,
                                deviceStatus: node.data.status
                            });
                            //console.dir(record);
                            grid.getStore().insert(0, record);
                            var editor = grid.getPlugin('repairRowEditor');
                            editor.startEdit(0, 5);
                        } else {
                            Ext.Msg.alert('错误', '请点击选定一个设备进行操作！');
                        }
                    },
                    disabled: true,
                    hidden: true,
                    itemId: 'useBtn',
                    icon: './resources/icons/upload16.png',
                    tooltip: '使用'
                },
                {
                    xtype: 'button',
                    handler: function(button, e) {
                        var panel = button.up('homedevicepanel');
                        var tree = panel.down('treepanel');
                        var selMod = tree.getSelectionModel();
                        if (selMod.getCount()==1) {
                            var node = selMod.getSelection()[0];
                            panel.manage('return', node, button);
                        } else {
                            Ext.Msg.alert('错误', '请点击选定一个设备进行操作！');
                        }
                    },
                    disabled: true,
                    hidden: true,
                    itemId: 'returnBtn',
                    icon: './resources/icons/download16.png',
                    tooltip: '归还'
                },
                {
                    xtype: 'button',
                    handler: function(button, e) {
                        var panel = button.up('homedevicepanel');
                        var tree = panel.down('treepanel');
                        var selMod = tree.getSelectionModel();
                        if (selMod.getCount()==1) {
                            var node = selMod.getSelection()[0];
                            var grid = panel.up('homepanel').down('#repairgrid');
                            var record = Ext.create('Ext.data.Model', {
                                deviceId: node.data.id.replace('device-',''),
                                deviceName: node.data.text,
                                deviceStatus: node.data.status
                            });
                            //console.dir(record);
                            grid.getStore().insert(0, record);
                            var editor = grid.getPlugin('repairRowEditor');
                            editor.startEdit(0, 5);
                        } else {
                            Ext.Msg.alert('错误', '请点击选定一个设备进行操作！');
                        }
                    },
                    disabled: true,
                    itemId: 'repairBtn',
                    icon: './resources/icons/right16.png',
                    tooltip: '报修'
                },
                {
                    xtype: 'button',
                    handler: function(button, e) {
                        var panel = button.up('homedevicepanel');
                        var tree = panel.down('treepanel');
                        var selMod = tree.getSelectionModel();
                        if (selMod.getCount()==1) {
                            var node = selMod.getSelection()[0];
                            panel.manage('renew', node, button);
                        } else {
                            Ext.Msg.alert('错误', '请点击选定一个设备进行操作！');
                        }
                    },
                    disabled: true,
                    hidden: true,
                    itemId: 'renewBtn',
                    icon: './resources/icons/left16.png',
                    tooltip: '修好'
                },
                {
                    xtype: 'tbfill'
                },
                {
                    xtype: 'button',
                    handler: function(button, e) {
                        var panel = button.up('homedevicepanel');
                        panel.copyOrDelete('delete');
                    },
                    disabled: true,
                    itemId: 'deleteBtn',
                    icon: './resources/icons/trash16.png',
                    tooltip: '删除'
                }
            ]
        }
    ],
    items: [
        {
            xtype: 'treepanel',
            itemId: 'devicetree',
            bodyBorder: true,
            store: 'DeviceTree',
            rootVisible: false,
            viewConfig: {
                stripeRows: true
            },
            listeners: {
                render: 'onDeviceTreeRender',
                selectionchange: 'onDeviceSelectionChange',
                itemcontextmenu: 'onDeviceTreeItemContextMenu'
            }
        }
    ],

    onSpecialCatRadiofieldChange: function(field, newValue, oldValue, eOpts) {
        var me = this;
        if (newValue) { // true
            var tree = me.down('#devicetree');
            tree.getStore().getProxy().setUrl('./resources/data/specialdevicetree.json');
            tree.getStore().load({
                params: {category: 'special'},
                callback: function(records, opt, success) {
                    if (success && records.length>0) {
                        //tree.getStore().getRoot().expand();
                        tree.getView().refresh();
                    }
                }
            });
        }
    },

    onFixCatRadiofieldChange: function(field, newValue, oldValue, eOpts) {
        var me = this;
        if (newValue) { // true
            var tree = me.down('#devicetree');
            tree.getStore().getProxy().setUrl('./resources/data/fixdevicetree.json');
            tree.getStore().load({
                params: {category: 'special'},
                callback: function(records, opt, success) {
                    if (success && records.length>0) {
                        //tree.getStore().getRoot().expand();
                        tree.getView().refresh();
                    }
                }
            });
        }
    },

    onDeviceTreeRender: function(component, eOpts) {
        // component.getStore().load({
        //     params: {category: 'special'},
        //     callback: function(records, opt, success) {
        //         //console.dir(success);
        //         if (success && records.length>0) {
        //             component.getStore().getRoot().expand();
        //         }
        //     }
        // });
    },

    onDeviceSelectionChange: function(model, selected, eOpts) {
        var me = this;
        var tree = me.down('#devicetree');
        var bbar = me.getDockedItems('toolbar[dock="bottom"]')[0];
        if (model.getCount()===1) {
            var node = selected[0];
            var grid = me.up('homepanel').down('#repairgrid');
            bbar.down('#editBtn').enable();
            bbar.down('#copyBtn').enable();
            bbar.down('#deleteBtn').enable();
            if (node.isLeaf()) {
                var deviceId = selected[0].data.id;
                grid.getStore().load({
                    params: {deviceId: deviceId}
                });
                // 检查设置按钮状态
                if (node.data.status===0) {
                    bbar.down('#useBtn').enable();
                    //bbar.down('#returnBtn').disable();
                    bbar.down('#repairBtn').enable();
                    //bbar.down('#renewBtn').disable();
                } else if (node.data.status===1) {
                    bbar.down('#useBtn').disable();
                    //bbar.down('#returnBtn').enable();
                    bbar.down('#repairBtn').enable();
                    //bbar.down('#renewBtn').disable();
                } else if (node.data.status===-1) {
                    bbar.down('#useBtn').disable();
                    //bbar.down('#returnBtn').disable();
                    bbar.down('#repairBtn').disable();
                    //bbar.down('#renewBtn').enable();
                }
            } else { // 非叶节点
                node.expand(); tree.getView().refresh();
                var params = {};
                if (node.data.id.indexOf('division-')>-1) {
                    params = {divisionId: node.data.id.replace('division-', '')};
                } else if (node.data.id.indexOf('location-')>-1) {
                    params = {locationId: node.data.id.replace('location-', '')};
                }
                grid.getStore().load({
                    params: params
                });
                bbar.down('#useBtn').disable();
                //bbar.down('#returnBtn').disable();
                bbar.down('#repairBtn').disable();
                //bbar.down('#renewBtn').disable();
            }
        }
    },

    onDeviceTreeItemContextMenu: function(dataview, record, item, index, e, eOpts) {
        var me = this;
        e.preventDefault();
        if (!me.deviceContextMenu) {
            me.deviceContextMenu = Ext.create('widget.homedevicecontextmenu');
            me.deviceContextMenu.devicePanel = me;
        }
        me.deviceContextMenu.checkStatus(record);
        me.deviceContextMenu.showAt(e.getXY());
    },

    edit: function(opt, target) {
        var me = this;
        if (!me.deviceEditWin) {
            me.deviceEditWin = Ext.create('widget.homedeviceeditwindow');
        }
        var tree = me.down('treepanel');
        var selMod = tree.getSelectionModel();
        var node = {};
        if (selMod.getCount()!==1 && 'edit'==opt) {
            Ext.Msg.alert('错误', '请点击选定一个设备进行编辑！');
            return; // 编辑时
        } //console.dir(opt);
        if (selMod.getCount()===1) {
            node = selMod.getSelection()[0];
        }
        if ('edit'==opt) {
            me.deviceEditWin.setTitle('编辑');
            me.deviceEditWin.loadData(node.data.id);
        } else {
            me.deviceEditWin.setTitle('新建');
        }
        me.deviceEditWin.target = target; // 动画
        me.deviceEditWin.show(target);
    },

    copyOrDelete: function(opt) {
        var me = this;
        var tree = me.down('treepanel');
        var selMod = tree.getSelectionModel();
        if (selMod.getCount()==1) {
            var node = selMod.getSelection()[0];
            Ext.Msg.confirm('操作确认', // title
                            '确定要'+('copy'==opt?'复制':'删除')+'吗？', // message
                            function(btnId, text, opt) { // callback
                if ('yes'==btnId) {
                    Ext.Ajax.request({
                        url: './resources/data/success.json',
                        // id格式：device-ID、location-ID、room-ID、division-ID
                        params: { id: node.data.id, option: opt },
                        success: function(response){
                            var text = response.responseText;
                            var obj = Ext.decode(text);
                            tree.getStore().load();
                        }
                    });
                }
            });
        } else {
            Ext.Msg.alert('错误', '请点击选定一个记录进行复制！');
        }
    },

    manage: function(operation, node, target) {
        var me = this;
        if (!me.deviceEditWin) {
            me.deviceEditWin = Ext.create('widget.homedeviceeditwindow');
        }
        if (operation=='use') {
            me.deviceEditWin.useDevice(node.data.id.replace('device-',''));
        } else if (operation=='return') {
            me.deviceEditWin.returnDevice(node.data.id.replace('device-',''));
        } else if (operation=='repair') {
            me.deviceEditWin.repairDevice(node.data.id.replace('device-',''));
        } else if (operation=='renew') {
            me.deviceEditWin.renewDevice(node.data.id.replace('device-',''));
        }
        me.deviceEditWin.target = target; // 动画
        me.deviceEditWin.show(target);
    }

});