/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
    // Define changes to default configuration here.
    // For complete reference see:
    // http://docs.ckeditor.com/#!/api/CKEDITOR.config

    config.height = 600; //高度
    config.forcePasteAsPlainText = true;//忽略粘贴样式
    config.toolbarCanCollapse = true; //工具栏可收缩

    config.baseHref = ''  ;
    // The toolbar groups arrangement, optimized for two toolbar rows.
    //config.toolbar = 'Full';      
    //config.toolbar = 'Basic'; 
    config.toolbar = 'MyToolbar';      
    config.toolbar_Full =       
    [       
        ['Source','-','Save','NewPage','Preview','-','Templates'],       
        ['Cut','Copy','Paste','PasteText','PasteFromWord','-','Print', 'SpellChecker', 'Scayt'],       
        ['Undo','Redo','-','Find','Replace','-','SelectAll','RemoveFormat'],       
        ['Form', 'Checkbox', 'Radio', 'TextField', 'Textarea', 'Select', 'Button', 'ImageButton', 'HiddenField'],       
        '/',       
        ['Bold','Italic','Underline','Strike','-','Subscript','Superscript'],       
        ['NumberedList','BulletedList','-','Outdent','Indent','Blockquote','CreateDiv'],       
        ['JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock'],       
        ['BidiLtr', 'BidiRtl'],       
        ['Link','Unlink','Anchor'],       
        ['Image','Flash','Table','HorizontalRule','Smiley','SpecialChar','PageBreak','Iframe'],       
        '/',       
        ['Styles','Format','Font','FontSize'],       
        ['TextColor','BGColor'],       
        ['Maximize', 'ShowBlocks']       
    ];    
    config.toolbar_Basic =       
    [       
        ['Bold', 'Italic', '-', 'NumberedList', 'BulletedList', '-', 'Link', 'Unlink']       
    ];     
    config.toolbar_MyToolbar =       
    [       
              
       
            '/',
        ['Image','Flash','Table','HorizontalRule'],
        ['Styles','Format'],
        ['TextColor','BGColor','-','Undo','Redo','-','RemoveFormat'],

             '/', 
['Bold','Italic','Underline','Strike'],
        ['JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock'],
        '/',  
        ['Source','NumberedList','BulletedList','-','Outdent','Indent'],       
        ['Link','Unlink'],       
        ['ShowBlocks','Maximize','Preview']       
    ];       
    

    // Remove some buttons provided by the standard plugins, which are
    // not needed in the Standard(s) toolbar.
    //config.removeButtons = 'Underline,Subscript,Superscript';

    // Set the most common block elements.
    config.format_tags = 'p;h1;h2;h3;h4;h5;h6;pre';

    // Simplify the dialog windows.
    // 隐藏高级对话框选项
    config.removeDialogTabs = 'image:advanced;link:advanced';

    /*使用ckfinder上传图片 */
   
    config.filebrowserBrowseUrl =  '/admin/ckfinder/ckfinder.html' ;    
    config.filebrowserImageBrowseUrl =  '/admin/ckfinder/ckfinder.html?type=Images' ;    
    config.filebrowserFlashBrowseUrl =  '/admin/ckfinder/ckfinder.html?type=Flash' ;    
    config.filebrowserUploadUrl =  '/admin/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files' ;    
    config.filebrowserImageUploadUrl =  '/admin/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images' ;    
    config.filebrowserFlashUploadUrl =  '/admin/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Flash' ; 



    //样式格式化
    config.format_h1 = { element : 'h1', attributes : { class : 'h1title' } };
    
    //添加字体
    //config.font_names = "Arial;Times New Roman;Verdana";

    //修改 enter换行 &nbsp;为 br
    config.enterMode = CKEDITOR.ENTER_BR;
    config.shiftEnterMode = CKEDITOR.ENTER_P;




};
