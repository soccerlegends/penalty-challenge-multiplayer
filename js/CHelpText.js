function CHelpText(oParentContainer) {

    var _oParentContainer = oParentContainer;
    var _oHelpText;
    var _oHelpTextStroke;
    var _oContainer;

    this._init = function () {
        _oContainer = new createjs.Container();
        _oParentContainer.addChild(_oContainer);
       
        _oHelpText = new CTLText(_oContainer, 
                    200,  CANVAS_HEIGHT_HALF + 100, CANVAS_WIDTH-400, 42, 
                    42, "center", TEXT_COLOR, PRIMARY_FONT, 1,
                    0, 0,
                    TEXT_HELP,
                    true, true, true,
                    false );
        _oHelpText.setStroke(OUTLINE_WIDTH,"#003470");
        _oContainer.alpha = 0;
    };

    this.show = function (szText) {
        _oHelpText.refreshText(szText)
      
        _oContainer.alpha = 0;
        _oContainer.visible = true;
        createjs.Tween.get(_oContainer).to({alpha: 1}, MS_TIME_FADE_HELP_TEXT);
    };
    
    this.hide = function(){
        createjs.Tween.get(_oContainer).to({alpha: 0}, MS_TIME_FADE_HELP_TEXT).call(function () {
                _oContainer.visible = false;
        });
    };

    this.unload = function () {
        createjs.Tween.removeTweens(_oContainer);
        _oParentContainer.removeChild(_oContainer);
    };

    this._init();

    return this;
}