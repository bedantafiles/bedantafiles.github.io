gdjs.endCode = {};
gdjs.endCode.localVariables = [];
gdjs.endCode.idToCallbackMap = new Map();
gdjs.endCode.GDNewSpriteObjects1= [];
gdjs.endCode.GDNewSpriteObjects2= [];
gdjs.endCode.GDNewTextObjects1= [];
gdjs.endCode.GDNewTextObjects2= [];


gdjs.endCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.sound.playMusic(runtimeScene, "Undertale Yellow - Justice (Game Over Theme).mp3", false, 100, 1);
}
}

}


};

gdjs.endCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.endCode.GDNewSpriteObjects1.length = 0;
gdjs.endCode.GDNewSpriteObjects2.length = 0;
gdjs.endCode.GDNewTextObjects1.length = 0;
gdjs.endCode.GDNewTextObjects2.length = 0;

gdjs.endCode.eventsList0(runtimeScene);
gdjs.endCode.GDNewSpriteObjects1.length = 0;
gdjs.endCode.GDNewSpriteObjects2.length = 0;
gdjs.endCode.GDNewTextObjects1.length = 0;
gdjs.endCode.GDNewTextObjects2.length = 0;


return;

}

gdjs['endCode'] = gdjs.endCode;
