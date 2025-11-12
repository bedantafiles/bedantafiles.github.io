gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.localVariables = [];
gdjs.Untitled_32sceneCode.idToCallbackMap = new Map();
gdjs.Untitled_32sceneCode.GDNewSpriteObjects1= [];
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2= [];
gdjs.Untitled_32sceneCode.GDNewSpriteObjects3= [];
gdjs.Untitled_32sceneCode.GDNewSprite2Objects1= [];
gdjs.Untitled_32sceneCode.GDNewSprite2Objects2= [];
gdjs.Untitled_32sceneCode.GDNewSprite2Objects3= [];
gdjs.Untitled_32sceneCode.GDNewSprite3Objects1= [];
gdjs.Untitled_32sceneCode.GDNewSprite3Objects2= [];
gdjs.Untitled_32sceneCode.GDNewSprite3Objects3= [];
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects1= [];
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects2= [];
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects3= [];
gdjs.Untitled_32sceneCode.GDRedExplosionObjects1= [];
gdjs.Untitled_32sceneCode.GDRedExplosionObjects2= [];
gdjs.Untitled_32sceneCode.GDRedExplosionObjects3= [];
gdjs.Untitled_32sceneCode.GDNewTextObjects1= [];
gdjs.Untitled_32sceneCode.GDNewTextObjects2= [];
gdjs.Untitled_32sceneCode.GDNewTextObjects3= [];
gdjs.Untitled_32sceneCode.GDNewText2Objects1= [];
gdjs.Untitled_32sceneCode.GDNewText2Objects2= [];
gdjs.Untitled_32sceneCode.GDNewText2Objects3= [];


gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.Untitled_32sceneCode.GDNewSprite2Objects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDNewSprite3Objects1Objects = Hashtable.newFrom({"NewSprite3": gdjs.Untitled_32sceneCode.GDNewSprite3Objects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDRedExplosionObjects2Objects = Hashtable.newFrom({"RedExplosion": gdjs.Untitled_32sceneCode.GDRedExplosionObjects2});
gdjs.Untitled_32sceneCode.asyncCallback11031820 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "end", false);
}
gdjs.Untitled_32sceneCode.localVariables.length = 0;
}
gdjs.Untitled_32sceneCode.idToCallbackMap.set(11031820, gdjs.Untitled_32sceneCode.asyncCallback11031820);
gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.Untitled_32sceneCode.asyncCallback11031820(runtimeScene, asyncObjectsList)), 11031820, asyncObjectsList);
}
}

}


};gdjs.Untitled_32sceneCode.asyncCallback10502700 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("NewSprite2"), gdjs.Untitled_32sceneCode.GDNewSprite2Objects2);

gdjs.Untitled_32sceneCode.GDRedExplosionObjects2.length = 0;

{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewSprite2Objects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewSprite2Objects2[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "deltarune explosion greenscreen.mp3", false, 100, 1);
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDRedExplosionObjects2Objects, 1187, 711, "");
}

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Untitled_32sceneCode.localVariables.length = 0;
}
gdjs.Untitled_32sceneCode.idToCallbackMap.set(10502700, gdjs.Untitled_32sceneCode.asyncCallback10502700);
gdjs.Untitled_32sceneCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
for (const obj of gdjs.Untitled_32sceneCode.GDNewSprite2Objects1) asyncObjectsList.addObject("NewSprite2", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Untitled_32sceneCode.asyncCallback10502700(runtimeScene, asyncObjectsList)), 10502700, asyncObjectsList);
}
}

}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.Untitled_32sceneCode.GDNewSprite2Objects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDNewSprite3Objects1Objects = Hashtable.newFrom({"NewSprite3": gdjs.Untitled_32sceneCode.GDNewSprite3Objects1});
gdjs.Untitled_32sceneCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.Untitled_32sceneCode.GDNewText2Objects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewText2Objects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Untitled_32sceneCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.Untitled_32sceneCode.GDNewSprite3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDNewSprite2Objects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDNewSprite3Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "z");
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDNewSprite2Objects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewSprite2Objects1[i].addForce(200, 100, 1);
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewSprite2Objects1[i].getBehavior("Physics2").setGravityScale(1);
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewSprite2Objects1[i].rotate(90, runtimeScene);
}
}

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.Untitled_32sceneCode.GDNewSprite3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDNewSprite3Objects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDNewSprite3Objects1[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDNewSprite3Objects1[k] = gdjs.Untitled_32sceneCode.GDNewSprite3Objects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDNewSprite3Objects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.Untitled_32sceneCode.GDNewTextObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewTextObjects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Untitled_32sceneCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.Untitled_32sceneCode.GDNewSprite3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDNewSprite2Objects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDNewSprite3Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.Untitled_32sceneCode.GDNewText2Objects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewText2Objects1[i].hide(false);
}
}
}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite2Objects3.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite3Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite3Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite3Objects3.length = 0;
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDRedExplosionObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDRedExplosionObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDRedExplosionObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDNewTextObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewTextObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewTextObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDNewText2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewText2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewText2Objects3.length = 0;

gdjs.Untitled_32sceneCode.eventsList2(runtimeScene);
gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite2Objects3.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite3Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite3Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite3Objects3.length = 0;
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDRedExplosionObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDRedExplosionObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDRedExplosionObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDNewTextObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewTextObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewTextObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDNewText2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewText2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewText2Objects3.length = 0;


return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
