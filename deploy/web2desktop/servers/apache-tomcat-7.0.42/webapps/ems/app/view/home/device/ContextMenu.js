/*
 * File: app/view/home/device/ContextMenu.js
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

Ext.define('DMSApp.view.home.device.ContextMenu', {
    extend: 'Ext.menu.Menu',
    alias: 'widget.homedevicecontextmenu',

    requires: [
        'DMSApp.view.home.device.ContextMenuViewModel',
        'Ext.menu.Separator'
    ],

    viewModel: {
        type: 'homedevicecontextmenu'
    },
    width: 120,

    items: [
        {
            xtype: 'menuitem',
            itemId: 'repairItem',
            icon: './resources/icons/right16.png',
            text: '报修'
        },
        {
            xtype: 'menuitem',
            itemId: 'renewItem',
            icon: './resources/icons/left16.png',
            text: '恢复'
        },
        {
            xtype: 'menuseparator'
        },
        {
            xtype: 'menuitem',
            handler: function(item, e) {
                item.parentMenu.devicePanel.edit('add');
            },
            itemId: 'addItem',
            icon: './resources/icons/add16.png',
            text: '增加'
        },
        {
            xtype: 'menuitem',
            handler: function(item, e) {
                item.parentMenu.devicePanel.edit('edit');
            },
            itemId: 'editItem',
            icon: './resources/icons/edit16.png',
            text: '修改'
        },
        {
            xtype: 'menuitem',
            handler: function(item, e) {
                item.parentMenu.devicePanel.copyOrDelete('copy');
            },
            itemId: 'copyItem',
            icon: './resources/icons/copy16.png',
            text: '复制'
        },
        {
            xtype: 'menuseparator'
        },
        {
            xtype: 'menuitem',
            handler: function(item, e) {
                item.parentMenu.devicePanel.copyOrDelete('delete');
            },
            itemId: 'deleteItem',
            icon: './resources/icons/trash16.png',
            text: '删除'
        }
    ],

    checkStatus: function(node) {
        var me = this;
        if (node && node.isLeaf()) {
            if (node.data.status===0) { // 正常
                //me.down('#useItem').enable();
                //me.down('#returnItem').disable();
                me.down('#repairItem').enable();
                me.down('#renewItem').disable();
            } else if (node.data.status===1) { // 使用中
                //me.down('#useItem').disable();
                //me.down('#returnItem').enable();
                me.down('#repairItem').enable();
                me.down('#renewItem').disable();
            } else if (node.data.status===-1) { // 修理中
                //me.down('#useItem').disable();
                //me.down('#returnItem').disable();
                me.down('#repairItem').disable();
                me.down('#renewItem').enable();
            }
        } else if (node) {
            //me.down('#useItem').disable();
            //me.down('#returnItem').disable();
            me.down('#repairItem').disable();
            me.down('#renewItem').disable();
        }
    }

});