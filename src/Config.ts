import * as consts from './constants'
import {dom, trim, $$, isURL, convertMediaURLToVideoEmbed, val} from './modules/Helpers'
// import Dom from "./modules/Dom";
import Jodit from "./Jodit";
import {ControlType} from "./modules/Toolbar";
import {FileBrowserCallBcackData} from "./modules/FileBrowser";
import {Widget} from "./modules/Widget";
// import ColorPickerWidget = Widget.ColorPickerWidget;
import TabsWidget = Widget.TabsWidget;
import ImageSelectorWidget = Widget.ImageSelectorWidget;

/**
 * Default Editor's Configuration
 **/

export class Config {

    /**
     * z-index For editor
     */
    zIndex: number = 0;

    /**
     * For example, in Joomla, the top menu bar closes Jodit toolbar when scrolling. Therefore, it is necessary to move the toolbar Jodit by this amount [more](http://xdsoft.net/jodit/doc/#2.5.57)
     */

    // offsetTopForAssix: number = 0;


    /**
     * Size of icons in the toolbar (can be "small", "middle", "large")
     *
     * @example
     * ```javascript
     * var editor  = new  Jodit(".dark_editor", {
     *      toolbarButtonSize: "small"
     * });
     * ```
     */
    toolbarButtonSize: "small"|"middle"|"large" = 'middle';

    /**
     * Theme (can be "dark")
     * @example
     * ```javascript
     * var editor  = new  Jodit(".dark_editor", {
     *      theme: "dark"
     * });
     * ```
     */
    theme: string = 'default';

    /**
     * if it is true that the current mode is saved in a cookie , and is restored after a reload of the page
     */
    saveModeInCookie: boolean = false;

    /**
     * Options specifies whether the editor is to have its spelling and grammar checked or not
     * @see {@link http://www.w3schools.com/tags/att_global_spellcheck.asp}
     */
    spellcheck: boolean = true;

   /**
     * Class name that can be appended to the editor
     *
     * @see {@link Jodit.defaultOptions.iframeCSSLinks|iframeCSSLinks}
     * @see {@link Jodit.defaultOptions.iframeStyle|iframeStyle}
     *
     * @example
    * ```javascript
     * new Jodit('#editor', {
     *    editorCssClass: 'some_my_class'
     * });
    * ```
    * ```html
     * <style>
     * .some_my_class p{
     *    line-height: 16px;
     * }
     * </style>
    * ```
     */
   editorCssClass: false|string = false;

   /**
     * After all changes in editors for textarea will call change trigger
     *
     * @example
    *  ```javascript
     * var editor = new Jodit('#editor');
     * document.getElementById('editor').addEventListener('change', function () {
     *      console.log(this.value);
     * })
    * ```
     */
   triggerChangeEvent: boolean = true;


    /**
     * Editor's width
     *
     * @example
     * ```javascript
     * new Jodit('.editor', {
     *    width: '100%',
     * })
     * ```
     * @example
     * ```javascript
     * new Jodit('.editor', {
     *    width: 600, // equivalent for '600px'
     * })
     * ```
     * @example
     * ```javascript
     * new Jodit('.editor', {
     *    width: 'auto', // autosize
     * })
     * ```
     */

    width: number|string = 'auto';

    /**
     * Editor's height
     *
     * @example
     * ```javascript
     * new Jodit('.editor', {
     *    height: '100%',
     * })
     * ```
     * @example
     * ```javascript
     * new Jodit('.editor', {
     *    height: 600, // equivalent for '600px'
     * })
     * ```
     * @example
     * ```javascript
     * new Jodit('.editor', {
     *    height: 'auto', // default - autosize
     * })
     * ```
     */
    height: string|number = 'auto';

    /**
     * Editor's min-height
     *
     * @example
     * ```javascript
     * new Jodit('.editor', {
     *    minHeight: '30%' //min-height: 30%
     * })
     * ```
     * @example
     * ```javascript
     * new Jodit('.editor', {
     *    minHeight: 200 //min-height: 200px
     * })
     * ```
     */
    minHeight: number|string = 100;

    /**
     * The writing direction of the language which is used to create editor content. Allowed values are: '' (an empty string) – Indicates that content direction will be the same as either the editor UI direction or the page element direction. 'ltr' – Indicates a Left-To-Right text direction (like in English). 'rtl' – Indicates a Right-To-Left text direction (like in Arabic).
     * @example
     * ```javascript
     * new Jodit('.editor', {
     *    direction: 'rtl'
     * })
     * ```
     */
    direction: string = '';

    /**
     * Language by default. if `auto` language set by document.documentElement.lang || (navigator.language && navigator.language.substr(0, 2)) || (navigator.browserLanguage && navigator.browserLanguage.substr(0, 2)) || 'en'

     * @example
     * ```html
     * <!-- include in you page lang file -->
     * <script src="jodit/lang/de.js"></script>
     * <script>
     * var editor = new Jodit('.editor', {
     *    language: 'de'
     * });
     * </script>
     * ```
     */
    language: string = 'auto';


    /**
     * if true all Lang.i18n(key) return `{key}`
     *
     * @example
     * ```html
     * <script>
     * var editor = new Jodit('.editor', {
     *    debugLanguage: true
     * });
     *
     * console.log(editor.i18n("Test")); // {Test}
     * </script>
     * ```
     */
    debugLanguage: boolean = false;

    /**
     * Collection of language pack data {en: {'Type something': 'Type something', ...}}
     *
     * @example
     * ```javascript
     * var editor = new Jodit('#editor', {
     *     language: 'ru',
     *     i18n: {
     *         ru: {
     *            'Type something': 'Начните что-либо вводить'
     *         }
     *     }
     * });
     * console.log(editor.i18n('Type something')) //Начните что-либо вводить
     * ```
     */
    i18n: object|string = 'en';

    /**
     * The tabindex global attribute is an integer indicating if the element can take input focus (is focusable), if it should participate to sequential keyboard navigation, and if so, at what position. It can take several values
     */
    tabIndex: number = -1;

    /**
     * Show toolbar
     */
    toolbar: boolean = true;

    // TODO
    // autosave: false, // false or url
    // autosaveCallback: false, // function
    // interval: 60, // seconds
    // TODO

    /**
     * Element that will be created when you press Enter
     */
    enter: "P"|"DIV"|"BR"|"p"|"div"|"br" = consts.PARAGRAPH;

    /**
     * Jodit.MODE_WYSIWYG The HTML editor allows you to write like MSWord, Jodit.MODE_AREA syntax highlighting source editor
     * @example
     * ```javascript
     * var editor = new Jodit('#editor', {
     *     defaultMode: Jodit.MODE_SPLIT
     * });
     * console.log(editor.getRealMode())
     * ```
     */
    defaultMode: number = consts.MODE_WYSIWYG;

    /**
     * Use split mode
     *
     * @type {boolean}
     */
    useSplitMode: boolean = false;

    /**
     * The colors in HEX representation to select a color for the background and for the text in colorpicker
     * @example
     * ```javascript
     *  new Jodit('#editor', {
     *     colors: ['#ff0000', '#00ff00', '#0000ff']
     * })
     * ```
     */
    colors: {[key: string]: string[]}|string[] = {
        greyscale:  ['#000000', '#434343', '#666666', '#999999', '#B7B7B7', '#CCCCCC', '#D9D9D9', '#EFEFEF', '#F3F3F3', '#FFFFFF'],
        palette:    ['#980000', '#FF0000', '#FF9900', '#FFFF00', '#00F0F0', '#00FFFF', '#4A86E8', '#0000FF', '#9900FF', '#FF00FF'],
        full: [
            '#E6B8AF', '#F4CCCC', '#FCE5CD', '#FFF2CC', '#D9EAD3', '#D0E0E3', '#C9DAF8', '#CFE2F3', '#D9D2E9', '#EAD1DC',
            '#DD7E6B', '#EA9999', '#F9CB9C', '#FFE599', '#B6D7A8', '#A2C4C9', '#A4C2F4', '#9FC5E8', '#B4A7D6', '#D5A6BD',
            '#CC4125', '#E06666', '#F6B26B', '#FFD966', '#93C47D', '#76A5AF', '#6D9EEB', '#6FA8DC', '#8E7CC3', '#C27BA0',
            '#A61C00', '#CC0000', '#E69138', '#F1C232', '#6AA84F', '#45818E', '#3C78D8', '#3D85C6', '#674EA7', '#A64D79',
            '#85200C', '#990000', '#B45F06', '#BF9000', '#38761D', '#134F5C', '#1155CC', '#0B5394', '#351C75', '#733554',
            '#5B0F00', '#660000', '#783F04', '#7F6000', '#274E13', '#0C343D', '#1C4587', '#073763', '#20124D', '#4C1130'
        ]
    };

    /**
     * The default tab color picker
     * @example
     * ```javascript
     *  new Jodit('#editor2', {
     *     colorPickerDefaultTab: 'color'
     * })
     * ```
     */
    colorPickerDefaultTab: 'background'|'color' = 'background';

    /**
     * Image size defaults to a larger image
     */
    imageDefaultWidth: number = 300;

    /**
     * Do not display these buttons that are on the list
     * @example
     * ```javascript
     * new Jodit('#editor2', {
     *     removeButtons: ['hr', 'source']
     * });
     * ```
     */
    removeButtons: string[] = [];

    /**
     * Do not init these plugins
     * @example
     * ```typescript
     * var editor = new Jodit('.editor', {
     *    disablePlugins: 'table,iframe'
     * });
     * //or
     * var editor = new Jodit('.editor', {
     *    disablePlugins: ['table', 'iframe']
     * });
     * ```
     */
    disablePlugins: string[]|string = [];

    /**
     * This buttons list will be added to option.buttons
     */
    extraButtons: Array<string|ControlType> = [];

    /**
     * The width of the editor, accepted as the biggest. Used to the responsive version of the editor
     */
    sizeLG: number = 900;

    /**
     * The width of the editor, accepted as the medium. Used to the responsive version of the editor
     */
    sizeMD: number = 700;

    /**
     * The width of the editor, accepted as the small. Used to the responsive version of the editor
     */
    sizeSM: number = 400;

    /**
     * The list of buttons that appear in the editor's toolbar on large places (≥ options.sizeLG). Note - this is not the width of the device, the width of the editor
     * @example
     * ```javascript
     * new Jodit('#editor', {
     *     buttons: ['bold', 'italic', 'source'],
     *     buttonsMD: ['bold', 'italic'],
     *     buttonsXS: ['bold', 'fullsize'],
     * });
     * ```
     * @example
     * ```javascript
     * new Jodit('#editor2', {
     *     buttons: [{
     *         name: 'enty',
     *         icon: 'source',
     *         exec: function () {
     *             var dialog = new Jodit.modules.Dialog(this),
     *                 div = document.createElement('div'),
     *                 text = document.createElement('textarea');
     *             div.innerText = this.val();
     *             dialog.setTitle('Source code');
     *             dialog.setContent(text);
     *             dialog.setSize(400, 300);
     *             dom(text)
     *                 .css({
     *                     width: '100%',
     *                     height: '100%'
     *                 })
     *                 .val(div.innerHTML.replace(/<br>/g, '\n'));
     *             dialog.{@link module:Dialog~open|open}();
     *         }
     *     }]
     * });
     * ```
     * @example
     * ```javascript
     * new Jodit('#editor2', {
     *     buttons: Jodit.defaultOptions.buttons.concat([{
     *        name: 'listsss',
     *        iconURL: 'stuf/dummy.png',
     *        list: {
     *            h1: 'insert Header 1',
     *            h2: 'insert Header 2',
     *            clear: 'Empty editor',
     *        },
     *        exec: ({originalEvent, control, btn}) => {
     *             var key = control.args[0],
     *                value = control.args[1];
     *             if (key === 'clear') {
     *                 this.val('');
     *                 return;
     *             }
     *             this.selection.insertNode(Jodit.modules.Dom.create(key, ''));
     *             this.events.fire('errorMessage', ['Was inserted ' + value]);
     *        },
     *        template: function (key, value) {
     *            return '<div>' + value + '</div>';
     *        }
     *  });
     *  ```
     */
    buttons: Array<string|ControlType> = [
        'source', '|',
        'bold',
        'italic', '|',
        'ul',
        'ol', '|',
        'font',
        'fontsize',
        'brush',
        'paragraph', '|',
        'image',
        'video',
        'table',
        'link', '|',
        'align','|',
        'undo', 'redo', '|',
        'hr',
        'eraser',
        'fullsize',
        'copyformat',
        'about'
    ];

    /**
     * The list of buttons that appear in the editor's toolbar on medium places (≥ options.sizeMD).
     */
    buttonsMD: Array<string|ControlType> = [
        'source', '|',
        'bold',
        'italic', '|',
        'ul',
        'ol', '|',
        'font',
        'fontsize',
        'brush',
        'paragraph', '|',
        'image',
        'table',
        'link', '|',
        'align','|',
        'undo', 'redo', '|',
        'hr',
        'eraser',
        'copyformat',
        'fullsize'
    ];

    /**
     * The list of buttons that appear in the editor's toolbar on small places (≥ options.sizeSM).
     */
    buttonsSM: Array<string|ControlType> = [
        'source', '|',
        'bold',
        'italic', '|',
        'ul',
        'ol', '|',
        'fontsize',
        'brush',
        'paragraph', '|',
        'image',
        'table',
        'link', '|',
        'align','|',
        'undo', 'redo', '|',
        'eraser',
        'copyformat',
        'fullsize'
    ];

    /**
     * The list of buttons that appear in the editor's toolbar on extra small places (< options.sizeSM).
     */
    buttonsXS: Array<string|ControlType> = [
        'bold',
        'image', '|',
        'brush',
        'paragraph', '|',
        'align', '|',
        'undo', 'redo', '|',
        'eraser'
    ];


    /**
     * Behavior for buttons
     */
    controls: {[key: string]: ControlType};

    events: {[key: string]: Function} = {};

    /**
     * Buttons in toolbat without SVG - only texts
     * @type {boolean}
     */
    textIcons: boolean = false;
}
Config.prototype.controls = {
    about: {
        exec: (editor: Jodit) => {
            // don't use new Dialog + import Dialog, because of Config used inside Dialog.ts
            const dialog = new (require('./modules/Dialog').default)(editor);
            dialog.setTitle(editor.i18n('About Jodit'));
            dialog.setContent(
                '<div class="jodit_about">\
                    <div>' +
                        editor.i18n('Jodit Editor') + ' v.' + editor.getVersion() + ' ' + editor.i18n('Free Non-commercial Version') +
                    '</div>' +
                    '<div>' +
                        '<a href="http://xdsoft.net/jodit/" target="_blank">http://xdsoft.net/jodit/</a>' +
                    '</div>' +
                    '<div>' +
                        '<a href="http://xdsoft.net/jodit/doc/" target="_blank">' + editor.i18n('Jodit User\'s Guide') + '</a> ' +
                        editor.i18n('contains detailed help for using') +
                    '</div>' +
                    '<div>' +
                        editor.i18n('For information about the license, please go to our website:') +
                    '</div>' +
                    '<div>' +
                        '<a href="http://xdsoft.net/jodit/license.html" target="_blank">http://xdsoft.net/jodit/license.html</a>' +
                    '</div>' +
                    '<div>' +
                        '<a href="http://xdsoft.net/jodit/#download" target="_blank">' + editor.i18n('Buy full version') + '</a>' +
                    '</div>' +
                    '<div>' +
                        editor.i18n('Copyright © XDSoft.net - Chupurnov Valeriy. All rights reserved.') +
                    '</div>' +
                '</div>'
            );
            dialog.open();
        },
        tooltip: 'About Jodit',
        mode: consts.MODE_SOURCE + consts.MODE_WYSIWYG
    },
    hr : {
        command: 'insertHorizontalRule',
        tags: ["hr"],
        tooltip: "Insert Horizontal Line"
    },
    image : {
        popup: (editor: Jodit, current: HTMLImageElement|false, self: ControlType, close) => {
            const insertImage = (url: string) => {
                editor.selection.insertNode(dom('<img src="' + url + '"/>', editor.doc));
            };

            let sourceImage: HTMLImageElement;

            if (current && current.nodeType !== Node.TEXT_NODE && (current.tagName === 'IMG' || $$('img', current).length)) {
                sourceImage = current.tagName === 'IMG' ? current : <HTMLImageElement>$$('img', current)[0];
            }

            return ImageSelectorWidget(editor, {
                filebrowser: (data: FileBrowserCallBcackData) => {
                    if (data.files && data.files.length) {
                        let i: number;
                        for (i = 0; i < data.files.length; i += 1) {
                            insertImage(data.baseurl + data.files[i]);
                        }
                    }
                    close();
                },
                upload: (data: FileBrowserCallBcackData) => {
                    let i;
                    if (data.files && data.files.length) {
                        for (i = 0; i < data.files.length; i += 1) {
                            insertImage(data.baseurl + data.files[i]);
                        }
                    }
                    close();
                },
                url: (url: string, text: string) => {
                    const image = sourceImage || dom('<img/>', editor.doc);

                    image.setAttribute('src', url);
                    image.setAttribute('alt', text);

                    if (!sourceImage) {
                        editor.selection.insertNode(image);
                    }
                    close();
                }
            }, sourceImage, close);
        },
        tags: ["img"],
        tooltip: "Insert Image"
    },
    video : {
        popup: (editor: Jodit) => {
            const bylink: HTMLFormElement = <HTMLFormElement>dom(`<form class="jodit_form">
                        <input required name="code" placeholder="http://" type="url"/>
                        <button type="submit">${editor.i18n('Insert')}</button>
                        </form>`),

                bycode: HTMLFormElement = <HTMLFormElement>dom(`<form class="jodit_form">
                        <textarea required name="code" placeholder="${editor.i18n('Embed code')}"></textarea>
                        <button type="submit">${editor.i18n('Insert')}</button>
                        </form>`),

                tab: {[key:string]: HTMLFormElement} = {},
                selinfo = editor.selection.save(),
                insertCode = (code) => {
                    editor.selection.restore(selinfo);
                    editor.selection.insertHTML(code);
                };

            tab[(require('./modules/Toolbar').default).getIcon('link') + '&nbsp;' + editor.i18n('Link')] = bylink;
            tab[(require('./modules/Toolbar').default).getIcon('source') + '&nbsp;' + editor.i18n('Code')] = bycode;

            bycode.addEventListener('submit', (event) => {
                event.preventDefault();

                if (!trim(val(bycode, 'textarea[name=code]'))) {
                    (<HTMLTextAreaElement>bycode.querySelector('textarea[name=code]')).focus();
                    (<HTMLTextAreaElement>bycode.querySelector('textarea[name=code]')).classList.add('jodit_error');
                    return false;
                }

                insertCode(val(bycode, 'textarea[name=code]'));
                return false;
            });

            bylink.addEventListener('submit',  (event) => {
                event.preventDefault();
                if (!isURL(val(bylink, 'input[name=code]'))) {
                    (<HTMLInputElement>bylink.querySelector('input[name=code]')).focus();
                    (<HTMLInputElement>bylink.querySelector('input[name=code]')).classList.add('jodit_error');
                    return false;
                }
                insertCode(convertMediaURLToVideoEmbed(val(bylink, 'input[name=code]')));
                return false;
            });


            return TabsWidget(editor, tab);
        },
        tags: ["iframe"],
        tooltip: "Insert youtube/vimeo video"
    }
};