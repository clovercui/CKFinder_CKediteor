# CKFinder_CKediteor 破解版

## 富文本配置 和使用方法 

* 注意使用ckfinder图片上传配置路径 `ckfinder/config.php`  `66行`

  ```php
  $config['backends'][] = array(
    'name'         => 'default',
    'adapter'      => 'local',
    'baseUrl'      => '/uploads/', //这里配置实际上传的路径
//  'root'         => '', // Can be used to explicitly set the CKFinder user files directory.
    'chmodFiles'   => 0777,
    'chmodFolders' => 0755,
    'filesystemEncoding' => 'UTF-8',
);
  ```

* `路径：`ckeditor/config.js `配置`
```javascript
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
   
    config.filebrowserBrowseUrl =  '/ckfinder/ckfinder.html' ;    
    config.filebrowserImageBrowseUrl =  '/ckfinder/ckfinder.html?type=Images' ;    
    config.filebrowserFlashBrowseUrl =  '/ckfinder/ckfinder.html?type=Flash' ;    
    config.filebrowserUploadUrl =  '/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files' ;    
    config.filebrowserImageUploadUrl =  '/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images' ;    
    config.filebrowserFlashUploadUrl =  '/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Flash' ; 



    //样式格式化
    config.format_h1 = { element : 'h1', attributes : { class : 'h1title' } };
    
    //添加字体
    //config.font_names = "Arial;Times New Roman;Verdana";

    //修改 enter换行 &nbsp;为 br
    config.enterMode = CKEDITOR.ENTER_BR;
    config.shiftEnterMode = CKEDITOR.ENTER_P;




};

```

* 使用

```html
    <!DOCTYPE html>
    <html>
        <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>ck 富文本编辑器（已破解）</title>
        <meta name="description" content="">
        <meta name="keywords" content="">
        
        <!--css引入区-->
        <link href="" rel="stylesheet">
        <!--js引入区-->
        <script type="text/javascript" src="ckeditor/ckeditor.js"></script>
        <script type="text/javascript" src="ckfinder/ckfinder.js"></script>

    <script type="text/javascript">
        window.onload = function()
        {
            CKEDITOR.replace( 'testEditor');
        }
    </script>

        </head>
        <body>
        <h1 style="color: red">需要PHP环境</h1>
            <h1>富文本编辑器演示</h1>
            <div id="testEditor" style="width:100%;height: 300px"></div>
            
        </body>
    </html>
```


## 单独的文件上传配置 和使用方法

`ckfinder/config.php`  `66行`

 ```php
  $config['backends'][] = array(
    'name'         => 'default',
    'adapter'      => 'local',
    'baseUrl'      => '/uploads/', //这里配置实际上传的路径
//  'root'         => '', // Can be used to explicitly set the CKFinder user files directory.
    'chmodFiles'   => 0777,
    'chmodFolders' => 0755,
    'filesystemEncoding' => 'UTF-8',
);
  ```

```html
<!DOCTYPE html>
<html>
    <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title>ck （已破解）</title>
    <meta name="description" content="">
    <meta name="keywords" content="">
    
    <!--css引入区-->
    <link href="" rel="stylesheet">
    <!--js引入区-->
    <script type="text/javascript" src="ckeditor/ckeditor.js"></script>
    <script type="text/javascript" src="ckfinder/ckfinder.js"></script>


 <script>
         function openModal() {
             CKFinder.modal( {
                 chooseFiles: true,
                 basePath:'/admin/uploads/',
                 onInit: function( finder ) {
                     finder.on( 'files:choose', function( evt ) {
                         var file = evt.data.files.first();
                         document.getElementById( 'url' ).value = file.getUrl();
                            $("#imgthm").html("<img src='"+file.getUrl()+"' width='100px' height='100px'/>");
                     } );
                     finder.on( 'file:choose:resizedImage', function( evt ) {
                         document.getElementById( 'url' ).value = evt.data.resizedUrl;
                         $("#imgthm").html("<img src='"+evt.data.resizedUrl+"' width='100px' height='100px'/>");
                     } );
                 }
             } );
         }
     </script>


    </head>
    <body>
    <h1 style="color: red">需要PHP环境</h1>
       
         <h1>文件上传演示</h1>
        <input type="text" size="48" name="url" id="url" /> <button onclick="openModal()">Select file</button>
        <div id="imgthm"></div>
    </body>
</html>
```
