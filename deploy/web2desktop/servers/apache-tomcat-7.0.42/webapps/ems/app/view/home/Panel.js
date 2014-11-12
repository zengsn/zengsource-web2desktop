/*
 * File: app/view/home/Panel.js
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

Ext.define('DMSApp.view.home.Panel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.homepanel',

    requires: [
        'DMSApp.view.home.PanelViewModel',
        'DMSApp.view.home.LogoPanel',
        'DMSApp.view.home.device.Panel',
        'DMSApp.view.home.maintainance.TabPanel',
        'Ext.tab.Panel'
    ],

    viewModel: {
        type: 'homepanel'
    },
    itemId: 'card-home',
    layout: 'border',

    items: [
        {
            xtype: 'homelogopanel',
            itemId: 'logopanel',
            region: 'north'
        },
        {
            xtype: 'homedevicepanel',
            width: 265,
            region: 'west',
            split: true
        },
        {
            xtype: 'homemaintainancetabpanel',
            itemId: 'mantainpanel',
            region: 'center'
        }
    ]

});